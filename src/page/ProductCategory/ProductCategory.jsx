import React, { useState } from "react";
import HeaderComponent from "../../Component/HeaderComponent/Header";
import image_1 from "../../dist/assets/images/tram_huong_1.jpg";
import image_2 from "../../dist/assets/images/tram_huong_2.jpg";
import image_3 from "../../dist/assets/images/tram_huong_3.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as UserService from "../../services/UserServices";
import { updateUser } from "../../features/userSlide/userSlide";
import * as ProductService from "../../services/ProductService";
import { useQuery } from "react-query";
import vong_tay from "../../dist/assets/images/vong-tay-tram-huong.jpg";
import Footer from "../../Component/FooterComponent/Footer";
import { Link, useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

// import Loading from "../../Component/LoadingError/"

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        zIndex: "1000",
        color: "black",
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
        color: "red",
        marginLeft: "30px",
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
}

function ProductCategory() {
  const { slug } = useParams();
  const handleGetDetailProducts = async () => {
    const res = await ProductService.getProductSlug(slug);
    return res;
  };
  const options = {
    maximumFractionDigits: 0,
  };
  const formattedAmount = (amount, options) => {
    return amount.toLocaleString(undefined, options);
  };
  const { isLoading, data } = useQuery(["products"], handleGetDetailProducts);
  // console.log(data)

  const settingsCategories = {
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
  const DropdownItem1 = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const closeDropdown = () => {
      setDropdownOpen(false);
    };
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };

    return (
      <>
        <div className="flex items-center justify-center p-4">
          <div className="relative">
            <button
              id="dropdown"
              className="capitalize text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
              onClick={toggleDropdown}
              onBlur={closeDropdown}
            >
              Xuất xứ
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="dropdownContent"
              style={{ top: "100%" }}
              className={
                isDropdownOpen
                  ? "absolute m-0 z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
                  : "hidden"
              }
            >
              <ul
                className="space-y-2 text-sm"
                aria-labelledby="dropdownDefault"
              >
                <li className="flex items-center">
                  <input
                    id="microsoft"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    htmlFor="microsoft"
                    className="capitalize ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Việt Nam
                  </label>
                </li>

                <li className="flex items-center">
                  <input
                    id="razor"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    htmlFor="razor"
                    className="capitalize ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Philippines
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };

  const DropdownItem2 = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const closeDropdown = () => {
      setDropdownOpen(false);
    };
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
    return (
      <>
        <div className="flex items-center justify-center p-4">
          <div className="relative">
            <button
              id="dropdownCharm"
              className="capitalize text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
              onClick={toggleDropdown}
              onBlur={closeDropdown}
            >
              Loại Charm
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="dropdownContentCharm"
              style={{ top: "100%" }}
              className={
                isDropdownOpen
                  ? "absolute m-0 z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
                  : "hidden"
              }
            >
              <ul
                className="space-y-2 text-sm"
                aria-labelledby="dropdownDefault"
              >
                <li className="flex items-center">
                  <input
                    id="aquamerine"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    htmlFor="aquamerine"
                    className="capitalize ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    aquamerine
                  </label>
                </li>

                <li className="flex items-center">
                  <input
                    id="camThachHuyet"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    htmlFor="camThachHuyet"
                    className="capitalize ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    cẩm thạch huyết
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className="bg-white">
        {/*start category*/}
        <div className="bg-[#101608] py-3">
          <Slider {...settingsCategories}>
            <div className="">
              <a href="" className="hover:opacity-70">
                <img
                  className="rounded-full w-[40%] mx-auto mb-1"
                  src={vong_tay}
                  alt="Vòng tay trầm hương"
                />
                <div>
                  <p className="text-white text-center font-bold capitalize">
                    Vòng tay trầm hương
                  </p>
                </div>
              </a>
            </div>

            <div className="">
              <a href="" className="hover:opacity-70">
                <img
                  className="rounded-full w-[40%] mx-auto mb-1"
                  src={vong_tay}
                  alt="Vòng tay trầm hương"
                />
                <div>
                  <p className="text-white text-center font-bold capitalize">
                    Vòng tay trầm hương
                  </p>
                </div>
              </a>
            </div>

            <div className="">
              <a href="" className="hover:opacity-70">
                <img
                  className="rounded-full w-[40%] mx-auto mb-1"
                  src={vong_tay}
                  alt="Vòng tay trầm hương"
                />
                <div>
                  <p className="text-white text-center font-bold capitalize">
                    Vòng tay trầm hương
                  </p>
                </div>
              </a>
            </div>

            <div className="">
              <a href="" className="hover:opacity-70">
                <img
                  className="rounded-full w-[40%] mx-auto mb-1"
                  src={vong_tay}
                  alt="Vòng tay trầm hương"
                />
                <div>
                  <p className="text-white text-center font-bold capitalize">
                    Vòng tay trầm hương
                  </p>
                </div>
              </a>
            </div>

            <div className="">
              <a href="" className="hover:opacity-70">
                <img
                  className="rounded-full w-[40%] mx-auto mb-1"
                  src={vong_tay}
                  alt="Vòng tay trầm hương"
                />
                <div>
                  <p className="text-white text-center font-bold capitalize">
                    Vòng tay trầm hương
                  </p>
                </div>
              </a>
            </div>

            <div className="">
              <a href="" className="hover:opacity-70">
                <img
                  className="rounded-full w-[40%] mx-auto mb-1"
                  src={vong_tay}
                  alt="Vòng tay trầm hương"
                />
                <div>
                  <p className="text-white text-center font-bold capitalize">
                    Vòng tay trầm hương
                  </p>
                </div>
              </a>
            </div>
          </Slider>
        </div>
        {/*End category*/}

        {/*start filter*/}
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <div className="w-full mb-8 flex justify-end">
            <div className="flex gap-3 items-center">
              <h2 className="font-bold uppercase">Sắp xếp</h2>
              <select
                className="block rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                               placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name=""
                id=""
              >
                <option value="">Theo mức độ phổ biến</option>
                <option value="">Theo điểm đánh giá</option>
                <option value="">Mới nhất</option>
                <option value="">Thứ tự theo giá: thấp đến cao</option>
                <option value="">Thứ tự theo giá: cao đến thấp</option>
              </select>
            </div>
          </div>
          <div className="w-full">
            <div>
              <h2 className="font-bold uppercase">Bộ lọc</h2>
            </div>
            <div className="flex">
              <DropdownItem1></DropdownItem1>
              <DropdownItem2></DropdownItem2>
            </div>
          </div>
        </div>

        {/*end filter*/}

        {/*start product*/}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {isLoading ? (
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {data?.map((product) => (
                <a key={product._id} href="" className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Link to={`/detail/${product._id}`}>
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </Link>
                  </div>
                  <div className="bg-[#F9F9F9] h-[139px] p-4 rounded-l-none rounded-r-none  rounded-b-lg text-center">
                    <div className="mx-auto ">
                      <p className=" text-sm text-gray-700 mb-[7px] mt-[unset]">
                        <Link
                          to={`/detail/${product._id}`}
                          className="text-[#000] m-[unset] text-[14px] leading-5 text-ellipsis overflow-hidden "
                        >
                          {product.name}
                        </Link>
                      </p>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="flex items-center justify-center mx-auto">
                        <p className=" text-sm font-medium text-gray-900 mx-auto ">
                          {formattedAmount(product.priceReal)} đ
                        </p>
                        <p
                          className={
                            product.priceOld != 0
                              ? "text-xs font-medium tracking-normal text-gray-600 text-center  line-through overflow-wrap pl-2"
                              : "hidden"
                          }
                        >
                          {formattedAmount(product.priceOld)} đ
                        </p>
                      </div>
                      <div className="flex items-center justify-center flex-wrap">
                        <Rating
                          name="read-only"
                          value={5}
                          readOnly
                          emptyIcon={
                            <StarOutlineIcon style={{ color: "yellow" }} />
                          }
                          onChange={(event, newValue) => {
                            // Xử lý thay đổi đánh giá
                          }}
                        />
                        <div className="text-xs text-[#9FA2A9] pt-[2px] pl-2">
                          {product.reviews.length} Đánh giá{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
        {/*    end product*/}
      </div>
      <Footer />
    </>
  );
}

export default ProductCategory;
