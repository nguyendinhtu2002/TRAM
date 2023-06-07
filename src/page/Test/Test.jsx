import {React, useState} from 'react'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Rating from "@mui/material/Rating";
import StarOutlineIcon from "@mui/icons-material/StarOutline";


import image_1 from "../../dist/assets/images/tram_huong_1.jpg";
import image_2 from "../../dist/assets/images/tram_huong_2.jpg";
import image_3 from "../../dist/assets/images/tram_huong_3.jpg";


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
                padding: "20px",
                justifyContent: "center",
                alignItems: "center"
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
                padding: "20px",
                justifyContent: "center",
                alignItems: "center"
            }}
            onClick={onClick}
        />
    );
}

function Test() {
    const [value, setValue] = useState(null);
    const settingsProducts = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]

    };

    return (
        <>

            {/*Start Product*/}
            <div className="w-4/5 mx-auto rounded-2xl py-5 md:flex">
                <div className="w-[25%] lg:w-[30%] hidden lg:block">
                    <div className="">
                        <img className="rounded-2xl "
                             src="https:thienmochuong.com/wp-content/uploads/2022/06/banner-tram-huong-dot.jpg"
                             alt=""/>
                    </div>
                </div>

                <div className="rounded-2xl mx-auto lg:w-[70%] w-full lg: bg-[#101628] px-2 py-3 space-y-10">
                    <div className="mt-4 px-2 flex justify-between">
                        <h3 className="text-white capitalize font-bold lg:text-4xl sm:text-3xl text-xl">Trầm Hương Đốt</h3>
                        <a href="" className="text-white flex items-center md:text-sm hover:opacity-90">Xem tất cả <svg
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
                    <div className="hidden xl:flex xl:gap-3 xl:pl-2" >
                        <button href="" className="capitalize text-white rounded-lg border p-2 hover:text-amber-500 hover:border-amber-500 ">Nhang trầm hương</button>
                        <button href="" className="capitalize text-white rounded-lg border p-2 hover:text-amber-500 hover:border-amber-500 ">Nụ Trầm Hương</button>
                        <button href="" className="capitalize text-white rounded-lg border p-2 hover:text-amber-500 hover:border-amber-500 ">Trầm Hương Miếng</button>
                        <button href="" className="capitalize text-white rounded-lg border p-2 hover:text-amber-500 hover:border-amber-500 ">Bột Trầm Hương</button>
                    </div>
                    <div className="py-3 h-[70%]">
                        <Slider {...settingsProducts} >
                            <div className="">
                                <div
                                    className="rounded-lg bg-[#101638] mx-auto w-[95%]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg object-fill xl:h-56 h-44 w-full m-0"
                                             alt=""/>
                                    </a>
                                    <div className="py-5 px-3 max-w-md">
                                        <div>
                                            <a href="#" className="text-center">
                                                <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">Lư
                                                    đốt trầm hương hoa sen bằng sứ </h5>
                                            </a>
                                        </div>

                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold overflow-wrap">1.590.000
                                                đ</p>
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

                            <div className="">
                                <div
                                    className="rounded-lg bg-[#101638] mx-auto w-[95%]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg object-fill xl:h-56 h-44 w-full m-0"
                                             alt=""/>
                                    </a>
                                    <div className="py-5 px-3 max-w-md">
                                        <div>
                                            <a href="#" className="text-center">
                                                <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">Lư
                                                    đốt trầm hương hoa sen bằng sứ </h5>
                                            </a>
                                        </div>

                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold overflow-wrap">1.590.000
                                                đ</p>
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

                            <div className="">
                                <div
                                    className="rounded-lg bg-[#101638] mx-auto w-[95%]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg object-fill xl:h-56 h-44 w-full m-0"
                                             alt=""/>
                                    </a>
                                    <div className="py-5 px-3 max-w-md">
                                        <div>
                                            <a href="#" className="text-center">
                                                <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">Lư
                                                    đốt trầm hương hoa sen bằng sứ </h5>
                                            </a>
                                        </div>

                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold overflow-wrap">1.590.000
                                                đ</p>
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

                            <div className="">
                                <div
                                    className="rounded-lg bg-[#101638] mx-auto w-[95%]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg object-fill xl:h-56 h-44 w-full m-0"
                                             alt=""/>
                                    </a>
                                    <div className="py-5 px-3 max-w-md">
                                        <div>
                                            <a href="#" className="text-center">
                                                <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">Lư
                                                    đốt trầm hương hoa sen bằng sứ </h5>
                                            </a>
                                        </div>

                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold overflow-wrap">1.590.000
                                                đ</p>
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

                            <div className="">
                                <div
                                    className="rounded-lg bg-[#101638] mx-auto w-[95%] ">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg object-fill xl:h-56 h-44 w-full m-0"
                                             alt=""/>
                                    </a>
                                    <div className="py-5 px-3 max-w-md">
                                        <div>
                                            <a href="#" className="text-center">
                                                <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">Lư
                                                    đốt trầm hương hoa sen bằng sứ </h5>
                                            </a>
                                        </div>

                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold overflow-wrap">1.590.000
                                                đ</p>
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

                            <div className="">
                                <div
                                    className="rounded-lg bg-[#101638] mx-auto w-[95%]">
                                    <a href="#">
                                        <img src={image_1} className="rounded-t-lg object-fill xl:h-56 h-44 w-full m-0"
                                             alt=""/>
                                    </a>
                                    <div className="py-5 px-3 max-w-md">
                                        <div>
                                            <a href="#" className="text-center">
                                                <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">Lư
                                                    đốt trầm hương hoa sen bằng sứ </h5>
                                            </a>
                                        </div>

                                        <div className="flex justify-center gap-2">
                                            <p className="text-white text-center font-bold overflow-wrap">1.590.000
                                                đ</p>
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






                        </Slider>
                    </div>
                </div>

            </div>
            {/*    End Product*/}

        </>


    );
}

export default Test;
