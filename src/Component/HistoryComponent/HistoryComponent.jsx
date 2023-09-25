import React, { useState } from 'react'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { Rating } from '@mui/material';
import StarOutlineIcon from "@mui/icons-material/StarOutline";

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
function HistoryComponent() {
    const settingsSales = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
      const ImageItem = ({ image, handleAddWishList, id, link }) => {
        const [isHover, setHover] = useState(null);
        const [isHoverIcon, setHoverIcon] = useState(null);
    
        const handleClick = (id) => {
          handleAddWishList(id);
        };
        return (
          <div
            className="relative"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Link to={link} className={isHover ? "hover:opacity-70" : ""}>
              <img
                src={image}
                className="rounded-t-lg object-fill xl:h-56 h-44 w-full m-0"
                alt=""
              />
            </Link>
            <div>
              <button
                onClick={() => handleClick(id)}
                className={` ${
                  isHover ? "opacity-100" : "opacity-0"
                } text-white hover:text-amber-500 absolute top-0 right-2`}
                onMouseEnter={() => setHoverIcon(true)}
                onMouseLeave={() => setHoverIcon(false)}
              >
                <div className={isHoverIcon ? "hidden" : "block"}>
                  <FavoriteBorderIcon></FavoriteBorderIcon>
                </div>
                <div className={isHoverIcon ? "block" : "hidden"}>
                  <FavoriteIcon></FavoriteIcon>
                </div>
              </button>
            </div>
          </div>
        );
      };
      const historyProduct = useSelector((state)=>state.history)
      const {product} = historyProduct;
  return (
    <>
       <h3 className="text-center pt-6 text-3xl font-medium">
            Sản Phẩm Đã Xem
          </h3>
          <div className="py-3 h-[70%]">
            <Slider {...settingsSales}>
              {product?.map((item) => (
                <div className="">
                  <div className="rounded-lg bg-[#192034] mx-auto w-[45%]">
                    <ImageItem
                      image={item.images[0]}
                      link={`/detail/${item._id}`}
                    />
                    <div className="py-5 px-3 max-w-md">
                      <div>
                        <Link
                          to={`/detail/${item._id}`}
                          className="text-center"
                        >
                          <h5 className="mb-2 text-sm font-bold tracking-tight text-white overflow-wrap">
                              {item.name}{" "}
                          </h5>
                        </Link>
                      </div>

                      <div className="flex justify-center gap-2">
                          <p className="text-white text-center font-bold overflow-wrap">
                              Liên hệ
                          </p>
                        {/*<p className="text-white text-center font-bold overflow-wrap">*/}
                        {/*  1.590.000 đ*/}
                        {/*</p>*/}
                        {/*<p className=" text-sm text-gray-600 text-center font-bold line-through overflow-wrap">*/}
                        {/*  1.990.000 đ*/}
                        {/*</p>*/}
                      </div>
                      <div className="flex justify-center mt-2 items-center gap-3">
                        <Rating
                          name="read-only"
                          value={0}
                          readOnly
                          emptyIcon={
                            <StarOutlineIcon style={{ color: "yellow" }} />
                          }
                          // onChange={(event, newValue) => {
                          //   setValue(newValue);
                          // }}
                        />
                        <p className="text-sm text-gray-500">0 đánh giá</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
    </>
  )
}

export default HistoryComponent