import React from 'react'
import Link from 'next/link'
import { RxDoubleArrowRight } from 'react-icons/rx'
import { Container, Row, Col,Form, Card,Pagination } from 'react-bootstrap'
import styles from './About.module.css'


const index = () => {
  return (
    <>
     <Container fluid className={styles.background_color}>
        <div className="container">
            <div className={styles.path_container}>
                <Link href='/' className={styles.breadcump_home}>Trang chủ</Link>
                <span>
                    <RxDoubleArrowRight className={styles.icon_breadcump}/>
                </span>
                <div>Giới Thiệu</div>
            </div>
        </div>
    </Container>
    <Container className={styles.background_color_about}>
        <div className="row align-items-center">
            <div className="col-12 col-md-8 p-4">
                <div>
                    <h4 className={styles.title_content}>LUD HANDMADE</h4>
                    <div className={styles.title_sub_content}>Since 2013</div>
                    <div className={styles.content_about}>
                        Năm 2013, LUD được hình thành để đi đến gần hơn với những tín đồ
                        chuộng da, mang theo sứ mệnh đồng hành với bạn để cùng nhau trải
                        nghiệm một tuổi trẻ cháy hết mình, làm việc hết mình và sống hết
                        mình. LUD là ngôi nhà thứ hai - thôi thúc những dự định mà bạn
                        chỉ mới “nghĩ tới” nhưng “chưa dám thực hiện”.
                    </div>
                    <div  className={styles.content_about}>
                        Khi đến với thế giới của LUD, bạn sẽ thu được nhiều trải nghiệm
                        thú vị từ những sản phẩm tuyệt vời, với chất liệu chủ đạo là
                        loại da bò sáp và cận cảnh quá trình khi nghệ nhân bắt đầu đặt
                        bút lên trang giấy để vẽ ra ý tưởng cho đến khi 1 sản phẩm
                        handmade được hoàn thành.
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <img src="../../about-img/image 1.jpg" alt="" className={styles.img_about} />
            </div>
        </div>
    </Container>

    <Container className={styles.background_color_about}>
        <div className="row align-items-center">

        <div className="col-12 col-md-4">
                <img src="../../about-img/image 2.jpg" alt="" className={styles.img_about} />
            </div>
            <div className="col-12 col-md-8 p-4">
                <div>
                    <h4 className={styles.title_content}>TUỔI TRẺ CỦA BẠN ĐÁNG GIÁ BAO NHIÊU ?</h4>
                    <div className={styles.title_sub_content}>CÂU TRẢ LỜI LÀ - “VÔ GIÁ”</div>
                    <div className={styles.content_about}>
                       
                        Điều tuyệt vời nhất của tuổi trẻ là được sống và làm việc theo
                        đúng cá tính và đam mê . Bất cứ ai cũng muốn sống đúng với con
                        người thật của mình và được công nhận. Bắt nguồn từ những điều
                        nhỏ nhoi nhất, LUD luôn luôn tôn trọng ý kiến của khách hàng,
                        hiện thực hóa ý tưởng khách muốn truyền đạt, thông qua sản phẩm
                        đồ da thủ công một cách hoàn thiện nhất.
                    </div>
                    <div  className={styles.content_about}>
                        
                        Mùa Thu năm 2013. Cái tên thương hiệu - LUD được hình thành để
                        đi đến gần hơn với những tín đồ chuộng da, mang theo sứ mệnh
                        đồng hành với bạn để cùng nhau trải nghiệm một tuổi trẻ cháy hết
                        mình, làm việc hết mình và sống hết mình. LUD là ngôi nhà thứ
                        hai -thôi thúc những dự định mà bạn chỉ mới “nghĩ tới” nhưng
                        “chưa dám thực hiện”
                    </div>
                </div>
            </div>
            
        </div>
    </Container>

    <Container className={styles.background_color_about}>
        <div className="row align-items-center">
            <div className="col-12 col-md-8 p-4">
                <div>
                    <h4 className={styles.title_content}>LUD.VN - HANDMADE</h4>
                    <div className={styles.title_sub_content}>NGƯỜI BẠN ĐỒNG HÀNH TUYỆT VỜI”</div>
                    <div className={styles.content_about}>
                        
                        Khi đến với thế giới của LUD, bạn sẽ được trải nghiệm mọi thứ từ
                        những tác phẩm tuyệt vời, với chất liệu chủ đạo là loại da bò
                        sáp nhập khẩu từ Ý, và cận cảnh quá trình khi nghệ nhân bắt đầu
                        đặt bút lên trang giấy để vẽ ra ý tưởng cho đến khi 1 sản phẩm
                        handmade được hoàn thành.
                    </div>
                    <div  className={styles.content_about}>
                       
                        LUD là nơi bạn có thể thủ thỉ mọi điều. BẠN CÓ Ý TƯỞNG - ĐỪNG
                        NGẠI GIẢI BÀY. Vì mọi ý tưởng sáng tạo đều đáng được trân trọng
                        và LUD sẽ giúp bạn thực hiện điều đó. Cùng với những nghệ nhân
                        mang trong mình tràn đầy tâm huyết và đôi bàn tay khéo léo làm
                        nên điều kỳ diệu. Sản phẩm thủ công LUD thể hiện sự cẩn thận, tỉ
                        mỉ và nghiêm khắc. Vẽ - cắt - lạng - dán - đục - may - xử lý
                        cạnh là những công đoạn người nghệ nhân tạo ra những sản phẩm
                        xứng tầm gửi đến tay bạn.
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <img src="../../about-img/image3.jpg" alt="" className={styles.img_about} />
            </div>
        </div>
    </Container>
    </>
  )
}

export default index