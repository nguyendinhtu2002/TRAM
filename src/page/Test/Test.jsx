import {React, useState} from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import Rating from "@mui/material/Rating";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

import {Swiper, useSwiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Pagination, Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import image_1 from "../../dist/assets/images/tram_huong_1.jpg";
import image_2 from "../../dist/assets/images/tram_huong_2.jpg";
import image_3 from "../../dist/assets/images/tram_huong_3.jpg";
import Slider from "react-slick";

function NextArrowSales(props) {
    const {className, style, onClick} = props;

    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                zIndex: "1000",
                color: "white",
                justifyContent: "center",
                alignItems: "center"
            }}
            onClick={onClick}
        />
    );
}

function PrevArrowSales(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                zIndex: "1000",
                color: "white",
                justifyContent: "center",
                alignItems: "center"
            }}
            onClick={onClick}
        />
    );
}

function Test() {
    const [value, setValue] = useState(null);
    SwiperCore.use([Autoplay, Pagination, Navigation]);
    const settingsSales = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        nextArrow: <NextArrowSales/>,
        prevArrow: <PrevArrowSales/>,

    };

    return (
        <>
            {/*    Start slider*/}
            <div className=" mx-auto rounded-2xl w-[70%] pb-5 bg-[#101628] p-5">
                <div className="m-3 px-2 flex justify-between mb-5">
                    <h3 className="text-white capitalize font-bold text-3xl">Khuyến mãi</h3>
                    <a href="" className="text-white flex items-center hover:opacity-90">Xem tất cả <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http:www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"></path>
                    </svg></a>
                </div>
                <div className="mb-3  py-3">
                    <Slider {...settingsSales} style={{}}>
                        <div>
                            <div className="flex justify-center gap-4 bg-[#101628]">
                                <div
                                    className="rounded-lg bg-[#101648]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg object-fill h-44 w-full m-0" alt=""/>
                                    </a>
                                    <div className="py-5 px-3">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through">1.990.000
                                                đ</p>
                                        </div>
                                        <div className="flex justify-center mt-2 items-center gap-3">
                                            <Rating
                                                name="no-value"
                                                value={value}
                                                emptyIcon={<StarOutlineIcon style={{color: 'yellow'}}/>}

                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                            <p className="text-sm text-gray-500">0 đánh giá</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg  object-fill h-44 w-full m-0"
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through">1.990.000
                                                đ</p>
                                        </div>
                                        <div className="flex justify-center mt-2 items-center gap-3">
                                            <Rating
                                                name="no-value"
                                                value={value}
                                                emptyIcon={<StarOutlineIcon style={{color: 'yellow'}}/>}

                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                            <p className="text-sm text-gray-500">0 đánh giá</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg  object-fill h-44 w-full m-0"
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through">1.990.000
                                                đ</p>
                                        </div>
                                        <div className="flex justify-center mt-2 items-center gap-3">
                                            <Rating
                                                name="no-value"
                                                value={value}
                                                emptyIcon={<StarOutlineIcon style={{color: 'yellow'}}/>}

                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                            <p className="text-sm text-gray-500">0 đánh giá</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg  object-fill h-44 w-full m-0"
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through">1.990.000
                                                đ</p>
                                        </div>
                                        <div className="flex justify-center mt-2 items-center gap-3">
                                            <Rating
                                                name="no-value"
                                                value={value}
                                                emptyIcon={<StarOutlineIcon style={{color: 'yellow'}}/>}

                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                            <p className="text-sm text-gray-500">0 đánh giá</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <div className="flex justify-center gap-3 bg-[#101628] ">
                                <div
                                    className="rounded-lg bg-[#101648] ">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg  object-fill h-44 w-full m-0"
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through">1.990.000
                                                đ</p>
                                        </div>
                                        <div className="flex justify-center mt-2 items-center gap-3">
                                            <Rating
                                                name="no-value"
                                                value={value}
                                                emptyIcon={<StarOutlineIcon style={{color: 'yellow'}}/>}

                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                            <p className="text-sm text-gray-500">0 đánh giá</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] ">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg  object-fill h-44 w-full m-0"
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through">1.990.000
                                                đ</p>
                                        </div>
                                        <div className="flex justify-center mt-2 items-center gap-3">
                                            <Rating
                                                name="no-value"
                                                value={value}
                                                emptyIcon={<StarOutlineIcon style={{color: 'yellow'}}/>}

                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                            <p className="text-sm text-gray-500">0 đánh giá</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] ">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg  object-fill h-44 w-full m-0"
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through">1.990.000
                                                đ</p>
                                        </div>
                                        <div className="flex justify-center mt-2 items-center gap-3">
                                            <Rating
                                                name="no-value"
                                                value={value}
                                                emptyIcon={<StarOutlineIcon style={{color: 'yellow'}}/>}

                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                            <p className="text-sm text-gray-500">0 đánh giá</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] ">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg  object-fill h-44 w-full m-0"
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through">1.990.000
                                                đ</p>
                                        </div>
                                        <div className="flex justify-center mt-2 items-center gap-3">
                                            <Rating
                                                name="no-value"
                                                value={value}
                                                emptyIcon={<StarOutlineIcon style={{color: 'yellow'}}/>}

                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                            <p className="text-sm text-gray-500">0 đánh giá</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <div className="flex justify-center gap-3 bg-[#101628] ">
                                <div
                                    className="rounded-lg bg-[#101648] ">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg  object-fill h-44 w-full m-0"
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through">1.990.000
                                                đ</p>
                                        </div>
                                        <div className="flex justify-center mt-2 items-center gap-3">
                                            <Rating
                                                name="no-value"
                                                value={value}
                                                emptyIcon={<StarOutlineIcon style={{color: 'yellow'}}/>}

                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                            <p className="text-sm text-gray-500">0 đánh giá</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] ">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg  object-fill h-44 w-full m-0"
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through">1.990.000
                                                đ</p>
                                        </div>
                                        <div className="flex justify-center mt-2 items-center gap-3">
                                            <Rating
                                                name="no-value"
                                                value={value}
                                                emptyIcon={<StarOutlineIcon style={{color: 'yellow'}}/>}

                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                            <p className="text-sm text-gray-500">0 đánh giá</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] ">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg  object-fill h-44 w-full m-0"
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through">1.990.000
                                                đ</p>
                                        </div>
                                        <div className="flex justify-center mt-2 items-center gap-3">
                                            <Rating
                                                name="no-value"
                                                value={value}
                                                emptyIcon={<StarOutlineIcon style={{color: 'yellow'}}/>}

                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                            <p className="text-sm text-gray-500">0 đánh giá</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] ">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg  object-fill h-44 w-full m-0"
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through">1.990.000
                                                đ</p>
                                        </div>
                                        <div className="flex justify-center mt-2 items-center gap-3">
                                            <Rating
                                                name="no-value"
                                                value={value}
                                                emptyIcon={<StarOutlineIcon style={{color: 'yellow'}}/>}

                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                            <p className="text-sm text-gray-500">0 đánh giá</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </Slider>
                </div>
            </div>
            {/*    End slider*/}

            {/*    Start Sales*/}
            <div className="mx-auto rounded-2xl py-5 w-3/5">
                <div className="m-3 px-2">
                    <h3 className="text-white capitalize font-bold text-3xl">Khuyến mãi</h3>
                </div>
                <div className="my-3 mx-auto w-4/5">
                    <Swiper
                        spaceBetween={100}
                        centeredSlides={true}

                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="flex justify-center gap-3 ">
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_1}
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_1}
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_1}
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>


                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center gap-3 ">
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_2}
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_2}
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_2}
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>


                            </div>


                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center gap-3 ">
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_3}
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_3}
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_3}
                                             alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt
                                                trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>


                            </div>


                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
            {/*    End Sale*/}
        </>


    );
}

export default Test;
