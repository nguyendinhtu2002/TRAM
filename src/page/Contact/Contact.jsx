import React from 'react'
import HeaderComponent from "../../Component/HeaderComponent/Header";
import FavoriteIcon from '@mui/icons-material/Favorite';
import RoomIcon from '@mui/icons-material/Room';
import Footer from "../../Component/FooterComponent/Footer";
function Contact() {
    return (
        <>
            <HeaderComponent/>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 mx-auto w-3/4 pl-4 ">
                    <h1 className="mb-4 py-3 text-4xl text-start capitalize border-b-2 tracking-tight font-extrabold text-center dark:text-white">Hệ thống cửa hàng</h1>
                    <div className="flex">
                        <RoomIcon
                            fontSize={"large"}
                            className="text-amber-400 mt-1"></RoomIcon>
                        <div>
                            <h2 className="text-2xl font-bold text-amber-400">Showroom Hà Nội</h2>
                            <p className="font-medium tracking-tight">ABC Phố XYZ, Q. Thanh Xuân, Hà Nội</p>
                            <p className="font-medium tracking-tight">Giờ mở cửa: ( 8h00 am – 22h00 pm )</p>
                            <p className="font-medium tracking-tight">Hotline: <span className="text-amber-500">0123456789</span></p>
                        </div>

                    </div>
                </div>
                <div className="pb-8 mx-auto w-3/4 pl-4 ">
                    <h1 className="mb-4 py-3 text-4xl capitalize text-start border-b-2 tracking-tight font-extrabold text-center dark:text-white">Hệ thống Chi Nhánh</h1>
                    <div className="flex">
                        <RoomIcon
                            fontSize={"large"}
                            className="text-amber-400 mt-1"></RoomIcon>
                        <div>
                            <h2 className="text-2xl font-bold text-amber-400">Chi nhánh Hà Nội</h2>
                            <p className="font-medium tracking-tight">ABC Phố XYZ, Q. Thanh Xuân, Hà Nội</p>

                        </div>

                    </div>
                </div>
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Gửi
                        yêu cầu của bạn</h2>
                    <p className="mb-8 lg:mb-12 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Bạn
                        có câu hỏi về sản phẩm hay đánh giá? Hãy cho chúng tôi biết nhé <span
                            className=""><FavoriteIcon></FavoriteIcon></span></p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="name"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Họ và
                                tên</label>
                            <input type="text" id="name"
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                   required/>
                        </div>
                        <div>
                            <label htmlFor="title"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chủ
                                đề</label>
                            <textarea id="title" rows="3"
                                      required
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            ></textarea>

                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Số điện
                                thoại</label>
                            <input type="text" id="title"
                                   className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                   required/>
                        </div>
                        <button
                                className="py-3 px-5 text-sm font-medium text-center text-white rounded-full bg-amber-500 sm:w-fit hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">
                            Gửi yêu cầu

                        </button>
                    </form>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Contact