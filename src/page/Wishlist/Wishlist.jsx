import React, { useEffect, useState } from "react";

function Wishlist() {


    return (
        <div className="container mx-auto mt-10">
            <div className="lg:flex shadow-md my-10">
                <div className="lg:w-full bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Sản phẩm yêu thích</h1>
                        <h2 className="font-semibold text-2xl capitalize">3 sản phẩm</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Sản phẩm</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Giá tiền</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Trạng thái</h3>
                    </div>
                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        {/*Product*/}
                        <div className="flex w-2/5">
                            <div className="w-20">
                                <img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                                     alt=""/>
                            </div>
                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                <span className="font-bold text-sm">Vòng Trầm Hương Minh Nguyệt Trầm - Trầm Tốc Việt Nam</span>
                                <span className="text-red-500 text-xs">Apple</span>
                                <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                            </div>
                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                        <span className="text-center w-1/5 font-semibold text-sm">Còn hàng</span>
                        <button
                                className="w-1/5 flex justify-center rounded-md px-3 py-1.5 text-sm font-semibold
                                    leading-6 text-white shadow-sm bg-[#fab55a]
                                    hover:bg-[#fab55a]/80 focus-visible:outline focus-visible:outline-2
                                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Thêm vào giỏ hàng
                        </button>
                        {/*<span className="text-center w-1/5 font-semibold text-sm">$400.00</span>*/}
                    </div>
                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        {/*Product*/}
                        <div className="flex w-2/5">
                            <div className="w-20">
                                <img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                                     alt=""/>
                            </div>
                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                <span className="font-bold text-sm">Vòng Trầm Hương Minh Nguyệt Trầm - Trầm Tốc Việt Nam</span>
                                <span className="text-red-500 text-xs">Apple</span>
                                <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                            </div>
                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                        <span className="text-center w-1/5 font-semibold text-sm">Còn hàng</span>
                        <button
                            className="w-1/5 flex justify-center rounded-md px-3 py-1.5 text-sm font-semibold
                                    leading-6 text-white shadow-sm bg-[#fab55a]
                                    hover:bg-[#fab55a]/80 focus-visible:outline focus-visible:outline-2
                                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Thêm vào giỏ hàng
                        </button>
                        {/*<span className="text-center w-1/5 font-semibold text-sm">$400.00</span>*/}
                    </div>
                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        {/*Product*/}
                        <div className="flex w-2/5">
                            <div className="w-20">
                                <img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                                     alt=""/>
                            </div>
                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                <span className="font-bold text-sm">Vòng Trầm Hương Minh Nguyệt Trầm - Trầm Tốc Việt Nam</span>
                                <span className="text-red-500 text-xs">Apple</span>
                                <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                            </div>
                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                        <span className="text-center w-1/5 font-semibold text-sm">Còn hàng</span>
                        <button
                            className="w-1/5 flex justify-center rounded-md px-3 py-1.5 text-sm font-semibold
                                    leading-6 text-white shadow-sm bg-[#fab55a]
                                    hover:bg-[#fab55a]/80 focus-visible:outline focus-visible:outline-2
                                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Thêm vào giỏ hàng
                        </button>
                        {/*<span className="text-center w-1/5 font-semibold text-sm">$400.00</span>*/}
                    </div>



                    <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">

                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                            <path
                                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/>
                        </svg>
                        Tiếp tục mua hàng
                    </a>
                </div>

            </div>
        </div>
    );
}
export default Wishlist
