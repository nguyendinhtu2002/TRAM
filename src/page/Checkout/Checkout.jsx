import React from 'react'
import HeaderComponent from "../../Component/HeaderComponent/Header";
import {decrement, increment} from "../../features/quantitySlide/quantitySlide";
import {useDispatch, useSelector} from "react-redux";

function Checkout() {
    const count = useSelector((state) => state.quantity.value)
    const dispatch = useDispatch()
    return (<>
        <HeaderComponent></HeaderComponent>
        <div className="container mx-auto mt-10">
            <div className="lg:flex shadow-md my-10">
                {/*start info checkout*/}
                <div className="lg:w-[65%] bg-white px-10 py-10">
                    <div className="border-b pb-8">
                        <h1 className="font-semibold text-2xl">Thông tin thanh toán</h1>
                    </div>

                    <div className="-mx-8 px-6">
                        <label htmlFor="name"
                               className="font-medium inline-block mb-3 text-sm uppercase">Họ và tên *</label>
                        <input id="name" name="name" type="text" autoComplete="name" required
                               className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                               placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    <div className="items-center -mx-8 px-6 py-3">
                        <div className="flex justify-between gap-10">
                            <div className="w-full">
                                <label htmlFor="phone"
                                       className="font-medium inline-block mb-3 text-sm uppercase">Số điện thoại *</label>
                                <input id="phone" name="phone" type="text" autoComplete="address" required
                                       className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                               placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>

                            <div className="w-full">
                                <label htmlFor="email"
                                       className="font-medium inline-block mb-3 text-sm uppercase">Địa chỉ Email *</label>
                                <input id="email" name="email" type="text" autoComplete="email" required
                                       className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                               placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                    </div>
                    <div className="items-center -mx-8 px-6 pb-5">
                        <div className="flex justify-between gap">
                            <div className="w-1/4">
                                <label className="font-medium inline-block mb-3 text-sm uppercase">Tỉnh/Thành phố *</label>
                                <select className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                               placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option>Hà Nội</option>
                                    <option>Hồ Chí Minh</option>
                                </select>
                            </div>
                            <div className="w-1/4">
                                <label className="font-medium inline-block mb-3 text-sm uppercase">Quận/Huyện *</label>
                                <select className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                               placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option>Hoàn Kiếm</option>
                                    <option>Đông Anh</option>
                                </select>
                            </div>

                            <div className="w-1/4">
                                <label className="font-medium inline-block mb-3 text-sm uppercase">Xã/Phường/Thị trấn *</label>
                                <select className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                               placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option>Hàng Bài</option>
                                    <option>Hàng Trống</option>
                                </select>
                            </div>


                        </div>
                        <div className="py-3">
                            <label htmlFor="address"
                                   className="font-medium inline-block mb-3 text-sm uppercase">Địa chỉ (Số nhà,
                                Phố)</label>
                            <input id="address" name="address" type="text" autoComplete="address" required
                                   className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                               placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        <div className="pb-3">
                            <label htmlFor="note"
                                   className="font-medium inline-block mb-3 text-sm uppercase">Ghi chú</label>
                            <input id="note" name="note" type="text" autoComplete="address" required
                                   className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                               placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>


                    <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">

                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                            <path
                                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/>
                        </svg>
                        Tiếp tục mua hàng
                    </a>
                </div>
                {/*end info checkout*/}

                {/*start your cart*/}
                <div id="summary" className="lg:w-[35%] px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">Đơn hàng</h1>
                    <div className="pt-5">
                        <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Mã giảm
                            giá</label>
                        <input type="text" id="promo" placeholder="Enter your code" className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                       placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        <button
                            className="mt-3 bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded">Áp
                            dụng
                        </button>

                    </div>

                    <div>
                        <h2 className="font-semibold text-xl pt-8">Đơn hàng của bạn</h2>
                    </div>

                    <div className="flex justify-between border-b pb-1">
                        <h3 className="font-semibold  pt-8">Sản phẩm</h3>
                        <h3 className="font-semibold  pt-8">Thành tiền</h3>
                    </div>

                    <div>
                        <ul className="list-none">
                            <li className="flex justify-between w-full border-b py-3">
                                <div className="w-3/5">
                                        <span className="text-sm ">Vòng Tay Trầm Hương Phật Di Lặc - Trầm Tốc Việt Nam - 8mm
                                        </span>
                                    <span className="text-sm font-bold"> x2</span>
                                </div>
                                <div><span
                                    className="text-red-500 text-sm inline-block font-semibold">3.180.000 ₫</span></div>
                            </li>
                            <li className="flex justify-between w-full border-b py-3">
                                <div className="w-3/5">
                                        <span className="text-sm ">Vòng Tay Trầm Hương Phật Di Lặc - Trầm Tốc Việt Nam - 8mm
                                        </span>
                                    <span className="text-sm font-bold"> x2</span>
                                </div>
                                <div><span
                                    className="text-red-500 text-sm inline-block font-semibold">3.180.000 ₫</span></div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-between mt-10 pb-5 border-b">
                        <span className="font-bold text-sm uppercase">Tạm tính</span>
                        <span className="font-semibold text-sm text-red-500">6.360.000 ₫</span>
                    </div>

                    <div className="flex justify-between mt-10 border-b pb-5">
                        <span className="font-bold text-sm uppercase ">Giao hàng</span>
                        <span className="text-sm">Giao hàng miễn phí</span>
                    </div>

                    <div className="flex justify-between mt-10 pb-2 border-b">
                        <span className="font-bold text-sm uppercase ">Tổng</span>
                        <span className="text-red-600 font-bold">6.360.000 ₫</span>
                    </div>
                    <div className="border-t mt-8">
                        <button
                            className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded">Thanh
                            Toán
                        </button>
                    </div>
                </div>
                {/*    end your cart*/}
            </div>
        </div>

    </>);
}

export default Checkout