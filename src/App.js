import "./App.css";
import React, { Fragment, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import * as UserService from "../src/services/UserServices";
import jwt_decode from "jwt-decode";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { router } from "./router";
import DefaultComponent from "./Component/DefaultComponent/DefaultComponent";
import Login from "./page/Login/Login";
import SignUp from "./page/SignUp/SignUp";
import Account from "./page/Account/Account";
import Wishlist from "./page/Wishlist/Wishlist";
import Cart from "./page/Cart/Cart";
import PrivateRoutes from "./ProtectRouter";
import Homepage from "./page/HomePage/Homepage";
import { useDispatch } from "react-redux";
import { isJsonString } from "./utils";
import { updateUser } from "./features/userSlide/userSlide";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const { storageData, decoded } = handleDecoded();
    console.log(decoded);
    if (decoded?.id) {
      console.log(storageData);
      handleGetDetailsUser(decoded?.id, storageData);
    }
    //  dispatch(updateUser({data}))
  }, []);
  const handleDecoded = () => {
    let storageData = localStorage.getItem("access_token");
    let token_refresh = localStorage.getItem("refresh_token");
    let decoded = {};
    console.log(storageData)
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      token_refresh = JSON.parse(token_refresh);
      decoded = jwt_decode(storageData);
      console.log(decoded);
    } else {
      console.log("vao day r");
    }
    return { decoded, storageData, token_refresh };
  };
  UserService.axiosJWT.interceptors.request.use(
    async (config) => {
      // Do something before request is sent
      const currentTime = new Date();
      const { decoded, token_refresh } = handleDecoded();

      if (decoded?.exp < currentTime.getTime() / 1000) {
        const data = await UserService.refreshToken(token_refresh);
        // console.log(data)

        config.headers["Authorization"] = `Bearer ${data?.access_token}`;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    console.log(token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/account" element={<Account />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
