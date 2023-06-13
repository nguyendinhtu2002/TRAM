import React from 'react'

import HeaderComponent from "../../Component/HeaderComponent/Header"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../features/quantitySlide/quantitySlide'

function Cart() {
    const count = useSelector((state) => state.quantity.value)
    const dispatch = useDispatch()
return (
    <>
        <HeaderComponent></HeaderComponent>
        <div className="container mx-auto mt-10">
            <div className="lg:flex shadow-md my-10">
                <div className="lg:w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Giỏ hàng</h1>
                        <h2 className="font-semibold text-2xl capitalize">3 sản phẩm</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Sản phẩm</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Số lượng</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Giá tiền</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Thành tièn</h3>
                    </div>
                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        {/*Product*/}
                        <div className="flex w-2/5">
                            <div className="w-20">
                                <img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                                     alt=""/>
                            </div>
                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                <span className="font-bold text-sm">Iphone 6S</span>
                                <span className="text-red-500 text-xs">Apple</span>
                                <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                            </div>
                        </div>
                        <div className="flex justify-center w-1/5">
                            <button>
                                <svg className="fill-current text-gray-600 w-3"
                                     onClick={() => dispatch(decrement())}
                                     viewBox="0 0 448 512">
                                    <path
                                        d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                                </svg>
                            </button>


                            <input className="mx-2 border text-center w-12" type="text" value={count}/>

                            <button>
                                <svg className="fill-current text-gray-600 w-3"
                                     onClick={() => dispatch(increment())}

                                     viewBox="0 0 448 512">
                                    <path
                                        d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                                </svg>
                            </button>

                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                    </div>


                    <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">

                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                            <path
                                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/>
                        </svg>
                        Tiếp tục mua hàng
                    </a>
                </div>

                <div id="summary" className="lg:w-1/4 px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">Cộng giỏ hàng</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-bold text-sm uppercase text-[#e7ad00]">Tạm tính</span>
                        <span className="font-semibold text-sm">590$</span>
                    </div>
                    {/*<div className="space-y-4">*/}
                    {/*    <h4 className="font-bold inline-block mb-3 text-sm uppercase text-[#e7ad00]">Giao hàng</h4>*/}
                    {/*    <div className="">*/}
                    {/*        <h4 className="font-medium inline-block mb-3 text-sm uppercase">Thành phố</h4>*/}
                    {/*        <select className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300*/}
                    {/*                   placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">*/}
                    {/*            <option>Hà Nội</option>*/}
                    {/*            <option>Hồ Chí Minh</option>*/}
                    {/*        </select>*/}
                    {/*    </div>*/}
                    {/*    <div className="">*/}
                    {/*        <h4 className="font-medium inline-block mb-3 text-sm uppercase">Quận</h4>*/}
                    {/*        <select className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300*/}
                    {/*                   placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">*/}
                    {/*            <option>Hoàn Kiếm</option>*/}
                    {/*            <option>Đông Anh</option>*/}
                    {/*        </select>*/}
                    {/*    </div>*/}
                    {/*    <div className="">*/}
                    {/*        <label htmlFor="address" className="font-medium inline-block mb-3 text-sm uppercase">Địa chỉ (Số nhà, Phố)</label>*/}
                    {/*        <input id="address" name="address" type="text" autoComplete="address" required*/}
                    {/*               className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300*/}
                    {/*                   placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                    <div className="py-5">
                        <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Mã giảm giá</label>
                        <input type="text" id="promo" placeholder="Enter your code" className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                       placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        <button className="mt-3 bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded">Áp dụng</button>

                    </div>
                    <div className="border-t mt-8">
                        <div className="flex font-bold justify-between py-6 text-sm uppercase text-[#e7ad00]">
                            <span>Tổng tiền</span>
                            <span>$600</span>
                        </div>
                        <button
                            className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded">Thanh Toán
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </>

)
}

export default Cart