import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Toast from "../../Component/LoadingError/Toast";
import * as UserService from "../../services/UserServices";
import jwt_decode from "jwt-decode";
import { isJsonString } from "../../utils";
import { useMutationHooks } from "../../hooks/useMutationHooks";
import HeaderComponent from "../../Component/HeaderComponent/Header";
import axios from "axios";
import { useQuery } from "react-query";
function Account() {
  const userLogin = useSelector((state) => state.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOld, setPassword] = useState("");
  const [password, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [codewards, setCodeXa] = useState("1");
  const [codeCity, setCodeCity] = useState("1");
  const [code, setCodeHuyen] = useState("1");

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [dataMap, setDataMap] = useState([]);
  const [dataProvince, setDataProvince] = useState([]);
  const [loadingMap, setLoadingMap] = useState(true);
  const [loadingProvince, setLoadingProvince] = useState(true);
  const [dataWards, setDataWards] = useState([]);
  const [loadingWards, setLoadingWards] = useState(true);
  const [ward, setWard] = useState("");
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
  const handleDecoded = () => {
    let storageData = localStorage.getItem("access_token");
    let token_refresh = localStorage.getItem("refresh_token");
    let decoded = {};
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      token_refresh = JSON.parse(token_refresh);
      decoded = jwt_decode(storageData);
    }
    return { decoded, storageData, token_refresh };
  };
  const mutation = useMutationHooks((data) => {
    const { id, access_token, ...rests } = data;
    UserService.updateAccount(id, rests, access_token);
  });
  const mutationAddress = useMutationHooks((data) => {
    const { id, access_token, ...rests } = data;
    UserService.updateAddress(id, rests, access_token);
  });

  const handleUpdateAccount = (e) => {
    e.preventDefault();
    const { storageData, decoded } = handleDecoded();

    if (passwordOld != "" && password != "") {
      mutation.mutate({
        id: decoded.id,
        firstName,
        lastName,
        password,
        passwordOld,
        access_token: storageData,
      });
    } else {
      mutation.mutate({
        id: decoded.id,
        firstName,
        lastName,
        access_token: userLogin?.access_token,
      });
    }
  };
  const handleUpdateAddress = (e) => {
    e.preventDefault();
    let storageData = localStorage.getItem("access_token");

    const decoded = jwt_decode(userLogin?.access_token);
    if (phone != "" && city != "" && address != "" && district != "") {
      mutationAddress.mutate({
        id: decoded.id,
        phoneNumber: phone,
        city,
        address,
        district,
        ward,
        code: [codeCity, code, codewards],
        access_token: userLogin?.access_token,
      });
    } else {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Không được bỏ trống!", Toastobjects);
      }
    }
  };

  const { data, error, isLoading, isSuccess } = mutation;
  const { error: error1, isSuccess: isSuccess1 } = mutationAddress;
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
    const fetchWards = async (code) => {
      try {
        const response = await axios.get(
          `https://provinces.open-api.vn/api/d/${code}?depth=2`
        );
        setDataWards(response.data.wards);
        setLoadingWards(false);
      } catch (error) {
        // Handle error
        setLoadingWards(true);
        console.error(error);
      }
    };
    if (loadingMap) {
      fetchMaps();
    }
    if (loadingProvince || codeCity) {
      // Check if code is defined before calling fetchProvince
      fetchProvince(codeCity);
    }
    if (code || loadingWards) {
      fetchWards(code);
    }
  }, [loadingMap, loadingProvince, code, loadingWards, codeCity]);
  useEffect(() => {
    if (userLogin.id !== "") {
      setEmail(userLogin.email);
      setLastName(userLogin.lastName);
      setFirstName(userLogin.firstName);
      setAddress(userLogin.address[0].address);
      setCity(userLogin.address[0].city);
      setDistrict(userLogin.address[0].district);
      setPhone(userLogin.address[0].phoneNumber);
      setWard(userLogin.ward);
      setCodeCity(userLogin.address[0].code[0]);
      setCodeHuyen(userLogin.address[0].code[1])
      // setCodeWards(userLogin.address[0].code[2])
    }
    if (!error && isSuccess) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success("Thành công!", Toastobjects);
      }
    } else if (error) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(
          error.response.data.message,
          Toastobjects
        );
      }
    }
  }, [userLogin]);
  useEffect(() => {
    if (!error1 && isSuccess1) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success("Thành công!", Toastobjects);
      }
    } else if (error1) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(
          error.response.data.message,
          Toastobjects
        );
      }
    }
  }, [userLogin, error1, isSuccess1]);

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <Toast />
      <div className="">
        <div className="bg-gray-200 mb-5">
          <h1 className="uppercase text-3xl font-bold px-20 py-8">Tài khoản</h1>
        </div>
        <div className="container mx-auto lg:flex lg:gap-10">
          <form className="mx-auto w-full max-w-lg mb-10">
            <h2 className="uppercase font-bold text-red-600 my-4">
              Thông tin cá nhân
            </h2>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Họ
                </label>
                <input
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                       placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="grid-first-name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Tên
                </label>
                <input
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                       placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="grid-last-name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  Địa chỉ Email
                </label>
                <input
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                       placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="grid-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <h2 className="uppercase font-bold text-red-600 my-4">
              Thay đổi mật khẩu
            </h2>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Mật khẩu hiện tại
                </label>
                <input
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                       placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="grid-password"
                  type="password"
                  placeholder="******************"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-new-password"
                >
                  Mật khẩu mới
                </label>
                <input
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                       placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="grid-new-password"
                  type="password"
                  placeholder="******************"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-confirm-password"
                >
                  Xác nhận mật khẩu
                </label>
                <input
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                       placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="grid-confirm-password"
                  type="password"
                  placeholder="******************"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              className="bg-indigo-500 flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold
                                    leading-6 text-white shadow-sm
                                    hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2
                                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleUpdateAccount}
            >
              Lưu thông tin tài khoản
            </button>
          </form>
          <form className="mx-auto w-full max-w-lg mb-10">
            <h2 className="uppercase font-bold text-red-600 my-4">
              Địa chỉ thanh toán
            </h2>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-phone"
                >
                  Số điện thoại *
                </label>
                <input
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                       placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="grid-phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Thành phố
                </label>
                <select
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
             placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    const selectedOption =
                      e.target.options[e.target.selectedIndex];
                    const provinceCode = selectedOption.dataset.code;
                    setCity(e.target.value);
                    setCodeCity(provinceCode);
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
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Quận/Huyện
                </label>
                <select
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    const selectedOption =
                      e.target.options[e.target.selectedIndex];
                    const provinceCode = selectedOption.dataset.code;
                    setCodeHuyen(provinceCode);
                    setDistrict(e.target.value);
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
                          userLogin.address[0].district=== district.name
                        }
                        data-code={district.code}
                      >
                        {district.name}
                      </option>
                    ))
                  )}
                </select>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Xã/Phường/Thị trấn
                </label>
                <select
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
             placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    const selectedOption =
                      e.target.options[e.target.selectedIndex];
                    const provinceCode = selectedOption.dataset.code;
                    setCodeXa(provinceCode);
                    setWard(e.target.value);
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
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-address"
                >
                  Địa chỉ
                </label>
                <input
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                       placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="grid-address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <button
              className="bg-indigo-500 flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold
                                    leading-6 text-white shadow-sm
                                    hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2
                                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleUpdateAddress}
            >
              Lưu thông địa chỉ thanh toán
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Account;
