import axios from "axios";
import { URL } from "../utils/API";

export const axiosJWT = axios.create();

export const createOrder = async (data, access_token) => {
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };
  const res = await axiosJWT.post(`${URL}api/v1/order/create`, data, {
    headers,
  });
  return res.data;
};
