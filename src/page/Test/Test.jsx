import {React,useState} from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Rating from "@mui/material/Rating";
import StarOutlineIcon from '@mui/icons-material/StarOutline';

import image_1 from "../../dist/assets/images/tram_huong_1.jpg";
import image_2 from "../../dist/assets/images/tram_huong_2.jpg";
import image_3 from "../../dist/assets/images/tram_huong_3.jpg";

function NextArrow(props) {
    const {className, style, onClick} = props;

    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                zIndex: "10",
                color: "white",
                marginRight: "2rem",
                borderRadius: "100%",
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
            style={{...style, display: "block", zIndex: "10", color: "white", marginLeft: "2rem"}}
            onClick={onClick}
        />
    );
}

function Test() {
    const [value, setValue] = useState(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>

            {/*    Start Sales*/}
            <div className="w-4/5 mx-auto rounded-2xl py-5">
                <div className="m-3 px-2">
                    <h3 className="text-white capitalize font-bold text-3xl">Khuyến mãi</h3>
                </div>
                <div className="my-3">
                    <Slider {...settings} style={{}}>

                        <div
                            className="rounded-lg bg-[#101648] w-[95%] " style={{ width: "85%", important: "true" }}>
                            <a href="#">
                                <img src={image_1} className="rounded-lg block w-[85%] object-fill h-60" alt=""/>
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
                                        emptyIcon={<StarOutlineIcon style={{ color: 'yellow' }} />}

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
                                <img src={image_2} className="rounded-lg block w-full object-fill h-60" alt=""/>
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
                                        emptyIcon={<StarOutlineIcon style={{ color: 'yellow' }} />}

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
                                <img src={image_3} className="rounded-lg block w-full object-fill h-60" alt=""/>
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
                                        emptyIcon={<StarOutlineIcon style={{ color: 'yellow' }} />}

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
                                <img src={image_1} className="rounded-lg block w-full object-fill h-60" alt=""/>
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
                                        emptyIcon={<StarOutlineIcon style={{ color: 'yellow' }} />}

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
                                <img src={image_2} className="rounded-lg block w-full object-fill h-60" alt=""/>
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
                                        emptyIcon={<StarOutlineIcon style={{ color: 'yellow' }} />}

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
                                <img src={image_3} className="rounded-lg block w-full object-fill h-60" alt=""/>
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
                                        emptyIcon={<StarOutlineIcon style={{ color: 'yellow' }} />}

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
                                <img src={image_1} className="rounded-lg block w-full object-fill h-60" alt=""/>
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
                                        emptyIcon={<StarOutlineIcon style={{ color: 'yellow' }} />}

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
                                <img src={image_2} className="rounded-lg block w-full object-fill h-60" alt=""/>
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
                                        emptyIcon={<StarOutlineIcon style={{ color: 'yellow' }} />}

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
                                <img src={image_3} className="rounded-lg block w-full object-fill h-60" alt=""/>
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
                                        emptyIcon={<StarOutlineIcon style={{ color: 'yellow' }} />}

                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                    <p className="text-sm text-gray-500">0 đánh giá</p>
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
            {/*    End Sale*/}
        </>

    );
}

export default Test;
