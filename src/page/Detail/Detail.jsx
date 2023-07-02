import React, { useEffect, useState } from "react";
import HeaderComponent from "../../Component/HeaderComponent/Header";
import vong_tay from "../../dist/assets/images/vong-tay-tram-huong.jpg";
import Loading from "../../Component/LoadingError/Loading";
import Rating from "@mui/material/Rating";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { useDispatch, useSelector } from "react-redux";
import * as ProductService from "../../services/ProductService";
import * as VoucherService from "../../services/VoucherService";
import Slider from "react-slick";
import { Link, useLocation, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { createWishList } from "../../features/wishlistSlide/wishlistSlide";
import { addCart } from "../../features/cartSlide/cartSlide";
import { toast } from "react-toastify";
import Toast from "../../Component/LoadingError/Toast";
import Footer from "../../Component/FooterComponent/Footer";
import axios from "axios";
import { useMutationHooks } from "../../hooks/useMutationHooks";
const moment = require("moment");

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
function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [isSelected, setSelected] = useState(false);
  const [checkBeforeAdd, setCheckBeforeAdd] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [comment, setComment] = useState("");
  const [value, setValue] = useState(null);
  const [images, setImages] = useState([]);
  const userLogin = useSelector((state) => state.user);
  const toastId = React.useRef(null);

  const formattedDateTime = (dateTime) => {
    return moment(dateTime).format("MMMM Do, YYYY h:mm:ss A");
  };

  const Toastobjects = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const handleGetDetailProduct = async (id) => {
    const res = await ProductService.getDetail(id);

    return res;
  };
  const { isLoading, data } = useQuery(["productDetail"], () =>
    handleGetDetailProduct(id)
  );
  const handleAddWishList = async (id) => {
    dispatch(createWishList(data));
    // return res;
  };
  const handleGetAllVoucher = async () => {
    const res = await VoucherService.getAllVoucher();
    return res;
  };
  const { data: voucher } = useQuery(["Voucher"], handleGetAllVoucher);
  const options = {
    maximumFractionDigits: 0,
  };

  const formattedAmount = (amount, options) => {
    return amount.toLocaleString(undefined, options);
  };
  const handleAddCart = async () => {
    if (data?.size && data.size.length > 0) {
      if (isSelected) {
        const updatedData = { ...data, quantityOrder: count };
        dispatch(addCart(updatedData));
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.success(
            "Thêm vào giỏ hàng thành công",
            Toastobjects
          );
        }
      } else {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.error("Chưa chọn Kích thước ", Toastobjects);
        }
      }
    } else {
      const updatedData = { ...data, quantityOrder: count };
      dispatch(addCart(updatedData));
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success(
          "Thêm vào cart thành công",
          Toastobjects
        );
      }
    }
  };
  const ProductSlider = ({ images }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    return (
      <div className="w-1/2 mx-auto">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div>
              <div className="" key={index}>
                <img
                  className="w-full object-cover object-center rounded border border-gray-200"
                  src={image}
                  alt={`Image ${index}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  const handleFileInputChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    setImages(selectedImages);
  };
  const mutationAddComment = useMutationHooks((data) => {
    const { id, access_token, ...rests } = data;
    const res = ProductService.addComment(id, rests, access_token);
    return res;
  });
  const submitHandler = async (event) => {
    event.preventDefault();
    if (comment === "" || count === 0) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Không được để trống!", Toastobjects);
      }
    } else {
      const uploadedImageUrls = [];

      try {
        for (const image of images) {
          const formData = new FormData();
          formData.append("file", image);
          formData.append("upload_preset", "Project1");

          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/dgeeyhyzq/image/upload`,
            formData
          );
          uploadedImageUrls.push(response.data.secure_url);
        }
      } catch (error) {
        console.log(error);
      }
      mutationAddComment.mutate({
        id: id,
        username: userLogin.email,
        images: uploadedImageUrls,
        comment,
        rating: value,
        access_token: userLogin.access_token,
      });
    }
  };
  const { error, isSuccess } = mutationAddComment;
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    if (!error && isSuccess) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success("Thành công!", Toastobjects);
      }
      setShowModal(false);
    } else if (error) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(
          error.response.data.message,
          Toastobjects
        );
      }
    }
  }, [error, isSuccess]);
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Toast />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                {<ProductSlider images={data?.images} />}

                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {data?.name}
                  </h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <Rating
                        name="read-only"
                        value={data?.reviews?.length}
                        size="small"
                        readOnly
                      />
                      <span className="text-gray-600 ml-3">
                        {data?.reviews.length} Reviews
                      </span>
                    </span>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                      <p className="text-gray-500">
                        {data?.quantitySold} đã bán
                      </p>
                      <p className="ml-3">
                        Tình trạng:{" "}
                        <span className="text-amber-500 font-bold ml-1">
                          {data?.status ? "Còn hàng" : "Hết hàng"}
                        </span>
                      </p>
                    </span>
                  </div>
                  <h2 className="text-2xl text-amber-500 font-bold mb-3">
                    {formattedAmount(data?.priceReal, options)} đ
                  </h2>
                  <p className="leading-relaxed">{data?.description}</p>

                  <div className="flex mt-6 items-center pb-5  border-gray-200">
                    <div className="flex">
                      {data?.size && data.size.length > 0 && (
                        <>
                          <span className="mr-3 font-bold">Kích thước hạt</span>
                          {data.size.map((item, index) => (
                            <div key={index} className="mr-3">
                              <input
                                id={`btn-${item}`}
                                type="radio"
                                name="size"
                                className="border-2 border-gray-300 rounded-full focus:outline-none"
                                required={true}
                                onClick={() => setSelected(true)}
                              />
                              <label htmlFor={`btn-${item}`}> {item} mm</label>
                            </div>
                          ))}
                          {checkBeforeAdd && (
                            <span className="text-red-500">
                              Xin hãy chọn đầy đủ thông tin
                            </span>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center border-b-2 mb-5 pb-5">
                    <span className="mr-3">Số lượng</span>
                    <div className="relative">
                      <button
                        onClick={() => {
                          if (count > 1) {
                            setCount(count - 1);
                          }
                        }}
                        className="rounded border appearance-none border-gray-400 py-2 focus:outline-none hover:border-red-500 px-3 mr-1"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={count}
                        className="rounded border border-gray-400 py-2 w-20 focus:outline-none focus:border-red-500 text-base"
                      ></input>
                      <button
                        onClick={() => setCount(count + 1)}
                        className="rounded border appearance-none border-gray-400 py-2 focus:outline-none hover:border-red-500 px-3 ml-1"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 mb-5 border-[3px] border-[#FAB55A33]">
                    <div className="p-4 bg-[#FAB55A33] flex gap-1 items-end">
                      <CardGiftcardIcon className="text-[#ED7103]"></CardGiftcardIcon>
                      <h3 className="text-xl text-[#ED7103] font-bold">
                        Khuyến mãi
                      </h3>
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-sm font-medium">
                        Voucher giảm trực tiếp khi mua trên website:{" "}
                      </p>
                      {voucher?.vouchers.map((item) => (
                        <p className="text-sm">
                          <span className="text-[#F99B1C] font-bold">
                            {item.code}
                          </span>{" "}
                          – Giảm {formattedAmount(item.discount)}VND Cho đơn
                          hàng từ 1.590.000
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      to="/checkout"
                      onClick={handleAddCart}
                      className="flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                    >
                      Mua ngay
                    </Link>
                    <button
                      className="flex text-white bg-cyan-500  border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded"
                      onClick={handleAddCart}
                    >
                      Thêm vào giỏ hàng
                    </button>
                    <button
                      className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 "
                      onClick={() => handleAddWishList(data?._id)}
                    >
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                  {showNotification && (
                    <div
                      id="toast-success"
                      className="absolute flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                      role="alert"
                    >
                      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Check icon</span>
                      </div>
                      <div className="ml-3 text-sm font-normal">
                        Item moved successfully.
                      </div>
                      <button
                        type="button"
                        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        data-dismiss-target="#toast-success"
                        aria-label="Close"
                        onClick={() => setShowNotification(false)}
                      >
                        <span className="sr-only">Close</span>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-12 mx-auto">
              <div className="mb-5">
                <h2 className="font-bold text-2xl px-6 py-3">
                  Thông tin sản phẩm
                </h2>

                <table className="container mx-auto table-auto">
                  <tbody>
                    {data?.ingredient ? (
                      <tr className="bg-gray-200">
                        <td className="px-6 py-3">
                          Thành phần : <span>{data?.ingredient}</span>
                        </td>
                      </tr>
                    ) : (
                      ""
                    )}
                    {data?.material ? (
                      <tr className="bg-gray-200">
                        <td className="px-6 py-3">
                          Chất liệu: <span>{data?.material}</span>
                        </td>
                      </tr>
                    ) : (
                      ""
                    )}
                    {data?.typeCharm ? (
                      <tr className="bg-gray-100 ">
                        <td className="px-6 py-3">
                          Loại Charm: <span>bạc 925</span>
                        </td>
                      </tr>
                    ) : (
                      ""
                    )}
                    {data?.origin ? (
                      <tr className="bg-gray-200 px-6 py-3">
                        <td className="px-6 py-3">
                          Nguồn gốc: <span>{data?.origin}</span>
                        </td>
                      </tr>
                    ) : (
                      ""
                    )}
                    {data?.count ? (
                      <tr className="bg-gray-100 px-6 py-3">
                        <td className="px-6 py-3">
                          {data?.count.map((item) => (
                            <>
                              <span className="">Số lượng :</span>{" "}
                              <span>
                                {item}{" "}
                                {data?.category === "Trầm Hương Đốt"
                                  ? "cây"
                                  : "Hạt"}
                              </span>
                            </>
                          ))}
                        </td>
                      </tr>
                    ) : (
                      ""
                    )}
                    {data?.old ? (
                      <tr className="bg-gray-200 px-6 py-3">
                        <td className="px-6 py-3">
                          Tuổi trầm: <span>{data?.old} năm </span>
                        </td>
                      </tr>
                    ) : (
                      ""
                    )}
                    {data?.weight ? (
                      <tr className="bg-gray-100 px-6 py-3">
                        <td className="px-6 py-3">
                          Trọng lượng : <span>{data?.weight} gram</span>
                        </td>
                      </tr>
                    ) : (
                      ""
                    )}
                    {data?.time ? (
                      <tr className="bg-gray-200 px-6 py-3">
                        <td className="px-6 py-3">
                          Thời gian cháy : <span>{data?.time} phút/cây </span>
                        </td>
                      </tr>
                    ) : (
                      ""
                    )}
                    {data?.use ? (
                      <tr className="bg-gray-100 px-6 py-3">
                        <td className="px-6 py-3">
                          Sử dụng: <span>{data?.use}</span>
                        </td>
                      </tr>
                    ) : (
                      ""
                    )}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-100 px-5 pb-3">
                <div className="py-2">
                  <h2 className="font-bold text-2xl pb-1">Mô tả sản phẩm</h2>
                  <p className="leading-relaxed text-justify ">
                    Sản phẩm được chế tác từ loại gỗ trầm Tốc Việt Nam được lấy
                    từ môi trường tự nhiên, không hề bị tác động bởi bàn tay con
                    người. Đặc biệt, xuất xứ của trầm là từ rừng Hà Tĩnh, sinh
                    trưởng tự nhiên nên chất lượng vòng tốt hơn hẳn các dòng tốc
                    ngoài thị trường. Với màu vàng nâu sẫm đặc trưng cùng những
                    đường vân trầm xoáy, sắc nét, sản phẩm hứa hẹn sẽ mang đến
                    tính thẩm mỹ cao cùng nhiều công dụng tuyệt vời cho người
                    đeo.
                  </p>
                  <div className="my-3">
                    <div className="md:w-96 w-72 mx-auto">
                      <img
                        className=" lg:w-96"
                        src={vong_tay}
                        alt="Vòng tay trầm hương"
                      />
                    </div>
                    <div className="md:w-96 w-72 mx-auto bg-gray-200 py-1">
                      <p className=" text-center b-0">
                        <span className="font-semibold italic">
                          Vòng tay Trầm Hương Phật Di Lặc
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="leading-relaxed text-justify ">
                    Vòng tay Trầm Hương Phật Di Lặc với mùi thơm dịu nhẹ giúp
                    tinh thần thoải mái nhẹ nhàng sẽ giúp bé ngoan ngoãn và hiền
                    hòa. Trầm hương thật tự nhiên hấp thụ tinh hoa của đất trời
                    còn ‘trộm vía’ giúp mau ăn chóng lớn, hoàn toàn lành tính và
                    phù hợp cho trẻ nhỏ. Chất liệu vòng: Trầm Hương tự nhiên
                    100%, hạt tròn đều, nhẵn mịn rất an toàn cho trẻ nhỏ kết hợp
                    cùng charm bạc 925
                  </p>
                </div>
                <div className="py-2">
                  <h2 className="font-bold text-2xl pb-1">
                    Ý nghĩa của sự kết hợp Trầm Hương và mặt phật Di Lặc
                  </h2>
                  <p className="leading-relaxed text-justify">
                    Đức Phật Di Lặc – hay còn gọi là “Phật Cười”, là biểu tượng
                    tuyệt đối của hạnh phúc trong phong thủy, của sự vui vẻ,
                    hoan hỉ quên hết mọi lo lắng, sầu não. Theo truyền thuyết,
                    niềm vui lớn nhất của vị Bồ Tát này là biến buồn phiền, giận
                    dữ, áp lực của con người thành hạnh phúc. Nụ cười của Phật
                    Di Lặc mạnh tới mức luôn tỏa sáng trên khuôn mặt hiền từ
                    phúc hậu của Ngài và Ngài tới đâu thì ở đó có hạnh phúc.
                    Ngoài ra, Phật Di Lặc rất thích con nít và ngược lại, con
                    nít cũng rất yêu quý vị Bồ Tát này nên ta thường thấy hình
                    tượng Phật Di Lặc miệng tươi cười được trẻ con đeo xung
                    quanh. Chính vì vậy, vòng Trầm Hương phối cùng mặt Phật Di
                    Lặc là sản phẩm đã được rất nhiều cha mẹ và ông bà tin mua,
                    làm quà tặng các bé nhân dịp thôi nôi, sinh nhật, hoặc các
                    dịp lễ với mong ước: trẻ con luôn nhận được những gì tốt đẹp
                    nhất, bé khỏe mạnh, chơi ngoan, ngủ ngon, hết giật mình.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-12 mx-auto">
              {/*          <!-- Title --> */}
              <h4 className="text-center text-3xl font-bold text-slate-700 my-3">
                Đánh giá sản phẩm
              </h4>
              {/*        <!-- Component: Detailed Basic --> */}
              <div className="flex max-[1440px]:flex-col items-center gap-3 border-4">
                <div className="">
                  {/*          <!-- Rating --> */}
                  <p className="flex items-center gap-4 text-sm rounded text-slate-500 ">
                    <span
                      className="flex gap-1 text-amber-400"
                      role="img"
                      aria-label="Rating: 4 out of 5 stars"
                    >
                      <Rating
                        name="read-only"
                        value="4"
                        size="large"
                        readOnly
                      />
                    </span>
                    <span className="font-bold">4.1/5</span>
                  </p>
                  {/*          <!-- Helper text --> */}
                  <span className="text-xs leading-6 text-slate-400">
                    147 đánh giá
                  </span>
                </div>

                {/*          <!-- Detailed rating --> */}
                <div className="flex flex-col w-[65%] my-auto gap-4 py-3 min-[1400px]:border-x-4">
                  <span className="flex items-center w-full gap-2">
                    <label
                      id="p03e-label"
                      for="p03e"
                      className="mb-0 text-xs text-center w-9 shrink-0 text-slate-500"
                    >
                      5 star
                    </label>
                    <progress
                      aria-labelledby="p03e-label"
                      id="p03e"
                      max="100"
                      value="75"
                      className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
                    >
                      75%
                    </progress>
                    <span className="text-xs font-bold w-9 text-slate-700">
                      112{" "}
                    </span>
                  </span>
                  <span className="flex items-center w-full gap-2">
                    <label
                      id="p03e-label"
                      for="p03e"
                      className="mb-0 text-xs text-center w-9 shrink-0 text-slate-500"
                    >
                      4 star
                    </label>
                    <progress
                      aria-labelledby="p03e-label"
                      id="p03e"
                      max="100"
                      value="28"
                      className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
                    >
                      75%
                    </progress>
                    <span className="text-xs font-bold w-9 text-slate-700">
                      17{" "}
                    </span>
                  </span>
                  <span className="flex items-center w-full gap-2">
                    <label
                      id="p03e-label"
                      for="p03e"
                      className="mb-0 text-xs text-center w-9 shrink-0 text-slate-500"
                    >
                      3 star
                    </label>
                    <progress
                      aria-labelledby="p03e-label"
                      id="p03e"
                      max="100"
                      value="18"
                      className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
                    >
                      75%
                    </progress>
                    <span className="text-xs font-bold w-9 text-slate-700">
                      12{" "}
                    </span>
                  </span>
                  <span className="flex items-center w-full gap-2">
                    <label
                      id="p03e-label"
                      for="p03e"
                      className="mb-0 text-xs text-center w-9 shrink-0 text-slate-500"
                    >
                      2 star
                    </label>
                    <progress
                      aria-labelledby="p03e-label"
                      id="p03e"
                      max="100"
                      value="8"
                      className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
                    >
                      75%
                    </progress>
                    <span className="text-xs font-bold w-9 text-slate-700">
                      2{" "}
                    </span>
                  </span>
                  <span className="flex items-center w-full gap-2">
                    <label
                      id="p03e-label"
                      for="p03e"
                      className="mb-0 text-xs text-center w-9 shrink-0 text-slate-500"
                    >
                      1 star
                    </label>
                    <progress
                      aria-labelledby="p03e-label"
                      id="p03e"
                      max="100"
                      value="10"
                      className="block h-3 w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
                    >
                      75%
                    </progress>
                    <span className="text-xs font-bold w-9 text-slate-700">
                      4{" "}
                    </span>
                  </span>
                </div>

                <div className="mx-auto p-5">
                  <button
                    onClick={() => setShowModal(true)}
                    className="p-5 rounded-xl bg-amber-500 hover:bg-amber-600"
                    href=""
                  >
                    Đánh giá ngay
                  </button>
                </div>
              </div>
              {/*        <!-- End Detailed Basic --> */}
            </div>
          </section>

          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto xl:w-[40%] lg:w-[60%] w-full">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Đánh giá</h3>
                      <button
                        className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold "
                        onClick={() => setShowModal(false)}
                      >
                        <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <form className="mb-6 ">
                        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                          <label htmlFor="comment" className="sr-only">
                            Your comment
                          </label>
                          <textarea
                            id="comment"
                            rows="4"
                            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                            placeholder="Bình luận..."
                            onChange={(e) => setComment(e.target.value)}
                            required
                          ></textarea>
                        </div>
                        <div className="py-2 mb-4 bg-white rounded-lg rounded-t-lg dark:bg-gray-800 dark:border-gray-700">
                          <label htmlFor="comment" className="sr-only">
                            Your comment
                          </label>
                          <input type="file" onChange={handleFileInputChange} />
                        </div>
                        <div className="flex gap-3">
                          <h4 className="text-xl font-semibold">
                            Bạn cảm thấy thế nào về sản phẩm
                          </h4>
                          <Rating
                            name="no-value"
                            value={value}
                            size="large"
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </div>
                        <div className="mx-auto">
                          <button
                            className="mt-4 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-emerald-700 outline-none focus:outline-none ease-linear transition-all duration-150"
                            onClick={submitHandler}
                          >
                            Gửi đánh giá
                          </button>
                        </div>
                      </form>
                    </div>
                    {/*footer*/}
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}

          <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
            <div className="max-w-4xl mx-auto px-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Bình luận ({data?.reviews.length})
                </h2>
              </div>
              <form className="mb-6">
                <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <label htmlFor="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows="4"
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Bình luận..."
                    required
                  ></textarea>
                </div>
                <button
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-red-700
                            rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-red-800"
                >
                  Bình luận
                </button>
              </form>
              {/* {data?.reviews.length > 0 ? (
                <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                  <footer className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                        <img
                          className="mr-2 w-6 h-6 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                          alt="Michael Gough"
                        />
                        Michael Gough
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <time
                          pubdate
                          dateTime="2022-02-08"
                          title="February 8th, 2022"
                        >
                          Feb. 8, 2022
                        </time>
                      </p>
                    </div>
                    <button
                      id="dropdownComment1Button"
                      data-dropdown-toggle="dropdownComment1"
                      className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      </svg>
                      <span className="sr-only">Comment settings</span>
                    </button>

                    <div
                      id="dropdownComment1"
                      className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownMenuIconHorizontalButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Sửa
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Xóa
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Báo cáo
                          </a>
                        </li>
                      </ul>
                    </div>
                  </footer>
                  <p className="text-gray-500 dark:text-gray-400">
                    Very straight-to-point article. Really worth time reading.
                    Thank you! But tools are just the instruments for the UX
                    designers. The knowledge of the design tools are as
                    important as the creation of the design strategy.
                  </p>
                  <CommentItem></CommentItem>
                </article>
              ) : (
                ""
              )} */}
              {/*{data?.reviews.length > 0 && (*/}
              {/*  <>*/}
              {/*    {data.reviews.map((review) => {*/}
              {/*      if (review.status === "approved") {*/}
              {/*        return (*/}
              {/*          <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">*/}
              {/*            <footer className="flex justify-between items-center mb-2">*/}
              {/*              <div className="flex items-center">*/}
              {/*                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">*/}
              {/*                  <img*/}
              {/*                    className="mr-2 w-6 h-6 rounded-full"*/}
              {/*                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"*/}
              {/*                    alt="Michael Gough"*/}
              {/*                  />*/}
              {/*                  {userLogin.email}*/}
              {/*                </p>*/}
              {/*                <p className="text-sm text-gray-600 dark:text-gray-400">*/}
              {/*                  {formattedDateTime(review.createdAt)}*/}
              {/*                </p>*/}
              {/*              </div>*/}
              {/*              <button*/}
              {/*                id="dropdownComment1Button"*/}
              {/*                data-dropdown-toggle="dropdownComment1"*/}
              {/*                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"*/}
              {/*                type="button"*/}
              {/*              >*/}
              {/*                <svg*/}
              {/*                  className="w-5 h-5"*/}
              {/*                  aria-hidden="true"*/}
              {/*                  fill="currentColor"*/}
              {/*                  viewBox="0 0 20 20"*/}
              {/*                  xmlns="http://www.w3.org/2000/svg"*/}
              {/*                >*/}
              {/*                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>*/}
              {/*                </svg>*/}
              {/*                <span className="sr-only">Comment settings</span>*/}
              {/*              </button>*/}

              {/*              <div*/}
              {/*                id="dropdownComment1"*/}
              {/*                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"*/}
              {/*              >*/}
              {/*                <ul*/}
              {/*                  className="py-1 text-sm text-gray-700 dark:text-gray-200"*/}
              {/*                  aria-labelledby="dropdownMenuIconHorizontalButton"*/}
              {/*                >*/}
              {/*                  <li>*/}
              {/*                    <a*/}
              {/*                      href="#"*/}
              {/*                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"*/}
              {/*                    >*/}
              {/*                      Sửa*/}
              {/*                    </a>*/}
              {/*                  </li>*/}
              {/*                  <li>*/}
              {/*                    <a*/}
              {/*                      href="#"*/}
              {/*                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"*/}
              {/*                    >*/}
              {/*                      Xóa*/}
              {/*                    </a>*/}
              {/*                  </li>*/}
              {/*                  <li>*/}
              {/*                    <a*/}
              {/*                      href="#"*/}
              {/*                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"*/}
              {/*                    >*/}
              {/*                      Báo cáo*/}
              {/*                    </a>*/}
              {/*                  </li>*/}
              {/*                </ul>*/}
              {/*              </div>*/}
              {/*            </footer>*/}
              {/*            <p className="text-gray-500 dark:text-gray-400">*/}
              {/*              {review.comment}*/}
              {/*            </p>*/}
              {/*            <CommentItem></CommentItem>*/}
              {/*          </article>*/}
              {/*        );*/}
              {/*      } else {*/}
              {/*        return null;*/}
              {/*      }*/}
              {/*    })}*/}
              {/*  </>*/}
              {/*)}*/}

               {/*Start Comment content*/}
              <article className="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie Green"
                      />
                      Bonnie Green
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <time
                        pubdate
                        dateTime="2023-06-20"
                        title="20/06/2023"
                      >
                        20/06/2023
                      </time>
                    </p>
                  </div>

                </footer>
                <p className="text-gray-500 dark:text-gray-400">
                  Sản phẩm này thật tuyệt vời!!!.
                </p>
                <div className="mt-3 flex gap-3 w-screen max-w-xs">
                  <img className="w-40" src={vong_tay} alt="Ảnh đánh giá"/>
                  <img className="w-40" src={vong_tay} alt="Ảnh đánh giá"/>
                </div>
              </article>
            {/*  End comment content*/}

            </div>
          </section>
        </>
      )}
      <Footer />
    </>
  );
}

export default Detail;
