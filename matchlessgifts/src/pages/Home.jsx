import React from 'react'
import { Carousel, initMDB } from "mdb-ui-kit";
import "/src/styles.css/HomePageCopies.css";
import { Link } from 'react-router-dom';
import HomePageCarousel from '../components/HomePageCarousel';
import ProfilePage from './ProfilePage';

const Home = () => {
  // initMDB({ Carousel });
  return (
  <>
  <HomePageCarousel/>

 
<br />
  <section class="home">
    <div class="content">
      <h1> <span>Fashion Products</span>
        <br/>
        Up To <span id="span2">50%</span> Off
      </h1>
      <br />
      <p>Elevate your wardrobe with the latest trends, from chic essentials to runway-inspired looks. 
        <br />
        <br/>Explore, indulge, and redefine your style today!
      </p>
      <div><button><Link  style={{ textDecoration: 'none', color: 'inherit' }} to="/shop" >Shop Now </Link> </button></div>

    </div>
    <div class="img" style={{marginRight:'10px'}}> 
      <img src="src/assets/fashion-ecommerce.jpg" alt=""/>
    </div>
  </section>

  <div class="container" id="offer">
      <div class="row">
        <div class="col-md-3 py-3 py-md-0">
          <i class="fa-solid fa-cart-shopping"></i>
          <h3>Free Shipping</h3>
          <p>On order over $1000</p>
        </div>
        <div class="col-md-3 py-3 py-md-0">
          <i class="fa-solid fa-rotate-left"></i>
          <h3>Free Returns</h3>
          <p>Within 30 days</p>
        </div>
        <div class="col-md-3 py-3 py-md-0">
          <i class="fa-solid fa-truck"></i>
          <h3>Fast Delivery</h3>
          <p>World Wide</p>
        </div>
        <div class="col-md-3 py-3 py-md-0">
          <i class="fa-solid fa-thumbs-up"></i>
          <h3>Big choice</h3>
          <p>Of products</p>
        </div>
      </div>
    </div>

 
</>
  )
}

export default Home