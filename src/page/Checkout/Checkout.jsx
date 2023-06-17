import React, { useEffect, useState } from "react";
import HeaderComponent from "../../Component/HeaderComponent/Header";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import * as VoucherService from "../../services/VoucherService";
import * as OrderService from "../../services/OrderService";
import { toast } from "react-toastify";
import Toast from "../../Component/LoadingError/Toast";
import { resetCart, updatePrice } from "../../features/cartSlide/cartSlide";
import { useMutationHooks } from "../../hooks/useMutationHooks";

function Checkout() {
  const count = useSelector((state) => state.quantity.value);
  const userLogin = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [dataMap, setDataMap] = useState([]);
  const [dataProvince, setDataProvince] = useState([]);
  const [loadingMap, setLoadingMap] = useState(true);
  const [dataWards, setDataWards] = useState([]);
  const [loadingWards, setLoadingWards] = useState(true);
  const [loadingProvince, setLoadingProvince] = useState(true);
  const [address, setAddress] = useState("");
  const [codewards, setCodeXa] = useState("1");
  const [codeCity, setCodeCity] = useState("1");
  const [code, setCodeHuyen] = useState("1");
  const [hidden, setHidden] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [priceNew, setPriceNew] = useState();
  const [voucher, setVoucher] = useState("");
  const toastId = React.useRef(null);
  const Toastobjects = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const dispatch = useDispatch();
  const options = {
    maximumFractionDigits: 0,
  };
  const formattedAmount = (amount, options) => {
    return amount.toLocaleString(undefined, options);
  };
  const fetchMaps = async () => {
    try {
      const response = await axios.get("https://provinces.open-api.vn/api/");
      setDataMap(response.data);
      setLoadingMap(false);
    } catch (error) {
      // Handle error
      setLoadingMap(true);

      console.error(error);
    }
  };
  useEffect(() => {
    if (userLogin.id !== "") {
      setCodeCity(userLogin.address[0].code[0]);
      setCodeHuyen(userLogin.address[0].code[1]);
      // setCodeWards(userLogin.address[0].code[2])
    }
  }, [userLogin]);
  const handleGetVoucher = async () => {
    try {
      const res = await VoucherService.getCodeVoucher(voucher);
      setHidden(true);
      setDiscount(res.discount);
      handleUpdatePrice(cart.totalPrice - res.discount);
    } catch (error) {
      setHidden(false);
    }
  };
  const handleUpdatePrice = (priceNew) => {
    if (cart.status) {
      alert("Bạn đã nhập voucher rồi");
    } else {
      dispatch(updatePrice(priceNew));
    }
  };
  const mutation = useMutationHooks((data) => {
    const { access_token, ...rests } = data;
    OrderService.createOrder(rests, access_token);
  });
  const productIds = cart.cart.map((product) => ({
    product: product._id,
    quantityOrder: product.quantityOrder,
  }));

  const submitHandler = async (e) => {
    e.preventDefault();

    mutation.mutate({
      totalPrice: cart.totalPrice,
      products: productIds,
      customer: userLogin.id,
      access_token: userLogin?.access_token,
    });
  };
  const { data, error, isLoading, isError, isSuccess } = mutation;

  useEffect(() => {
    const fetchProvince = async (code) => {
      try {
        const response = await axios.get(
          `https://provinces.open-api.vn/api/p/${code}?depth=2`
        );
        setDataProvince(response.data.districts);
        setLoadingProvince(false);
      } catch (error) {
        // Handle error
        setLoadingProvince(true);

        console.error(error);
      }
    };
    const fetchWards = async (codewards) => {
      try {
        const response = await axios.get(
          `https://provinces.open-api.vn/api/d/${codewards}?depth=2`
        );
        setDataWards(response.data.wards);
        setLoadingWards(false);
      } catch (error) {
        // Handle error
        setLoadingWards(true);
        console.error(error);
      }
    };
    if (userLogin.id) {
      setAddress(userLogin.address[0].address);
    }
    if (loadingMap) {
      fetchMaps();
    }
    if (loadingProvince || code) {
      // Check if code is defined before calling fetchProvince
      fetchProvince(codeCity);
    }
    if (codewards || loadingWards) {
      fetchWards(code);
    }
  }, [loadingMap, loadingProvince, codewards, code, loadingWards, userLogin]);
  useEffect(() => {
    if (!error && isSuccess) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success("Thành công!", Toastobjects);
      }
      dispatch(resetCart());
    } else if (error) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Order lỗi", Toastobjects);
      }
    }
  }, [isSuccess, error]);
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Toast />
      <div className="container mx-auto mt-10">
        <div className="lg:flex shadow-md my-10">
          {/*start info checkout*/}
          <div className="lg:w-[65%] bg-white px-10 py-10">
            <div className="border-b pb-8">
              <h1 className="font-semibold text-2xl">Thông tin thanh toán</h1>
            </div>

            <div className="-mx-8 px-6">
              <label
                htmlFor="name"
                className="font-medium inline-block mb-3 text-sm uppercase"
              >
                Họ và tên *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                               placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={userLogin.firstName + " " + userLogin.lastName}
              />
            </div>
            <div className="items-center -mx-8 px-6 py-3">
              <div className="flex justify-between gap-10">
                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="font-medium inline-block mb-3 text-sm uppercase"
                  >
                    Số điện thoại *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    autoComplete="address"
                    required
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                               placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={userLogin.address[0].phoneNumber}
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="font-medium inline-block mb-3 text-sm uppercase"
                  >
                    Địa chỉ Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                               placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={userLogin.email}
                  />
                </div>
              </div>
            </div>
            <div className="items-center -mx-8 px-6 pb-5">
              <div className="flex justify-between gap">
                <div className="w-1/4">
                  <label className="font-medium inline-block mb-3 text-sm uppercase">
                    Tỉnh/Thành phố *
                  </label>
                  <select
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
             placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      const selectedOption =
                        e.target.options[e.target.selectedIndex];
                      const provinceCode = selectedOption.dataset.code;
                      setCodeHuyen(provinceCode);
                    }}
                  >
                    {loadingMap ? (
                      <option>Loading...</option>
                    ) : (
                      dataMap.map((province) => (
                        <option
                          key={province.id}
                          value={province.name}
                          data-code={province.code}
                          selected={userLogin.address[0].city === province.name}
                        >
                          {province.name}
                        </option>
                      ))
                    )}
                  </select>
                </div>
                <div className="w-1/4">
                  <label className="font-medium inline-block mb-3 text-sm uppercase">
                    Quận/Huyện *
                  </label>
                  <select
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      const selectedOption =
                        e.target.options[e.target.selectedIndex];
                      const districtCode = selectedOption.dataset.code;
                      setCodeXa(districtCode);
                    }}
                  >
                    {loadingProvince ? (
                      <option>Loading...</option>
                    ) : (
                      dataProvince.map((district) => (
                        <option
                          key={district.id}
                          value={district.name}
                          selected={
                            userLogin.address[0].district === district.name
                          }
                          data-code={district.code}
                        >
                          {district.name}
                        </option>
                      ))
                    )}
                  </select>
                </div>

                <div className="w-1/4">
                  <label className="font-medium inline-block mb-3 text-sm uppercase">
                    Xã/Phường/Thị trấn *
                  </label>
                  <select
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
             placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      // const selectedOption =
                      //   e.target.options[e.target.selectedIndex];
                      // const provinceCode = selectedOption.dataset.code;
                      // setCode(provinceCode);
                    }}
                  >
                    {loadingWards ? (
                      <option>Loading...</option>
                    ) : (
                      dataWards.map((ward) => (
                        <option
                          key={ward.id}
                          value={ward.name}
                          data-code={ward.code}
                          selected={userLogin.address[0].ward === ward.name}
                        >
                          {ward.name}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              </div>
              <div className="py-3">
                <label
                  htmlFor="address"
                  className="font-medium inline-block mb-3 text-sm uppercase"
                >
                  Địa chỉ
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="address"
                  required
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                               placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="pb-3">
                <label
                  htmlFor="note"
                  className="font-medium inline-block mb-3 text-sm uppercase"
                >
                  Ghi chú
                </label>
                <input
                  id="note"
                  name="note"
                  type="text"
                  autoComplete="address"
                  required
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                               placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <Link
              to="/"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Tiếp tục mua hàng
            </Link>
          </div>
          {/*end info checkout*/}

          {/*start your cart*/}
          <div id="summary" className="lg:w-[35%] px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">Đơn hàng</h1>
            <div className="pt-5">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Mã giảm giá
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                       placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setVoucher(e.target.value)}
              />
              {cart.status ? (
                <p class="mt-2 text-sm text-green-600 dark:text-green-500">
                  <span class="font-medium">Bạn đã dùng voucher!</span>
                </p>
              ) : (
                ""
              )}

              <button
                className="mt-3 bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded"
                onClick={handleGetVoucher}
                disabled={cart.status}
              >
                Áp dụng
              </button>
            </div>

            <div>
              <h2 className="font-semibold text-xl pt-8">Đơn hàng của bạn</h2>
            </div>

            <div className="flex justify-between border-b pb-1">
              <h3 className="font-semibold  pt-8">Sản phẩm</h3>
              <h3 className="font-semibold  pt-8">Thành tiền</h3>
            </div>

            <div>
              <ul className="list-none">
                {cart.cart.length > 0
                  ? cart.cart.map((item) => (
                      <li className="flex justify-between w-full border-b py-3">
                        <div className="w-3/5">
                          <span className="text-sm ">{item.name}</span>
                          <span className="text-sm font-bold">
                            {" "}
                            x{item.quantityOrder}
                          </span>
                        </div>
                        <div>
                          <span className="text-red-500 text-sm inline-block font-semibold">
                            {formattedAmount(
                              item.quantityOrder * item.priceReal
                            )}{" "}
                            ₫
                          </span>
                        </div>
                      </li>
                    ))
                  : ""}
              </ul>
            </div>

            <div className="flex justify-between mt-10 pb-5 border-b">
              <span className="font-bold text-sm uppercase">Tạm tính</span>
              <span className="font-semibold text-sm text-red-500">
                {formattedAmount(cart.totalPrice)} ₫
              </span>
            </div>

            <div className="flex justify-between mt-10 border-b pb-5">
              <span className="font-bold text-sm uppercase ">Giao hàng</span>
              <span className="text-sm">Giao hàng miễn phí</span>
            </div>

            <div className="flex justify-between mt-10 pb-2 border-b">
              <span className="font-bold text-sm uppercase ">Tổng</span>
              <span className="text-red-600 font-bold">
                {" "}
                {formattedAmount(cart.totalPrice)} ₫
              </span>
            </div>
            <div className="border-t mt-8">
              <button
                className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded"
                onClick={submitHandler}
              >
                Thanh Toán
              </button>
            </div>
          </div>
          {/*    end your cart*/}
        </div>
      </div>
    </>
  );
}

export default Checkout;
