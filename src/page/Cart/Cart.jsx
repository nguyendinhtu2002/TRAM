import React, { useState } from 'react'
import * as VoucherService from "../../services/VoucherService";

import HeaderComponent from "../../Component/HeaderComponent/Header";
import { useSelector, useDispatch } from 'react-redux';
import { decrementItemCount, deleteItemFromCart, incrementItemCount, updatePrice } from '../../features/cartSlide/cartSlide';
import { Link } from 'react-router-dom';
import Footer from "../../Component/FooterComponent/Footer";

function Cart() {
    const [code, setCoder] = useState('')
    const [hidden, setHidden] = useState(false)
    const [discount, setDiscount] = useState(0)
    const [priceNew, setPriceNew] = useState()
    const cart = useSelector((state) => state.cart)

    const handleGetVoucher = async () => {

        try {
            const res = await VoucherService.getCodeVoucher(code);
            setHidden(true)
            setDiscount(res.discount)
            handleUpdatePrice(cart.totalPrice - res.discount)
        } catch (error) {
            setHidden(false)
        }



    };
    const calculateTotalPrice = () => {
        return cart.cart.reduce((total, item) => {
            const { priceReal, quantityOrder } = item;
            return total + (priceReal * quantityOrder);
        }, 0);
    };

    const dispatch = useDispatch()

    const handleDelte = async (id) => {
        dispatch(deleteItemFromCart(id))
    }
    const options = {
        maximumFractionDigits: 0,
    };
    const formattedAmount = (amount, options) => {
        return amount.toLocaleString(undefined, options);
    };
    const handleUpdatePrice = (priceNew) => {
        if (cart.status) {
            alert("Bạn đã nhập voucher rồi")

        }
        else {
            dispatch(updatePrice(priceNew))

        }
    }
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <div className="container mx-auto mt-10">
                <div className="lg:flex shadow-md my-10">
                    <div className="lg:w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Giỏ hàng</h1>
                            <h2 className="font-semibold text-2xl capitalize">{cart.length} sản phẩm</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Sản phẩm</h3>
                            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Số
                                lượng</h3>
                            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Giá
                                tiền</h3>
                            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Thành
                                tièn</h3>
                        </div>
                        {/*Product*/}
                        {
                            cart.cart.length > 0 ? cart.cart.map((item) =>
                                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">

                                    <div className="flex w-2/5">
                                        <div className="w-20">
                                            <img className="h-24"
                                                src={item.images[0]}
                                                alt="" />
                                        </div>
                                        <div className="flex flex-col justify-between ml-4 flex-grow">
                                            <span className="font-bold text-sm">{item.name}</span>
                                            <span className="text-red-500 text-xs">{item.category}</span>
                                            <a type='button' onClick={() => handleDelte(item._id)}
                                                className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer">Remove
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex justify-center w-1/5">
                                        <button>
                                            <svg className="fill-current text-gray-600 w-3"
                                                viewBox="0 0 448 512"
                                                onClick={() => dispatch(decrementItemCount(item._id))}
                                            >
                                                <path
                                                    d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </button>

                                        <input className="mx-2 border text-center w-12" type="text" value={item.quantityOrder} />
                                        <button>
                                            <svg
                                                className="fill-current text-gray-600 w-3"
                                                viewBox="0 0 448 512"
                                                onClick={() => dispatch(incrementItemCount(item._id))}
                                            >
                                                <path
                                                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </button>

                                    </div>
                                    <span className="text-center w-1/5 font-semibold text-sm">${formattedAmount(item.priceReal)}</span>
                                    <span className="text-center w-1/5 font-semibold text-sm">${formattedAmount(item.priceReal * item.quantityOrder)}</span>
                                </div>) : <div className="text-center">Không có sản phẩm nào</div>

                        }


                        <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">

                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                <path
                                    d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Tiếp tục mua hàng
                        </a>
                    </div>

                    <div id="summary" className="lg:w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Cộng giỏ hàng</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-bold text-sm uppercase text-[#e7ad00]">Tạm tính</span>
                            <span className="font-semibold text-sm">{formattedAmount(cart.totalPrice)}$</span>
                        </div>
                        <div className="py-5">
                            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Mã giảm
                                giá</label>
                            <input type="text" id="promo" placeholder="Enter your code" className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                       placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={(e) => setCoder(e.target.value)} />
                            {cart.status ? <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Bạn đã dùng voucher!</span></p> : ""}

                            <button
                                className="mt-3 bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded"
                                onClick={handleGetVoucher}
                                disabled={cart.status}
                            >Áp dụng
                            </button>

                        </div>
                        <div className="border-t mt-8">
                            <div className="flex font-bold justify-between py-6 text-sm uppercase text-[#e7ad00]">
                                <span>Tổng tiền</span>
                                <span>${formattedAmount(cart.totalPrice)}</span>
                            </div>
                            <Link to="/checkout">
                                <button
                                    className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded"

                                >Thanh Toán
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Cart