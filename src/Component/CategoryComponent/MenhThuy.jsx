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
function MenhThuy() {
  return (
    <div className="bg-gray-100 px-5 pb-3 mt-20">
      <div className="py-2">
        <h2 className="font-bold text-2xl pb-3 text-center mb-4">
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
        </Slider>
        <p className="leading-relaxed text-justify pt-2 pb-4 ">
          <strong>Vòng tay hợp mệnh Thủy</strong> – Được làm từ trầm hương tự
          nhiên mang tinh hoa của đất trời, tích tụ trong mình cốt khí thiên
          nhiên trong nhiều năm. Nó có công năng làm tan đi những luồng khí u
          tối, mang lại bình yên; sự nghiệp thăng tiến cho người đeo.
        </p>
        <h3 className="text-3xl font-bold">Mệnh Thủy sinh năm nào?</h3>
        <p className="leading-relaxed text-justify">Bính Tý – 1936, 1996</p>
        <p className="leading-relaxed text-justify">Quý Tỵ – 1953, 2013</p>
        <p className="leading-relaxed text-justify">Nhâm Tuất – 1982, 1922</p>
        <p className="leading-relaxed text-justify">Đinh Sửu – 1937, 1997</p>
        <p className="leading-relaxed text-justify">Bính Ngọ – 1966, 2026</p>
        <p className="leading-relaxed text-justify">Quý Hợi – 1983, 1923</p>
        <p className="leading-relaxed text-justify">Giáp Thân – 1944, 2004</p>
        <p className="leading-relaxed text-justify">Đinh Mùi – 1967, 2027</p>
        <p className="leading-relaxed text-justify">Ất Dậu – 1945, 2005</p>
        <p className="leading-relaxed text-justify">Giáp Dần – 1974, 2034</p>
        <p className="leading-relaxed text-justify">Nhâm Thìn – 1952, 2012</p>
        <p className="leading-relaxed text-justify">Ất Mão – 1975, 2035</p>
      </div>
      <h3 className="text-3xl font-bold">Màu sắc phong Thủy cho mạng Thủy</h3>
      <p className="leading-relaxed text-justify">
        Trước tiên hãy xét về màu tương sinh, màu tương khắc của mệnh thủy để
        đưa ra câu trả lời phù hợp nhất. Thông qua phần này chắc chắn bạn sẽ trả
        lời được vô vàn những câu hỏi quan trọng như “Mệnh thủy nên đeo đá màu
        gì? Mệnh thủy đeo vòng đá màu gì?”. Kim – Mộc – Thủy – Hỏa – Thổ được
        xem là nguồn gốc của vạn vật trên vũ trụ theo thuyết ngũ hành của người
        phương Đông. Chúng tồn tại tuần hoàn theo 2 chiều tương sinh và tương
        khắc lẫn nhau. Bao gồm Thổ sinh Kim; Kim sinh Thủy; Kim khắc Mộc; Hỏa
        khắc Kim.
      </p>
      <h3 className="text-3xl font-bold py-4">1. Màu tương sinh</h3>
      <p className="leading-relaxed text-justify pb-4">
        Màu đen thể hiện được sự mạnh mẽ, quyết liệt giống như tính cách của
        người mệnh Thủy. Dựa vào quy luật âm dương ngũ hành, người ta phát hiện
        màu đen là màu tương sinh hợp nhất với người mệnh Thủy. Bên cạnh đó do
        tương sinh với mệnh Kim nên màu trắng cũng là lựa chọn tốt. Người mệnh
        Thủy thường hợp với những vật dụng, phụ kiện màu trắng.
      </p>
      <h3 className="text-3xl font-bold py-4">2. Màu sắc tương khắc</h3>
      <p className="leading-relaxed text-justify pb-4">
        Thủy có mối quan hệ tương khắc với mệnh Hỏa. Vì vậy, bạn nên né những
        màu sắc của mệnh hỏa như cam, đỏ, tím, hồng. Bên cạnh, vàng, nâu đất của
        Thổ cũng tương khắc với mệnh thủy. Vì vậy, nên hạn chế và tránh chọn
        những gam màu này
      </p>
      <h3 className="text-3xl font-bold py-4">
        Vật phẩm may mắn cho mạng Thủy
      </h3>
      <p className="leading-relaxed text-justify">Đá phong thủy mệnh Thủy</p>
      <p className="leading-relaxed text-justify ">
        Trầm Hương Lê Trà gợi ý một số loại đá phong thủy phù hợp cho mệnh Thủy,
        giúp chủ mệnh cải thiện vận khí và tài lộc. Ngoài ra, khi chọn đá phong
        thủy, chủ nhân cũng cần cân nhắc về yếu tố màu sắc hợp mệnh. Thủy có mối
        quan hệ tương khắc với mệnh Hỏa. Vì vậy, bạn nên né những màu sắc của
        mệnh hỏa như cam, đỏ, tím, hồng. Bên cạnh, vàng, nâu đất của Thổ cũng
        tương khắc với mệnh thủy. Vì vậy, nên hạn chế và tránh chọn những gam
        màu này.
      </p>
      <h3 className="text-3xl font-bold py-4">1. Đá thạch anh</h3>
      <p className="leading-relaxed text-justify ">
        Là một trong những loại đá mang nhiều công năng nổi bật, đá thạch anh là
        một lựa chọn đáng cân nhắc cho người mệnh Thủy. Thạch anh có nhiều loại
        cũng như mang hình ảnh của sự cao quý, sang trọng. Bên cạnh đó, loại đá
        này mang nguốn năng lượng phong thủy mạnh mẽ, thu hút nhiều vận may cho
        chủ nhân.
      </p>
      <h3 className="text-3xl font-bold py-4"> 2. Đá Sapphire</h3>
      <p className="leading-relaxed text-justify ">
        Đá Sapphire nổi danh là lá ùa may mắn cho người mệnh Mộc và mệnh Thủy.
        Chính vì vậy, thất thiếu xót nếu chủ mệnh Thủy không chọn ngay loại đá
        này cho những mẫu vòng của mình.
      </p>
      <h3 className="text-3xl font-bold py-4"> 3. Đá Ngọc Bích</h3>
      <p className="leading-relaxed text-justify ">
        Đá Ngọc Bích phù hợp cho phái nữ. Nó biểu tượng cho sự quý phái và sự
        khuê các của người con gái. Loại đá này giúp người đeo cải thiện sức
        khỏe và mang nhiều may mắn trong cuộc sống.
      </p>
      <p className="leading-relaxed text-justify ">Vòng tay trầm hương</p>
      <p className="leading-relaxed text-justify ">
        Vật phẩm may mắn cho mạng Thủy Vòng tay trầm hương Là vật phẩm phong
        thủy được nhiều người yêu thích, vòng tay trầm hương là món đồ nên sở
        hữu nếu bạn muốn gặp nhiều vận may.
      </p>
      <p className="leading-relaxed text-justify ">
        Vòng trầm được chế tác từ gỗ trầm có số tuổi tích trầm ít nhất 10 năm.
        Trầm hương tuổi càng lớn thì giá trị càng cao. Từ xa xưa, những sản phẩm
        từ trầm được trọng dụng trong cung đình cho vua chúa, quan lại. Trải qua
        thời gian dài thừa hưởng tinh hoa của trời đất, trầm hương ngày được
        nâng cao giá trị cũng như công năng của mình.
      </p>
      <p className="leading-relaxed text-justify ">
        Không chỉ có tác dụng cho sức khỏe; vòng tay mệnh Thủy mang đến may mắn,
        tài lộc cho người đeo trên con đường sự nghiệp và cả tình duyên. Lưu ý,
        đối với những chiếc vòng được kết hợp với charm đá quý, mạng Thủy nên
        lưu ý đến màu sắc hợp với cung mệnh của mình. Có như thế, vòng tay gỗ
        trầm mới phát huy hết tác dụng.
      </p>
      <p className="leading-relaxed text-justify ">
        Từ đó, Trầm Hương Lê Trà đã cho ra đời BỘ SƯU TẬP VÒNG TAY MỆNH THỦY. Với
        mục đích giúp khách hàng thân thương của mình có thể sở hữu những chiếc
        vòng trầm hương hợp với mệnh phong thủy của mình; mang lại sự may mắn và
        suôn sẻ trong cuộc sống. Hãy cùng xem qua BST này nhé!
      </p>
    </div>
  );
}

export default MenhThuy;
