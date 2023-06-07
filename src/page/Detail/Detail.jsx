import React from 'react';
import HeaderComponent from "../../Component/HeaderComponent/Header"
import vong_tay from "../../dist/assets/images/vong-tay-tram-huong.jpg";

function Detail() {

    return (
        <>
            <HeaderComponent></HeaderComponent>
            <section class="text-gray-700 body-font overflow-hidden bg-white">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce"
                             class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                             src={vong_tay}/>
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">Vòng tay Trầm Hương Phúc
                                Bảo – Trầm Tốc Việt Nam
                            </h1>
                            <div class="flex mb-4">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                 stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                 stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                 stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                 stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                 class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-600 ml-3">4 Reviews</span>
          </span>
                                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
            <p className="text-gray-500">69 đã bán</p>
            <p className="ml-3">Tình trạng: <span className="text-amber-500 font-bold ml-1">Còn hàng</span></p>
          </span>
                            </div>
                            <h2 className="text-2xl text-amber-500 font-bold mb-3">900,000đ</h2>
                            <p class="leading-relaxed">Vòng tay Trầm Hương Phúc Bảo chính là món bảo vật thời thượng,
                                mang đến hạnh phúc, bình an, sức khỏe cho chủ nhân.
                            </p>

                            <div class="flex mt-6 items-center pb-5  border-gray-200">
                                <div class="flex">
                                    <span class="mr-3 font-bold">Kích thước hạt</span>
                                    <div className="mr-3">
                                        <input id="btn-6mm" type="radio" name="size"
                                               className="border-2 border-gray-300  rounded-full focus:outline-none"/>
                                        <label htmlFor="btn-6mm"> 6mm </label>

                                    </div>
                                    <div className="mr-3">
                                        <input id="btn-7mm" type="radio" name="size"
                                               className="border-2 border-gray-300  rounded-full focus:outline-none"/>
                                        <label htmlFor="btn-7mm"> 7mm </label>

                                    </div>

                                </div>
                            </div>
                            <div className="flex items-center border-b-2 mb-5 pb-5">
                                <span className="mr-3">Số lượng</span>
                                <div className="relative">
                                    <button className="rounded border appearance-none border-gray-400 py-2 focus:outline-none hover:border-red-500 px-3 mr-1">-</button>
                                    <input type="number" value="1"
                                        className="rounded border border-gray-400 py-2 w-20 focus:outline-none focus:border-red-500 text-base">
                                    </input>
                                    <button className="rounded border appearance-none border-gray-400 py-2 focus:outline-none hover:border-red-500 px-3 ml-1">+</button>
                                </div>
                            </div>

                            <div class="flex gap-3">
                                <button
                                    className="flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Mua ngay
                                </button>
                                <button
                                    class="flex text-white bg-cyan-500  border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded">Add to cart
                                </button>
                                <button
                                    class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                         stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Detail;