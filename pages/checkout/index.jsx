import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Checkout.module.css";
import { Container, Row, Col } from "react-bootstrap";
// import Sologan from "../componnet/Sologan";
import { style } from "@mui/system";
import { useForm } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { RxDoubleArrowRight } from 'react-icons/rx'


import { AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import Link from "next/link";

import {
    Box,
    Button,
    Badge,
    Grid,
    Modal,
    Stack,
    styled,
    TextField,
    Typography,
  } from "@mui/material";


import { useDispatch, useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
// import ButtonBlack from "../componnet/ButtonBlack";
import { getAuth } from "firebase/auth";
import { selectUser } from "../../store/auth.slice";
import React from "react";
import { useRouter } from "next/router";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { app } from "../../lib/firebase";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

function CheckBox() {
  const router = useRouter();
  const [carts, setCart] = React.useState([]);
  const auth = getAuth(app);
  const user = useSelector(selectUser);
  const cartRef = collection(getFirestore(app), "wallet");

  React.useEffect(() => {
    const q = query(cartRef);
    onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setCart(data.filter((item) => item.uid == (user && user.uid)));
    });
  }, [user == null ? null : user.uid]);

  const deleteAll = async (id) => {
    const reference = doc(cartRef, id);
    await deleteDoc(reference);
  };

  const clearCart = () => {
    carts.forEach((item) => deleteAll(item.id));
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {},
  });

  

  const address = register("address", {
    required: "Please fill out this field.",
    validate: {
      length: (v) =>
        (6 <= v.toLowerCase().trim().length &&
          v.toLowerCase().trim().length <= 50) ||
        "Please enter your address",
    },
  });
  const lastname = register("lastname", {
    required: "Please fill out this field.",
  });

  const first = register("first", {
    required: "Please fill out this field.",
    validate: {
      length: (v) =>
        (2 <= v.toLowerCase().trim().length &&
          v.toLowerCase().trim().length <= 50) ||
        "Please enter your name",
    },
  });

  const email = register("email", {
    required: "Please fill out this field.",
    validate: {
      isEmail: (v) =>
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "Please enter an email address.",
    },
  });

  

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
    <Container fluid className={styles.page}>
      

      <section className={styles.mT80}>
        {auth.currentUser && carts.length !== 0 ? (
          <Container>
            <form
              action=""
              onSubmit={handleSubmit((data) => {
                Swal.fire({
                  title: "Are you sure you want to order?",
                  icon: "question",
                  iconHtml: "?",
                  confirmButtonText: "Yes",
                  cancelButtonText: "No",
                  showCancelButton: true,
                  showCloseButton: true,
                  width: "50rem",
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire({
                      title: " Order Success",
                      showConfirmButton: false,
                      timer: 1500,
                      icon: "success",
                      width: "50rem",
                      
                    });
                    const reference = collection(getFirestore(app), "checkout");
                    addDoc;
                    clearCart();
                    router.push("/cart");
                  }
                });
              })}
            >
              <Row>
                <Col lg={6}>
                <Box
                      sx={{
                        marginBottom: "30px",
                      }}
                    >
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        sx={{
                          marginBottom: "20px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "18px",
                            fontWeight: "600",
                            fontFamily: "'Kodchasan', sans-serif",
                          }}
                        >
                          Contact information
                        </Typography>
                      </Stack>

                      <Box
                        sx={{
                          marginBottom: "20px",
                          input: { fontFamily: "'Kodchasan', sans-serif" },
                        }}
                      >
                        <TextField
                          label="Email"
                          variant="outlined"
                          fullWidth
                          {...email}
                        />
                        <Typography
                          sx={{
                            color: "red",
                            fontFamily: "'Kodchasan', sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          {errors.email?.message}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          marginBottom: "20px",
                          input: { fontFamily: "'Kodchasan', sans-serif" },
                        }}
                      >
                        <TextField
                          label="Phone"
                          variant="outlined"
                          fullWidth
                          
                          type="number"
                          {...register("phone", {
                            valueAsNumber: true,
                          })}
                        />
                        <Typography
                          sx={{
                            color: "red",
                            fontFamily: "'Kodchasan', sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          {errors.phone?.message}
                        </Typography>
                      </Box>

                      
                      <Box>
                      <Typography
                        sx={{
                          fontFamily: "'Kodchasan', sans-serif",
                          fontSize: "14px",
                          color: "#737373",
                        }}
                      >
                        You may receive text messages related to order
                        confirmation and shipping updates. Reply STOP to
                        unsubscribe. Reply HELP for help. Message frequency
                        varies. Msg & data rates may apply. View our Privacy
                        policy and Terms of service.
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          marginBottom: "20px",
                          fontSize: "18px",
                          fontWeight: "600",
                          fontFamily: "'Kodchasan', sans-serif",
                        }}
                      >
                        Shipping address
                      </Typography>
                      <Stack direction="row" spacing={2}>
                        <Box
                          sx={{
                            marginBottom: "20px",
                            width: "100%",
                            input: { fontFamily: "'Kodchasan', sans-serif" },
                          }}
                        >
                          <TextField
                            label="First name"
                            variant="outlined"
                            fullWidth
                            {...first}
                            sx={{
                              fontFamily: "'Kodchasan', sans-serif",
                            }}
                          />
                          <Typography
                            sx={{
                              color: "red",
                              fontFamily: "'Kodchasan', sans-serif",
                              fontSize: "14px",
                            }}
                          >
                            {errors.first?.message}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            marginBottom: "20px",
                            width: "100%",
                            input: { fontFamily: "'Kodchasan', sans-serif" },
                          }}
                        >
                          <TextField
                            label="Last name"
                            variant="outlined"
                            fullWidth
                            {...lastname}
                          />
                          <Typography
                            sx={{
                              color: "red",
                              fontFamily: "'Kodchasan', sans-serif",
                              fontSize: "14px",
                            }}
                          >
                            {errors.lastname?.message}
                          </Typography>
                        </Box>
                      </Stack>
                      <Box
                        sx={{
                          marginBottom: "20px",
                          input: { fontFamily: "'Kodchasan', sans-serif" },
                        }}
                      >
                        <TextField
                          label="Country/Region"
                          variant="outlined"
                          fullWidth
                        />
                      </Box>
                      <Box
                        sx={{
                          marginBottom: "20px",
                          input: { fontFamily: "'Kodchasan', sans-serif" },
                        }}
                      >
                        <TextField
                          label="Address"
                          variant="outlined"
                          fullWidth
                          {...address}
                        />
                        <Typography
                          sx={{
                            color: "red",
                            fontFamily: "'Kodchasan', sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          {errors.address?.message}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Col>
                <Col lg={6}>
                 
                    {carts.map((item) => (
                  

                   <Box sx={{display:'flex', alignItems:'center', paddingBottom:'25px'}}>
                     <Badge badgeContent={item.quantity} color="secondary">
                        <Box
                        sx={{
                            width: "60px",
                            height: "60px",
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "cover",
                            border: "1px solid #ccc",
                            borderRadius: "10px",
                            backgroundPosition: "center",
                        }}
                        />
                    </Badge>
                     <Stack
                            sx={{
                            flex: 1,
                            paddingLeft: "20px",
                            }}
                        >
                            <Typography
                            sx={{
                                fontWeight: "600",
                                fontFamily: '"Kodchasan", sans-serif',
                            }}
                            >
                            {item.name}
                            </Typography>
                           
                        </Stack>

                        <Typography
                            sx={{
                            fontWeight: "600",
                            }}
                        >
                            {(item.price_sale * item.quantity).toFixed(3)} VND
                        </Typography>
                        
                   </Box>


                   
                    ))}
                    <Box
                      sx={{
                        borderBottom: "1px solid #ccc",
                        margin: " 20px 20px",
                        paddingBottom: "20px",
                      }}
                    >
                      <Stack direction="row" justifyContent="space-between">
                        <Typography
                          sx={{
                            fontWeight: "400",
                            fontFamily: '"Kodchasan", sans-serif',
                          }}
                        >
                          Subtotal
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "600",
                          }}
                        >
                          {carts.reduce((total, cur) => {
                            return (total += cur.price_sale * cur.quantity);
                          }, 0)}{".000 "}
                          $
                        </Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography
                          sx={{
                            fontWeight: "400",
                            fontFamily: '"Kodchasan", sans-serif',
                          }}
                        >
                          Shipping
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "600",
                          }}
                        >
                          Free Ship
                        </Typography>
                      </Stack>
                    </Box>
                </Col>
              </Row>
              <Box
              sx={{paddingTop:'20px', paddingBottom:"20px"}}
              ><Button variant="contained" type="submit" >ORDER NOW</Button></Box>
            </form>
          </Container>
        ) : (
          <></>
        )}
      </section>
    </Container>
    </>
  );
}

export default CheckBox;