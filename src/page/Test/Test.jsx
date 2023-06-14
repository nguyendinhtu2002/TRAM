import {React, useState} from 'react'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import image_1 from "../../dist/assets/images/tram_huong_1.jpg";
import image_2 from "../../dist/assets/images/tram_huong_2.jpg";
import image_3 from "../../dist/assets/images/tram_huong_3.jpg";
import vong_tay from "../../dist/assets/images/vong-tay-tram-huong.jpg";


function Test() {
    const DropdownItem = () => {
        const [isDropdownOpen, setDropdownOpen] = useState(false);
        const toggleDropdown = () => {
            setDropdownOpen(!isDropdownOpen);
        };
        return (
            <>
                <div className="flex items-center justify-center p-4">
                    <div className="relative">
                        <button
                            id="dropdown"
                            className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                            onClick={toggleDropdown}
                            onBlur={toggleDropdown}
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
                            id="dropdownContent" style={{top:"100%"}}
                            className={isDropdownOpen?"absolute m-0 z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700":"hidden"}
                        >
                            <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                                <li className="flex items-center">
                                    <input
                                        id="microsoft"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />

                                    <label
                                        htmlFor="microsoft"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
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
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
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
    }
    return (
        <>
            <DropdownItem></DropdownItem>
        </>


    );
}

export default Test;
