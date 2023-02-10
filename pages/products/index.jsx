import React from 'react'
import styles from './Products.module.css'
import Link from 'next/link'
import { RxDoubleArrowRight } from 'react-icons/rx'
import { Container, Row, Col,Form, Card } from 'react-bootstrap'
import { Box, FormGroup } from "@mui/material";


// import { useSelector, useDispatch } from "react-redux";
// import {
//   selectProductsList,
//   loadProduct,
// } from "../../store/features/Product.slice";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/router";
// import { toast, ToastContainer } from "react-toastify";
// import { selectCart } from "../../store/features/cart/cart.slice";





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

const Products = ({ data = [], filter, url }) => {

  // const {
  //   products,
  //   currentPage,
  //   totalPage,
  //   pageChanged,
  //   filterChanged,
  //   filtersSort,
  //   filtersSearch,
  //   searchByName,
  // } = useSelector(selectProductsList);
  // const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(loadProduct({ productId: 1 }));
  // }, []);

  // const { items } = useSelector(selectCart);
  // const [cart, setCart] = React.useState([]);

  // const [searchText, setSearchText] = React.useState("");
  // const [sort, setSort] = React.useState("");
  // const handleSearchTextChange = (e) => {
  //   setSearchText(e.target.value);
  //   dispatch(searchByName(e.target.value.toLowerCase()));
  // };

  // const handleSort = (e) => {
  //   setSort(e.target.value);
  //   dispatch(filtersSort(e.target.value));
  // };

  // const paginationItems = new Array(totalPage)
  //   .fill(null)
  //   .map((value, index) => (
  //     <Pagination.Item
  //       key={index}
  //       active={index === currentPage}
  //       onClick={() => dispatch(pageChanged(index))}
  //     >
  //       {index + 1}
  //     </Pagination.Item>
  //   ));

  // const router = useRouter();
  // const { register, handleSubmit, getValues } = useForm({
  //   defaultValues: {
  //     // categories: filter.categories,
  //     // brand: filter.brand,
  //   },
  // });
  // const filterRef = React.useRef();
  // const sortRef = React.useRef();


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
    <Container className=''>
      <Row>
        <Col xs={12} lg={3} >
          <div className={styles.filter_product}>
          <h5>Danh mục sản phẩm</h5>
          <Form className={styles.filter}>
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
            <h4 className=''>Tất cả sản phẩm</h4>
          <div className={styles.boxSelect}>
            <div className='pe-2'>Sắp xếp: </div>
              <select className={styles.select} >
                <option>Mặc định</option>
                  <option value="toHigh">Giá: Tăng Dần</option>
                  <option value="toLow">Giá: Giảm Dần</option>
              </select>
                    
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <Link href='' className={styles.color_link}>
                
                  <Card className={styles.card}>
                  <div  >
                    <Card.Img variant="top" src="../home-img/sale1.jpg" className={styles.img_sale}  />
                    
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
            </div>

            
          </div>
        </Col>
      </Row>

    </Container>
    </>
  )
}

export default Products