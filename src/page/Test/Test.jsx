import React, {useRef, useEffect, useState} from "react";

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
        if (outsideClickRef.current && !outsideClickRef.current.contains(event.target)) {
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
        if (outsideClickRef.current && !outsideClickRef.current.contains(event.target)) {
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


function Test(){
    return(
        <>
            <div className="flex">
                <DropdownItem1></DropdownItem1>
                <DropdownItem2></DropdownItem2>
            </div>

        </>
    );
}

export default Test;