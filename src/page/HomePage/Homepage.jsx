import React, {useEffect} from 'react';
import {Navigation, Pagination, Autoplay,Mousewheel} from 'swiper';
import {useSwiper} from 'swiper/react';

import image_1 from "../../dist/assets/images/tram_huong_1.jpg";
import image_2 from "../../dist/assets/images/tram_huong_2.jpg";
import image_3 from "../../dist/assets/images/tram_huong_3.jpg";
import HeaderComponent from "../../Component/HeaderComponent/Header"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/hash-navigation';
import 'swiper/css/manipulation';


function Homepage() {
    const swiper = useSwiper();
    return (
        <div className="bg-black">
            <HeaderComponent/>
            {/*Start Slider*/}
            <div className='overflow-hidden rounded-lg max-sm:hidden'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={image_1} className=" block w-full object-fill h-96"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image_2} className="block w-full object-fill h-96 "/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image_3} className="block w-full object-fill h-96  "/>
                    </SwiperSlide>

                </Swiper>
            </div>
            {/*    End Slider*/}

            {/*    Start Sales*/}
            <div className="w-4/5 mx-auto rounded-2xl py-5">
                <div className="m-3 px-2">
                    <h3 className="text-white capitalize font-bold text-3xl">Khuyến mãi</h3>
                </div>
                <div className="my-3">
                    <Swiper
                        spaceBetween={100}
                        centeredSlides={true}

                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="flex justify-center gap-3 ">
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_1} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_1} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_1} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_1} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_1} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>

                            </div>


                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center gap-3 ">
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_2} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_2} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_2} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_2} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_2} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>

                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center gap-3 ">
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_3} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_3} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_3} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_3} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_3} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>

                            </div>

                        </SwiperSlide>

                    </Swiper>
                </div>

            </div>
            {/*    End Sale*/}

            {/*    Start Product*/}
            <div className="w-3/5 mx-auto rounded-2xl py-5 flex gap-2 ">
                <div className="w-1/5 ">
                    <div className="">
                        <img className="rounded-2xl "
                             src="https://thienmochuong.com/wp-content/uploads/2022/06/banner-tram-huong-dot.jpg"
                             alt=""/>
                    </div>
                </div>
                <div className="w-4/5 px-2 pb-5 bg-[#101628] rounded-2xl shadow">
                    <div className="mx-3 my-4 p-2 flex justify-between items-center">
                        <h3 className="text-white capitalize font-bold text-3xl">Trầm hương đốt</h3>
                        <a href="" className="text-white flex items-center hover:opacity-90">Xem tất cả <svg aria-hidden="true"
                                                                          className="w-4 h-4 ml-2 -mr-1"
                                                                          fill="currentColor"
                                                                          viewBox="0 0 20 20"
                                                                          xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg></a>
                    </div>
                    <Swiper
                        spaceBetween={100}
                        centeredSlides={true}

                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="flex justify-center gap-3 ">
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_1} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_1} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_1} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>


                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center gap-3 ">
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_2} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_2} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_2} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>


                            </div>


                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center gap-3 ">
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_3} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_3} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg bg-[#101648] pt-5">
                                    <a href="#">
                                        <img className="rounded-t-lg block object-fill h-44 w-44 mx-auto" src={image_3} alt=""/>
                                    </a>
                                    <div className="py-5">
                                        <a href="#" className="text-center">
                                            <h5 className="mb-2 text-sm font-bold tracking-tight text-white ">Lư đốt trầm hương hoa sen bằng sứ</h5>
                                        </a>
                                        <p className="text-white text-center font-bold">1.590.000 đ</p>
                                    </div>
                                </div>


                            </div>


                        </SwiperSlide>

                    </Swiper>

                </div>

            </div>


            {/*    End Product*/}
        </div>
    );
}


export default Homepage;
