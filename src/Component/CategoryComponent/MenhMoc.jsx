import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./main.css";
import CopyButton from "../ButtonComponent/CoppyButton";
const settings = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 400,
  autoplaySpeed: 3000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
};
function MenhMoc() {
  return (
    <div className="bg-gray-100 px-5 pb-3 mt-20">
      <div className="py-2">
        <h2 className="font-bold text-2xl pb-3 text-center">
          ƯU ĐÃI ĐỘC QUYỀN ONLINE THÁNG 06
        </h2>

        <Slider {...settings} style={{}}>
          <div class="w-full p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="mb-4">
              <p class="mb-2 text-base font-medium  dark:text-white">
                <strong> 200k4790</strong>
              </p>
            </div>
            <div className="mb-4">
              <p>Số lượng: 100</p>
            </div>
            <div className="mb-4">
              <p>
                Giảm 200k cho đơn hàng từ 4.790.000 khi mua trực tiếp trên
                Website{" "}
              </p>
            </div>

            <div class="items-center justify-center space-y-4 sm:flex ">
              <div className="code">
                Mã:
                <span className="uppercase"> 200k4790</span>
              </div>
              <CopyButton textToCopy={"200k4790"} />
            </div>
          </div>

          <div class="w-full p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ml-4">
            <div className="mb-4">
              <p class="mb-2 text-base font-medium  dark:text-white">
                <strong> 200k4790</strong>
              </p>
            </div>
            <div className="mb-4">
              <p>Số lượng: 100</p>
            </div>
            <div className="mb-4">
              <p>
                Giảm 200k cho đơn hàng từ 4.790.000 khi mua trực tiếp trên
                Website{" "}
              </p>
            </div>

            <div class="items-center justify-center space-y-4 sm:flex ">
              <div className="code">
                Mã:
                <span className="uppercase"> 200k4790</span>
              </div>
              <CopyButton textToCopy={"200k4790"} />
            </div>
          </div>

          {/* <Link href="#">
                    <img
                      src="https://thienmochuong.com/wp-content/uploads/2023/04/banner-master-box.jpg"
                      className="mx-auto rounded-lg w-full block object-fill max-[600px]:h-[12rem] max-[900px]:h-[20rem]  max-[1024px]:h-[28rem] h-[38rem]"
                      alt=""
                    />
                  </Link>
                  <Link href="#">
                    <img
                      src="https://thienmochuong.com/wp-content/uploads/2022/12/banner-web_ban-mac-dinh.jpg"
                      className="mx-auto rounded-lg w-full block object-fill max-[900px]:h-[12rem]  max-[1024px]:h-[28rem] h-[38rem]"
                      alt=""
                    />
                  </Link>
                  <Link href="#">
                    <img
                      src="https://thienmochuong.com/wp-content/uploads/2023/04/banner-master-box.jpg"
                      className="mx-auto rounded-lg w-full block object-fill max-[900px]:h-[12rem]  max-[1024px]:h-[28rem] h-[38rem]"
                      alt=""
                    />
                  </Link> */}
        </Slider>
        <p className="leading-relaxed text-justify ">
          Chọn vòng tay mệnh mộc chuẩn xác, bước đầu tiên là cần cân nhắc về màu
          sắc hợp mệnh. Để xác định được màu sắc tương hợp với bản mệnh ta sử
          dụng quy luật tương sinh tương khắc.
        </p>
        <h3 className="text-3xl font-bold">
          Người mệnh Mộc sinh năm bao nhiêu?
        </h3>
        <p className="leading-relaxed text-justify pb-3 ">
          Nhâm Ngọ (1942 – 2002), Quý Mùi (1943 – 2003): Dương Liễu Mộc (cây
          dương liễu)
        </p>
        <p className="leading-relaxed text-justify  pb-3  ">
          Mậu Thìn (1988 – 1928), Kỷ Tỵ (1989 – 1929): Đại Lâm Mộc (cây trong
          rừng)
        </p>
        <p className="leading-relaxed text-justify  pb-3  ">
          Kỷ Hợi (1959 – 2019), Canh Dần (1958 – 2018): Bình Địa Mộc (cây trên
          đất)
        </p>
        <p className="leading-relaxed text-justify  pb-3  ">
          Nhâm Tý (1972 – 2032), Quý Sửu (1973 – 2033): Tang Đố Mộc (cây dâu
          tằm)
        </p>
        <p className="leading-relaxed text-justify  pb-3  ">
          Tân Mão (1951 – 2011), Canh Dần (1950 – 2010): Tùng Bách Mộc (cây tùng
          già)
        </p>
        <p className="leading-relaxed text-justify  pb-3 ">
          Canh Thân (1980 – 2040), Tân Dậu (1981 – 2041): Thạch Lựu Mộc (cây
          trên đá)
        </p>
      </div>
      <h3 className="text-3xl font-bold">Màu sắc phong thủy cho mệnh Mộc</h3>
      <p className="leading-relaxed text-justify">
        Để xác định được màu sắc tương hợp với bản mệnh ta sử dụng quy luật
        tương sinh tương khắc. Vì mạng Mộc tương sinh với ngũ hành Thủy. Nên khi
        chọn những màu sắc phù hợp với mệnh Thủy sẽ thúc đẩy không ngừng tài
        lộc. Ngược lại người mệnh Mộc sẽ tương khắc với ngũ hành Thổ nên bạn cần
        tránh những gam màu hợp với hành Thổ:
      </p>
      <p className="leading-relaxed text-justify pb-4">
        Hòa hợp: Màu xanh lục (hành Mộc) hỗ trợ công việc, vận mệnh, may mắn.
        Tương sinh: Màu đen, xanh nước (hành Thủy) kích thích tăng tiến công
        việc, gia tăng lượng tương sinh. Thúc đẩy năng lượng bản mệnh phát
        triễn. Khắc chế: Màu vàng, nâu đất (hành Thổ) ức chế, kìm hãm vận mệnh,
        may mắn. Bị khắc: Màu trắng, xám, ghi (hành Kim) khắc chế, giảm sút tăng
        tiến công danh, vận mệnh và may mắn.
      </p>
      <div className="my-3">
        <div className="w-96 mx-auto">
          <img
            className=" lg:w-96"
            src="https://thienmochuong.com/wp-content/uploads/2021/09/cac-loai-da-quy-theo-thang-sinh-8-400x400.jpg"
            alt="Vòng tay trầm hương"
          />
        </div>
        <div className="w-96 mx-auto bg-gray-200 py-1">
          <p className=" text-center b-0">
            <span className="font-semibold italic">
              Vòng tay chuỗi hạt Trầm Hương kết hợp đá phong thuỷ cho người mệnh
              Mộc{" "}
            </span>
          </p>
        </div>
      </div>
      <p className="leading-relaxed text-justify pb-4">
        Thiên Mộc Hương gợi ý cho bạn mẫu vòng tay phong thủy mệnh Mộc mang lại
        may mắn cho chủ nhân. Vòng tay trầm hương kết hợp charm đá quý sẽ nhân
        đôi nguồn năng lượng phong thủy cho chiếc vòng.
      </p>
      <p className="leading-relaxed text-justify pb-4">
        Vòng trầm được trưng dụng như món vật phẩm may mắn, tài lộc cho người
        đeo. Không chỉ có tác dụng cho sức khỏe; vòng tay mệnh Mộc mang đến may
        mắn, tài lộc cho người đeo trên con đường sự nghiệp và cả tình duyên.
        Lưu ý, đối với những chiếc vòng được kết hợp với charm đá quý, mạng mộc
        nên lưu ý đến màu sắc hợp với cung mệnh của mình. Có như thế, vòng tay
        gỗ trầm mới phát huy hết tác dụng.
      </p>
      <p className="leading-relaxed text-justify pb-4">
        Từ đó, <strong>Thiên Mộc Hương</strong> cho ra mắt BST vòng tay mệnh Mộc
        để giúp chủ nhân mệnh mộc dễ dàng chọn lựa được chiếc vòng phù hợp nhất.
      </p>
    </div>
  );
}

export default MenhMoc;
