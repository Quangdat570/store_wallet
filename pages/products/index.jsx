import React from 'react'
import styles from './Products.module.css'
import Link from 'next/link'
import { RxDoubleArrowRight } from 'react-icons/rx'
import { Container, Row, Col,Form, Card,Pagination } from 'react-bootstrap'
import { Box, FormGroup } from "@mui/material";
// import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


import { useSelector, useDispatch } from "react-redux";
// import {
//   selectProductsList,
//   loadProduct,
// } from "../../store/features/Product.slice";
import { selectProductsList, loadProduct,selectProductById } from '../../store/features/Product.slice'
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import { selectCart } from "../../store/features/cart/cart.slice";



// User

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
import { selectUser } from "../../store/auth.slice"







const Products = ({ data = [], filter, url }) => {

  const {
    products,
    currentPage,
    totalPage,
    pageChanged,
    filterChanged,
    filtersSort,
    filtersSearch,
    searchByName,
  } = useSelector(selectProductsList);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadProduct({ productId: 1 }));
  }, []);

  const { items } = useSelector(selectCart);
  const [cart, setCart] = React.useState([]);

  const [searchText, setSearchText] = React.useState("");
  const [sort, setSort] = React.useState("");
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    dispatch(searchByName(e.target.value.toLowerCase()));
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    dispatch(filtersSort(e.target.value));
  };

  const paginationItems = new Array(totalPage)
    .fill(null)
    .map((value, index) => (
      <Pagination.Item
        key={index}
        active={index === currentPage}
        onClick={() => dispatch(pageChanged(index))}
      >
        {index + 1}
      </Pagination.Item>
    ));

  const handleChangePageCur = (event, value) => {
    dispatch(pageChanged(value));
  };

  const router = useRouter();
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      // categories: filter.categories,
      // brand: filter.brand,
    },
  });
  const filterRef = React.useRef();
  const sortRef = React.useRef();


  const categories = [
    {
      id: 2,
      label: "Ví Da Nam",
      value: "man",
    },
    {
      id: 3,
      label: "Ví Da Nữ",
      value: "women",
    },
    {
      id: 4,
      label: "Dây Da Đồng Hồ ",
      value: "clock",
    },
  
    {
      id: 5,
      label: "Túi Da - Cặp Da ",
      value: "leather",
    },
  
    {
      id: 6,
      label: "Thắt Lưng ",
      value: "belt",
    },
    {
      id: 7,
      label: "Phụ Kiện ",
      value: "accessory",
    },
  
    {
      id: 8,
      label: "Các Loại Bao Da ",
      value: "orther",
    },
  ];


  // add to cart
  const auth = getAuth(app);
  const user = useSelector(selectUser);
  const [quantity, setQuantity] = React.useState(1);
  const product = useSelector(selectProductById(data.id));

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
        toast.success(`${product.name} added to cart successfully`, {
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
        toast.success(`${product.name} added to cart successfully`, {
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
      toast.warning(`You need to login to perform this function`, {
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
    <Container className='pt-5'>
      <Row>
        <Col xs={12} lg={3} >
          <div className={styles.filter_product}>
            <h5>Tìm kiếm sản phẩm</h5>
          <div className={styles.search}>
                  <input
                    value={searchText}
                    className={styles.search_input}
                    type="text"
                    placeholder="Search"
                    onChange={handleSearchTextChange}
                  />
                 
          </div>
          <h5>Danh mục sản phẩm</h5>
          <Form className={styles.filter}
                onChange={() => {
                  const filter = [];
                  console.log(filter);
                  filterRef.current.elements.filter.forEach(
                    (checkbox) => {
                      if (checkbox.checked) filter.push(checkbox.value);
                    }
                  );

                  dispatch(filterChanged(filter));
                }}
                ref={filterRef}>
              <Box mb="2rem">
                        <FormGroup className={styles.checkbox}>
                          {categories.map((categories) => {
                            return (
                              <Form.Check
                                name="filter"
                                type="checkbox"
                                key={categories.id}
                                label={categories.label}
                                value={categories.value}
                                className={styles.content}
                              />
                            );
                          })}
              </FormGroup>
            </Box>
          </Form>
          </div>
        </Col>

        <Col xs={12} lg={9}>
          <div className={styles.title}>
            <h5 className=''>Tất cả sản phẩm</h5>
          <div className={styles.boxSelect} onChange={handleSort}>
            <div className='pe-2'>Sắp xếp: </div>
              <select className={styles.select} >
                <option>Mặc định</option>
                  <option value="toHigh">Giá: Tăng Dần</option>
                  <option value="toLow">Giá: Giảm Dần</option>
              </select>
                    
            </div>
          </div>

          <div className="row">
            {products.map((item) => (
            <div className="col-sm-6 col-lg-4">
              <Link href={{
                pathname: '/products/[gid]',
                query: {gid: item.id}
              }} className={styles.color_link} key={item.id}>
                
                  <Card className={styles.card}>
                  <div  >
                    <Card.Img variant="top" src={item.image} className={styles.img_sale}  />
                    
                  </div>
                  <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
                    <Card.Title> <div className={styles.name_products_sale}>{item.name}</div></Card.Title>
                    <Card.Text>
                    <div className={styles.price}>{item.price} VND</div>
                    </Card.Text>
                    <div className={styles.price_sale}> {item.price_sale} VND</div>
                    <button className={styles.btn_sale}  >Xem ngay</button>
                  </Card.Body>
                </Card>
                
              </Link>
            </div>

            ))}

              <Pagination className={styles.pagination}>
                {paginationItems}
              </Pagination>

                {/* <Stack
                  spacing={2}
                  sx={{ alignItems: "center", marginTop: "60px" }}
                >
                  <Pagination
                    count={totalPage}
                    page={currentPage}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChangePageCur}
                  />
                </Stack> */}

            {/* <div className="col-sm-6 col-lg-4">
              <Link href='' className={styles.color_link}>
                
                  <Card className={styles.card}>
                  <div  >
                    <Card.Img variant="top" src="../home-img/sale2.jpg" className={styles.img_sale}  />
                    
                  </div>
                  <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
                    <Card.Title> <div className={styles.name_products_sale}>Móc Chìa Khóa Kiêm Ví Mini - 6976</div></Card.Title>
                    <Card.Text>
                    <div className={styles.price}>350.000 VND</div>
                    </Card.Text>
                    <div className={styles.price_sale}> 250.000 VND</div>
                    <button className={styles.btn_sale}>Mua ngay</button>
                  </Card.Body>
                </Card>
                
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <Link href='' className={styles.color_link}>
                
                  <Card className={styles.card}>
                  <div  >
                    <Card.Img variant="top" src="../home-img/sale3.jpg" className={styles.img_sale}  />
                    
                  </div>
                  <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
                    <Card.Title> <div className={styles.name_products_sale}>Móc Chìa Khóa Kiêm Ví Mini - 6976</div></Card.Title>
                    <Card.Text>
                    <div className={styles.price}>350.000 VND</div>
                    </Card.Text>
                    <div className={styles.price_sale}> 250.000 VND</div>
                    <button className={styles.btn_sale}>Mua ngay</button>
                  </Card.Body>
                </Card>
                
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <Link href='' className={styles.color_link}>
                
                  <Card className={styles.card}>
                  <div  >
                    <Card.Img variant="top" src="../home-img/sale4.jpg" className={styles.img_sale}  />
                    
                  </div>
                  <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
                    <Card.Title> <div className={styles.name_products_sale}>Móc Chìa Khóa Kiêm Ví Mini - 6976</div></Card.Title>
                    <Card.Text>
                    <div className={styles.price}>350.000 VND</div>
                    </Card.Text>
                    <div className={styles.price_sale}> 250.000 VND</div>
                    <button className={styles.btn_sale}>Mua ngay</button>
                  </Card.Body>
                </Card>
                
              </Link>
            </div> */}

            
          </div>
        </Col>
      </Row>

    </Container>
    </>
  )
}

export default Products

