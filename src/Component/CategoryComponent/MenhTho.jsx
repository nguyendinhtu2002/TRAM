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
function MenhTho() {
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
    //       Mỗi người đều mang trong mình một mệnh phong thủy khác nhau tùy thuộc
    //       vào năm sinh. Trong bài viết này Trầm Hương Lê Trà sẽ cùng bạn tìm hiểu
    //       về vòng đeo tay bằng gỗ trầm hương cho mệnh Thổ. Từ đó cùng nhau đi
    //       tìm câu trả lời về màu sắc may mắn cho mệnh Thổ.
    //     </p>
    //     <h3 className="text-3xl font-bold py-4">Mệnh Thổ gồm những tuổi nào</h3>
    //     <p className="leading-relaxed text-justify">
    //       Trước khi trả lời cho những câu hỏi “Mệnh Thổ nên đeo đá màu gì? Mệnh
    //       Thổ đeo vòng đá màu gì?”. Bạn cần nắm rõ những tuổi nào sẽ là mệnh
    //       Thổ. Dưới đây là danh sách bạn có thể tham khảo:
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">
    //       Mậu Dần : 1938 – 1998
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">
    //       Tân Sửu: 1961 – 2021
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">
    //       Canh Ngọ: 1990 – 1930
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">Kỷ Mão: 1939 – 1999</p>
    //     <p className="leading-relaxed text-justify py-2">
    //       Mậu Thân: 1968 – 2028
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">
    //       Tân Mùi: 1991 – 1931
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">
    //       Bính Tuất: 1946 – 2006
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">Kỷ Dậu:1969, 2029</p>
    //     <p className="leading-relaxed text-justify py-2">
    //       Đinh Hợi :1947 – 2007
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">
    //       Bính Thìn : 1976 – 2036
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">
    //       Canh Tý: 1960 – 2020
    //     </p>
    //     <p className="leading-relaxed text-justify py-2">
    //       Đinh Tỵ: 1977 – 2037
    //     </p>
    //   </div>
    //   <h3 className="text-3xl font-bold py-4">
    //     Màu sắc phong thủy cho mệnh Thổ
    //   </h3>
    //   <p className="leading-relaxed text-justify pb-2">
    //     Trước tiên hãy xét về màu tương sinh, màu tương khắc của mệnh Thổ để đưa
    //     ra câu trả lời phù hợp nhất. Thông qua phần này chắc chắn bạn sẽ trả lời
    //     được vô vàn những câu hỏi quan trọng như “Mệnh Thổ nên đeo đá màu gì?
    //     Mệnh Thổ đeo vòng đá màu gì?”.
    //   </p>
    //   <p className="leading-relaxed text-justify pb-2">
    //     Kim – Mộc – Thủy – Hỏa – Thổ được xem là nguồn gốc của vạn vật trên vũ
    //     trụ theo thuyết ngũ hành của người phương Đông. Chúng tồn tại tuần hoàn
    //     theo 2 chiều tương sinh và tương khắc lẫn nhau. Bao gồm Thổ sinh Kim;
    //     Kim sinh Thủy; Kim khắc Mộc; Hỏa khắc Kim.
    //   </p>
    //   <h3 className="text-3xl font-bold py-4">1. Màu tương sinh</h3>
    //   <p className="leading-relaxed text-justify pb-2">
    //     Giống với mệnh Kim, màu vàng được coi là màu mang lại may mắn, năng
    //     lượng dồi dào cho chủ sở hữu. Theo quan niệm phương Tây thì màu vàng đại
    //     diện cho sự kính trọng và biết ơn. Còn nói về mệnh Thổ thì không thể
    //     nhắc đến màu vàng nâu. Đem lại cảm giác bình yên và an toàn cho thân
    //     chủ.
    //   </p>
    //   <p className="leading-relaxed text-justify pb-2">
    //     Theo ngũ hành tương sinh thì Hỏa sinh Thổ, vì thế những màu sắc thuộc
    //     mệnh Hỏa như đỏ, hồng, cam, tím cũng vô cùng thích hợp với người mệnh
    //     Thổ.
    //   </p>
    //   <h3 className="text-3xl font-bold py-4">2. Màu tương khắc </h3>
    //   <p className="leading-relaxed text-justify pb-2">
    //     Theo ngũ hành thì Mộc khắc Thổ vì thế những màu sắc như xanh lục đậm,
    //     xanh da trời, xanh lá cây là màu cần tránh. Hiểu đơn giản Mộc đại diện
    //     cho cây, sống sinh trưởng khi hút các chất dinh dưỡng từ Thổ. Vì thế
    //     người mệnh Thổ đeo vòng màu mệnh Mộc sức khỏe sẽ suy yếu, công việc bị
    //     cản trở; tình duyên lận đận.
    //   </p>
    //   <p className="leading-relaxed text-justify pb-2">
    //     Nếu bạn chọn được những màu sắc hợp với người mạng Thổ thì chắc chắn sức
    //     khỏe của bạn sẽ được bảo vệ, thu hút tiền bạc của cải, sự nghiệp hay
    //     đường công danh cũng thuận lợi hơn.
    //   </p>
    //   <p className="leading-relaxed text-justify pb-2">
    //     Tình duyên của người mệnh này cũng diễn ra tốt hơn hẳn, quan trọng hơn
    //     nữa là tránh được tà khí và rủi ro có thể xảy ra. Trước khi quyết định
    //     lựa chọn yếu tố nào đó liên quan đến màu sắc nhất là sử dụng vĩnh viễn
    //     thì rất cần thiết phải lựa chọn màu hợp với mệnh hay mạng của mình.
    //   </p>
    //   <h3 className="text-3xl font-bold ">
    //     Những vật phẩm may mắn cho mệnh Thổ
    //   </h3>
    //   <h3 className="text-3xl font-bold py-2">1. Đá thạch anh</h3>
    //   <p className="leading-relaxed text-justify py-2">
    //     Đs thạch anh mang nguồn năng lượng đặc biệt giúp người đeo cải thiện đầu
    //     óc và sự tập trung. Ngoài ra, thạch anh có đủ màu sắc phù hợp với cả năm
    //     cũng mệnh kim, mộc, thủy, hỏa, thổ trong ngũ hành. Ngoài ra, loại đá này
    //     còn thu hút may mắn về tiền tài, sức khỏe và cả tiền bạc. Đá thạch anh
    //     rất được trọng dụng trong việc chọn trang sức phong thủy.
    //   </p>
    //
    //   <h3 className="text-3xl font-bold py-4">2. Đá Mắt hổ</h3>
    //   <p className="leading-relaxed text-justify ">
    //     Đá mắt hổ giúp ổn định tâm lý và tinh thần cho người đeo. Với văn hóa
    //     phương Đông, loại đá này là biểu tượng của may mắn và thịnh vượng. Ngoài
    //     ra, nó còn mang năng lượng của sự chở che, bảo bọc khi chủ nhân đi công
    //     tác hay đi đến những địa điểm lạ.
    //   </p>
    //   <h3 className="text-3xl font-bold py-4"> 3. Trầm hương</h3>
    //   <p className="leading-relaxed text-justify ">
    //     Vòng trầm hương luôn là sự lựa chọn phù hợp cho tất cả các cung mệnh.
    //     Trầm mang giá trị phong thủy rất lớn, chủ về tài vận và bình an cho chủ
    //     nhân. Trầm hương kết hợp với đá càng làm cho chiếc vòng có ý nghĩa và
    //     mới lạ hơn.
    //   </p>
    //   <p className="leading-relaxed text-justify ">
    //     BST Vòng tay mệnh Thổ được Trầm Hương Lê Trà nghiên cứu để giúp khách hàng
    //     cho có thêm nhiều sự lựa chọn về vòng tay phong thủy may mắn cho chính
    //     mình.
    //   </p>
    // </div>
  );
}

export default MenhTho;
