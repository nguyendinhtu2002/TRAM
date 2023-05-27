import HomePage from "../page/HomePage/Homepage";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import Cart from "../page/Cart/Cart";

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
    {
        path: '/signup',
        page: SignUp,
        isShowHeader: true
    },
    {
        path: '/cart',
        page: Cart,
        isShowHeader: true
    },
   
]