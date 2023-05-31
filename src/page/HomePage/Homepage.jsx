import React, {useState} from 'react'
import image_1 from "./../../dist/assets/images/tram_huong_1.jpg";
import image_2 from "./../../dist/assets/images/tram_huong_2.jpg";
import image_3 from "./../../dist/assets/images/tram_huong_3.jpg";


function Homepage() {
    const SliderComponent = () => {
        const [defaultTransform, setDefaultTransform] = useState(0);

        const goNext = () => {
            setDefaultTransform((prevTransform) => prevTransform - 398);
        };

        const goPrev = () => {
            setDefaultTransform((prevTransform) => prevTransform + 398);
        };
        return (
            <div>
                <div id="default-carousel" className="relative w-full" data-carousel="slide">
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-[32rem]">
                        <div className="hidden duration-1000 ease-in-out" data-carousel-item>
                            <img src={image_1}
                                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                 alt="..."/>
                        </div>
                        <div className="hidden duration-1000 ease-in-out" data-carousel-item>
                            <img src={image_2}
                                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                 alt="..."/>
                        </div>
                        <div className="hidden duration-1000 ease-in-out" data-carousel-item>
                            <img src={image_3}
                                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                 alt="..."/>
                        </div>
                    </div>

                    {/*//  Slider indicators*/}
                    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
                                data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
                                data-carousel-slide-to="1"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
                                data-carousel-slide-to="2"></button>

                    </div>

                    {/*Slider controls*/}
                    <button type="button"
                            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-prev onClick={goPrev}>
        <span
            className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                 stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
        </span>
                    </button>
                    <button type="button"
                            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-next onClick={goNext}>
        <span
            className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                 stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
                    </button>
                </div>

                <div className="container mx-auto">

                    <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                        <div className="w-full relative flex items-center justify-center">
                            <button aria-label="slide backward"
                                    className="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                                    id="prev">
                                <svg className="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <div id="slider"
                                     className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="https://i.ibb.co/fDngH9G/carosel-1.png"
                                             alt="black chair and white table"
                                             className="object-cover object-center w-full"/>
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">Catalog
                                                1</h2>
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">Minimal
                                                    Interior</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area"
                                             className="object-cover object-center w-full"/>
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">Catalog
                                                2</h2>
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">Minimal
                                                    Interior</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area"
                                             className="object-cover object-center w-full"/>
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">Catalog
                                                2</h2>
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">Minimal
                                                    Interior</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area"
                                             className="object-cover object-center w-full"/>
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">Catalog
                                                2</h2>
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">Minimal
                                                    Interior</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="https://i.ibb.co/fDngH9G/carosel-1.png"
                                             alt="black chair and white table"
                                             className="object-cover object-center w-full"/>
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">Catalog
                                                2</h2>
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">Minimal
                                                    Interior</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area"
                                             className="object-cover object-center w-full"/>
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">Catalog
                                                2</h2>
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">Minimal
                                                    Interior</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area"
                                             className="object-cover object-center w-full"/>
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">Catalog
                                                2</h2>
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">Minimal
                                                    Interior</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area"
                                             className="object-cover object-center w-full"/>
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">Catalog
                                                2</h2>
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">Minimal
                                                    Interior</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="https://i.ibb.co/fDngH9G/carosel-1.png"
                                             alt="black chair and white table"
                                             className="object-cover object-center w-full"/>
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">Catalog
                                                2</h2>
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">Minimal
                                                    Interior</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area"
                                             className="object-cover object-center w-full"/>
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">Catalog
                                                2</h2>
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">Minimal
                                                    Interior</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area"
                                             className="object-cover object-center w-full"/>
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">Catalog
                                                2</h2>
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">Minimal
                                                    Interior</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area"
                                             className="object-cover object-center w-full"/>
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">Catalog
                                                2</h2>
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">Minimal
                                                    Interior</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button aria-label="slide forward"
                                    className="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                                    id="next">
                                <svg className="dark:text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
    export default Homepage