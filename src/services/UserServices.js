import axios from "axios"
import {URL} from "../utils/API"

export const axiosJWT = axios.create()
export const loginUser = async (data) => {
    const res = await axios.post(`${URL}api/v1/users/login`, data,{
        withCredentials: true
    })
    return res.data
}
export const getDetailsUser = async (id, access_token) => {
    
    const res = await axiosJWT.get(`${URL}api/v1/users/${id}`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    },)
    return res.data

}
export const registerUser = async (data) => {
    const res = await axios.post(`${URL}api/v1/users/register`, data)
    return res.data
}