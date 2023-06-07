import {React, useState} from 'react'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Rating from "@mui/material/Rating";
import StarOutlineIcon from "@mui/icons-material/StarOutline";


import image_1 from "../../dist/assets/images/tram_huong_1.jpg";
import image_2 from "../../dist/assets/images/tram_huong_2.jpg";
import image_3 from "../../dist/assets/images/tram_huong_3.jpg";
import vong_tay from "../../dist/assets/images/vong-tay-tram-huong.jpg";

import  FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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


    const settingsSales = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
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

    const settingsCategories = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
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

    const ImageItem=()=>{
        const [isHover, setHover] = useState(null);
        const [isHoverIcon, setHoverIcon] = useState(null);
        return (
            <div className="relative" onMouseEnter={() => setHover(true)}
                 onMouseLeave={() => setHover(false)}>
                <a href="#" className={isHover ? "hover:opacity-70" : ""}>
                    <img src={image_1}
                         className="rounded-t-lg object-fill xl:h-56 h-44 w-full m-0"
                         alt=""/>
                </a>
                <div>
                    <a href="" className={` ${isHover ? "opacity-100" : "opacity-0"
                    } text-white hover:text-amber-500 absolute top-0 right-2`}
                       onMouseEnter={() => setHoverIcon(true)}
                       onMouseLeave={() => setHoverIcon(false)}>

                        <div className={isHoverIcon?"hidden":"block"}><FavoriteBorderIcon></FavoriteBorderIcon>
                        </div>
                        <div className={isHoverIcon?"block":"hidden"}><FavoriteIcon></FavoriteIcon>
                        </div>
                    </a>
                </div>
            </div>
        );
    };
    return (
        <>

            {/*Start List Category*/}
            <div className="w-5/6 mx-auto bg-black">
                <Slider {...settingsCategories}>
                    <div className="">
                        <a href="">
                            <img className="rounded-full w-[40%] mx-auto mb-1" src={vong_tay} alt="Vòng tay trầm hương"/>
                            <div ><p className="text-white text-center font-bold capitalize">Vòng tay trầm hương</p></div>
                        </a>
                    </div>

                    <div className="">
                        <a href="">
                            <img className="rounded-full w-[40%] mx-auto mb-1" src={vong_tay} alt="Vòng tay trầm hương"/>
                            <div ><p className="text-white text-center font-bold capitalize">Vòng tay trầm hương</p></div>
                        </a>
                    </div>

                    <div className="">
                        <a href="">
                            <img className="rounded-full w-[40%] mx-auto mb-1" src={vong_tay} alt="Vòng tay trầm hương"/>
                            <div ><p className="text-white text-center font-bold capitalize">Vòng tay trầm hương</p></div>
                        </a>
                    </div>

                    <div className="">
                        <a href="">
                            <img className="rounded-full w-[40%] mx-auto mb-1" src={vong_tay} alt="Vòng tay trầm hương"/>
                            <div ><p className="text-white text-center font-bold capitalize">Vòng tay trầm hương</p></div>
                        </a>
                    </div>

                    <div className="">
                        <a href="">
                            <img className="rounded-full w-[40%] mx-auto mb-1" src={vong_tay} alt="Vòng tay trầm hương"/>
                            <div ><p className="text-white text-center font-bold capitalize">Vòng tay trầm hương</p></div>
                        </a>
                    </div>

                    <div className="">
                        <a href="">
                            <img className="rounded-full w-[40%] mx-auto mb-1" src={vong_tay} alt="Vòng tay trầm hương"/>
                            <div ><p className="text-white text-center font-bold capitalize">Vòng tay trầm hương</p></div>
                        </a>
                    </div>

                </Slider>

            </div>
            {/*End List Category*/}

            {/*Start Sales*/}
            <div className="w-5/6 mx-auto rounded-2xl py-5 md:flex">
                <div className="rounded-2xl mx-auto w-full bg-[#0C1327] px-2 py-3 space-y-10">
                    <div className="mt-4 px-2 flex justify-center">
                        <h3 className="text-white capitalize font-bold lg:text-4xl sm:text-3xl text-xl">Sale up to 20%
                            🔥</h3>
                    </div>
                    <div className="py-3 h-[70%]">
                        <Slider {...settingsSales} >
                            <div className="">
                                <div
                                    className="rounded-lg bg-[#192034] mx-auto w-[95%]">
                                    <ImageItem></ImageItem>

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
                                    className="rounded-lg bg-[#192034] mx-auto w-[95%]">
                                    <ImageItem></ImageItem>

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
                                    className="rounded-lg bg-[#192034] mx-auto w-[95%]">
                                    <ImageItem></ImageItem>

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
                                    className="rounded-lg bg-[#192034] mx-auto w-[95%]">
                                    <ImageItem></ImageItem>

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
                                    className="rounded-lg bg-[#192034] mx-auto w-[95%]">
                                    <ImageItem></ImageItem>

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
                                    className="rounded-lg bg-[#192034] mx-auto w-[95%]">
                                    <ImageItem></ImageItem>

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
            {/*    End Sales*/}

        </>


    );
}

export default Test;
