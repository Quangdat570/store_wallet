import React from 'react'
import { Container, Row, Col,Navbar,Offcanvas,Nav} from 'react-bootstrap'
import styles from './Footer.module.css'
import Link from 'next/link'

import {IoLocation } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { RiPhoneFill } from 'react-icons/ri'
import { IoTimeSharp } from 'react-icons/io5'

const Footer = () => {
  return (
    <>
   <Container fluid className='p-0'>
    
      <div className={styles.footer_image}>
        <img src="../../../footer-img/footer.jpg" alt="footer" className={styles.img} />
        <h3 className={styles.title_footer}>LUD - THỜI TRANG ĐỒ DA HANDMADE</h3>
      </div>
      
        <div className="container pt-4">
            <div className="row">
                <div className='col-lg-3 col-sm-6 '>
                <h4 className={styles.title_1}>LIÊN HỆ</h4>
                <hr />
                <ul className={styles.contact}>
                    <li>
                        <Link href='' className={styles.location}>
                            
                               <span> <IoLocation className={styles.icons}/></span>
                            
                            <div className={styles.content_location}> 68 Định Công,Hoàng Mai, Hà Nội</div>
                        </Link>
                    </li>
                    <li>
                        <Link href='' className={styles.location}>
                            <span>
                                <MdEmail className={styles.icons}/>
                            </span>
                            <span>support@lud.vn</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='' className={styles.location}>
                            <span>
                                <RiPhoneFill className={styles.icons}/>
                            </span>
                            <span>0966 516 228</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='' className={styles.location}>
                            
                            <span>
                                <IoTimeSharp className={styles.icons}/>
                            </span>
                            <span>T2-CN, Từ 8.AM -10.PM</span>
                        </Link>
                    </li>
                </ul>
                </div>
            
              <div className="col-lg-3 col-sm-6 ">
                <h4 className={styles.title_1}>CHÍNH SÁCH</h4>
                <hr />
                <ul className={styles.contact}>
                  <li>
                    <Link href="" className={styles.location}>
                      Câu hỏi thường gặp
                    </Link>
                  </li>
                  <li>
                    <Link href="" className={styles.location}>
                      Chính sách bảo hành
                    </Link>
                  </li>
                  <li>
                    <Link href="" className={styles.location}> Điều khoản dịch vụ </Link>
                  </li>
                  <li>
                    <Link href="" className={styles.location}>
                      Chính sách bảo mật
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-sm-6 ">
                <div className={styles.media}>
                  <h4 className={styles.title_1}>KẾT NỐI VỚI CHÚNG TÔI</h4>
                  <hr />
                  <div className={styles.media_container}>
                    <Link href=""><img src="../../../footer-img/logo1.jpg" alt="" className={styles.border_radius} /></Link>
                    <Link href=""><img src="../../../footer-img/logo4.jpg" alt="" className={styles.border_radius_youtube} /></Link>
                    <Link href=""><img src="../../../footer-img/logo3.jpg" alt="" className={styles.border_radius} /></Link>
                  </div>
                </div>
                <div className={styles.sign_up}>
                  <h4 className={styles.title_1}>ĐĂNG KÍ NHẬN KHUYẾN MÃI</h4>
                  <hr />
                  <div className={styles.email_input}>
                    <input type="text" placeholder="Nhập email của bạn" className={styles.input_footer} />
                    <button className={styles.btn_sign_up}>ĐĂNG KÍ</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 ">
                <div className={styles.fanpage}>
                  <h4 className={styles.title_1}>FANPAGE</h4>
                  <hr />
            
                </div>
              </div>
            </div>
        </div>
      
   

   </Container>

    </>
  )
}

export default Footer