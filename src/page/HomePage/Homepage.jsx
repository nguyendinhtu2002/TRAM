import React, {useEffect, useState} from 'react';
import {Navigation, Pagination, Autoplay, Mousewheel} from 'swiper';
import {useSwiper} from 'swiper/react';

import image_1 from "../../dist/assets/images/tram_huong_1.jpg";
import image_2 from "../../dist/assets/images/tram_huong_2.jpg";
import image_3 from "../../dist/assets/images/tram_huong_3.jpg";
import HeaderComponent from "../../Component/HeaderComponent/Header"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rating from "@mui/material/Rating";
import StarOutlineIcon from "@mui/icons-material/StarOutline";



function NextArrow(props) {
    const {className, style, onClick} = props;

    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                zIndex: "1000",
                color: "white",
                marginRight: "30px",
                padding:"20px",
                justifyContent:"center",
                alignItems:"center"
            }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                zIndex: "1000",
                color: "white",
                marginLeft: "30px",
                padding:"20px",
                justifyContent:"center",
                alignItems:"center"
            }}
            onClick={onClick}
        />
    );
}

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
                paddingLeft:"20px",
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
                paddingRight:"20px",

                justifyContent: "center",
                alignItems: "center"
            }}
            onClick={onClick}
        />
    );
}

function Homepage() {
    const swiper = useSwiper();
    const [value, setValue] = useState(null);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,

    };
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
        <div className="bg-[#101618]">
            <HeaderComponent/>
            {/*    Start slider*/}
            <div className=" mx-auto rounded-2xl pb-5">
                <div className="mb-3">
                    <Slider {...settings} style={{}}>
                        <a href="#">
                            <img src={image_1} className="mx-auto rounded-lg w-full block object-fill max-[600px]:h-[12rem] max-[900px]:h-[20rem]  max-[1024px]:h-[28rem] h-[38rem]"
                                 alt=""/>
                        </a>
                        <a href="#">
                            <img src={image_2} className="mx-auto rounded-lg w-full block object-fill max-[900px]:h-[12rem]  max-[1024px]:h-[28rem] h-[38rem]"
                                 alt=""/>
                        </a>
                        <a href="#">
                            <img src={image_3} className="mx-auto rounded-lg w-full block object-fill max-[900px]:h-[12rem]  max-[1024px]:h-[28rem] h-[38rem]"
                                 alt=""/>
                        </a>

                    </Slider>
                </div>
            </div>
            {/*    End slider*/}

            {/*    Start sales*/}
            <div className=" mx-auto rounded-2xl w-[70%] pb-5 bg-[#101628] py-10">
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
                            <div className="flex justify-center gap-4 ">
                                <div
                                    className="rounded-lg bg-[#101638] w-[22%]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg object-fill h-44 w-full m-0" alt=""/>
                                    </a>
                                    <div className="py-5 px-3 max-w-sm">
                                        <div>
                                            <a href="#" className="text-center">
                                                <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">Lư đốt
                                                    trầm hương hoa sen bằng sứ </h5>
                                            </a>
                                        </div>

                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold overflow-wrap">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through overflow-wrap">1.990.000
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
                                    className="rounded-lg bg-[#101638] w-[22%]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg object-fill h-44 w-full m-0" alt=""/>
                                    </a>
                                    <div className="py-5 px-3 max-w-sm">
                                        <div>
                                            <a href="#" className="text-center">
                                                <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">Lư đốt
                                                    trầm hương hoa sen bằng sứ </h5>
                                            </a>
                                        </div>

                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold overflow-wrap">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through overflow-wrap">1.990.000
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
                                    className="rounded-lg bg-[#101638] w-[22%]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg object-fill h-44 w-full m-0" alt=""/>
                                    </a>
                                    <div className="py-5 px-3 max-w-sm">
                                        <div>
                                            <a href="#" className="text-center">
                                                <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">Lư đốt
                                                    trầm hương hoa sen bằng sứ </h5>
                                            </a>
                                        </div>

                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold overflow-wrap">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through overflow-wrap">1.990.000
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
                                    className="rounded-lg bg-[#101638] w-[22%]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg object-fill h-44 w-full m-0" alt=""/>
                                    </a>
                                    <div className="py-5 px-3 max-w-sm">
                                        <div>
                                            <a href="#" className="text-center">
                                                <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">Lư đốt
                                                    trầm hương hoa sen bằng sứ </h5>
                                            </a>
                                        </div>

                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold overflow-wrap">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through overflow-wrap">1.990.000
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
                            <div className="flex justify-center gap-4 ">
                                <div
                                    className="rounded-lg bg-[#101638] w-[22%]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg object-fill h-44 w-full m-0" alt=""/>
                                    </a>
                                    <div className="py-5 px-3 max-w-sm">
                                        <div>
                                            <a href="#" className="text-center">
                                                <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">Lư đốt
                                                    trầm hương hoa sen bằng sứ </h5>
                                            </a>
                                        </div>

                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold overflow-wrap">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through overflow-wrap">1.990.000
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
                                    className="rounded-lg bg-[#101638] w-[22%]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg object-fill h-44 w-full m-0" alt=""/>
                                    </a>
                                    <div className="py-5 px-3 max-w-sm">
                                        <div>
                                            <a href="#" className="text-center">
                                                <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">Lư đốt
                                                    trầm hương hoa sen bằng sứ </h5>
                                            </a>
                                        </div>

                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold overflow-wrap">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through overflow-wrap">1.990.000
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
                                    className="rounded-lg bg-[#101638] w-[22%]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg object-fill h-44 w-full m-0" alt=""/>
                                    </a>
                                    <div className="py-5 px-3 max-w-sm">
                                        <div>
                                            <a href="#" className="text-center">
                                                <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">Lư đốt
                                                    trầm hương hoa sen bằng sứ </h5>
                                            </a>
                                        </div>

                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold overflow-wrap">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through overflow-wrap">1.990.000
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
                                    className="rounded-lg bg-[#101638] w-[22%]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg object-fill h-44 w-full m-0" alt=""/>
                                    </a>
                                    <div className="py-5 px-3 max-w-sm">
                                        <div>
                                            <a href="#" className="text-center">
                                                <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">Lư đốt
                                                    trầm hương hoa sen bằng sứ </h5>
                                            </a>
                                        </div>

                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold overflow-wrap">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through overflow-wrap">1.990.000
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
                            <div className="flex justify-center gap-4 ">
                                <div
                                    className="rounded-lg bg-[#101638] w-[22%]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg object-fill h-44 w-full m-0" alt=""/>
                                    </a>
                                    <div className="py-5 px-3 max-w-sm">
                                        <div>
                                            <a href="#" className="text-center">
                                                <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">Lư đốt
                                                    trầm hương hoa sen bằng sứ </h5>
                                            </a>
                                        </div>

                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold overflow-wrap">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through overflow-wrap">1.990.000
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
                                    className="rounded-lg bg-[#101638] w-[22%]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg object-fill h-44 w-full m-0" alt=""/>
                                    </a>
                                    <div className="py-5 px-3 max-w-sm">
                                        <div>
                                            <a href="#" className="text-center">
                                                <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">Lư đốt
                                                    trầm hương hoa sen bằng sứ </h5>
                                            </a>
                                        </div>

                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold overflow-wrap">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through overflow-wrap">1.990.000
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
                                    className="rounded-lg bg-[#101638] w-[22%]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg object-fill h-44 w-full m-0" alt=""/>
                                    </a>
                                    <div className="py-5 px-3 max-w-sm">
                                        <div>
                                            <a href="#" className="text-center">
                                                <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">Lư đốt
                                                    trầm hương hoa sen bằng sứ </h5>
                                            </a>
                                        </div>

                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold overflow-wrap">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through overflow-wrap">1.990.000
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
                                    className="rounded-lg bg-[#101638] w-[22%]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg object-fill h-44 w-full m-0" alt=""/>
                                    </a>
                                    <div className="py-5 px-3 max-w-sm">
                                        <div>
                                            <a href="#" className="text-center">
                                                <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">Lư đốt
                                                    trầm hương hoa sen bằng sứ </h5>
                                            </a>
                                        </div>

                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold overflow-wrap">1.590.000 đ</p>
                                            <p className="text-white text-sm text-gray-600 text-center font-bold line-through overflow-wrap">1.990.000
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
            {/*    End sales*/}


            {/*Start Product*/}
            <div className="w-3/5 mx-auto rounded-2xl py-5 flex gap-2 ">
                <div className="w-1/5 ">
                    <div className="">
                        <img className="rounded-2xl "
                             src="https:thienmochuong.com/wp-content/uploads/2022/06/banner-tram-huong-dot.jpg"
                             alt=""/>
                    </div>
                </div>
                <div className="w-4/5 px-2 pb-5 bg-[#101628] rounded-2xl shadow">
                    <div className="mx-3 my-4 p-2 flex justify-between items-center">
                        <h3 className="text-white capitalize font-bold text-3xl">Trầm hương đốt</h3>
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

            {/*    End Product*/}
        </div>
    );
}


export default Homepage;
