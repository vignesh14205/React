import React from 'react'
import Logo1 from './Logo1.png';
import car1 from './car1.webp';
import car2 from './car2.jpg';
import car4 from './car4.jpg';
import homebgedit1 from './homebgedit1.png';
import home1 from './home1.webp';
import home2 from './home2.webp';
import Footer from './Footer';
import './Footer.css';
import Carousel from 'react-bootstrap/Carousel';
export default function Home()
 {
   return(
       <div>
        <div class="logohome">
         <img class="img2" src={Logo1} alt="Logo1"/>
         <h1 class="head">SmartCart</h1>
         </div> 


      <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <img class="car" src={car2} alt="img2"/>
      <Carousel.Caption>
      <h5></h5>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img class="car" src={car1} alt="img2"/>
      <Carousel.Caption>
      <h5></h5>
      </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
      <img class="car3" src={""} alt="img2"/>
      <Carousel.Caption>
      <h5></h5>
      </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
      <img class="car" src={""} alt="img2"/>
      <Carousel.Caption>
      <h5></h5>
      </Carousel.Caption>
      </Carousel.Item> */}
      </Carousel>

    <p class="heading">EXPLORE ITEMS</p>

    <div class="home">

    <div class="homebg1">
    <img class="homebg" src={homebgedit1} alt="img2"/>

      <div class="box1">
    <img class="home1" src={home1} alt="img2"/>
    <div class="text">
        Explore Fresh Vegetabels
    </div>
      </div>
      <div class="box2">
    <img class="home1" src={home2} alt="img2"/>
    <div class="text">
        Explore Snaks 
    </div>
      </div>
      <div class="box3">
    <img class="home1" src={home2} alt="img2"/>
    <div class="text">
        Explore Snaks 
    </div>
      </div>
    </div>

    </div>

      <Footer/>
     </div>
        )
 }