import axios from "axios";
import { URL } from "../utils/API";


export const getCodeVoucher = async (code) => {
  const res = await axios.post(
    `${URL}api/v1/voucher/details/code`,
    { code },
    {
      withCredentials: true,
    }
  );
  return res.data;
};
export const getAllVoucher = async () => {
  const res = await axios.get(`${URL}api/v1/voucher`);
  return res.data;
};
