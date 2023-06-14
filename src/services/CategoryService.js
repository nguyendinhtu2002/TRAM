import axios from "axios";
import { URL } from "../utils/API";

export const axiosJWT = axios.create();

export const getFilter = async () => {
  const res = await axios.get(`${URL}api/v1/category/filter`);
  return res.data;
};
