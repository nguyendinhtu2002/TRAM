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
function VongTramNam() {
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
        </Slider>
        <p className="leading-relaxed text-justify ">
          <Link
            to="/productCategory/vong-tram-huong-nu"
            className="text-[#3ea6ff] hover:text-[#fab555]"
          >
            Vòng tay Trầm hương Nữ
          </Link>{" "}
          là vật phẩm cực kỳ quý giá, thời thượng và được rất nhiều người ưa
          chuộng. <strong>Trầm Hương Lê Trà</strong> với hơn 40 năm kinh nghiệm
          chế tác Trầm Hương giúp bạn dễ dàng chọn lựa sản phẩm phù hợp cho
          riêng mình.
        </p>
        <h3 className="text-3xl font-bold">
          Đặc điểm của vòng trầm hương cho nam
        </h3>
        <p className="leading-relaxed text-justify ">
          Vòng tay trầm hương nam là sản phẩm được nhiều đấng mày râu lựa chọn
          hiện nay. Với vòng trầm hương chất lượng, người dùng có thể nhìn rõ
          các vân gỗ trên vòng chỉ bằng mắt thường. Mùi hương của sản phẩm cũng
          nhẹ nhàng, không quá gắt. Khi đeo lên tay bạn sẽ ngửi thấy mùi thơm
          dịu nhờ quá trình ma sát vòng với da tay làm tiết ra mùi hương.
        </p>
        <div className="my-3">
          <div className="lg:w-96 mx-auto">
            <img
              className=" lg:w-96"
              src="https://thienmochuong.com/wp-content/uploads/2021/10/vong-tram-huong-nam-400x400.jpg"
              alt="Vòng tay trầm hương"
            />
          </div>
          <div className="lg:w-96 mx-auto bg-gray-200 py-1">
            <p className=" text-center b-0">
              <span className="font-semibold italic">
                Vòng Trầm Hương cho nam giới
              </span>
            </p>
          </div>
        </div>

        <p className="leading-relaxed text-justify pt-2">
          Vòng trầm hương nam có đặc điểm khác so với vòng nữ là sản phẩm có
          kích thước hạt lớn hơn các size vòng nữ, thường là 10 ly, 14 ly hay 18
          ly tùy vào sở thích mỗi người. Về hình dạng, vòng trầm hương cho nam
          hay được thiết kế với dạng trụ trúc, dạng mắc tử, đồng hồ với kiểu
          dáng mạnh mẽ, thanh lịch. Bạn có thể yêu cầu phía người bán mix vòng
          cùng với các loại charm vàng hay bạc để tăng thêm tính thẩm mỹ hơn.
        </p>
      </div>
      <h3 className="text-3xl font-bold">
        Ý nghĩa đặc biệt vòng tay trầm hương đối với nam giới
      </h3>
      <div className="my-3">
        <div className="lg:w-96 mx-auto">
          <img
            className=" lg:w-96"
            src="https://thienmochuong.com/wp-content/uploads/2022/02/avatar-danh-muc-web-vong-tram-huong-cho-nam-e1644400718227.jpg"
            alt="Vòng tay trầm hương"
          />
        </div>
        <div className="lg:w-96 mx-auto bg-gray-200 py-1">
          <p className=" text-center b-0">
            <span className="font-semibold italic">
              Vòng tay trầm hương nam Trầm Hương Lê Trà{" "}
            </span>
          </p>
        </div>
      </div>
      <blockquote class="px-4 py-0  border-l-4 border-[#fab55a] bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
        <p class="text-base italic font-medium leading-relaxed text-gray-900 dark:text-white">
          Trang sức
          <strong> Vòng tay Trầm Hương Nữ Trầm Hương Lê Trà </strong>
          luôn hướng tới vẻ đẹp độc đáo, mạnh mẽ, quyết đoán cho phái đẹp. Bên
          cạnh đó là những sản phẩm tinh tế, sang trọng, quý phát dành cho phái
          nữ từ gỗ Trầm Hương .
        </p>
      </blockquote>
      <p className="leading-relaxed text-justify pt-2">
        Vòng tay trầm hương Nam còn giúp người đeo gặp được nhiều vận may. Bên
        cạnh đó, vòng trầm hương còn phù hộ cho gia chủ trong sự nghiệp kinh
        doanh, làm ăn thuận lợi.
      </p>
      <h3 className="text-3xl font-bold">
        Mẹo chọn vòng tay trầm hương nam phù hợp dành cho phái mạnh
      </h3>
      <p className="leading-relaxed text-justify pt-2">
        Thị trường hiện nay có rất nhiều mẫu mã đa dạng, phù hợp với nhiều lứa
        tuổi của đàn ông. Do vậy, để chọn được chiếc vòng tay trầm hương nam phù
        hợp theo từng cá nhân là việc làm không hề dễ. Hãy để Trầm Hương Lê Trà
        mách bạn một số mẹo chọn vòng tay trầm hương nam phù hợp nhé.
      </p>
      <h3 className="text-3xl font-bold">
        Chọn vòng trầm hương nam có màu sắc hợp bản mệnh
      </h3>
      <div className="my-3">
        <div className="lg:w-96 mx-auto">
          <img
            className=" lg:w-96"
            src="https://thienmochuong.com/wp-content/uploads/2021/10/vong-tram-huong-nam-4.jpg"
            alt="Vòng tay trầm hương"
          />
        </div>
        <div className="lg:w-96 mx-auto bg-gray-200 py-1">
          <p className=" text-center b-0">
            <span className="font-semibold italic">
              Chọn vòng trầm hương phù hợp cung mệnh cho phái nam
            </span>
          </p>
        </div>
      </div>
      <p className="leading-relaxed text-justify">
        Mỗi chiếc vòng trầm hương được thiết kế đa dạng theo nhu cầu của người
        dùng. Các bạn nam có thể chọn chiếc vòng có kiểu dáng, màu sắc để thể
        hiện phong thái riêng của mình. Nhưng muốn mang lại vận may, bình an,
        may mắn cần chọn vòng đá có màu sắc hợp mệnh như sau:
      </p>
      <ul class="list-disc ml-5 mb-[1.3em]">
        <li className="mb-1">
          Mệnh Kim: màu vàng, nâu đất, màu trắng, màu bạc
        </li>
        <li className="mb-1">Mệnh Mộc: xanh lá cây, đen, xanh nước biển</li>
        <li className="mb-1">Mệnh Thủy: màu xanh đen, màu trắng</li>
        <li className="mb-1">Mệnh Hỏa: màu trắng, màu tím</li>
        <li className="mb-1">Mệnh Thổ: màu vàng hoặc phớt hồng</li>
      </ul>

      <h3 className="text-3xl font-bold">
        Chú trọng kích thước hạt của vòng trầm hương nam
      </h3>
      <div className="my-3">
        <div className="lg:w-96 mx-auto">
          <img
            className=" lg:w-96"
            src="https://thienmochuong.com/wp-content/uploads/2021/10/vong-tram-huong-nam-5.jpg"
            alt="Vòng tay trầm hương"
          />
        </div>
        <div className="lg:w-96 mx-auto bg-gray-200 py-1">
          <p className=" text-center b-0">
            <span className="font-semibold italic">
              Một chiếc vòng có kích thước phù hợp sẽ tạo cho bạn cảm giác thoải
              mái trong quá trình sử dụng
            </span>
          </p>
        </div>
      </div>
      <p className="leading-relaxed text-justify pt-2">
        Chọn kích thước hạt của vòng phù hợp sẽ cho bạn một trải nghiệm tốt
        trong quá trình đeo. Hơn nữa, kích thước phù hợp sẽ càng làm tăng thêm
        tính thẩm mỹ, tạo điểm nhấn ấn tượng cho phong cách của các quý ông.
      </p>
      <h3 className="text-3xl font-bold">
        Chọn vòng tay phù hợp với trang phục
      </h3>
      <p className="leading-relaxed text-justify pt-2">
        Ngày nay, không chỉ nữ giới, cả nam giới cũng rất chú trọng vẻ ngoài của
        mình. Điều đó thể hiện rõ trong cách lựa chọn vòng tay trầm hương nam
        phù hợp với phong cách ăn mặc, để giúp quý ông trở nên tinh tế lịch lãm
        nhất. Vậy nên bạn không nên chọn bừa trang sức vòng tay bởi một chiếc
        vòng độc đáo, khác biệt sẽ khiến bạn trở nên đặc biệt và ấn tượng hơn
        hết.
      </p>
      <div className="my-3">
        <div className="lg:w-96 mx-auto">
          <img
            className=" lg:w-96"
            src="https://thienmochuong.com/wp-content/uploads/2019/07/V%C3%B2ng-Tay-Tr%E1%BA%A7m-H%C6%B0%C6%A1ng-Ph%C3%BAc-L%E1%BB%99c-Th%E1%BB%8D1-400x400.jpg"
            alt="Vòng tay trầm hương"
          />
        </div>
        <div className="lg:w-96 mx-auto bg-gray-200 py-1">
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
        <div className="lg:w-96 mx-auto">
          <img
            className=" lg:w-96"
            src="https://thienmochuong.com/wp-content/uploads/2019/07/Vong-tay-Tram-Huong-32.jpg"
            alt="Vòng tay trầm hương"
          />
        </div>
        <div className="lg:w-96 mx-auto bg-gray-200 py-1">
          <p className=" text-center b-0">
            <span className="font-semibold italic">
              Vòng tay trầm hương Trầm Hương Lê Trà Lá bùa Tây Tạng dành cho nam
              giới mệnh Thổ
            </span>
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
        Mọi sản phẩm vòng tay trầm hương cho nam tại nhà Trầm Hương Lê Trà đều
        được tạo nên từ bàn tay khéo léo, tỉ mỉ và cẩn thận của người nghệ nhân.
        Mọi chi tiết đều vô cùng tinh xảo, do đó đây là item được rất nhiều đấng
        mày râu lựa chọn làm trang sức đeo tay hàng ngày.
      </p>

      <div className="my-3">
        <div className="lg:w-96 mx-auto">
          <img
            className=" lg:w-96"
            src="https://thienmochuong.com/wp-content/uploads/2022/07/cua-hang-thien-moc-huong.jpeg"
            alt="Vòng tay trầm hương"
          />
        </div>
        <div className="lg:w-96 mx-auto bg-gray-200 py-1">
          <p className=" text-center b-0">
            <span className="font-semibold italic">
              Cửa hàng Trầm Hương Lê Trà HCM
            </span>
          </p>
        </div>
      </div>
      <p className="leading-relaxed text-justify pt-2">
        Trầm Hương Lê Trà cam kết sẽ mang đến cho quý khách hàng sản phẩm uy tín,
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
