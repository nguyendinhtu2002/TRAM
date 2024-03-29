import axios from "axios";
import { URL } from "../utils/API";

export const axiosJWT = axios.create();

export const loginUser = async (data) => {
  const res = await axios.post(`${URL}api/v1/users/login`, data, {
    withCredentials: true,
  });
  return res.data;
};
export const refreshToken = async (token) => {
  const res = await axios.post(`${URL}api/v1/users/refresh_token`, {
    token: token,
  });

  const newAccessToken = res.data.access_token;
  localStorage.setItem("access_token", JSON.stringify(newAccessToken));
  return res.data;
};

export const getDetailsUser = async (id, access_token) => {
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };
  const res = await axiosJWT.get(`${URL}api/v1/users/${id}`, {
    headers,
  });
  return res.data;
};
export const registerUser = async (data) => {
  const res = await axios.post(`${URL}api/v1/users/register`, data);
  return res.data;
};

export const updateAccount = async (id, data, access_token) => {
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };
  const res = await axiosJWT.post(`${URL}api/v1/users/updateProfile/${id}`, data, {
    headers,
  });
  return res.data;
};

export const updateAddress = async (id, data, access_token) => {
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };
  console.log(access_token);
  const res = await axiosJWT.post(`${URL}api/v1/users/updateProfile/address/${id}`, data, {
    headers,
  });
  return res.data;
};

export const forgotPassword = async (data) => {
  const res = await axios.post(`${URL}api/v1/users/updatePassword`, data, {
    withCredentials: true,
  });
  return res.data;
};