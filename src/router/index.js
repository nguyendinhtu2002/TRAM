import HomePage from "../page/HomePage/Homepage";
import Login from "../page/Login/Login";

export const router = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/login',
        page: Login,
        isShowHeader: true
    },
   
]