
import { BsFlagFill, BsFillShareFill,BsFillGiftFill} from 'react-icons/bs'
import { RxDoubleArrowRight } from 'react-icons/rx'



import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ProductDetail.module.css";
import 'react-toastify/dist/ReactToastify.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



import { style } from "@mui/system";
import Link from "next/link";
import { addItem } from "../../store/features/cart/cart.slice";
import { ToastContainer } from "react-toastify";
import { selectProductById } from "../../store/features/Product.slice";
import { selectProductsList } from '../../store/features/Product.slice';
import Card from 'react-bootstrap/Card';


import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { app } from "../../lib/firebase";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { selectUser } from "../../store/auth.slice"
import { useRouter } from "next/router";
const ItemDetail = ({ data }) => {
  
  const auth = getAuth(app);
  const user = useSelector(selectUser);
  const [cart, setCart] = React.useState([]);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(1);
  const router = useRouter();
  
  
  const products = useSelector(selectProductsList)
  const product = products.products
  
  
  

  const countUp = () => {
    setQuantity(quantity + 1);
  };

  const countDown = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (quantity === 1) {
      return quantity;
    }
  };

  // const handleAddToCartClick = (productId) => {
  //   dispatch(addItem({ productId: productId, quantity: quantitys }));
  // };
  // console.log(quantitys);
  // console.log(product);

  // add to cart
  const cartRef = collection(getFirestore(app), "wallet");

  React.useEffect(() => {
    const q = query(cartRef);
    const wishlist = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setCart(data.filter((item) => item.uid == (user && user.uid)));
    });
    return () => wishlist();
  }, []);

  const handleAddtoCart = async (product) => {
    
    // check product exist
    const check = cart.filter(
      (item) => item.uid == user.uid && item.name == product.name
    );

    if (auth.currentUser) {
      if (check.length > 0) {
        toast.success(` Thêm vào giỏ hàng thành công`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const reference = doc(cartRef, check[0].id);
        await updateDoc(reference, {
          quantity: check[0].quantity + quantity,
        });
        console.log("success");
      } else {
        console.log("fail")
        toast.success(` Thêm vào giỏ hàng thành công`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const reference = doc(cartRef);
        await setDoc(reference, {
          uid: user.uid,
          productId: product.id,
          quantity: quantity,
          ...product,
        });

      }
    } else {
      toast.warning(`Bạn cần đăng nhập để thực hiện chức năng này`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    

<>
        <Container fluid className={styles.background_color}>
            <div className="container">
                <div className={styles.path_container}>
                    <Link href='/' className={styles.breadcump_home}>Trang chủ</Link>
                    <span>
                        <RxDoubleArrowRight className={styles.icon_breadcump}/>
                    </span>
                    <div>Sản phẩm</div>
                </div>
            </div>
        </Container>
        <Container fluid className={styles.page}>
          <div  className={styles.bg} id="#">
           
          </div>
          <Container>
              <Row className={styles.mtT80}>
                
                  <div className='col-12 col-md-7 d-flex justify-content-center' key={data.id}>
                   <img src={data.description} alt=""  className={styles.img}/>
              
                  </div>
                  <div className="col-12 col-md-5 d-flex  flex-column justify-content-center pt-4 pb-3">
                      
                        <h1 className={styles.name}>{data.name}</h1>
                        <div className={styles.status}>Tình trạng: <span className='text-danger mx-2 mb-1'>Còn hàng</span></div>
                        <div className='d-flex align-items-center'>
                          
                          <span className={styles.price_sale}>{data.price_sale} VND </span>
                          <span className={styles.price}>{data.price} VND </span>
                          <div  className={styles.sale}><span className=''>{data.sale}%</span></div>
                          </div>
              
                        <div >

                        <div >
                          <div className={styles.price_save}>Tiết kiệm: <span className='text-danger mx-2 mb-1'>{(data.price - data.price_sale).toFixed(3)} VND</span></div>
                        </div>

                        <div className={styles.magrin}>
                            <span className='pt-3 pb-3 pe-3' ><BsFillGiftFill className={styles.icon_gift}/></span>
                            <p className={styles.text_sale}>KHUYẾN MÃI - ƯU ĐÃI</p>
                          
                        </div>

                        <div className={styles.swaper}>
                            <div>- Đồng giá Ship toàn quốc 25.000đ</div>
                            <div>- Miễn phí Ship cho đơn hàng từ 1.000.000đ</div>
                            <div>- Đổi trả trong 30 ngày nếu sản phẩm lỗi</div>
                          
                        </div>
                          <div className='d-flex justify-content-around pt-4'>
                            <div className={styles.count}>
                                <div onClick={countDown} className={styles.count_product}>-</div>
                                <div  className={styles.count_product}>{quantity}</div>
                                <div onClick={countUp}  className={styles.count_product}>+</div>

                            </div>
                          <div  onClick={() => handleAddtoCart(data)}>
                            <div className={styles.button_add} >Thêm vào giỏ hàng</div>
                            <ToastContainer/>
                          </div>
                          </div>
                           
                        </div>
                       
                        
                        <div className='pt-4'>
                          <h5 className={styles.title_description}>Mô tả sản phẩm</h5>
                          <hr className={styles.hr} />
                          <div className='pb-2'>Kích thước: 20 x 11 x 5 (cm)</div>
                          <div className='pb-2'>Chất liệu: Da bò sáp</div>
                          <div className='pb-2'>
                            Chất liệu da bò sáp bền bỉ, đẹp dần theo thời gian sử dụng.
                            Lớp lót vải dày dặn, sản phẩm có móc cầm tay tiện lợi Phù hợp
                            cả nam và nữ sử dụng. Một sản phẩm cần thiết với công năng sử
                            dụng tuyệt vời, thời trang
                            </div>
                        </div>
                      
                  
                  </div>

                  
              </Row>
          </Container>

          <Container className=''>
                <h4 className={styles.title_product_more}>SẢN PHẨM LIÊN QUAN</h4>
                <Swiper
         slidesPerView={1}
         spaceBetween={10}
       
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
         }}
         modules={[Autoplay, Pagination, Navigation]}
         breakpoints={{
           640: {
             slidesPerView: 2,
             spaceBetween: 20,
           },
           768: {
             slidesPerView: 3,
             spaceBetween: 40,
           },
           1024: {
             slidesPerView: 3,
             spaceBetween: 50,
           },
         }}
       
         className="mySwiper pb-5"
      >
          {product.map((item) => (
        <SwiperSlide>
          <Card className={styles.card}>
            <div  ><Card.Img variant="top" src={item.image}  className={styles.img_sale} /></div>
            <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
              <Card.Title className='m-0'> <div className={styles.name_products_sale}>Móc Chìa Khóa Kiêm Ví Mini - 6976</div></Card.Title>
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
        </Container>

</>
        
  );
};

export default ItemDetail;

//staticPath - Có bao nhiêu sản phẩm
export const getStaticPaths = async () => {
  const res = await fetch(
    "https://63e5a7777eef5b22337712f5.mockapi.io/products"
  );
  const data = await res.json();

  return {
    paths: data.map((item) => ({ params: { gid: item.id } })),
    fallback: false,
  };
};

// staticProps - thông tin cụ thể 1 sản phẩm là gì
export const getStaticProps = async (context) => {
  const productId = context.params.gid;

  const res = await fetch(
    "https://63e5a7777eef5b22337712f5.mockapi.io/products/" + productId
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};




