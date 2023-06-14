import axios from "axios";
import { URL } from "../utils/API";

export const axiosJWT = axios.create();


export const getCodeVoucher = async (code) => {
    const res = await axios.post(`${URL}api/v1/voucher/details/code`, {code}, {
        withCredentials: true,
    });
    return res.data;
};