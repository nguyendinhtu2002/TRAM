import axios from "axios";
import { URL } from "../utils/API";
import { axiosJWT } from "./UserServices";


export const getProduct = async () => {
  const res = await axios.get(`${URL}api/v1/product`);
  return res.data;
};

export const getDetail = async (id) => {
  const res = await axios.get(`${URL}api/v1/product/detail/${id}`);
  return res.data;
};

export const addComment = async (id, data, access_token) => {
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };
  const res = await axiosJWT.post(`${URL}api/v1/product//addReview/${id}`, data, {
    headers,
  });
  return res.data;
};

export const getProductSlug = async (slug) => {
  const res = await axios.get(`${URL}api/v1/product/getProduct/${slug}`);
  return res.data;
};

