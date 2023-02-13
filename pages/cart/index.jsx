
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { style } from "@mui/system";
import styles from "./Cart.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RxDoubleArrowRight } from 'react-icons/rx'

import CloseIcon from "@mui/icons-material/Close";

import Link from "next/link";
import React, { useState } from "react";
import { selectUser } from "../../store/auth.slice";
import { getAuth } from "firebase/auth";
import { app } from "../../lib/firebase";
import { toast } from "react-toastify";
import { IoIosArrowForward } from 'react-icons/io'
import { AiOutlineClose } from 'react-icons/ai'
import {
  Box,
  Button,
  
  Grid,
  Modal,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

import {
  getFirestore,
  collection,
  doc,
  deleteDoc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";









function Cart() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [carts, setCart] = React.useState([]);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const auth = getAuth(app);
  const cartRef = collection(getFirestore(app), "wallet");
  React.useEffect(() => {
    const q = query(cartRef);
    const cartlist = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setCart(data.filter((item) => item.uid == (user && user.uid)));
    });

    return () => cartlist();
  }, [user == null ? null : user.uid]);

  const handleRemoveItem = async (id) => {
    toast.success(`Remove succesfully`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });

    const reference = doc(cartRef, id);
    await deleteDoc(reference);
  };

  const incrementCart = async (id, quantity) => {
    const reference = doc(cartRef, id);
    await updateDoc(reference, {
      quantity: quantity + 1,
    });
  };

  const decrementCart = async (id, quantity) => {
    const reference = doc(cartRef, id);
    await updateDoc(reference, {
      quantity: Math.max(quantity - 1, 1),
    });
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
                <div>Giỏ hàng</div>
            </div>
        </div>
    </Container>
    <Container fluid >
      <section >
        <Container>
         

         
        </Container>

        {auth.currentUser && carts.length !==0 ? (
          <Container className="pt-5 pb-5">
          <div className="row">
            <div className="col-12 col-md-8 pt-3 pb-5">
              {carts.map((item) => (
               <Container className={styles.container}>
                  <div className=" row">
                    <div className="col-12">
                      <div className="col-12 d-md-flex  border position-relative">
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                        <img src={item.image} alt="" className={styles.img_products} />
                        </div>
                        <div className="col-12 col-md-6 p-4">
                        <div className={styles.name_products}>{item.name}</div>
                            <div className={styles.price_products}>{item.price_sale} VND</div>
                            <div className={styles.vip}>
                              <div className={styles.push_products}
                               onClick={() => {
                                    decrementCart(item.id, item.quantity);
                                  }}>-</div>
                              <div className={styles.push_products}>{item.quantity}</div>
                              <div className={styles.push_products}
                               onClick={() => {
                                    incrementCart(item.id, item.quantity);
                                  }}>+</div>
                            </div>
                            <div className={styles.mmm}>
                              <span className={styles.total}>total: </span>
                            <span className={styles.total_price}> {(item.price_sale  * item.quantity).toFixed(3)} VND</span>
                            </div>
                            
                        </div>
                        <div className={styles.close} onClick={handleOpen}>
                            <AiOutlineClose/>
                        </div>
                          <Box >
                                <Modal
                                  open={open}
                                  onClose={handleClose}
                                  aria-labelledby="modal-modal-title"
                                  aria-describedby="modal-modal-description"
                                >
                                  <Box sx={{position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            border: '2px solid #727272',
                            boxShadow: 24,
                            p: 4,}}>
                                    {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                                      Text in a modal
                                    </Typography> */}
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Are you sure you want to remove it from your cart?
                                    </Typography>
                                    <Box sx={{textAlign:'center', display:'flex', gap:'5px', justifyContent:'center'}}>
                                      <Button sx={{textAlign:'center'}}
                                      onClick={() => {
                                        handleRemoveItem(item.id);
                                      }} variant="outlined">Delete</Button>
                                      <Button onClick={handleClose} variant="contained">Close</Button>
                                    </Box>
                                  </Box>
                                </Modal>
                          </Box>
              
                      </div>
              
              
                    </div>
              
                  </div>
                </Container>
              ))}
            </div>
                <div className="col-12 col-md-4 pb-3 pt-3 ">
                  <div className={styles.max_height}>
                      <h4 className={styles.title_cart}>Thông tin đơn hàng</h4>
                      <hr />
                      <div className={styles.total}>
                        <div className={styles.tinh}>Tạm tính:</div>
                        <div className={styles.toan}>{carts.reduce((total, cur) => {
                          return (total += ((cur.price_sale * cur.quantity)));
                        }, 0)}{".000 "}
                         VND</div>
                      </div>
                      <hr />
                      <div className={styles.ship}>Phí vận chuyển sẽ được tính ở trang thanh toán.</div>
                      
                      <TextField
                        placeholder="Special instructions for seller"
                        multiline
                        rows={4}
                        maxRows={8}
                        fullWidth="100%"
                      />
                                      <div  className={styles.btn_checkout_swaper}><Link href='/checkout' className={styles.btn_checkout}>THANH TOÁN NGAY</Link></div>
                </div>
                  </div>
          </div>
        </Container>
        ) : (
          <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginBottom: "30px", paddingBottom:'5rem', paddingTop:'5rem'}}>
          <ProductionQuantityLimitsIcon sx={{fontSize:'200px', textAlign:'center'}}/>
          <Typography sx={{
                fontSize: "30px",
                fontWeight: "700",
                fontFamily: "'Kodchasan', sans-serif",
                marginBottom: "20px",
              }}>No Item In Cart</Typography>
          <Typography sx={{
                fontSize: "18px",
                fontWeight: "400",
                fontFamily: "'Kodchasan', sans-serif",
                marginBottom: "20px",
              }}>Add items you want to shop</Typography>
        <Link href="/products">
          <Button variant="contained">Start Shopping</Button>
        </Link>
        </Box>
        )}
      </section>
    </Container>

    
 
   

    
    </>
  );
}

export default Cart;