import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import Toast from "../../Component/LoadingError/Toast";
import {useMutationHooks} from "../../hooks/useMutationHooks";
import {updateUser} from "../../features/userSlide/userSlide";
import * as UserService from "../../services/UserServices";
import jwt_decode from "jwt-decode";
import logo from "../../dist/assets/images/TRAM DINH-02.png";

function ForgotPassword() {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const userLogin = useSelector((state) => state.user);

    const {id} = userLogin;

    const toastId = React.useRef(null);
    const Toastobjects = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };
    const mutation = useMutationHooks((data) => UserService.forgotPassword(data));
    const {data, error, isLoading, isError, isSuccess} = mutation;

    const submitHandler = async (e) => {
        e.preventDefault();
        mutation.mutate({
            email,
        });
    };

    useEffect(() => {
        if (error === null && isSuccess) {


            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success("Thành công", Toastobjects);
            }
            // history("/login");
        } else if (error) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error(
                    error.response.data.message,
                    Toastobjects
                );
            }
        }
    }, [isSuccess, history, error]);


    return (
        <>
            <Toast/>
            <div>
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <Link to="/">
               <span className="block relative w-32 mx-auto">
               <img
                   className="transform scale-150 absolute"
                   src={logo}
                   alt="Tram Dinh"
               />
            </span>
                    </Link>

                    <div className="mt-28 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Email đăng nhập
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                       placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="bg-indigo-600 rounded">
                                <button
                                    type="button"
                                    className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold
                                    leading-6 text-white shadow-sm
                                    hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={submitHandler}
                                >
                                    Lấy lại mật khẩu
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;
