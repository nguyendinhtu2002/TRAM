import React from 'react'
import HeaderComponent from "../../Component/HeaderComponent/Header";
import Footer from "../../Component/FooterComponent/Footer";

function Blog() {
    return (
        <>
            <HeaderComponent></HeaderComponent>

            <div className="container my-5 mx-auto p-5">
                <h1 className="text-center uppercase text-3xl font-bold text-justify py-3">CHÍNH SÁCH BẢO VỆ THÔNG TIN
                    CÁ
                    NHÂN CỦA NGƯỜI TIÊU DÙNG </h1>
                <ul className="list-disc">
                    <li className="py-3  text-justify"><p>Người Tiêu Dùng hoặc Khách hàng sẽ được yêu cầu điền đầy đủ
                        các thông tin theo các trường
                        thông tin theo mẫu có sẵn trên Website thienmochuong.com như: Họ và Tên, địa chỉ (nhà riêng hoặc
                        văn phòng), địa chỉ email (công ty hoặc cá nhân), số điện thoại (di động, nhà riêng hoặc văn
                        phòng), các chi tiết thẻ tín dụng (là loại và số thẻ tín dụng, mã CVC, ngày tháng hết hạn,
                        tên chủ thẻ) và trong mức độ có thể, các tuỳ chọn… Thông tin này được yêu cầu để đặt và hoàn
                        tất việc đặt hàng online của Khách hàng (bao gồm gửi email xác nhận đặt hàng đến Khách
                        hàng).</p></li>
                    <li className="py-3 text-justify"><p>Về cookie và đèn báo hiệu web: Cookie là những thư mục dữ
                        liệu được lưu trữ tạm thời hoặc lâu dài trong ổ cứng máy tính của Khách hàng. Các cookie được
                        sử dụng để xác minh, truy tìm lượt (bảo vệ trạng thái) và duy trì thông tin cụ thể về việc
                        sử dụng và người sử dụng Website thienmochuong.com, như các tuỳ chọn cho trang web hoặc thông
                        tin về giỏ hàng điện tử của họ. Những thư mục cookie cũng có thể được các công ty cung cấp
                        dịch vụ quảng cáo đã ký kết Hợp đồng với Thiên Mộc Hương đặt trong máy tính của Khách hàng với
                        mục đích nêu trên và dữ liệu được thu thập bởi những cookie này là hoàn toàn vô danh. Nếu
                        không đồng ý, Khách hàng có thể xoá tất cả các cookie đã nằm trong ổ cứng máy tính của mình
                        bằng cách tìm kiếm các thư mục với “cookie” trong tên của nó và xoá đi. Trong tương lai, Khách
                        hàng có thể chỉnh sửa các lựa chọn trong trình duyệt của mình để các cookie (tương lai) bị
                        chặn; Xin được lưu ý rằng: Nếu làm vậy, Khách hàng có thể không sử dụng được đầy đủ các tính
                        năng của Website thienmochuong.com . Để biết thêm thông tin về (cách sử dụng và không nhận)
                        cookie, Khách hàng vui lòng truy cập vào website www.allaboutcookies.org.</p></li>
                    <li className="py-3 text-justify"><p>Đèn báo hiệu web: Là các sợi mã phần mềm nhỏ tượng trưng cho
                        yêu cầu về hình ảnh đồ thị trên 1 trang web hay email. Nó có thể có hoặc không có hình ảnh
                        đồ thị nhìn thấy được liên quan đến đèn báo hiệu web, và thông thường hình ảnh được thiết
                        kế để trộn lẫn vào nền của trang web hoặc email. Đèn báo hiệu web có thể được sử dụng vào
                        các mục đích như: báo cáo lưu lượng truy cập trang web, số khách truy cập, kiểm tra và báo
                        cáo quảng cáo, và tính cá nhân hoá. Đèn báo hiệu web mà Thiên Mộc Hương sử dụng chỉ để thu
                        thập dữ liệu vô danh.
                    </p></li>
                </ul>

                <ul className="list-decimal text-2xl font-bold">
                    <li className="py-3 text-justify"><h2 className="uppercase font-bold text-2xl">MỤC ĐÍCH THU THẬP
                        THÔNG TIN CÁ NHÂN CỦA NGƯỜI TIÊU DÙNG</h2>
                        <p className="text-base font-normal">Cung cấp dịch vụ cho Khách hàng và quản lý, sử dụng thông
                            tin cá nhân của Người Tiêu Dùng nhằm mục đích quản lý cơ sở dữ liệu về Người Tiêu Dùng và
                            kịp thời xử lý các tình huống phát sinh (nếu có).

                        </p>
                    </li>
                    <li className="py-3 text-justify"><h2 className="uppercase font-bold text-2xl">PHẠM VI SỬ DỤNG THÔNG
                        TIN CÁ NHÂN</h2>
                        <p className="text-base font-normal">Website thienmochuong.com sử dụng thông tin của Người Tiêu
                            Dùng cung cấp để:</p>
                        <ul className="list-disc text-base font-normal">
                            <li>Cung cấp các dịch vụ đến Người Tiêu Dùng;</li>
                            <li>Gửi các thông báo về các hoạt động trao đổi thông tin giữa Người Tiêu Dùng và Thiên Mộc
                                Hương;
                            </li>
                            <li>Ngăn ngừa các hoạt động phá hủy, chiếm đoạt tài khoản người dùng của Người Tiêu Dùng
                                hoặc các hoạt động giả mạo Người Tiêu Dùng;
                            </li>
                            <li>Liên lạc và giải quyết khiếu nại với Người Tiêu Dùng;</li>
                            <li>Xác nhận và trao đổi thông tin về giao dịch của Người Tiêu Dùng tại Thiên Mộc Hương;
                            </li>
                            <li>Trong trường hợp có yêu cầu của cơ quan quản lý nhà nước có thẩm quyền.</li>
                        </ul>
                    </li>
                    <li className="py-3 text-justify">
                        <h2 className="uppercase font-bold text-2xl">THỜI GIAN LƯU TRỮ THÔNG TIN CÁ NHÂN</h2>
                        <p className="text-base font-normal">Không có thời hạn ngoại trừ trường hợp Người Tiêu Dùng gửi
                            có yêu cầu hủy bỏ tới cho Ban quản trị hoặc Công ty giải thể hoặc bị phá sản.
                        </p>
                    </li>
                    <li className="py-3 text-justify">
                        <h2 className="uppercase font-bold text-2xl">NHỮNG NGƯỜI HOẶC TỔ CHỨC CÓ THỂ ĐƯỢC TIẾP CẬN VỚI
                            THÔNG TIN CÁ NHÂN CỦA NGƯỜI TIÊU DÙNG</h2>
                        <p className="text-base font-normal">Người Tiêu Dùng đồng ý rằng, trong trường hợp cần thiết,
                            các cơ quan/ tổ chức/cá nhân sau có quyền được tiếp cận và thu thập các thông tin cá nhân
                            của mình, bao gồm:
                        </p>
                        <ul className="list-disc text-base font-normal">
                            <li>Ban quản trị.</li>
                            <li>Bên thứ ba có dịch vụ tích hợp với Website thienmochuong.com</li>
                            <li>Công ty tổ chức sự kiện và nhà tài trợ</li>
                            <li>Cơ quan nhà nước có thẩm quyền trong trường hợp có yêu cầu theo quy định tại quy chế
                                hoạt động
                            </li>
                            <li>Cố vấn tài chính, pháp lý và Công ty kiểm toán</li>
                            <li>Bên khiếu nại chứng minh được hành vi vi phạm của Người Tiêu Dùng</li>
                            <li>Theo yêu cầu của cơ quan nhà nước có thẩm quyền</li>
                        </ul>
                    </li>
                    <li className="py-3 text-justify">
                        <h2 className="uppercase font-bold text-2xl">ĐỊA CHỈ CỦA ĐƠN VỊ THU THẬP VÀ QUẢN LÝ THÔNG
                            TIN</h2>
                        <p className="text-base font-normal">Công ty cổ phần Thiên Mộc Hương</p>
                        <ul className="list-disc text-base font-normal">
                            <li>Địa chỉ: 71 Nguyễn Khắc Nhu, P. Cô Giang, Q. 1, TP. Hồ Chí Minh</li>
                            <li>Điện thoại: 0933.348.368</li>
                            <li>Email: info@thienmochuong.com</li>
                        </ul>
                    </li>
                    <li className="py-3 text-justify">
                        <h2 className="uppercase font-bold text-2xl">PHƯƠNG TIỆN VÀ CÔNG CỤ ĐỂ NGƯỜI TIÊU DÙNG TIẾP CẬN
                            VÀ CHỈNH SỬA DỮ LIỆU THÔNG TIN CÁ NHÂN CỦA MÌNH</h2>
                        <p className="text-base font-normal">Người Tiêu Dùng có quyền tự kiểm tra, cập nhật, điều chỉnh
                            hoặc hủy bỏ thông tin cá nhân của mình bằng cách đăng nhập vào Website thienmochuong.com và
                            chỉnh sửa thông tin cá nhân hoặc yêu cầu Ban quản trị thực hiện việc này.
                        </p>
                        <p className="text-base font-normal">Người Tiêu Dùng có quyền tự kiểm tra, cập nhật, điều chỉnh
                            hoặc hủy bỏ thông tin cá nhân của mình bằng cách đăng nhập vào Website thienmochuong.com và
                            chỉnh sửa thông tin cá nhân hoặc yêu cầu Ban quản trị thực hiện việc này.
                        </p>

                    </li>
                </ul>
            </div>
            <Footer/>
        </>
    )
}

export default Blog