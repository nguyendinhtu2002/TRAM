import {useState} from "react";
import {Link} from "react-router-dom";

import {Dialog, Disclosure} from "@headlessui/react";
import {
    Bars3Icon, XMarkIcon,
} from "@heroicons/react/24/outline";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

import {useDispatch, useSelector} from "react-redux";
import {resetUser} from "../../features/userSlide/userSlide";

import logo from "../../dist/assets/images/TRAM DINH.png"

const vongtay = [{
    name: "Danh mục sản phẩm", description: "Get a better understanding of your traffic", sub: [{
        nameSub: "Vòng trầm hương nam", hrefSub: "/productCategory/vong-tram-huong-nam",
    }, {
        nameSub: "Vòng trầm hương nữ", hrefSub: "/productCategory/vong-tram-huong-nu",
    },],
}, {
    name: "Vòng tay theo mệnh",
    description: "Speak directly to your customers",
    sub: [{nameSub: "Mệnh mộc", hrefSub: "/productCategory/menh-moc"}, {
        nameSub: "Mệnh thủy",
        hrefSub: "/productCategory/menh-thuy"
    }, {nameSub: "Mệnh hỏa", hrefSub: "/productCategory/menh-hoa"}, {
        nameSub: "Mệnh thổ",
        hrefSub: "/productCategory/menh-tho"
    }, {nameSub: "Mệnh kim", hrefSub: "/productCategory/menh-kim"},],
},];
const nhangTramHuong = [{
    name: "Nhang vòng trầm hương", href: "/productCategory/nhang-vong-tram-huong",
}, {
    name: "Nhang trầm có tăm", href: "/productCategory/nhang-vong-co-tam",
}, {
    name: "Nhang trầm không tăm", href: "/productCategory/nhang-vong-khong-tam",
},];

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


    return (<>
            <header className="bg-[#101628]">
                {/*start header on PC*/}

                <nav
                    className="mx-auto flex gap-3 max-w-7xl items-center justify-between p-6 lg:px-8"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="block w-28">
                              <img
                                  className="transform scale-150"
                                  src={logo}
                                  alt=""
                              />
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
                            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="lg:flex lg:items-center lg:gap-3 hidden">
                        <div className="group relative cursor-pointer py-2 ">
                            <div className="flex items-center justify-between px-2 uppercase text-sm text-white">
                                <a
                                    className="menu-hover my-2 py-2 font-medium lg:mx-1 hover:text-[#fab55a]"

                                >Nhang Trầm Hương
                                </a>
                                <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                  <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div
                                className="invisible absolute z-50 flex rounded-lg w-screen max-w-sm flex-col bg-[#101628] py-4 px-4 shadow-xl group-hover:visible"
                            >
                                {nhangTramHuong.map((item) => (<>
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className="my-2 block py-1 font-semibold text-white hover:text-[#fab55a] md:mx-2"
                                        >{item.name}
                                        </Link>
                                    </>))}
                            </div>
                        </div>

                        <div className="group relative cursor-pointer py-2">
                            <div className="flex items-center justify-between px-2 uppercase text-sm text-white">
                                <a
                                    className="menu-hover my-2 py-2 font-medium lg:mx-1 hover:text-[#fab55a]"
                                >Vòng tay trầm hương
                                </a>
                                <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                  <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div
                                className="flex w-screen max-w-md invisible absolute z-50 rounded-lg bg-[#101628] py-1 px-4 shadow-xl group-hover:visible">
                                {vongtay.map((item) => (<>
                                        <div
                                            className="p-4"
                                        >
                                            <p className="block uppercase font-semibold text-[#fab55a] mb-2">
                                                {item.name}
                                            </p>
                                            {item.sub.map((sub) => (<>
                                                    <Link
                                                        key={sub.nameSub}
                                                        to={sub.hrefSub}
                                                        className="my-2 block py-1 font-semibold text-white hover:text-[#fab55a]"
                                                    >{sub.nameSub}
                                                    </Link>
                                                </>))}
                                        </div>
                                    </>))}
                            </div>

                        </div>

                        <div className="relative cursor-pointer py-2">
                            <Link
                                to="/productCategory/tram-huong-dot"
                                className="uppercase text-sm font-semibold leading-6 text-white hover:text-[#fab55a]"
                            >
                                Trầm hương đốt
                            </Link>
                        </div>

                    </div>


                    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-8">
                        <div className="flex gap-4">
                            <Link
                                to="/cart"
                                className="relative text-sm font-semibold leading-6 text-[#fab55a] hover:opacity-80"
                            >
                                <ShoppingCartIcon/>
                                <span
                                    className="absolute top-[-4px] left-3 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {cart.length}
              </span>
                            </Link>
                            <Link
                                to="/wishlist"
                                className="relative text-sm font-semibold leading-6 text-[#fab55a] hover:opacity-80"
                            >
                                <FavoriteIcon></FavoriteIcon>
                                <span
                                    className="absolute top-[-4px] left-3 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
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

                        {!userLogin.id ? (<>
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
                            </>) : (<>
                                <button
                                    onClick={handleLogout}
                                    className="text-sm font-semibold leading-6 text-white hover:text-[#fab55a]"
                                >
                                    Log out
                                </button>
                            </>)}
                    </div>
                </nav>
                {/*end header on PC*/}

                <Dialog
                    as="div"
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-10"/>
                    <Dialog.Panel
                        className="z-[1000] fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#101628] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                                <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Disclosure as="div" className="-mx-3">
                                        {({open}) => (<>
                                                <Disclosure.Button
                                                    className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-[#fab55a]">
                                                    Vòng tay trầm hương
                                                    <ChevronDownIcon
                                                        className={classNames(open ? "rotate-180" : "", "h-5 w-5 flex-none")}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...vongtay].map((item) => (<>
                                                            <Disclosure.Button
                                                                key={item.name}
                                                                as="a"
                                                                // href={item.href}
                                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-[#fab55a]"
                                                            >
                                                                {item.name}
                                                            </Disclosure.Button>
                                                            {[...item.sub].map((sub) => (<>
                                                                    <a
                                                                        href={sub.hrefSub}
                                                                        className="block  rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-[#fab55a] hover:text-[#101628]"
                                                                    >
                                                                        {sub.nameSub}
                                                                    </a>
                                                                </>))}
                                                        </>))}
                                                </Disclosure.Panel>
                                            </>)}
                                    </Disclosure>

                                    <Disclosure as="div" className="-mx-3">
                                        {({open}) => (<>
                                                <Disclosure.Button
                                                    className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-[#fab55a]">
                                                    Nhang trầm hương
                                                    <ChevronDownIcon
                                                        className={classNames(open ? "rotate-180" : "", "h-5 w-5 flex-none")}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...nhangTramHuong].map((item) => (<>
                                                            <Disclosure.Button
                                                                key={item.name}
                                                                as="a"
                                                                href={item.href}
                                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-[#fab55a] hover:text-[#101628]"
                                                            >
                                                                {item.name}
                                                            </Disclosure.Button>
                                                        </>))}
                                                </Disclosure.Panel>
                                            </>)}
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
                                    {!userLogin.id ? (<div className="mt-3">
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
                                        </div>) : (<div className="mt-3">
                                            <button
                                                onClick={handleLogout}
                                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-[#fab55a] hover:text-[#101628]"
                                            >
                                                Log out
                                            </button>
                                        </div>)}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </>);
}

export default Header;
