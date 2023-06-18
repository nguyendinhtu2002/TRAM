import { Fragment, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../../features/userSlide/userSlide";

const vongtay = [
  {
    name: "Danh mục sản phẩm",
    description: "Get a better understanding of your traffic",
    sub: [
      { nameSub: "Vòng trầm hương nam", hrefSub: "/productCategory/vong-tram-huong-nam" },
      { nameSub: "Vòng trầm hương nữ", hrefSub: "/productCategory/vong-tram-huong-nu" },
    ],
  },
  {
    name: "Vòng tay theo mệnh",
    description: "Speak directly to your customers",
    sub: [
      { nameSub: "Mệnh mộc", hrefSub: "/productCategory/menh-moc" },
      { nameSub: "Mệnh thủy", hrefSub: "/productCategory/menh-thuy" },
      { nameSub: "Mệnh hỏa", hrefSub: "/productCategory/menh-hoa" },
      { nameSub: "Mệnh thổ", hrefSub: "/productCategory/menh-tho" },
      { nameSub: "Mệnh kim", hrefSub: "/productCategory/menh-kim" },
    ],
  },
];
const nhangTramHuong = [
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
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const userLogin = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log("Ok");
    dispatch(resetUser());
    localStorage.clear("access_token");
    localStorage.clear("refresh_token");
  };
  return (
    <header className="bg-[#101628]">
      {/*start header on PC*/}

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="uppercase text-white text-3xl font-bold">
              Logo
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="uppercase flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-[#fab55a]">
              Vòng tay trầm hương
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[#101628]
                                shadow-lg ring-1 ring-gray-900/5"
              >
                <div className="flex p-4">
                  {vongtay.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6"
                    >
                      <div className="">
                        <p className="block uppercase font-semibold text-[#fab55a] mb-2">
                          {item.name}
                        </p>
                        <div className="space-y-3">
                          {item.sub.map((sub) => (
                            <div>
                              <a
                                href={sub.hrefSub}
                                className="uppercase font-semibold text-gray-400 hover:text-[#fab55a]"
                              >
                                {sub.nameSub}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"></div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="uppercase flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-[#fab55a]">
              Nhang trầm hương
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
              
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[#101628]
                                shadow-lg ring-1 ring-gray-900/5"
              >
                <div className="p-4">
                  {nhangTramHuong.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg px-4 py-2 text-sm leading-6"
                    >
                      <div className="">
                        <Link
                          to={item.href}
                          className="block uppercase font-semibold text-white hover:text-[#fab55a] mb-2"
                        >
                          {item.name}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            to="/productCategory/tram-huong-dot"
            className="uppercase text-sm font-semibold leading-6 text-white hover:text-[#fab55a]"
          >
            Trầm hương đốt
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-8">
          <div className="flex gap-4">
            <Link
              to="/cart"
              className="relative text-sm font-semibold leading-6 text-[#fab55a] hover:opacity-80"
            >
              <ShoppingCartIcon />
              <span className="absolute top-[-4px] left-3 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            </Link>
            <Link
              to="/wishlist"
              className="relative text-sm font-semibold leading-6  text-[#fab55a] hover:opacity-80"
            >
              <FavoriteIcon></FavoriteIcon>
              <span className="absolute top-[-4px] left-3 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {wishlist.length}
              </span>
            </Link>

            <Link
              to="/account"
              className="text-sm font-semibold leading-6  text-[#fab55a] hover:opacity-80"
            >
              <PersonIcon></PersonIcon>
            </Link>
          </div>

          {!userLogin.id ? (
            <>
              <Link
                to="/login"
                className="text-sm font-semibold leading-6 text-white hover:text-[#fab55a]"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="text-sm font-semibold leading-6 text-white hover:text-[#fab55a]"
              >
                Sign up
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={handleLogout}
                className="text-sm font-semibold leading-6 text-white hover:text-[#fab55a]"
              >
                Log out
              </button>
            </>
          )}
        </div>
      </nav>
      {/*end header on PC*/}

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="z-[1000] fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#101628] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-[#fab55a]">
                        Vòng tay trầm hương
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...vongtay].map((item) => (
                          <>
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              // href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-[#fab55a]"
                            >
                              {item.name}
                            </Disclosure.Button>
                            {[...item.sub].map((sub) => (
                              <>
                                <a
                                  href={sub.hrefSub}
                                  className="block  rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-[#fab55a] hover:text-[#101628]"
                                >
                                  {sub.nameSub}
                                </a>
                              </>
                            ))}
                          </>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-[#fab55a]">
                        Nhang trầm hương
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...nhangTramHuong].map((item) => (
                          <>
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-[#fab55a] hover:text-[#101628]"
                            >
                              {item.name}
                            </Disclosure.Button>
                          </>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-[#fab55a] hover:text-[#101628]"
                >
                  Trầm hương đốt
                </a>
              </div>
              <div className="space-y-3">
                <div className="flex-row">
                  <Link
                    to="/cart"
                    className="text-sm font-semibold leading-6 text-[#fab55a] hover:opacity-80"
                  >
                    <ShoppingCartIcon></ShoppingCartIcon>{" "}
                    <span className="relative align-middle text-white font-semibold text-base">
                      Giỏ hàng
                      <span
                        className="absolute top-[-8px] left-[-14px] bg-red-500 text-white rounded-full w-4 h-4
                                            flex items-center justify-center text-xs"
                      >
                        {cart.length}
                      </span>
                    </span>
                  </Link>
                </div>

                <div>
                  <Link
                    to="/wishlist"
                    className="text-sm font-semibold leading-6  text-[#fab55a] hover:opacity-80"
                  >
                    <FavoriteIcon></FavoriteIcon>{" "}
                    <span className="relative align-middle text-white font-semibold text-base">
                      Yêu thích
                      <span
                        className=" absolute top-[-8px] left-[-14px] bg-red-500 text-white rounded-full w-4 h-4
                                            flex items-center justify-center text-xs"
                      >
                        {wishlist.length}
                      </span>
                    </span>
                  </Link>
                </div>

                <div>
                  <Link
                    to="/account"
                    className="text-sm font-semibold leading-6  text-[#fab55a] hover:opacity-80"
                  >
                    <PersonIcon></PersonIcon>{" "}
                    <span className="align-middle text-white font-semibold text-base">
                      Tài khoản
                    </span>
                  </Link>
                </div>
                {!userLogin.id ? (
                  <div className="mt-3">
                    <Link
                      to="/Login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-[#fab55a] hover:text-[#101628]"
                    >
                      Log in
                    </Link>
                    <Link
                      to="/Signup"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-[#fab55a] hover:text-[#101628]"
                    >
                      Sign up
                    </Link>
                  </div>
                ) : (
                  <div className="mt-3">
                    <button
                      onClick={handleLogout}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-[#fab55a] hover:text-[#101628]"
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Header;
