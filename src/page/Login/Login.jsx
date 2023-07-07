import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import Toast from "../../Component/LoadingError/Toast";
import { useMutationHooks } from "../../hooks/useMutationHooks";
import { updateUser } from "../../features/userSlide/userSlide";
import * as UserService from "../../services/UserServices";
import jwt_decode from "jwt-decode";

import logo from "../../dist/assets/images/TRAM DINH-02.png"

function Login() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userLogin = useSelector((state) => state.user);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const { id } = userLogin;

  const toastId = React.useRef(null);
  const Toastobjects = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const mutation = useMutationHooks((data) => UserService.loginUser(data));
  const { data, error, isLoading, isError, isSuccess } = mutation;
  
  const submitHandler = async (e) => {
    e.preventDefault();

    mutation.mutate({
      email,
      password,
    });
  };
  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    // console.log(res);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };
  useEffect(() => {
    if (error === null && isSuccess) {
      localStorage.setItem("access_token", JSON.stringify(data?.access_token));
      localStorage.setItem(
        "refresh_token",
        JSON.stringify(data?.refresh_token)
      );
      if (data?.access_token) {
        const decoded = jwt_decode(data?.access_token);
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token);
        }
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.success("Thành công", Toastobjects);
        }
      }

      // dispatch(updateUser({ data }))
    } else if (error) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(error.response.data.message, Toastobjects);
      }
    }

    if (id !== "") {
      history("/");
    }
  }, [isSuccess, history, id, error]);

  const handleTogglePassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <>
      <Toast />
      <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm my-auto">
            <Link to="/">
               <span className="block relative w-32 mx-auto">
               <img
                   className="transform scale-150 absolute"
                   src={logo}
                   alt="Tram Dinh"
               />
            </span>
            </Link>

            <h2 className="mt-28 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Đăng nhập
            </h2>
          </div>

          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email đăng nhập
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                       placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Mật khẩu
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Quên mật khẩu?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type={isShowPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                       placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <div className="">
                  <input
                      id="isShowPassword"
                      type="checkbox"
                      className="block con rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                       placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleTogglePassword}
                  />
                </div>
                <label
                    htmlFor="isShowPassword"
                    className="text-sm font-medium leading-6 text-gray-900"
                >
                  Hiển thị mật khẩu
                </label>
              </div>

              <div className="bg-indigo-600 rounded">
                <button
                  type="button"
                  className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold
                                    leading-6 text-white shadow-sm
                                    hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={submitHandler}
                >
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
