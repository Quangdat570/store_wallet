import React from 'react'
import styles from './HeroBanner.module.css'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Link from 'next/link'
import { IoRocketOutline } from 'react-icons/io5'
import Carousel from 'react-bootstrap/Carousel';

const HeroBanner = () => {
  return (
    // <Container className={styles.background1} fluid>
    //   <div>
    //     <button className={styles.btn_banner}>Theo dõi</button>
    //   </div>
        
    // </Container>
    <Container fluid className=''>
      <div className="row ">
        <div className="col-12 p-0">
          <img src="../../../home-img/image_banner.jpg" alt="" className={styles.img_banner} />
        </div>
      </div>
    </Container>
  )
}

export default HeroBanner