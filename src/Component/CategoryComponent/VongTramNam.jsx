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
    ]
    //   nextArrow: <NextArrow />,
    //   prevArrow: <PrevArrow />,
};

function VongTramNam() {
    return (
        <div className="bg-gray-100 p-5 pb-3 mt-20">
            <div className="py-2">
                <h2 className="font-bold text-2xl pb-3 text-center">
                    ƯU ĐÃI ĐỘC QUYỀN ONLINE THÁNG 06
                </h2>

                <Slider {...settings} style={{}}>
                    <div
                        class="w-full p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
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
                            <CopyButton textToCopy={"200k4790"}/>
                        </div>
                    </div>

                    <div
                        class="w-full p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ml-4">
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
                            <CopyButton textToCopy={"200k4790"}/>
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
                    <Link
                        to="/productCategory/vong-tram-huong-nu"
                        className="text-[#3ea6ff] hover:text-[#fab555]"
                    >
                        Vòng tay Trầm hương Nữ
                    </Link>{" "}
                    là vật phẩm cực kỳ quý giá, thời thượng và được rất nhiều người ưa
                    chuộng. <strong>Thiên Mộc Hương</strong> với hơn 40 năm kinh nghiệm
                    chế tác Trầm Hương giúp bạn dễ dàng chọn lựa sản phẩm phù hợp cho
                    riêng mình.
                </p>
                <h3 className="text-3xl py-4 font-bold">
                    Ý nghĩa của vòng tay trầm hương dành cho Nam
                </h3>
                <div className="my-3">
                    <div className="w-96 mx-auto">
                        <img
                            className=" lg:w-96"
                            src="https://thienmochuong.com/wp-content/uploads/2023/04/vong-tram-huong-ho-ly-philip.jpg"
                            alt="Vòng tay trầm hương"
                        />
                    </div>
                    <div className="w-96 mx-auto bg-gray-200 py-1">
                        <p className=" text-center b-0">
              <span className="font-semibold italic">
                Sản phẩm vòng trầm hương 108 hồ ly vàng là món trang sức tinh tế
                cho phái nữ
              </span>
                        </p>
                    </div>
                </div>

                <blockquote
                    class="px-4 py-0  border-l-4 border-[#fab55a] bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                    <p class="text-base italic font-medium leading-relaxed text-gray-900 dark:text-white">
                        Trang sức
                        <strong> Vòng tay Trầm Hương Nữ Thiên Mộc Hương </strong>
                        luôn hướng tới vẻ đẹp độc đáo, mạnh mẽ, quyết đoán cho phái đẹp. Bên
                        cạnh đó là những sản phẩm tinh tế, sang trọng, quý phát dành cho
                        phái nữ từ gỗ Trầm Hương .
                    </p>
                </blockquote>

                <p className="leading-relaxed text-justify pt-2">
                    <Link
                        to="/productCategory/vong-tram-huong-nu"
                        className="text-[#3ea6ff] hover:text-[#fab555]"
                    >
                        Vòng tay Trầm hương nữ
                    </Link>{" "}
                    còn giúp người đeo gặp được nhiều vận may. Bên cạnh đó, nó còn phù hộ
                    cho gia chủ trong sự nghiệp cũng như chuyện tình cảm.
                </p>
            </div>
            <h3 className="text-3xl py-4 font-bold">
                3 mẹo chọn chiếc Vòng tay trầm hương Nữ phù hợp cho phái đẹp
            </h3>
            <div className="my-3">
                <div className="w-96 mx-auto">
                    <img
                        className=" lg:w-96"
                        src="https://thienmochuong.com/wp-content/uploads/2023/03/cach-deo-vong-tram-108-hat-6.jpg"
                        alt="Vòng tay trầm hương"
                    />
                </div>
                <div className="w-96 mx-auto bg-gray-200 py-1">
                    <p className=" text-center b-0">
            <span className="font-semibold italic">
              Chọn được một chiếc vòng tay trầm hương nữ đẹp không phải dễ dàng
            </span>
          </p>
        </div>
      </div>
      <p className="leading-relaxed text-justify">
        Ngày nay, vòng trầm hương được biết đến như một vật phẩm quý giá nhiều
        công dụng hữu ích được nữ giới ưa chuộng sử dụng như một món trang sức
        thời thượng. Nhưng để chọn được chiếc vòng tay phong trầm hương phù hợp
        là việc làm không hề dễ. Bạn đừng lo lắng gì cả, dưới đây là một số mẹo
        giúp bạn chọn được vòng tay thích hợp:
      </p>
      <h3 className="text-3xl font-bold">
        Chọn vòng đeo tay nữ có màu sắc hợp bản mệnh
      </h3>
      <div className="my-3">
        <div className="w-96 mx-auto">
          <img
            className=" lg:w-96"
            src="https://thienmochuong.com/wp-content/uploads/2021/10/vong-tram-huong-nu-1.jpg"
            alt="Vòng tay trầm hương"
          />
        </div>
        <div className="w-96 mx-auto bg-gray-200 py-1">
          <p className=" text-center b-0">
            <span className="font-semibold italic">
              Một chiếc vòng có kích thước phù hợp sẽ tạo cho bạn cảm giác thoải
              mái trong quá trình sử dụng
            </span>
          </p>
        </div>
      </div>
      <p className="leading-relaxed text-justify">
        Với sự đa dạng trong thiết kế, mỗi chiếc vòng trầm hương đều được Thiên
        Mộc Hương tạo ra để đáp ứng đúng nhu cầu của người dùng. Cho dù bạn là
        ai, bạn có thể lựa chọn một chiếc vòng mang phong cách riêng, từ kiểu
        dáng đến màu sắc, để thể hiện phong cách của mình. Dưới đây là cách chọn
        màu vòng trầm hương hợp mệnh:
      </p>
      <ul class="list-disc ml-5 mb-[1.3em]">
        <li className="mb-1">
          Người thuộc mệnh Kim: Nên chọn màu vàng, màu nâu đất, màu trắng hoặc
          màu bạc.
        </li>
        <li className="mb-1">
          Người thuộc mệnh Mộc: Charm xanh lá cây, đen hoặc xanh nước biển là
          lựa chọn lý tưởng.
        </li>
        <li className="mb-1">
          Người thuộc mệnh Thủy: Charm màu xanh đen và màu trắng sẽ làm nổi bật
          và hợp mệnh.
        </li>
        <li className="mb-1">
          Người thuộc mệnh Hỏa: Màu trắng và màu tím hợp mệnh, giúp đem lại sự
          nổi bật và cuốn hút.
        </li>
        <li className="mb-1">
          Người thuộc mệnh Thổ: Màu vàng hoặc hồng hợp mệnh sẽ mang đến sự ấm áp
          và duyên dáng.
        </li>
      </ul>
      <p className="leading-relaxed text-justify">
        Ngày nay, vòng tay trầm hương cho phái nữ đã trở thành một sự kết hợp
        tuyệt vời từ nhiều chất liệu (vàng, bạc hoặc đá) và các charm độc đáo.
        Bên cạnh đó, còn có rất nhiều sự đa dạng trong màu sắc và kiểu dáng để
        các quý cô có thể lựa chọn.
      </p>
      <h3 className="text-3xl font-bold">
        Chú trọng kích thước của vòng hạt trầm hương nữ
      </h3>
      <div className="my-3">
        <div className="w-96 mx-auto">
          <img
            className=" lg:w-96"
            src="https://thienmochuong.com/wp-content/uploads/2020/08/Vong-tay-Tram-Huong-Thien-Moc-Huong-2021-96.jpg"
            alt="Vòng tay trầm hương"
          />
        </div>
        <div className="w-96 mx-auto bg-gray-200 py-1">
          <p className=" text-center b-0">
            <span className="font-semibold italic">
              Vòng trầm hương được xem là món phụ kiện thể hiện đẳng cấp của các
              quý ông
            </span>
          </p>
        </div>
      </div>
      <p className="leading-relaxed text-justify pt-2">
        Cách chọn vòng trầm hương để tạo điểm nhấn cho trang phục, các chàng
        trai nên chọn những mẫu không quá sặc sỡ để thể hiện phong cách nam tính
        mạnh mẽ. Bạn cũng tránh chọn mẫu có thiết kế quá phức tạp như nữ giới mà
        thay vào đó hãy đeo sản phẩm đảm bảo yếu tố lịch lãm, đẳng cấp mang lại
        tự tin cho bạn khi đeo.
      </p>
      <h3 className="text-3xl font-bold">
        Cần lưu ý điều gì khi sử dụng trang sức vòng trầm đeo tay cho nam?
      </h3>
      <p className="leading-relaxed text-justify pt-2">
        Khi đeo vòng tay trầm hương cho nam, các chàng trai cần lưu ý một số
        điều để vòng trầm phát huy tác dụng tốt:
      </p>
      <ul class="list-disc ml-5 mb-[1.3em]">
        <li className="mb-1">
          Không để vòng trầm nam tiếp xúc với nước nhiều. Trong trường hợp phải
          làm các công việc nặng bạn nên gỡ vòng trầm ra để hạn chế tình trạng
          va đập mạnh khiến vòng bị nứt bể.
        </li>
        <li className="mb-1">
          Hạn chế để vòng tiếp xúc với các chất tẩy rửa trong cuộc sống thường
          nhật để tránh làm mất mùi hương thơm vốn có của trầm.
        </li>
        <li className="mb-1">
          Nên để vòng trầm hương nam tránh xa những nơi có nhiệt độ quá nóng bởi
          dễ làm bay hơi tinh dầu trầm hương bên trong nếu phải tiếp xúc nóng
          trong thời gian dài.
        </li>
      </ul>

      <div className="my-3">
        <div className="w-96 mx-auto">
          <img
            className=" lg:w-96"
            src="https://thienmochuong.com/wp-content/uploads/2019/07/Vong-tay-Tram-Huong-32.jpg"
            alt="Vòng tay trầm hương"
          />
        </div>
        <div className="w-96 mx-auto bg-gray-200 py-1">
          <p className=" text-center b-0">
                    </p>
                </div>
            </div>
            <p className="leading-relaxed text-justify pt-2">
                Điều quan trọng là người dùng nên xác định chiếc vòng nào sẽ phù hợp bản
                thân mình, với công việc… Kích thước vòng hạt phù hợp sẽ càng làm tăng
                thêm tính thẩm mỹ và tạo điểm nhấn ấn tượng cho phong cách của bạn. Các
                kích thước hạt phổ biến với các quý cô 6mm – 7mm – 8mm. Tuy nhiên, tuỳ
                vào sở thích cá nhân mà bạn có thể chọn các kích cỡ hạt lớn hơn hoặc nhỏ
                hơn.
            </p>
            <h3 className="text-3xl py-4 font-bold">
                Chọn vòng tay trầm hương phù hợp với trang phục
            </h3>
            <div className="my-3">
                <div className="w-96 mx-auto">
                    <img
                        className=" lg:w-96"
                        src="https://thienmochuong.com/wp-content/uploads/2020/08/ho-ly-2.jpg"
                        alt="Vòng tay trầm hương"
                    />
                </div>
                <div className="w-96 mx-auto bg-gray-200 py-1">
                    <p className=" text-center b-0">
            <span className="font-semibold italic">
              Vòng tay trầm hương thiên mộc hương Lá bùa Tây Tạng dành cho nam
              giới mệnh Thổ
            </span>
                    </p>
                </div>
            </div>
            <p className="leading-relaxed text-justify pt-2">
                Ngày nay, ngoại hình đóng vai trò thiết thực trong cuộc sống. Điều đó
                thể hiện rõ trong cách lựa chọn vòng tay trầm hương nữ phù hợp với phong
                cách ăn mặc. Giúp phái đẹp trở nên sang trọng và thanh lịch hơn hẳn. Vậy
                nên bạn không nên chọn bừa trang sức vòng tay. Bởi vì một chiếc vòng độc
                đáo, khác biệt sẽ khiến bạn trở nên đặc biệt và ấn tượng hơn bao hết.
            </p>
            <h3 className="text-3xl py-4 font-bold">
                Địa chỉ mua vòng tay trầm hương nữ uy tín
            </h3>
            <p className="leading-relaxed text-justify pt-2">
                Một trong những lựa chọn hàng đầu khi mua vòng tay trầm hương nữ chính
                là Thiên Mộc Hương
            </p>
            <div className="my-3">
                <div className="w-96 mx-auto">
                    <img
                        className=" lg:w-96"
                        src="https://thienmochuong.com/wp-content/uploads/2020/08/ho-ly-2.jpg"
                        alt="Vòng tay trầm hương"
                    />
                </div>
                <div className="w-96 mx-auto bg-gray-200 py-1">
                    <p className=" text-center b-0">
          </p>
        </div>
      </div>

      <h3 className="text-3xl font-bold">
        Địa chỉ mua vòng tay trầm hương nam uy tín
      </h3>
      <p className="leading-relaxed text-justify pt-2">
        Nếu bạn đang có nhu cầu mua vòng tay trầm hương nam nhưng vẫn chưa tìm
        ra địa chỉ đáng tin cậy để “gửi gắm” niềm tin, vậy thì đừng bỏ qua Thiên
        Mộc Hương. Đây là nơi cung cấp rất nhiều sản phẩm từ trầm hương chất
        lượng cao cấp với giá thành phải chăng nhất.
      </p>
      <p className="leading-relaxed text-justify pt-2">
        Mọi sản phẩm vòng tay trầm hương cho nam tại nhà Thiên Mộc Hương đều
        được tạo nên từ bàn tay khéo léo, tỉ mỉ và cẩn thận của người nghệ nhân.
        Mọi chi tiết đều vô cùng tinh xảo, do đó đây là item được rất nhiều đấng
        mày râu lựa chọn làm trang sức đeo tay hàng ngày.
      </p>

      <div className="my-3">
        <div className="w-96 mx-auto">
          <img
            className=" lg:w-96"
            src="https://thienmochuong.com/wp-content/uploads/2022/07/cua-hang-thien-moc-huong.jpeg"
            alt="Vòng tay trầm hương"
          />
        </div>
        <div className="w-96 mx-auto bg-gray-200 py-1">
          <p className=" text-center b-0">
            <span className="font-semibold italic">
              Cửa hàng Thiên Mộc Hương HCM
            </span>
          </p>
        </div>
      </div>
      <p className="leading-relaxed text-justify pt-2">
        Thiên Mộc Hương cam kết sẽ mang đến cho quý khách hàng sản phẩm uy tín,
        chất lượng; được làm từ 100% trầm hương tự nhiên. Sản phẩm trải qua quá
        trình gia công thủ công bởi những nghệ nhân từ làng nghề Thủy Xuân –
        Huế. Khi có nhu cầu, bạn cần liên hệ với chúng tôi – nhà trực tiếp sản
        xuất uy tín với hơn 40 năm trong ngành nghề, với đội ngủ kỹ sư có chuyên
        môn cao, tâm huyết.
      </p>
      <p className="leading-relaxed text-justify pt-4 pb-4">
        <strong>Website</strong>: https://thienmochuong.com
      </p>
      <p className="leading-relaxed text-justify pt-2 pb-4">
        <strong>Điện thoại</strong>: 0933.348.368
      </p>
      <p className="leading-relaxed text-justify pt-2 pb-4">
        <strong>Địa chỉ cửa hàng:</strong>:
      </p>
      <p className="leading-relaxed text-justify pt-2 pb-4">
        <strong>Hà Nội: 120 Hai Bà Trưng, Quận Hoàn Kiếm, Hà Nội</strong>:
      </p>
      <div className="pb-8 mx-auto w-3/4 pl-4 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14898.531693015568!2d105.8247304!3d21.0073466!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac8109765ba5%3A0xd84740ece05680ee!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBUaOG7p3kgbOG7o2k!5e0!3m2!1svi!2s!4v1687060620214!5m2!1svi!2s"
          width="100%"
          height="450"
          style={{ border: "0px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default VongTramNam;
