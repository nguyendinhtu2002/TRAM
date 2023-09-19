import React, { useEffect, useRef, useState } from "react";
import HeaderComponent from "../../Component/HeaderComponent/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as ProductService from "../../services/ProductService";
import { useQuery } from "react-query";
import Footer from "../../Component/FooterComponent/Footer";
import { Link, useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import VongTramNu from "../../Component/CategoryComponent/VongTramNu";
import VongTramNam from "../../Component/CategoryComponent/VongTramNam";
import MenhMoc from "../../Component/CategoryComponent/MenhMoc";
import MenhThuy from "../../Component/CategoryComponent/MenhThuy";
import MenhHoa from "../../Component/CategoryComponent/MenhHoa";
import MenhTho from "../../Component/CategoryComponent/MenhTho";
import MenhKim from "../../Component/CategoryComponent/MenhKim";
import { useSelector } from "react-redux";
import HistoryComponent from "../../Component/HistoryComponent/HistoryComponent";

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
    slidesToShow: 1,
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
    const outsideClickRef = useRef();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const closeDropdown = () => {
      setDropdownOpen(false);
    };
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
    const handleOutsideClick = (event) => {
      if (
        outsideClickRef.current &&
        !outsideClickRef.current.contains(event.target)
      ) {
        // Xử lý hành động khi click ra ngoài vùng
        closeDropdown();
      }
    };

    useEffect(() => {
      document.addEventListener("click", handleOutsideClick);

      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, []);

    return (
      <div ref={outsideClickRef}>
        <div className="flex items-center justify-center p-4">
          <div className="relative">
            <button
              id="dropdown"
              className="capitalize text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
              onClick={toggleDropdown}
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
      </div>
    );
  };
  const DropdownItem2 = () => {
    const outsideClickRef = useRef();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const closeDropdown = () => {
      setDropdownOpen(false);
    };
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
    const handleOutsideClick = (event) => {
      if (
        outsideClickRef.current &&
        !outsideClickRef.current.contains(event.target)
      ) {
        // Xử lý hành động khi click ra ngoài vùng
        closeDropdown();
      }
    };

    useEffect(() => {
      document.addEventListener("click", handleOutsideClick);

      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, []);

    return (
      <div ref={outsideClickRef}>
        <div className="flex items-center justify-center p-4">
          <div className="relative">
            <button
              id="dropdownCharm"
              className="capitalize text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
              onClick={toggleDropdown}
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
      </div>
    );
  };
  const DropdownItem3 = () => {
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
              Giá
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
                    Dưới 1.000.000đ
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
        {/*start filter*/}
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <div className=" py-3 pb-6 ">
            <Slider {...settingsCategories}>
              <div className="">
                <a href="" className="">
                  <img
                    className=" w-full mx-auto mb-1"
                    src="https://thienmochuong.com/wp-content/uploads/2020/03/Banner-3.jpg"
                    alt="Vòng tay trầm hương"
                  />
                </a>
              </div>
            </Slider>
          </div>
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
              <DropdownItem1 />
              <DropdownItem2 />
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
          {slug === "vong-tram-huong-nu" ? (
            <VongTramNu />
          ) : slug === "vong-tram-huong-nam" ? (
            <VongTramNam />
          ) : slug === "menh-moc" ? (
            <MenhMoc />
          ) : slug === "menh-thuy" ? (
            <MenhThuy />
          ) : slug === "menh-hoa" ? (
            <MenhHoa />
          ) : slug === "menh-tho" ? (
            <MenhTho />
          ) : slug === "menh-kim" ? (
            <MenhKim />
          ) : (
            ""
          )}

          <h3 className="text-center pt-6 text-3xl font-medium">
            Lý Do Nên Chọn Trầm Hương Lê Trà
          </h3>
          <div className="grid xl:grid-cols-4 md:grid-cols-1 gap-5 pt-7 ">
            <div className="grid-cols-1">
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                <div className="mx-auto">
                  <a href="#">
                    <svg
                      width="160"
                      height="160"
                      viewBox="0 0 160 160"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        width: "100%",
                        transition: "all .3s",
                        fill: "currentColor",
                      }}
                    >
                      <circle
                        opacity="0.15"
                        cx="80"
                        cy="80"
                        r="80"
                        fill="url(#paint0_radial_5560_3)"
                      ></circle>
                      <g clip-path="url(#clip0_5560_3)">
                        <path
                          d="M77.0263 68.1384C77.9943 68.1384 78.7791 67.3537 78.7791 66.3856C78.7791 65.4176 77.9943 64.6328 77.0263 64.6328C76.0582 64.6328 75.2734 65.4176 75.2734 66.3856C75.2734 67.3537 76.0582 68.1384 77.0263 68.1384Z"
                          fill="url(#paint1_linear_5560_3)"
                        ></path>
                        <path
                          d="M77.0266 41.7539C76.8138 41.7539 76.6212 41.8402 76.4816 41.9797C76.3423 42.1191 76.2559 42.3117 76.2559 42.5247V48.1758C76.2559 48.3353 76.3043 48.4836 76.3874 48.6066C76.4427 48.6886 76.5135 48.7594 76.5955 48.8147C76.6365 48.8425 76.6804 48.8663 76.7265 48.8858C76.8187 48.9247 76.9201 48.9464 77.0263 48.9464C77.2391 48.9464 77.4318 48.8602 77.5713 48.7206C77.7107 48.5811 77.7971 48.3886 77.7971 48.1756V42.5245C77.7973 42.0989 77.4521 41.7539 77.0266 41.7539Z"
                          fill="#EABB5F"
                        ></path>
                        <path
                          d="M77.0265 83.8281C76.6009 83.8281 76.2559 84.1733 76.2559 84.5988V90.2499C76.2559 90.3233 76.2693 90.3928 76.2885 90.46C76.3804 90.7827 76.6743 91.0205 77.0263 91.0205C77.1327 91.0205 77.2341 90.9988 77.3262 90.9599C77.6027 90.8428 77.797 90.5689 77.797 90.2497V84.5986C77.7971 84.1731 77.452 83.8281 77.0265 83.8281Z"
                          fill="#EABB5F"
                        ></path>
                        <path
                          d="M100.889 65.6172H95.2374C94.8118 65.6172 94.4668 65.9622 94.4668 66.3878C94.4668 66.8134 94.8118 67.1584 95.2374 67.1584H100.889C101.314 67.1584 101.659 66.8134 101.659 66.3878C101.659 65.9622 101.314 65.6172 100.889 65.6172Z"
                          fill="#EABB5F"
                        ></path>
                        <path
                          d="M59.5852 66.3878C59.5852 66.2283 59.5368 66.0798 59.4537 65.9569C59.3984 65.8748 59.3276 65.8041 59.2455 65.7487C59.1226 65.6656 58.9743 65.6172 58.8146 65.6172H53.1634C52.9505 65.6172 52.7579 65.7034 52.6184 65.843C52.479 65.9825 52.3926 66.175 52.3926 66.388C52.3926 66.8136 52.7376 67.1586 53.1632 67.1586H58.8143C59.0271 67.1586 59.2198 67.0723 59.3593 66.9328C59.4988 66.7933 59.5852 66.6008 59.5852 66.3878Z"
                          fill="#EABB5F"
                        ></path>
                        <path
                          d="M90.4485 54.0537L94.4444 50.0578C94.7454 49.7569 94.7454 49.2689 94.4444 48.9679C94.1435 48.6669 93.6555 48.667 93.3546 48.9679L89.3586 52.9639C89.0575 53.265 89.0575 53.7528 89.3586 54.0537C89.6596 54.3547 90.1475 54.3547 90.4485 54.0537Z"
                          fill="#EABB5F"
                        ></path>
                        <path
                          d="M64.6935 78.7179C64.3925 78.417 63.9046 78.417 63.6036 78.7179L59.6077 82.7138C59.3482 82.9734 59.3138 83.3715 59.5019 83.6695C59.5258 83.7073 59.5544 83.7426 59.5855 83.7766C59.5935 83.7854 59.5991 83.7952 59.6077 83.8038C59.7546 83.9507 59.946 84.0248 60.1385 84.0282C60.1432 84.0284 60.1478 84.0296 60.1525 84.0296C60.3497 84.0296 60.5469 83.9543 60.6975 83.8038L64.6935 79.8079C64.8063 79.6951 64.8769 79.556 64.905 79.4102C64.9144 79.3616 64.9191 79.3124 64.9191 79.263C64.9193 79.0655 64.8441 78.8682 64.6935 78.7179Z"
                          fill="#EABB5F"
                        ></path>
                        <path
                          d="M94.4443 82.7159L90.4483 78.72C90.3543 78.6259 90.2411 78.5648 90.1221 78.5295C90.0075 78.4956 89.8875 78.4865 89.7704 78.5068C89.6196 78.5332 89.475 78.6032 89.3586 78.7196C89.0575 79.0207 89.0575 79.5085 89.3586 79.8095L93.3546 83.8054C93.3997 83.8506 93.4499 83.8867 93.5022 83.9182C93.7985 84.0973 94.1886 84.0614 94.4446 83.8054C94.5672 83.6828 94.6372 83.5286 94.6597 83.369C94.6924 83.1378 94.6225 82.8943 94.4443 82.7159Z"
                          fill="#EABB5F"
                        ></path>
                        <path
                          d="M60.6965 48.968C60.546 48.8175 60.3487 48.7422 60.1515 48.7422C60.1023 48.7422 60.0529 48.7469 60.0043 48.7562C59.8585 48.7845 59.7195 48.8548 59.6066 48.9678C59.4562 49.1183 59.3809 49.3156 59.3809 49.5128C59.3809 49.562 59.3855 49.6114 59.3949 49.66C59.4232 49.8058 59.4935 49.9448 59.6065 50.0577L63.6024 54.0536C63.6093 54.0605 63.6174 54.065 63.6246 54.0716C63.6949 54.1369 63.7732 54.1886 63.8574 54.2228C63.9501 54.2605 64.0488 54.2792 64.1474 54.2792C64.3446 54.2792 64.542 54.2039 64.6924 54.0534C64.8052 53.9406 64.8759 53.8014 64.904 53.6558C64.9134 53.6072 64.918 53.558 64.918 53.5086C64.918 53.3114 64.8427 53.1141 64.6923 52.9636L60.6965 48.968Z"
                          fill="#EABB5F"
                        ></path>
                        <path
                          d="M79.2311 68.5911C78.0141 68.5911 77.0273 67.6044 77.0273 66.3873C77.0273 65.1703 78.0141 64.1836 79.2311 64.1836C80.4481 64.1836 91.7981 65.1703 91.7981 66.3873C91.7983 67.6045 80.4481 68.5911 79.2311 68.5911Z"
                          fill="#EABB5F"
                        ></path>
                        <path
                          d="M79.2317 64.1845C79.2317 65.4016 78.245 66.3883 77.028 66.3883C75.8109 66.3883 74.8242 65.4016 74.8242 64.1845C74.8242 62.9675 75.8109 45.375 77.028 45.375C78.245 45.3752 79.2317 62.9675 79.2317 64.1845Z"
                          fill="#EABB5F"
                        ></path>
                        <path
                          d="M77.026 69.7473C78.8817 69.7473 80.386 68.243 80.386 66.3873C80.386 64.5317 78.8817 63.0273 77.026 63.0273C75.1703 63.0273 73.666 64.5317 73.666 66.3873C73.666 68.243 75.1703 69.7473 77.026 69.7473Z"
                          fill="#EABB5F"
                        ></path>
                        <path
                          d="M74.0508 101.104V96.8436C74.0508 95.5255 74.5291 94.2372 75.4858 92.9781C76.4422 91.7192 77.6208 90.5772 79.0206 89.5519L83.2427 86.4788C84.6502 85.4547 85.8444 84.3278 86.8272 83.0984C87.8092 81.8698 88.3005 80.6403 88.3005 79.4109C88.3005 78.1823 87.8972 77.1067 87.0911 76.1845C86.2844 75.2631 85.1045 74.802 83.5506 74.802C82.2313 74.802 81.1606 75.1662 80.3403 75.8937C79.5189 76.6217 79.1088 77.6984 79.1088 79.1244C79.1088 79.5905 78.8813 79.9984 78.427 80.3477C77.9723 80.6969 77.3784 80.8714 76.6458 80.8714C75.2384 80.8714 74.5348 80.0067 74.5348 78.2764C74.5348 75.9895 75.4214 74.1205 77.1956 72.6691C78.9692 71.2178 81.0877 70.4922 83.5506 70.4922C86.1598 70.4922 88.3811 71.3089 90.2138 72.9431C92.0456 74.5773 92.9625 76.6889 92.9625 79.2795C92.9625 81.0359 92.4713 82.6819 91.4892 84.2183C90.5064 85.7548 89.3191 87.0572 87.9267 88.125C86.5338 89.1936 85.1409 90.203 83.7488 91.1541C82.3558 92.1052 81.1686 93.0638 80.1864 94.0294C79.2036 94.9956 78.7131 95.9322 78.7131 96.8392V98.507H91.6431C92.0534 98.507 92.4127 98.705 92.7206 99.1008C93.0286 99.4967 93.1827 99.9738 93.1827 100.53C93.1827 101.088 93.0294 101.579 92.7236 102.004C92.4178 102.429 92.0611 102.642 91.6536 102.642H76.1037C75.6378 102.642 75.1787 102.495 74.7281 102.202C74.2762 101.91 74.0508 101.544 74.0508 101.104Z"
                          fill="#EABB5F"
                        ></path>
                        <path
                          d="M117.392 61.0762H113.837H113.672C111.088 43.1662 95.6409 29.3594 77.027 29.3594C56.6102 29.3594 40 45.9694 40 66.3861C40 74.8106 42.9058 83.0561 48.182 89.6034C53.3787 96.0522 60.6616 100.621 68.6888 102.47C68.9084 102.52 69.128 102.545 69.3444 102.545C70.6698 102.545 71.8683 101.633 72.1784 100.286C72.5391 98.7195 71.5616 97.1573 69.9947 96.7967C63.2334 95.2398 57.0969 91.3881 52.715 85.9508C48.2053 80.3547 45.8217 73.5895 45.8217 66.3864C45.8217 49.1797 59.8203 35.1812 77.027 35.1812C92.4239 35.1812 105.25 46.3903 107.778 61.0764H104.708C102.389 61.0764 101.228 63.88 102.867 65.5195L109.21 71.8617C110.226 72.8781 111.874 72.8781 112.89 71.8617L119.233 65.5195C120.872 63.8798 119.711 61.0762 117.392 61.0762Z"
                          fill="#FAB155"
                        ></path>
                        <path
                          d="M99.9496 84.1562V102.906H97.0199V84.1562H99.9496ZM99.4369 95.814L98.4848 95.8018C98.4929 94.8903 98.619 94.048 98.8632 93.2749C99.1155 92.5018 99.4654 91.8304 99.913 91.2607C100.369 90.6829 100.914 90.2394 101.549 89.9302C102.184 89.6128 102.887 89.4541 103.661 89.4541C104.312 89.4541 104.898 89.5436 105.418 89.7227C105.947 89.9017 106.403 90.1906 106.786 90.5894C107.168 90.98 107.457 91.4927 107.652 92.1274C107.856 92.7541 107.957 93.519 107.957 94.4224V102.906H105.003V94.3979C105.003 93.7632 104.91 93.2586 104.723 92.8843C104.544 92.5099 104.279 92.2414 103.929 92.0786C103.579 91.9077 103.152 91.8223 102.647 91.8223C102.118 91.8223 101.65 91.9281 101.244 92.1396C100.845 92.3512 100.511 92.6401 100.243 93.0063C99.974 93.3726 99.7706 93.7957 99.6322 94.2759C99.502 94.756 99.4369 95.2687 99.4369 95.814Z"
                          fill="#FAB155"
                        ></path>
                      </g>
                      <defs>
                        <radialGradient
                          id="paint0_radial_5560_3"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(80 80) rotate(90) scale(80)"
                        >
                          <stop stop-color="white"></stop>
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0"
                          ></stop>
                        </radialGradient>
                        <linearGradient
                          id="paint1_linear_5560_3"
                          x1="77.0254"
                          y1="65.5285"
                          x2="77.0254"
                          y2="70.7598"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#F18D00"></stop>
                          <stop offset="1" stop-color="#ED7103"></stop>
                        </linearGradient>
                        <clipPath id="clip0_5560_3">
                          <rect
                            width="80"
                            height="80"
                            fill="white"
                            transform="translate(40 26)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <div className="mx-auto ">
                  <p>
                    <strong>Giao hỏa tốc</strong>{" "}
                  </p>
                  <p>Nội thành HCM – HN trong 2h</p>
                </div>
              </div>
            </div>
            <div className="grid-cols-1">
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                <div className="mx-auto">
                  <a href="#">
                    <svg
                      width="160"
                      height="160"
                      viewBox="0 0 160 160"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        width: "100%",
                        transition: "all .3s",
                        fill: "currentColor",
                      }}
                    >
                      <circle
                        opacity="0.15"
                        cx="80"
                        cy="80"
                        r="80"
                        fill="url(#paint0_radial_5560_2)"
                      ></circle>
                      <g clip-path="url(#clip0_5560_2)">
                        <path
                          d="M68.9819 82.6239C68.5977 82.3255 65.5497 80.0207 57.0932 79.4598C56.628 79.4211 56.1593 79.0917 55.7462 78.8144C55.2204 78.4647 54.6743 78.0973 54.276 77.6237C53.6285 76.8509 52.8973 76.2013 52.2829 75.3434C48.1715 69.6112 44.1424 68.4606 43.54 68.2333C42.7377 67.8462 39.6643 68.3226 41.1408 70.372C41.2344 70.3875 45.842 76.8601 46.1411 77.3773C46.6703 78.2908 47.2693 78.6638 47.8316 79.3057C48.3453 79.8912 48.914 80.4296 49.439 81.0046C49.439 81.0046 46.4923 79.2599 45.7864 78.4963C45.4718 78.1543 45.3205 77.6631 45.07 77.2563C44.78 76.7876 44.4718 76.3308 44.1572 75.879C43.7631 75.3153 43.3669 74.753 42.9488 74.2076C42.4154 73.5129 41.8615 72.8331 41.3118 72.1497C40.9698 71.7247 40.5834 71.3144 40.3012 70.871C38.9078 68.6696 40.499 67.3528 42.0135 67.1868C41.9403 66.9334 41.2436 60.2765 41.1218 59.1589C40.7742 55.9497 40.4307 53.5723 38.5911 52.9256C38.1167 52.7581 37.7817 52.8144 37.4284 53.1874C37.0104 53.6265 36.7613 55.9574 36.6409 57.4311C36.6409 57.4311 35.8365 65.3387 36.0301 69.0285C36.1335 71.0075 42.2809 84.6212 44.0474 86.7248C45.8124 88.8277 59.6281 96.7922 59.6281 96.7922C60.0898 97.1765 62.648 99.1463 62.648 101.729V107.337L77.5426 107.354L77.5553 102.208C77.5897 101.257 77.7516 100.312 77.8656 99.3638C78.1901 98.2821 77.9304 96.2384 77.7791 95.4445C76.0492 87.7235 69.6787 83.1623 68.9819 82.6239Z"
                          fill="#FAB55A"
                        ></path>
                        <path
                          d="M123.361 57.4311C123.24 55.9567 122.992 53.6265 122.574 53.1874C122.22 52.8144 121.885 52.7581 121.41 52.9256C119.573 53.573 119.227 55.9504 118.88 59.1589C118.758 60.2765 118.062 66.9334 117.988 67.1868C119.502 67.3528 121.094 68.6696 119.7 70.871C119.419 71.3158 119.033 71.7254 118.69 72.1504C118.141 72.8331 117.586 73.5129 117.053 74.2069C116.634 74.7523 116.238 75.3146 115.845 75.8783C115.53 76.3308 115.221 76.7869 114.931 77.2556C114.682 77.6624 114.531 78.1522 114.214 78.4963C113.508 79.2613 110.562 81.0053 110.562 81.0053C111.087 80.4296 111.657 79.8905 112.17 79.305C112.732 78.6645 113.33 78.2908 113.86 77.3766C114.16 76.8601 118.768 70.3875 118.86 70.372C120.337 68.3226 117.262 67.8462 116.461 68.2333C115.859 68.4599 111.83 69.6112 107.718 75.3427C107.104 76.2006 106.372 76.8523 105.725 77.6237C105.327 78.0987 104.78 78.4647 104.254 78.8144C103.841 79.091 103.372 79.4204 102.907 79.4591C94.4503 80.0207 91.403 82.3262 91.018 82.6246C90.322 83.1637 83.9515 87.7227 82.2209 95.4431C82.0689 96.2369 81.8099 98.2807 82.1344 99.3624C82.2484 100.31 82.4109 101.256 82.4447 102.206L82.4574 107.352L97.352 107.335V101.728C97.352 99.1449 99.9102 97.1751 100.372 96.7908C100.372 96.7908 114.187 88.8284 115.953 86.7234C117.719 84.6205 123.865 71.0068 123.97 69.0271C124.165 65.3387 123.361 57.4311 123.361 57.4311Z"
                          fill="#FAB55A"
                        ></path>
                        <path
                          d="M88.9783 75.0201C96.0442 68.373 104.816 60.1206 106.022 52.776C106.867 47.5822 106.04 43.3012 103.564 40.0512C101.063 36.7702 97.261 34.8975 91.9356 34.3253C91.4225 34.2739 90.9552 34.25 90.4907 34.25C86.7235 34.25 82.921 35.6533 80.0025 38.0229C77.0846 35.6533 73.2808 34.25 69.5149 34.25C69.0504 34.25 68.5838 34.2739 68.0701 34.3253C62.7446 34.8968 58.9401 36.7702 56.441 40.0512C53.9637 43.3012 53.1375 47.5822 53.9834 52.776C55.1883 60.1213 63.96 68.3737 71.0259 75.0201C71.0259 75.0201 74.5504 78.5565 75.6095 79.4644C76.4055 80.1484 78.1325 81.5257 80.0025 81.5257C81.8731 81.5257 83.6001 80.1484 84.3961 79.4644C85.4546 78.5572 88.9783 75.0201 88.9783 75.0201ZM71.0301 43.0126C66.5288 43.0126 62.8657 46.2704 62.8657 50.2748C62.8657 51.4902 61.8811 52.4748 60.665 52.4748C59.4496 52.4748 58.4657 51.4902 58.4657 50.2748C58.4657 43.8438 64.1015 38.6127 71.0301 38.6127C72.2455 38.6127 73.2301 39.5972 73.2301 40.8126C73.2301 42.0281 72.2455 43.0126 71.0301 43.0126Z"
                          fill="#FAB55A"
                        ></path>
                      </g>
                      <defs>
                        <radialGradient
                          id="paint0_radial_5560_2"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(80 80) rotate(90) scale(80)"
                        >
                          <stop stop-color="white"></stop>
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0"
                          ></stop>
                        </radialGradient>
                        <clipPath id="clip0_5560_2">
                          <rect
                            width="88"
                            height="88"
                            fill="white"
                            transform="translate(36 26.8008)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <div className="mx-auto ">
                  <p>
                    <strong>Số 1 bảo hành hậu mãi</strong>{" "}
                  </p>
                  <p>1 đổi 1 trong 30 ngày</p>
                </div>
              </div>
            </div>
            <div className="grid-cols-1">
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                <a href="#">
                  <svg
                    width="160"
                    height="160"
                    viewBox="0 0 160 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      width: "100%",
                      transition: "all .3s",
                      fill: "currentColor",
                    }}
                  >
                    <circle
                      opacity="0.15"
                      cx="80"
                      cy="80"
                      r="80"
                      fill="url(#paint0_radial_5560_5)"
                    ></circle>
                    <path
                      d="M112.127 42.1867C98.8174 42.1867 88.6209 38.3841 79.9987 30C71.3774 38.3841 61.1815 42.1867 47.8731 42.1867C47.8731 64.0207 43.3552 95.2977 79.9985 108C116.645 95.2979 112.127 64.0209 112.127 42.1867ZM77.3373 80.6085L66.6341 69.9037L71.4263 65.1117L77.3373 71.024L88.5723 59.7888L93.3643 64.5809L77.3373 80.6085Z"
                      fill="#FAB55A"
                    ></path>
                    <defs>
                      <radialGradient
                        id="paint0_radial_5560_5"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(80 80) rotate(90) scale(80)"
                      >
                        <stop stop-color="white"></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </radialGradient>
                    </defs>
                  </svg>
                </a>
                <div className="mx-auto ">
                  <p>
                    <strong>100%</strong>{" "}
                  </p>
                  <p>Trầm hương tự nhiên</p>
                </div>
              </div>
            </div>
            <div className="grid-cols-1">
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                <a href="#">
                  <svg
                    width="160"
                    height="160"
                    viewBox="0 0 160 167"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      width: "100%",
                      transition: "all .3s",
                      fill: "currentColor",
                    }}
                  >
                    <ellipse
                      opacity="0.15"
                      cx="80"
                      cy="83.5"
                      rx="80"
                      ry="83.5"
                      fill="url(#paint0_radial_5560_4)"
                    ></ellipse>
                    <path
                      d="M45.7015 56.5031C48.6115 63.2715 53.5243 69.9662 60.3989 72.8519C61.1837 73.1788 62.0747 73.4241 62.9902 73.6284C64.8212 70.8982 66.922 68.6829 69.3825 66.8682C71.4996 65.3151 73.7149 64.0971 75.9955 63.1407C75.3415 62.6829 74.655 62.266 73.9355 61.89C71.0745 60.3941 67.9765 59.078 64.9601 57.6639C67.7966 58.4322 71.05 58.7183 73.7639 59.7074C75.456 60.3288 77.0173 61.1871 78.4723 62.2089C82.8129 60.7292 87.3497 60.0181 91.8782 59.4786C88.208 53.3806 80.3769 48.4842 74.475 46.2689C68.3116 43.9555 61.3307 43.6694 54.4724 42.9583C50.2708 42.525 45.7014 40.9556 42.3581 39.1245C41.5979 38.7077 40.7886 39.4025 41.0502 40.2444C42.6933 45.5004 43.5271 51.4514 45.7015 56.5031Z"
                      fill="#FAB55A"
                    ></path>
                    <path
                      d="M117.784 56.1561C110.051 60.3577 101.182 60.8726 92.4927 61.8699C88.2503 62.3604 84.0486 62.9652 80.0513 64.1751C79.1848 64.4366 78.3184 64.7309 77.4682 65.0579C74.9423 66.0225 72.5064 67.2895 70.2094 68.9816C68.0514 70.5673 66.2857 72.4475 64.798 74.5156C62.4274 77.818 60.7762 81.619 59.4193 85.5673C56.9425 92.7361 55.8062 100.355 56.0269 107.932C56.1169 111.006 56.1659 114.202 56.9261 117.202C57.0978 117.864 57.2613 118.706 57.7762 119.196C58.4465 119.842 59.6482 119.18 59.3784 118.24C57.4329 111.611 58.6427 103.861 61.3321 97.5264C64.422 90.243 70.3892 85.9106 77.6807 83.2703C79.6181 82.5673 81.5963 81.9543 83.6071 81.3739C83.648 81.3576 83.6889 81.3576 83.7297 81.3576C84.1303 81.3576 84.302 81.9461 83.8851 82.1342C81.5145 83.205 79.1603 84.284 76.9204 85.453C65.9505 91.175 61.1603 104.499 65.272 104.499C65.6073 104.499 65.9995 104.409 66.4491 104.221C72.7924 101.597 80.3291 101.573 87.3018 100.281C89.7541 99.8317 92.1411 99.2186 94.3809 98.2867C103.275 94.5756 109.634 87.3168 113.419 78.5866C116.239 72.0716 117.334 64.3796 119.468 57.6112C119.746 56.7447 119.133 56.0009 118.381 56.0009C118.193 55.9926 117.988 56.0417 117.784 56.1561Z"
                      fill="#FAB55A"
                    ></path>
                    <defs>
                      <radialGradient
                        id="paint0_radial_5560_4"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(80 83.5) rotate(90) scale(83.5 80)"
                      >
                        <stop stop-color="white"></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </radialGradient>
                    </defs>
                  </svg>
                </a>
                <div className="mx-auto ">
                  <p>
                    <strong>Bảo hành trọn đời</strong>{" "}
                  </p>
                  <p>Thay dây - Đánh bóng hạt</p>
                </div>
              </div>
            </div>
          </div>

            <HistoryComponent/>
        </div>
        {/*    end product*/}
      </div>
      <Footer />
    </>
  );
}

export default ProductCategory;