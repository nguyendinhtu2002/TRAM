import axios from "axios";
import { URL } from "../utils/API";

export const axiosJWT = axios.create();

export const getProducts = async () => {
    const res = await axios.get(`${URL}api/v1/product` );
    return res.data;
};
