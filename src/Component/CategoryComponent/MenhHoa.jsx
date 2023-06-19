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
function MenhHoa() {
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
          Vòng tay phong thủy mệnh Hỏa – Được làm từ trầm hương tự nhiên mang
          tinh hoa của đất trời, tích tụ trong mình cốt khí thiên nhiên trong
          nhiều năm. Nó có công năng làm tan đi những luồng khí u tối, mang lại
          bình yên; sự nghiệp thăng tiến cho người đeo.
        </p>
        <h3 className="text-3xl font-bold">Mệnh Hỏa gồm những tuổi nào</h3>
        <p className="leading-relaxed text-justify pb-3 ">
          Tuổi Giáp Tuất sinh năm – 1934, 1994
        </p>
        <p className="leading-relaxed text-justify  pb-3  ">
          Tuổi Đinh Dậu sinh năm – 1957, 2017
        </p>
        <p className="leading-relaxed text-justify  pb-3  ">
          Tuổi Bính Dần sinh năm – 1986, 1926
        </p>
        <p className="leading-relaxed text-justify  pb-3  ">
          Tuổi Ất Hợi sinh năm – 1935, 1995
        </p>
        <p className="leading-relaxed text-justify  pb-3  ">
          Tuổi Giáp Thìn sinh năm – 1964, 2024
        </p>
        <p className="leading-relaxed text-justify  pb-3 ">
          Tuổi Đinh Mão sinh năm – 1987, 1927
        </p>
        <p className="leading-relaxed text-justify  pb-3 ">
          Tuổi Mậu Tý sinh năm – 1948, 2008
        </p>
        <p className="leading-relaxed text-justify  pb-3 ">
          Tuổi Ất Tỵ sinh năm – 1965, 2025
        </p>
        <p className="leading-relaxed text-justify  pb-3 ">
          Tuổi Kỷ Sửu sinh năm – 1949, 2009
        </p>
        <p className="leading-relaxed text-justify  pb-3 ">
          Tuổi Mậu Ngọ sinh năm – 1978, 2038
        </p>
        <p className="leading-relaxed text-justify  pb-3 ">
          Tuổi Bính Thân sinh năm – 1956, 2016
        </p>
        <p className="leading-relaxed text-justify  pb-3 ">
          Tuổi Kỷ Mùi sinh năm – 1979, 2039
        </p>
      </div>
      <h3 className="text-3xl font-bold py-4">
        Vòng tay phong thủy mệnh hỏa có màu gì?
      </h3>
      <p className="leading-relaxed text-justify">
        Kim – Mộc – Thủy – Hỏa – Thổ được xem là nguồn gốc của vạn vật trên vũ
        trụ theo thuyết ngũ hành của người phương Đông. Chúng tồn tại tuần hoàn
        theo 2 chiều tương sinh và tương khắc lẫn nhau. Bao gồm Thổ sinh Kim;
        Kim sinh Thủy; Kim khắc Mộc; Hỏa khắc Kim.
      </p>
      <h3 className="text-3xl font-bold py-4">1. Màu tương sinh</h3>
      <p className="leading-relaxed text-justify">
        Theo ngũ hành tương sinh Mộc sinh Hỏa nên người mệnh Hỏa nên sử dụng các
        loại đá có màu thuộc hành Mộc như xanh lá. Điển hình như thạch anh tóc
        xanh; đá ngọc bích; đá Diopside….Khi sử dụng các loại đá này sẽ giúp
        người mệnh Hỏa gia tăng sự tự tin, nâng cao năng lực quản lý và lãnh
        đạo.
      </p>
      <h3 className="text-3xl font-bold py-4">2. Màu tương khắc</h3>
      <p className="leading-relaxed text-justify">
        Theo nguyên lý ngũ hành thì “Hỏa sinh Thổ”. Nếu sử dụng màu sắc thuộc
        hành thổ là vàng nâu thì Mệnh hỏa xuất để sinh thổ làm giảm đi tính hỏa.
        Vì vậy bạn hạn chế màu sắc liên quan đến hành thổ là màu vàng nâu. Hạn
        chế sử dụng đá mắt hổ vàng nâu, thạch anh vàng, thạch anh khói vàng, mã
        não vàng, cẩm thạch vàng…
      </p>
      <p className="leading-relaxed text-justify">
        Mệnh Hỏa có nên đeo vòng trầm hương?
      </p>
      <p className="leading-relaxed text-justify">
        Trầm hương là vật phẩm phù hợp với tất cả các mệnh. Dù bạn có thuộc hành
        kim, mộc, thủy, hỏa hay thổ thì vòng trầm hương vẫn mnag đến công năng
        tuyệt vời cho người đeo.
      </p>
      <p className="leading-relaxed text-justify py-4">
        Tuy nhiên, khi kến hợp với charm đá quý thì chủ mệnh nên lưu ý về màu
        sắc của charm. Chọn màu sắc hợp với cung mệnh của mình thì vòng tay mơi
        sphats huy đúng công năng của nó.
      </p>
      <p className="leading-relaxed text-justify py-4">
        Người mệnh Hỏa cũng vậy, nên ưu tiên nhưng gam màu tương hợp, hạn chế
        màu khắc, kỵ để không làm phản tác dụng phong thủy vốn có của vòng trầm.
      </p>
      <p className="leading-relaxed text-justify py-4">
        Trải qua thời gian dài thừa hưởng tinh hoa của trời đất, trầm hương ngày
        được nâng cao giá trị cũng như công năng của mình. Không chỉ có tác dụng
        cho sức khỏe; vòng trầm mang đến may mắn, tài lộc cho người đeo trên con
        đường sự nghiệp và cả tình duyên.
      </p>
      <p className="leading-relaxed text-justify py-4">
        Từ đó, Thiên Mộc Hương đã cho ra đời BỘ SƯU TẬP VÒNG TAY MỆNH HỎA để
        giúp khách hàng thân thương của mình có thể sở hữu những chiếc vòng trầm
        hương hợp với mệnh của mình; mang lại sự may mắn và suôn sẻ trong cuộc
        sống. Hãy cùng xem qua BST này nhé!
      </p>
    </div>
  );
}

export default MenhHoa;
