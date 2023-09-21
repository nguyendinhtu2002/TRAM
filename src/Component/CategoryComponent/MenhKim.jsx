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
function MenhKim() {
  return (
      <></>
    // <div className="bg-gray-100 px-5 pb-3 mt-20">
    //   <div className="py-2">
    //     <h2 className="font-bold text-2xl pb-3 text-center mb-4">
    //       ƯU ĐÃI ĐỘC QUYỀN ONLINE THÁNG 06
    //     </h2>
    //
    //     <Slider {...settings} style={{}}>
    //       <div class="w-full p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    //         <div className="mb-4">
    //           <p class="mb-2 text-base font-medium  dark:text-white">
    //             <strong> 200k4790</strong>
    //           </p>
    //         </div>
    //         <div className="mb-4">
    //           <p>Số lượng: 100</p>
    //         </div>
    //         <div className="mb-4">
    //           <p>
    //             Giảm 200k cho đơn hàng từ 4.790.000 khi mua trực tiếp trên
    //             Website{" "}
    //           </p>
    //         </div>
    //
    //         <div class="items-center justify-center space-y-4 sm:flex ">
    //           <div className="code">
    //             Mã:
    //             <span className="uppercase"> 200k4790</span>
    //           </div>
    //           <CopyButton textToCopy={"200k4790"} />
    //         </div>
    //       </div>
    //
    //       <div class="w-full p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ml-4">
    //         <div className="mb-4">
    //           <p class="mb-2 text-base font-medium  dark:text-white">
    //             <strong> 200k4790</strong>
    //           </p>
    //         </div>
    //         <div className="mb-4">
    //           <p>Số lượng: 100</p>
    //         </div>
    //         <div className="mb-4">
    //           <p>
    //             Giảm 200k cho đơn hàng từ 4.790.000 khi mua trực tiếp trên
    //             Website{" "}
    //           </p>
    //         </div>
    //
    //         <div class="items-center justify-center space-y-4 sm:flex ">
    //           <div className="code">
    //             Mã:
    //             <span className="uppercase"> 200k4790</span>
    //           </div>
    //           <CopyButton textToCopy={"200k4790"} />
    //         </div>
    //       </div>
    //     </Slider>
    //     <p className="leading-relaxed text-justify pt-2 pb-4 ">
    //       Để chọn vòng tay phong thủy mệnh kim, yếu tố cần phải cân nhắc là màu
    //       sắc. Bạn có thể dựa vào quy luật tương sinh và tương hợp về màu sắc để
    //       lựa chọn cho mình chiếc vòng gỗ trầm hương xịn may mắn.
    //     </p>
    //     <h3 className="text-3xl font-bold py-4">Mệnh kim gồm những tuổi nào</h3>
    //
    //     <p className="leading-relaxed text-justify py-2">
    //       – Tuổi Nhâm Thân sinh năm 1932, 1992
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">
    //       – Tuổi Ất Mùi sinh năm 1955, 2015
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">
    //       – Tuổi Giáp Tý sinh năm 1984, 1924
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">
    //       – Tuổi Quý Dậu sinh năm 1933, 1993
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">
    //       – Tuổi Nhâm Dần sinh năm 1962, 2022
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">
    //       – Tuổi Ất Sửu sinh năm 1985, 1925
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">
    //       – Tuổi Canh Thìn sinh năm 1940, 2000
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">
    //       – Tuổi Quý Mão sinh năm 1963, 2023
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">
    //       – Tuổi Tân Tỵ sinh năm 1941, 2001
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">
    //       – Tuổi Canh Tuất sinh năm 1970, 2030
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">
    //       – Tuổi Giáp Ngọ sinh năm 1954, 2014
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">
    //       – Tuổi Tân Hợi sinh năm 1971, 2031
    //     </p>
    //   </div>
    //   <h3 className="text-3xl font-bold py-4">
    //     Màu sắc phong thủy cho mệnh Kim
    //   </h3>
    //   <p className="leading-relaxed text-justify pb-2">
    //     Kim – Mộc – Thủy – Hỏa – Thổ được xem là nguồn gốc của vạn vật trên vũ
    //     trụ theo thuyết ngũ hành của người phương Đông. Chúng tồn tại tuần hoàn
    //     theo 2 chiều tương sinh và tương khắc lẫn nhau. Bao gồm Thổ sinh Kim;
    //     Kim sinh Thủy; Kim khắc Mộc; Hỏa khắc Kim.
    //   </p>
    //
    //   <h3 className="text-3xl font-bold py-4">1. Màu tương sinh</h3>
    //   <p className="leading-relaxed text-justify pb-2">
    //     Trong ngũ hành Kim Mộc Thủy Hỏa Thổ tổn tại mối quan hệ thúc đẩy lẫn
    //     nhau. Dựa vào nhau để tồn tại và phát triển. Đó chính là quy luật tương
    //     sinh. Theo quy tắc ngũ hành, thổ là nguồn gốc của kim, thổ sinh kim có
    //     nghĩa là đất tạo nên kim loại. Vì vậy, màu sắc tương sinh với mệnh kim
    //     sẽ là màu vàng và nâu đất. Ngoài ra còn có một số màu sắc tiêu biểu của
    //     kim chính là trắng, xám, ghi…
    //   </p>
    //
    //   <h3 className="text-3xl font-bold py-4">2. Màu tương khắc</h3>
    //   <p className="leading-relaxed text-justify pb-2">
    //     Người mệnh Kim có thể lựa chọn màu xanh – màu đại diện của mộc để làm
    //     màu sắc trang trí. Vì Kim khắc mộc, vì vậy sử dụng màu sắc của mệnh mộc
    //     sẽ không ảnh hưởng tới người mệnh Kim.
    //   </p>
    //   <p className="leading-relaxed text-justify pb-2">
    //     Lưu ý rằng người mệnh kim không nên sử dụng các loại đồ trang sức có màu
    //     đỏ, hồng, cam. Vì đây là những màu tượng trưng cho Hỏa. Đơn giản kim
    //     loại bị nung chảy ở nhiệt độ cao của Hỏa. Vì thế mệnh Kim cực kỳ khắc
    //     với mệnh Hỏa.
    //   </p>
    //
    //   <h3 className="text-3xl font-bold ">Vật phẩm may mắn cho mệnh Kim</h3>
    //   <p className="leading-relaxed text-justify py-2">
    //     Vật phẩm may mắn cho mạng kim có thể kể đến chính là Vòng tay trầm hương
    //     Bộ sưu tập vòng tay mệnh Kim là những món đồ nên sở hữu nếu nếu gia chủ
    //     muốn gặp nhiều vận may.
    //   </p>
    //   <p className="leading-relaxed text-justify py-2">
    //     Vòng trầm được chế tác từ gỗ trầm có số tuổi tích trầm ít nhất 10 năm.
    //     Trầm hương tuổi càng lớn thì giá trị càng cao. Từ xa xưa, những sản phẩm
    //     từ trầm được trọng dụng trong cung đình cho vua chúa, quan lại. Trải qua
    //     thời gian dài thừa hưởng tinh hoa của trời đất, trầm hương ngày được
    //     nâng cao giá trị cũng như công năng của mình.
    //   </p>
    //   <p className="leading-relaxed text-justify ">
    //     Không chỉ có tác dụng cho sức khỏe; vòng trầm mang đến may mắn, tài lộc
    //     cho người đeo trên con đường sự nghiệp và cả tình duyên. Lưu ý, đối với
    //     những chiếc vòng được kết hợp với charm đá quý, mạng kim nên lưu ý đến
    //     màu sắc hợp với cung mệnh của mình. Có như thế, vòng tay gỗ trầm mới
    //     phát huy hết tác dụng.
    //   </p>
    //   <p className="leading-relaxed text-justify ">
    //     Từ đó, Trầm Hương Lê Trà cho ra mắt BST vòng tay trầm hương này để giúp
    //     chủ nhân mệnh kim dễ dàng chọn lựa được chiếc vòng phù hợp nhất.
    //   </p>
    // </div>
  );
}

export default MenhKim;
