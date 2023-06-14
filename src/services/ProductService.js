import axios from "axios";
import { URL } from "../utils/API";

export const axiosJWT = axios.create();

export const getProduct = async () => {
  const res = await axios.get(`${URL}api/v1/product`);
  return res.data;
};

export const getDetail = async (id) => {
  const res = await axios.get(`${URL}api/v1/product/details/${id}`);
  return res.data;
};
