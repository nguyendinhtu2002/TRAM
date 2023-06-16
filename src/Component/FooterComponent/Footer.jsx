import React from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
    return (
        <>
            <footer className="bg-[#101628]">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="#" className="flex items-center">
                                <span
                                    className="self-center text-2xl font-semibold whitespace-nowrap text-white">Logo</span>
                            </a>
                            <ul className="mt-5 text-gray-300 font-medium">
                                <li className="mb-3">
                                    <span href="#"
                                          className="text-sm "><span className="align-top w-2 mr-1 text-[#fab55a]"><FmdGoodIcon fontSize={'small'}></FmdGoodIcon></span>### ABC, P.ABC, quận XYZ, Hà Nội</span>
                                </li>
                                <li className="mb-3">
                                    <span href="#"
                                          className="text-sm "><span className="align-top w-2 mr-1 text-[#fab55a]"><LocalPhoneIcon fontSize={'small'}></LocalPhoneIcon></span>0123456789</span>
                                </li>
                                <li className="mb-3">
                                    <span href="#"
                                          className="text-sm "><span className="align-top w-2 mr-1 text-[#fab55a]"><MailIcon fontSize={'small'}></MailIcon></span>tramhuong@gmail.com</span>
                                </li>
                                <li className="mb-3">
                                    <span href="#"
                                          className="text-sm "><span className="align-top w-2 mr-1 text-[#fab55a]"><AssignmentTurnedInIcon fontSize={'small'}></AssignmentTurnedInIcon></span>GPKD: 0123456789 - 24/05/2023</span>
                                </li>
                                <li className="mb-3">
                                    <span href="#"
                                          className="text-sm "><span className="align-top w-2 mr-1 text-[#fab55a]"><WatchLaterIcon fontSize={'small'}></WatchLaterIcon></span>8h00 AM - 10h00 PM</span>
                                </li>
                            </ul>

                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase text-white">Chính sách</h2>
                                <ul className="text-gray-300 font-medium">
                                    <li className="mb-3">
                                        <a href="#" className="text-sm hover:underline hover:text-[#fab55a]">Chính sách bảo vệ</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="text-sm hover:underline hover:text-[#fab55a]">Chính sách thành viên</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="text-sm hover:underline hover:text-[#fab55a]">Chính sách vận chuyển</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="text-sm hover:underline hover:text-[#fab55a]">Đăng ký đại lý</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="text-sm hover:underline hover:text-[#fab55a]">Đổi trả và bảo hành</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="text-sm hover:underline hover:text-[#fab55a]">Hướng dẫn thanh toán</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="text-sm hover:underline hover:text-[#fab55a]">Thiết kế và dịch vụ</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="text-sm hover:underline hover:text-[#fab55a]">Thu - đổi vàng charm</a>
                                    </li>


                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white ">Về chúng tôi</h2>
                                <ul className="text-gray-300 font-medium">
                                    <li className="mb-3">
                                        <a href="#"
                                           className="text-sm hover:underline hover:text-[#fab55a]">Giới thiệu</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="text-sm hover:underline hover:text-[#fab55a]">Tin tức</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="text-sm hover:underline hover:text-[#fab55a]">Liên hệ</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="text-sm hover:underline hover:text-[#fab55a]">Tuyển dụng</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="text-sm hover:underline hover:text-[#fab55a]">Điều khoản dịch vụ</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Bộ sưu tập</h2>
                                <ul className="text-gray-300 dark:text-gray-400 font-medium">
                                    <li className="mb-3">
                                        <a href="#" className="text-sm hover:underline hover:text-[#fab55a]">Vòng tay trầm hương</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="text-sm hover:underline hover:text-[#fab55a]">Nhang trầm hương</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="text-sm hover:underline hover:text-[#fab55a]">Trầm hương đốt</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center ">© 2023 Bản quyền thuộc về Tram Huong
          </span>
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <a href="#" className="text-white hover:text-[#fab55a]">
                                <FacebookIcon></FacebookIcon>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#" className="text-white hover:text-[#fab55a]">
                                <InstagramIcon></InstagramIcon>
                                <span className="sr-only">Instagram page</span>
                            </a>
                            <a href="#" className="text-white hover:text-[#fab55a]">
                                <YouTubeIcon></YouTubeIcon>
                                <span className="sr-only">Youtube page</span>
                            </a>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer