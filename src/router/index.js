import HomePage from "../page/HomePage/Homepage";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import Cart from "../page/Cart/Cart";
import Account from "../page/Account/Account";
import Wishlist from "../page/Wishlist/Wishlist";
import Test from "../page/Test/Test";

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
    {
        path: '/account',
        page: Account,
        isShowHeader: true,
        isProtected:true
    },
    {
        path: '/wishlist',
        page: Wishlist,
        isShowHeader: true
    },
    {
        path: '/abc',
        page: Test,
        isShowHeader: true
    },
   
]