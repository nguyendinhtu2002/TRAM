import React from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link} from "react-router-dom";
import logo from "../../dist/assets/images/TRAM DINH.png";

function Footer() {
    return (
        <>
            <footer className="bg-[#101628]">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link to="/" className="flex items-center">
                                <span
                                    className="self-center whitespace-nowrap block w-28 translate-x-1/4"> <img
                                    className="transform "
                                    src={logo}
                                    alt=""
                                /></span>
                            </Link>
                            <ul className="mt-8 text-gray-300 font-medium">
                                <li className="mb-3">
                                    <span
                                        className="text-sm "><span
                                        className="align-top w-2 mr-1 text-[#fab55a]"><FmdGoodIcon
                                        fontSize={'small'}></FmdGoodIcon></span>LK 03, 04 KĐT Roman Plaza, Đại Mỗ, Nam Từ Liêm, Hà Nội</span>
                                </li>
                                <li className="mb-3">
                                    <span
                                        className="text-sm "><span
                                        className="align-top w-2 mr-1 text-[#fab55a]"><LocalPhoneIcon
                                        fontSize={'small'}></LocalPhoneIcon></span>0823.611.668</span>
                                </li>
                                <li className="mb-3">
                                    <span
                                        className="text-sm "><span
                                        className="align-top w-2 mr-1 text-[#fab55a]"><FacebookIcon
                                        fontSize={'small'}></FacebookIcon></span>facebook.com/tramhuongletravn</span>
                                </li>
                                <li className="mb-3">
                                    <span
                                        className="text-sm "><span
                                        className="align-top w-2 mr-1 text-[#fab55a]"><MailIcon
                                        fontSize={'small'}></MailIcon></span>lekhanhtra1108@gmail.com</span>
                                </li>
                                {/*<li className="mb-3">*/}
                                {/*    <span*/}
                                {/*        className="text-sm "><span*/}
                                {/*        className="align-top w-2 mr-1 text-[#fab55a]"><AssignmentTurnedInIcon*/}
                                {/*        fontSize={'small'}></AssignmentTurnedInIcon></span>GPKD: 0123456789 - 24/05/2023</span>*/}
                                {/*</li>*/}
                                <li className="mb-3">
                                    <span
                                        className="text-sm "><span
                                        className="align-top w-2 mr-1 text-[#fab55a]"><WatchLaterIcon
                                        fontSize={'small'}></WatchLaterIcon></span>8h00 AM - 10h00 PM</span>
                                </li>
                            </ul>

                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-bold  uppercase text-white">Chính sách</h2>
                                <ul className="text-gray-300 font-medium">
                                    <li className="mb-3">
                                        <Link to="/blog" className="text-sm hover:underline hover:text-[#fab55a]">Chính
                                            sách bảo vệ</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/blog" className="text-sm hover:underline hover:text-[#fab55a]">Chính
                                            sách thành viên</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/blog" className="text-sm hover:underline hover:text-[#fab55a]">Chính
                                            sách vận chuyển</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/blog" className="text-sm hover:underline hover:text-[#fab55a]">Đăng
                                            ký đại lý</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/blog" className="text-sm hover:underline hover:text-[#fab55a]">Đổi
                                            trả và bảo hành</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/blog" className="text-sm hover:underline hover:text-[#fab55a]">Hướng
                                            dẫn thanh toán</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/blog" className="text-sm hover:underline hover:text-[#fab55a]">Thiết
                                            kế và dịch vụ</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/blog" className="text-sm hover:underline hover:text-[#fab55a]">Thu -
                                            đổi vàng charm</Link>
                                    </li>


                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-bold  uppercase text-white ">Về chúng tôi</h2>
                                <ul className="text-gray-300 font-medium">
                                    <li className="mb-3">
                                        <Link to="/blog"
                                              className="text-sm hover:underline hover:text-[#fab55a]">Giới thiệu</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/blog" className="text-sm hover:underline hover:text-[#fab55a]">Tin
                                            tức</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/blog" className="text-sm hover:underline hover:text-[#fab55a]">Liên
                                            hệ</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/blog" className="text-sm hover:underline hover:text-[#fab55a]">Tuyển
                                            dụng</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/blog" className="text-sm hover:underline hover:text-[#fab55a]">Điều
                                            khoản dịch vụ</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-bold  uppercase text-white">Bộ sưu tập</h2>
                                <ul className="text-gray-300 dark:text-gray-400 font-medium">
                                    <li className="mb-3">
                                        <Link to="/blog" className="text-sm hover:underline hover:text-[#fab55a]">Vòng
                                            tay trầm hương</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/blog" className="text-sm hover:underline hover:text-[#fab55a]">Nhang
                                            trầm hương</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/blog" className="text-sm hover:underline hover:text-[#fab55a]">Trầm
                                            hương đốt</Link>
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
                            <Link to="https://www.facebook.com/tramhuongletravn" className="text-white hover:text-[#fab55a]">
                                <FacebookIcon></FacebookIcon>
                                <span className="sr-only">Facebook page</span>
                            </Link>
                            <Link to="/" className="text-white hover:text-[#fab55a]">
                                <InstagramIcon></InstagramIcon>
                                <span className="sr-only">Instagram page</span>
                            </Link>
                            <Link to="/" className="text-white hover:text-[#fab55a]">
                                <YouTubeIcon></YouTubeIcon>
                                <span className="sr-only">Youtube page</span>
                            </Link>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer