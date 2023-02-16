import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import HeroBanner from './components/header/HeroBanner'
import { Container, Row, Col,Navbar,Offcanvas,Nav} from 'react-bootstrap'
import Link from 'next/link'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const inter = Inter({ subsets: ['latin'] })

export default function Home({products,sale}) {
  
  
  return (
    <>
      <Head>
        <title>The Wallet</title>
        <meta name="description" content="The Wallet " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBanner/>

      {/* Sản phẩm Sale */}
      <Container className='pt-5 pb-5'>
        <h2 className={styles.sale}>KHUYẾN MẠI THÁNG NÀY</h2>
        <div className='row'>
          {products.map((item) => (
           <div className='col-6 col-md-3 p-0'>

          <Card className={styles.card}>
            <div  ><Card.Img variant="top" src={item.image}  className={styles.img_sale} /></div>
            <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
              <Card.Title> <div className={styles.name_products_sale}>{item.name}</div></Card.Title>
              <Card.Text className='m-0'>
              <div className={styles.price}>{item.price} VND</div>
              </Card.Text>
              <div className={styles.price_sale}> {item.price_sale} VND</div>
              <Link href={{
                pathname:'/products/[gid]',
                query: {gid: item.id}
              }}><button className={styles.btn_sale}>Xem ngay</button></Link>
            </Card.Body>
          </Card>
          </div> 

          ))}

          {/* <div className='col-6 col-md-3 p-0'>

          <Card className={styles.card}>
            <div  ><Card.Img variant="top" src="../home-img/sale2.jpg" className={styles.img_sale}  /></div>
            <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
              <Card.Title> <div className={styles.name_products_sale}>Móc Chìa Khóa Kiêm Ví Mini - 6976</div></Card.Title>
              <Card.Text>
              <div className={styles.price}>350.000 VND</div>
              </Card.Text>
              <div className={styles.price_sale}> 250.000 VND</div>
              <button className={styles.btn_sale}>Mua ngay</button>
            </Card.Body>
          </Card>
          </div> */}

          {/* <div className='col-6 col-md-3 p-0'>

          <Card className={styles.card}>
            <div  ><Card.Img variant="top" src="../home-img/sale3.jpg"  className={styles.img_sale} /></div>
            <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
              <Card.Title> <div className={styles.name_products_sale}>Móc Chìa Khóa Kiêm Ví Mini - 6976</div></Card.Title>
              <Card.Text>
              <div className={styles.price}>350.000 VND</div>
              </Card.Text>
              <div className={styles.price_sale}> 250.000 VND</div>
              <button className={styles.btn_sale}>Mua ngay</button>
            </Card.Body>
          </Card>
          </div> */}

          {/* <div className='col-6 col-md-3 p-0'>

          <Card className={styles.card}>
            <div  ><Card.Img variant="top" src="../home-img/sale4.jpg" className={styles.img_sale}  /></div>
            <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
              <Card.Title> <div className={styles.name_products_sale}>Móc Chìa Khóa Kiêm Ví Mini - 6976</div></Card.Title>
              <Card.Text>
              <div className={styles.price}>350.000 VND</div>
              </Card.Text>
              <div className={styles.price_sale}> 250.000 VND</div>
              <button className={styles.btn_sale}>Mua ngay</button>
            </Card.Body>
          </Card>
          </div> */}

        </div>

        

        
      </Container>

      <Container className='p-5'>
        <div className='row'>
          <div className='col-12 col-md-6 p-0'>
              <div className={styles.image_collection}>
                <img src='../home-img/banner1.jpg' className={styles.img_banner}/>
                <h3 className={styles.title_banner}>BỘ SƯU TẬP DÀNH CHO NỮ</h3>
                <div className={styles.overlay}></div>
              </div>
          </div>
          <div className='col-12 col-md-6 p-0'>
              <div className={styles.image_collection}>
                <img src='../home-img/banner2.jpg' className={styles.img_banner}/>
                <h3  className={styles.title_banner}>BỘ SƯU TẬP DÀNH CHO NAM</h3>
                <div className={styles.overlay}></div>
              </div>
          </div>
        </div>
      </Container>

      <Container className='pt-5 pb-5'>
        <h2 className={styles.sale}>SẢN PHẨM BÁN CHẠY</h2>
       

      <Swiper
         slidesPerView={1}
         spaceBetween={10}
       
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
         }}
         modules={[Autoplay, Pagination, Navigation]}
         breakpoints={{
          430: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
           640: {
             slidesPerView: 2,
             spaceBetween: 20,
           },
           768: {
             slidesPerView: 3,
             spaceBetween: 40,
           },
           1024: {
             slidesPerView: 4,
             spaceBetween: 50,
           },
         }}
       
         className="mySwiper "
      >
          {sale.map((item) => (
        <SwiperSlide>
          <Card className={styles.card}>
            <div  ><Card.Img variant="top" src={item.image}  className={styles.img_sale_1} /></div>
            <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
              <Card.Title> <div className={styles.name_products_sale}>{item.name}</div></Card.Title>
              <Card.Text className='m-0'>
              <div className={styles.price}>{item.price} VND</div>
              </Card.Text>
              <div className={styles.price_sale}> {item.price_sale} VND</div>
              <Link href={{
                pathname:'/products/[gid]',
                query: {gid: item.id}
              }}><button className={styles.btn_sale}>Xem ngay</button>
              </Link>
            </Card.Body>
          </Card>
        </SwiperSlide>
          ))}
        
      </Swiper>

        

        
      </Container>
      
    </>
  )
}

export const getStaticProps = async (ctx) => {
 

  const res = await fetch("https://63e5a7777eef5b22337712f5.mockapi.io/products");
  
  // const resPon = await fetch("https://63d729ad5dbd723244211e09.mockapi.io/products")
  // const resData = await resPon.json();

  const data = await res.json();


  return {
    props: {
      // games: resData.slice(20),
      products: data.slice(13,17),
      // feature: resData.slice(13,17),
      sale:data.slice(17,21)
    },
    
  };
  
};
