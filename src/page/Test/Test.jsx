import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper";
import { useSwiper } from "swiper/react";

import image_1 from "../../dist/assets/images/tram_huong_1.jpg";
import image_2 from "../../dist/assets/images/tram_huong_2.jpg";
import image_3 from "../../dist/assets/images/tram_huong_3.jpg";
import vong_tay from "../../dist/assets/images/vong-tay-tram-huong.jpg";
import HeaderComponent from "../../Component/HeaderComponent/Header";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import * as ProductService from "../../services/ProductService";
import * as CategorytService from "../../services/CategoryService";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "@mui/material/Rating";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../features/productSlide/productSlide";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { createWishList } from "../../features/wishlistSlide/wishlistSlide";
import Footer from "../../Component/FooterComponent/Footer";
import { createHistory } from "../../features/historySlide/historySlide";

function NextArrow(props) {
    const { className, style, onClick } = props;

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
                alignItems: "center",
            }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
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
                alignItems: "center",
            }}
            onClick={onClick}
        />
    );
}

const categories = [
    {
        name: "Nhang vòng trầm hương",
        href: "/productCategory/nhang-vong-tram-huong",
    },
    {
        name: "Nhang trầm có tăm",
        href: "/productCategory/nhang-vong-co-tam",
    },
    {
        name: "Nhang trầm không tăm",
        href: "/productCategory/nhang-vong-khong-tam",
    },
    {
        name: "Vòng trầm hương nam",
        href: "/productCategory/vong-tram-huong-nam",
    },
    {
        name: "Vòng trầm hương nữ",
        href: "/productCategory/vong-tram-huong-nu",
    },
    {
        name: "Vòng tay mệnh mộc",
        href: "/productCategory/menh-moc",
    },
    {
        name: "Vòng tay mệnh kim",
        href: "/productCategory/menh-kim",
    },
    {
        name: "Vòng tay mệnh thủy",
        href: "/productCategory/menh-thuy",
    },
    {
        name: "Vòng tay mệnh hỏa",
        href: "/productCategory/menh-hoa",
    },
    {
        name: "Vòng tay mệnh thổ",
        href: "/productCategory/menh-tho",
    },
    {
        name: "Trầm hương đốt",
        href: "/productCategory/tram-huong-dot",
    },
];

function Test() {
    const [value, setValue] = useState(null);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.product);
    const vongTramProducts = [];
    const thienMocHuongTramProducts = [];
    const huongDotMyNgheTramHuongProducts = [];
    products.forEach((product) => {
        if (product.category === "Trầm Hương Đốt") {
            vongTramProducts.push(product);
        } else if (product.category === "Vòng trầm Thiên Mộc Hương") {
            thienMocHuongTramProducts.push(product);
        } else if (product.category === "Mỹ Nghệ Trầm Hương") {
            huongDotMyNgheTramHuongProducts.push(product);
        }
    });
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    const settingsSales = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const settingsProducts = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const settingsCategories = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 300,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const ImageItem = ({ image, handleAddWishList, id, link }) => {
        const [isHover, setHover] = useState(null);
        const [isHoverIcon, setHoverIcon] = useState(null);

        const handleClick = (id) => {
            handleAddWishList(id);
        };
        return (
            <div
                className="relative"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Link to={link} className={isHover ? "hover:opacity-70" : ""}>
                    <img
                        src={image}
                        className="rounded-t-lg object-fill xl:h-56 h-44 w-full m-0"
                        alt=""
                    />
                </Link>
                <div>
                    <button
                        onClick={() => handleClick(id)}
                        className={` ${
                            isHover ? "opacity-100" : "opacity-0"
                        } text-white hover:text-amber-500 absolute top-0 right-2`}
                        onMouseEnter={() => setHoverIcon(true)}
                        onMouseLeave={() => setHoverIcon(false)}
                    >
                        <div className={isHoverIcon ? "hidden" : "block"}>
                            <FavoriteBorderIcon></FavoriteBorderIcon>
                        </div>
                        <div className={isHoverIcon ? "block" : "hidden"}>
                            <FavoriteIcon></FavoriteIcon>
                        </div>
                    </button>
                </div>
            </div>
        );
    };
    const fetchProduct = async () => {
        const res = await ProductService.getProduct();
        return res;
    };
    const handleAddWishList = async (id) => {
        const res = await ProductService.getDetail(id);
        dispatch(createWishList(res));


    };
    const { isLoading, data } = useQuery(["products"], fetchProduct);
    const options = {
        maximumFractionDigits: 0,
    };

    const formattedAmount = (amount, options) => {
        return amount.toLocaleString(undefined, options);
    };
    useEffect(() => {
        if (data) {
            dispatch(updateProduct(data));
        }
    }, [data]);
    return (
        <div className="bg-[#101608]">
            <HeaderComponent />
            {/*    Start slider*/}
            <div className="hidden md:block mx-auto rounded-2xl pb-5">
                <div className="mb-3">
                    <Slider {...settings} style={{}}>
                        <Link href="#">
                            <img
                                src="https://thienmochuong.com/wp-content/uploads/2023/04/banner-master-box.jpg"
                                className="mx-auto rounded-lg w-full block object-fill max-[600px]:h-[12rem] max-[900px]:h-[20rem]  max-[1024px]:h-[28rem] h-[38rem]"
                                alt=""
                            />
                        </Link>
                        <Link href="#">
                            <img
                                src="https://thienmochuong.com/wp-content/uploads/2022/12/banner-web_ban-mac-dinh.jpg"
                                className="mx-auto rounded-lg w-full block object-fill max-[900px]:h-[12rem]  max-[1024px]:h-[28rem] h-[38rem]"
                                alt=""
                            />
                        </Link>
                        <Link href="#">
                            <img
                                src="https://thienmochuong.com/wp-content/uploads/2023/04/banner-master-box.jpg"
                                className="mx-auto rounded-lg w-full block object-fill max-[900px]:h-[12rem]  max-[1024px]:h-[28rem] h-[38rem]"
                                alt=""
                            />
                        </Link>
                    </Slider>
                </div>
            </div>
            {/*    End slider*/}

            {/*Start List Category*/}
            <div className="w-5/6 mx-auto py-3 mb-6 space-y-6">
                <div className="">
                    <h3 className="uppercase text-white text-center font-bold lg:text-3xl md:text-2xl text-xl">
                        Danh mục sản phẩm
                    </h3>
                </div>

                <Slider {...settingsCategories}>
                    {categories.map((category) => (
                        <>
                            <div className="">
                                <Link href="" className="hover:opacity-70">
                                    <img
                                        className="rounded-full w-[40%] mx-auto mb-1"
                                        src={vong_tay}
                                        alt={category.name}
                                    />
                                    <div>
                                        <p className="text-white text-center font-bold capitalize">
                                            {category.name}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </>
                    )
                    )}


                </Slider>
            </div>
            {/*End List Category*/}

            {/*Start Sales*/}
            <div className="w-5/6 mx-auto rounded-2xl py-4 md:flex">
                <div className="rounded-2xl mx-auto w-full bg-[#0C1327] px-2 py-3 space-y-10">
                    <div className="mt-4 px-2 flex justify-center">
                        <h3 className="text-white capitalize font-bold lg:text-4xl sm:text-3xl text-xl">
                            Sale up to 20% 🔥
                        </h3>
                    </div>
                    <div className="py-3 h-[70%]">
                        <Slider {...settingsSales}>
                            {products.map((item) => (
                                <div className="">
                                    <div className="rounded-lg bg-[#192034] mx-auto w-[95%]">
                                        <ImageItem
                                            image={item.images[0]}
                                            link={`/detail/${item._id}`}
                                        />
                                        <div className="py-5 px-3 max-w-md">
                                            <div>
                                                <Link
                                                    to={`/detail/${item._id}`}
                                                    className="text-center"
                                                >
                                                    <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">
                                                        Lư đốt trầm hương hoa sen bằng sứ{" "}
                                                    </h5>
                                                </Link>
                                            </div>

                                            <div className="flex justify-center gap-2">
                                                <p className="text-white text-center font-bold overflow-wrap">
                                                    1.590.000 đ
                                                </p>
                                                <p className=" text-sm text-gray-600 text-center font-bold line-through overflow-wrap">
                                                    1.990.000 đ
                                                </p>
                                            </div>
                                            <div className="flex justify-center mt-2 items-center gap-3">
                                                <Rating
                                                    name="read-only"
                                                    value={value}
                                                    readOnly
                                                    emptyIcon={
                                                        <StarOutlineIcon style={{ color: "yellow" }} />
                                                    }
                                                    onChange={(event, newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                />
                                                <p className="text-sm text-gray-500">0 đánh giá</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            {/*    End Sales*/}

            {/*Start Product*/}
            <div className="w-4/5 mx-auto rounded-2xl py-5 md:flex">
                <div className="w-[25%] lg:w-[30%] hidden lg:block pr-5">
                    <div className="">
                        <img
                            className="rounded-2xl  "
                            src="https:thienmochuong.com/wp-content/uploads/2022/06/banner-tram-huong-dot.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="rounded-2xl mx-auto lg:w-[70%] w-full lg: bg-[#101628] px-2 py-3 space-y-10">
                    <div className="mt-4 px-2 flex justify-between">
                        <h3 className="text-white capitalize font-bold lg:text-4xl sm:text-3xl text-xl">
                            Trầm Hương Đốt
                        </h3>
                        <Link
                            href=""
                            className="text-white flex items-center md:text-sm hover:opacity-90"
                        >
                            Xem tất cả{" "}
                            <svg
                                aria-hidden="true"
                                className="w-4 h-4 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http:www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                    <div className="hidden xl:flex xl:gap-3 xl:pl-2">
                        <Link
                            href=""
                            className="capitalize text-white rounded-lg border p-2 hover:text-amber-500 hover:border-amber-500 "
                        >
                            Nhang trầm hương
                        </Link>
                        <Link
                            href=""
                            className="capitalize text-white rounded-lg border p-2 hover:text-amber-500 hover:border-amber-500 "
                        >
                            Nụ Trầm Hương
                        </Link>
                        <Link
                            href=""
                            className="capitalize text-white rounded-lg border p-2 hover:text-amber-500 hover:border-amber-500 "
                        >
                            Trầm Hương Miếng
                        </Link>
                        <Link
                            href=""
                            className="capitalize text-white rounded-lg border p-2 hover:text-amber-500 hover:border-amber-500 "
                        >
                            Bột Trầm Hương
                        </Link>
                    </div>
                    <div className="py-3 h-[70%]">
                        <Slider {...settingsProducts}>
                            {vongTramProducts.map((product) => (
                                <div key={product.id} className="">
                                    <div className="rounded-lg bg-[#192034] mx-auto w-[95%]">
                                        <ImageItem
                                            image={product.images[0]}
                                            handleAddWishList={handleAddWishList}
                                            id={product._id}
                                            link={`/detail/${product._id}`}
                                        />
                                        <div className="py-5 px-3 max-w-md">
                                            <div>
                                                <Link
                                                    to={`/detail/${product._id}`}
                                                    className="text-center"
                                                >
                                                    <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">
                                                        Lư đốt trầm hương hoa sen bằng sứ{" "}
                                                    </h5>
                                                </Link>
                                            </div>

                                            <div className="flex justify-center gap-2">
                                                <p className="text-white text-center font-bold overflow-wrap">
                                                    {formattedAmount(product.priceReal) + " " + " đ"}
                                                </p>
                                            </div>
                                            <div className="flex justify-center mt-2 items-center gap-3">
                                                <Rating
                                                    name="read-only"
                                                    value={product.rate}
                                                    readOnly
                                                    emptyIcon={
                                                        <StarOutlineIcon style={{ color: "yellow" }} />
                                                    }
                                                    onChange={(event, newValue) => {
                                                        // Xử lý thay đổi đánh giá
                                                    }}
                                                />
                                                <p className="text-sm text-gray-500">
                                                    {product.reviews.length} đánh giá
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            <div className="w-4/5 mx-auto rounded-2xl py-5 md:flex">
                <div className="w-[25%] lg:w-[30%] hidden lg:block pr-5">
                    <div className="">
                        <img
                            className="rounded-2xl "
                            src="https:thienmochuong.com/wp-content/uploads/2022/06/banner-tram-huong-dot.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="rounded-2xl mx-auto lg:w-[70%] w-full lg: bg-[#101628] px-2 py-3 space-y-10">
                    <div className="mt-4 px-2 flex justify-between">
                        <h3 className="text-white capitalize font-bold lg:text-4xl sm:text-3xl text-xl">
                            Vòng trầm Trầm Hương Lê Trà
                        </h3>
                        <a
                            href=""
                            className="text-white flex items-center md:text-sm hover:opacity-90"
                        >
                            Xem tất cả{" "}
                            <svg
                                aria-hidden="true"
                                className="w-4 h-4 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http:www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <div className="hidden xl:flex xl:gap-3 xl:pl-2">
                        <button
                            href=""
                            className="capitalize text-white rounded-lg border p-2 hover:text-amber-500 hover:border-amber-500 "
                        >
                            Nhang trầm hương
                        </button>
                        <button
                            href=""
                            className="capitalize text-white rounded-lg border p-2 hover:text-amber-500 hover:border-amber-500 "
                        >
                            Nụ Trầm Hương
                        </button>
                        <button
                            href=""
                            className="capitalize text-white rounded-lg border p-2 hover:text-amber-500 hover:border-amber-500 "
                        >
                            Trầm Hương Miếng
                        </button>
                        <button
                            href=""
                            className="capitalize text-white rounded-lg border p-2 hover:text-amber-500 hover:border-amber-500 "
                        >
                            Bột Trầm Hương
                        </button>
                    </div>
                    <div className="py-3 h-[70%]">
                        <Slider {...settingsProducts}>
                            {thienMocHuongTramProducts.map((product) => (
                                <div key={product.id} className="">
                                    <div className="rounded-lg bg-[#192034] mx-auto w-[95%]">
                                        <ImageItem
                                            image={product.images[0]}
                                            handleAddWishList={handleAddWishList}
                                            id={product._id}
                                            link={`/detail/${product._id}`}
                                        />{" "}
                                        <div className="py-5 px-3 max-w-md">
                                            <div>
                                                <Link
                                                    to={`/detail/${product._id}`}
                                                    className="text-center"
                                                >
                                                    <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">
                                                        {product.name}
                                                    </h5>
                                                </Link>
                                            </div>

                                            <div className="flex justify-center gap-2">
                                                <p className="text-white text-center font-bold overflow-wrap">
                                                    {formattedAmount(product.priceReal) + " " + "đ"}
                                                </p>
                                            </div>
                                            <div className="flex justify-center mt-2 items-center gap-3">
                                                <Rating
                                                    name="read-only"
                                                    value={product.rate}
                                                    readOnly
                                                    emptyIcon={
                                                        <StarOutlineIcon style={{ color: "yellow" }} />
                                                    }
                                                    onChange={(event, newValue) => {
                                                        // Xử lý thay đổi đánh giá
                                                    }}
                                                />
                                                <p className="text-sm text-gray-500">
                                                    {product.reviews.length} đánh giá
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            <div className="w-4/5 mx-auto rounded-2xl py-5 md:flex">
                <div className="w-[25%] lg:w-[30%] hidden lg:block pr-5">
                    <div className="">
                        <img
                            className="rounded-2xl "
                            src="https:thienmochuong.com/wp-content/uploads/2022/06/banner-tram-huong-dot.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="rounded-2xl mx-auto lg:w-[70%] w-full lg: bg-[#101628] px-2 py-3 space-y-10">
                    <div className="mt-4 px-2 flex justify-between">
                        <h3 className="text-white capitalize font-bold lg:text-4xl sm:text-3xl text-xl">
                            Mỹ Nghệ Trầm Hương
                        </h3>
                        <a
                            href=""
                            className="text-white flex items-center md:text-sm hover:opacity-90"
                        >
                            Xem tất cả{" "}
                            <svg
                                aria-hidden="true"
                                className="w-4 h-4 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http:www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <div className="hidden xl:flex xl:gap-3 xl:pl-2">
                        <button
                            href=""
                            className="capitalize text-white rounded-lg border p-2 hover:text-amber-500 hover:border-amber-500 "
                        >
                            Nhang trầm hương
                        </button>
                        <button
                            href=""
                            className="capitalize text-white rounded-lg border p-2 hover:text-amber-500 hover:border-amber-500 "
                        >
                            Nụ Trầm Hương
                        </button>
                        <button
                            href=""
                            className="capitalize text-white rounded-lg border p-2 hover:text-amber-500 hover:border-amber-500 "
                        >
                            Trầm Hương Miếng
                        </button>
                        <button
                            href=""
                            className="capitalize text-white rounded-lg border p-2 hover:text-amber-500 hover:border-amber-500 "
                        >
                            Bột Trầm Hương
                        </button>
                    </div>
                    <div className="py-3 h-[70%]">
                        <Slider {...settingsProducts}>
                            {huongDotMyNgheTramHuongProducts.map((product) => (
                                <div key={product.id} className="">
                                    <div className="rounded-lg bg-[#192034] mx-auto w-[95%]">
                                        <ImageItem
                                            image={product.images[0]}
                                            handleAddWishList={handleAddWishList}
                                            id={product._id}
                                            link={`/detail/${product._id}`}
                                        />{" "}
                                        <div className="py-5 px-3 max-w-md">
                                            <div>
                                                <Link
                                                    to={`/detail/${product._id}`}
                                                    className="text-center"
                                                >
                                                    <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">
                                                        {product.name}
                                                    </h5>
                                                </Link>
                                            </div>

                                            <div className="flex justify-center gap-2">
                                                <p className="text-white text-center font-bold overflow-wrap">
                                                    {formattedAmount(product.priceReal) + " " + "đ"}
                                                </p>
                                            </div>
                                            <div className="flex justify-center mt-2 items-center gap-3">
                                                <Rating
                                                    name="read-only"
                                                    value={product.rate}
                                                    readOnly
                                                    emptyIcon={
                                                        <StarOutlineIcon style={{ color: "yellow" }} />
                                                    }
                                                    onChange={(event, newValue) => {
                                                        // Xử lý thay đổi đánh giá
                                                    }}
                                                />
                                                <p className="text-sm text-gray-500">
                                                    {product.reviews.length} đánh giá
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            {/*    End Product*/}

            {/*    start customer rating*/}
            <div className="w-4/5 mx-auto rounded-2xl py-8 mt-8 space-y-6">
                <div className="md:flex md:gap-10 md:items-center">
                    <div className="space-y-6 w-full">
                        <div>
                            <h2 className="text-white font-bold text-xl md:text-2xl lg:text-3xl">
                                Cảm nhận khách hàng
                            </h2>
                        </div>
                        <div>
                            <Rating
                                name="read-only"
                                value={5}
                                readOnly
                                emptyIcon={<StarOutlineIcon style={{ color: "yellow" }} />}
                                onChange={(event, newValue) => {
                                    // Xử lý thay đổi đánh giá
                                }}
                            />
                            <p className="text-white text-justify leading-relaxed">
                                Lần đầu tiên mua Vòng Tay Trầm Hương nên rất lo, vì hàng giả
                                nhiều nhưng hữu duyên được các bạn nhân viên tư vấn nhiệt tình.
                                Rất là xúc động khi có những bạn nhân viên nhiệt tình đến vậy dù
                                giá trị món mình mua cũng không lớn lắm. Chắc chắn sẽ ủng hộ
                                thêm cho shop. Chúc shop làm ăn ngày càng phát đạt nhé
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <img
                            className="rounded-[100%] "
                            src={image_3}
                            alt="Cảm nhận khác hanng"
                        />
                    </div>
                </div>
                <div className="md:flex md:gap-10 md:items-center">
                    <div className="">
                        <img
                            className="rounded-[100%] "
                            src={image_3}
                            alt="Cảm nhận khác hanng"
                        />
                    </div>
                    <div className="space-y-6 w-full">
                        <div>
                            <h2 className="text-white font-bold text-xl md:text-2xl lg:text-3xl">
                                Cảm nhận khách hàng
                            </h2>
                        </div>
                        <div>
                            <Rating
                                name="read-only"
                                value={5}
                                readOnly
                                emptyIcon={<StarOutlineIcon style={{ color: "yellow" }} />}
                                onChange={(event, newValue) => {
                                    // Xử lý thay đổi đánh giá
                                }}
                            />
                            <p className="text-white text-justify leading-relaxed">
                                Lần đầu tiên mua Vòng Tay Trầm Hương nên rất lo, vì hàng giả
                                nhiều nhưng hữu duyên được các bạn nhân viên tư vấn nhiệt tình.
                                Rất là xúc động khi có những bạn nhân viên nhiệt tình đến vậy dù
                                giá trị món mình mua cũng không lớn lắm. Chắc chắn sẽ ủng hộ
                                thêm cho shop. Chúc shop làm ăn ngày càng phát đạt nhé
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*    end customer rating*/}
            <Footer />
        </div>
    );
}

export default Test;
