import React from 'react'
import styles from './HeroBanner.module.css'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Link from 'next/link'
import { IoRocketOutline } from 'react-icons/io5'
import Carousel from 'react-bootstrap/Carousel';

const HeroBanner = () => {
  return (
    <Container className={styles.background1} fluid>
      <div>
        <button className={styles.btn_banner}>Theo dõi</button>
      </div>
        
    </Container>
  )
}

export default HeroBanner