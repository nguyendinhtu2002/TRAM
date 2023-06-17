import axios from "axios";
import { URL } from "../utils/API";

export const axiosJWT = axios.create();

export const getAllProvinces = async () => {
  const res = await axios.get(`https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1`);
  return res.data.data.data;
};

export const getByProvince = async(code)=>{
    const res = await axios.get(`https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${code}&limit=-1`);
    return res.data.data.data;
}
