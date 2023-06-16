import axios from "axios";
import { URL } from "../utils/API";

export const axiosJWT = axios.create();

export const createOrder = async (data) => {
  const res = await axios.post(`${URL}api/v1/order/create`, data, {
    withCredentials: true,
  });
  return res.data;
};