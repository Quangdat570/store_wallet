import React from 'react'
import Link from 'next/link'
import { RxDoubleArrowRight } from 'react-icons/rx'
import { Container, Row, Col,Form, Card,Pagination } from 'react-bootstrap'
import styles from './Contact.module.css'

// import MUI
import {
    Box,
    Button,
    
    Grid,
    Input,
    
    styled,
    TextField,
    Typography,
  } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import NearMeIcon from "@mui/icons-material/NearMe";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import InputUnstyled from "@mui/base/InputUnstyled";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber,PhoneInput } from "react-phone-number-input";


const StyledTextareaElement = styled("textarea", {
    shouldForwardProp: (prop) =>
      !["ownerState", "minRows", "maxRows"].includes(prop.toString()),
  })(
    ({ theme }) => `
    width: calc(100% - 27px);
    min-height: 150px;
    font-family: 'Kodchasan', sans-serif;
    font-size: 16px;
    font-weight: 400;
    resize: none;
    line-height: 1.5;
    padding: 12px;
    border-radius: 4px;
    &:hover {
      border-color: #000;
    }
    &:focus {
      border-color: #d23369;
      outline: 1px solid #d23369;
    }
  `
  );
  
  const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
      <InputUnstyled
        slots={{ textarea: StyledTextareaElement }}
        {...props}
        ref={ref}
      />
    );
  });
  

const index = () => {

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors, isSubmitSuccessful },
      } = useForm({
        mode: "onChange",
        defaultValues: {
          fullname: "",
          email: "",
          
        },
      });
    
      const fullname = register("fullname", {
        required: "Vui lòng điền vào trường này",
        validate: {
          length: (v) =>
            (6 <= v.toLowerCase().trim().length &&
              v.toLowerCase().trim().length <= 50) ||
            "Name must be between 6 and 50 characters long",
        },
      });
    
      const email = register("email", {
        required: "Vui lòng điền vào trường này",
        validate: {
          isEmail: (v) =>
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              v
            ) || "Please enter an email address.",
        },
      });
      // const phone = register("phone", {
      //   required: "Vui lòng điền vào trường này",
      //   validate: {
      //     isValidPhoneNumber: (v) =>
      //       isValidPhoneNumber(v) || "Vui lòng nhập số điện thoại.",
      //   },
      // });
    
     

      const StyledSection = styled(Box)({
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      });
    
      const StyledContactInfo = styled(Box)({
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "20px",
        border: "1px solid #ccc",
        padding: "20px",
        "&:hover": {
          ".test": {
            border: "1px solid #d23369",
          },
        },
      });
    
      const StyledIconInfo = styled(Box)({
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#d23369",
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
                <div>Liên Hệ</div>
            </div>
        </div>
    </Container>
    <Container>
            <StyledSection>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "700",
                  fontFamily: "'Roboto', sans-serif",
                }}
              >
                Chúng tôi rất muốn nghe từ bạn
              </Typography>
              <Box
                sx={{
                  display: "block",
                  bgcolor: "#d23369",
                  width: "50px",
                  height: "3px",
                  marginBottom: "50px",
                }}
              ></Box>
              <Typography
                textAlign="center"
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                }}
              >
               Điều quan trọng là phải có một dịch vụ khách hàng tốt, một nhà cung cấp dịch vụ khách hàng. May mắn của Aenean cần đau đớn. khối lượng hoa nhài. Cùng với những người được sinh ra, những ngọn núi sẽ sinh ra những chiếc lông vũ và những lực đẩy lớn, và một con chuột lố bịch sẽ được sinh ra. Cho đến lúc đó, bao nhiêu lần?
              </Typography>
            </StyledSection>

            <Grid container spacing={4} mt={4}>
              <Grid item xs={12} md={4}>
                <StyledContactInfo className="test">
                  <StyledIconInfo>
                    <LocalPhoneIcon sx={{ color: "#fff" }} />
                  </StyledIconInfo>

                  <Typography
                    sx={{
                      fontSize: "26px",
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    Phone
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Roboto', sans-serif",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontWeight: "700",
                      }}
                    >
                      Toll-Free
                    </Box>
                    : 0000 - 123 - 456789
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Roboto', sans-serif",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontWeight: "700",
                      }}
                    >
                      Fax
                    </Box>
                    : 0000 - 123 - 456789
                  </Typography>
                </StyledContactInfo>
              </Grid>

              <Grid item xs={12} md={4}>
                <StyledContactInfo className="test">
                  <StyledIconInfo>
                    <MailIcon sx={{ color: "#fff" }} />
                  </StyledIconInfo>

                  <Typography
                    sx={{
                      fontSize: "26px",
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    Email
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Roboto', sans-serif",
                    }}
                  >
                    mail@example.com
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Roboto', sans-serif",
                    }}
                  >
                    support@example.com
                  </Typography>
                </StyledContactInfo>
              </Grid>

              <Grid item xs={12} md={4}>
                <StyledContactInfo className="test">
                  <StyledIconInfo>
                    <NearMeIcon sx={{ color: "#fff" }} />
                  </StyledIconInfo>

                  <Typography
                    sx={{
                      fontSize: "26px",
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    Address
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Roboto', sans-serif",
                    }}
                  >
                    No: 58 A, East Madison Street,
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Roboto', sans-serif",
                    }}
                  >
                    Baltimore, MD, USA 4508
                  </Typography>
                </StyledContactInfo>
              </Grid>
            </Grid>

            <Grid
              container
              sx={{
                marginTop: "60px",
              }}
            >
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    height: "100%",
                    padding: "0px 40px 0 0",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14899.585626821448!2d105.84077260000001!3d20.9967893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1671853345986!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    fontFamily: "'Roboto', sans-serif",
                  }}
                >
                  Gửi tin nhắn cho chúng tôi
                </Typography>
                <Box
                  sx={{
                    display: "block",
                    marginTop: "30px",
                  }}
                >
                  <form
                    key={1}
                    onSubmit={handleSubmit((data) => console.log(data))}
                    style={{ width: "100%" }}
                  >
                    <Box
                      sx={{
                        marginBottom: "20px",
                        input: { fontFamily: "'Roboto', sans-serif" },
                      }}
                    >
                      <TextField placeholder="Name" fullWidth {...fullname} />
                      <Typography
                        sx={{
                          color: "red",
                        }}
                      >
                        {errors.fullname?.message}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        marginBottom: "20px",
                        input: { fontFamily: "'Roboto', sans-serif" },
                      }}
                    >
                      <TextField placeholder="Email" fullWidth {...email} />
                      <Typography
                        sx={{
                          color: "red",
                        }}
                      >
                        {errors.email?.message}
                      </Typography>
                    </Box>
                    {/* <Box
                      sx={{
                        marginBottom: "20px",
                        input: { fontFamily: "'Kodchasan', sans-serif" },
                      }}
                    >
                      <TextField placeholder="+84" fullWidth {...phone} />
                      <Typography
                        sx={{
                          color: "red",
                        }}
                      >
                        {errors.phone?.message}
                      </Typography>
                    </Box> */}
                     <Box
                        sx={{
                          marginBottom: "20px",
                          input: { fontFamily: "'Roboto', sans-serif" },
                        }}
                      >
                        <TextField
                          label="Phone"
                          variant="outlined"
                          fullWidth
                          // {...phone}
                          type="number"
                          {...register("phone", {
                            valueAsNumber: true,
                          })}
                        />
                        <Typography
                          sx={{
                            color: "red",
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          {errors.phone?.message}
                        </Typography>
                      </Box>

                    <CustomInput
                      aria-label="Demo input"
                      multiline
                      placeholder="Type something…"
                    />

                    {isSubmitSuccessful ? (
                      <Typography
                        sx={{
                          color: "#3CCF4E",
                        }}
                      >
                        Đã gửi thành công
                      </Typography>
                    ) : (
                      ""
                    )}

                    <Button
                      variant="contained"
                      sx={{
                        marginTop: "20px",
                      }}
                      type="submit"
                    >
                      Send
                    </Button>
                  </form>
                </Box>
              </Grid>
            </Grid>
          </Container>
    </>
  )
}

export default index