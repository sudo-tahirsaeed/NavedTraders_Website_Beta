import React from 'react'

import { Helmet } from 'react-helmet'

import './about.css'
import './home'
import { Link } from 'react-router-dom';

const About = (props) => {
  
  return (
    <div>


      <Helmet>
        <title>VERSA HOMES</title>
        <meta property="og:title" content="VERSA Homes" />
      </Helmet>
      <div className="home-navbar">
        <header data-role="Header" className="home-header max-width-container">

          <div className="home-navbar1">

            <div className="home-middle">
              <div className="home-left">

                <Link to="/" > <span className="navbar-link">HOME</span></Link>
                <Link to="/products" > <span className="navbar-link">PRODUCTS</span> </Link>
              </div>
              <Link to="/" > <span className="navbar-logo-title">VERSA HOMES</span></Link>
              <div className="home-right">
                <Link to="/about" >                <span className="navbar-link">ABOUT</span></Link>

                <Link to="/contact" >   <span className="navbar-link">CONTACT</span></Link>
              </div>
            </div>
            <div style={{ marginBottom: 0 }} className="home-icons">
            </div>
          </div>




          {/* HAMBURGER */}
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-container02">
                <span className="home-logo-center1">VERSA HOMES</span>
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-middle1">
                <Link to="/" className="home-text06">HOME</Link>
                <Link to="/products" className="home-text07">PRODUCTS</Link>
                <Link to="/about" className="home-text08">ABOUT</Link>
                <Link to="/contact" className="home-text09">CONTACT US</Link>

              </div>
            </div>

          </div>
        </header>
      </div>

      <div className="about-container">
        <div className="about-image">
          <img src="images/ceo.png" alt="About" className="rounded-image" />
        </div>
        <div className="about-text">
          <h1 className='hheading'>About Us</h1>
          <p>

            VERSA Homes, your ultimate destination for all your tile and sanitary needs! We specialize in offering an extensive range of local and imported tiles and sanitary products, ensuring you have access to the best options available.
          </p>
          <p>
            Our commitment to quality means that every product we offer is crafted with precision and designed to enhance your living spaces.
          </p>
          <p>
            Whether you're looking to renovate your bathroom or give your home a stylish makeover, VERSA Homes is here to provide you with top-notch products and exceptional service. Experience the perfect blend of quality and style with VERSA Homes today!
          </p>
          <a className='as' id='ac' href='/contact'><button  style={{
            padding: '10px 20px',
            backgroundColor: '#A3C1AD',


            marginTop: 15,
            border: 'none',
            color: 'black',
            borderRadius: '5px',
            width: 150,
            height: 50,
            alignSelf: 'center',
            
          }}>Contact Us</button></a>
        </div>
      </div>




      <div className="home-footer">
        <div className="max-width-container">
          <footer className="home-footer1">
          <div className="home-container09">
              <h3 className="home-text32 Heading-3">VERSA HOMES</h3>
              <span className="home-text33">
                <i className="fas fa-home icon " ></i>
                <span style={{ paddingLeft: 8 }}>Shop #3 Nargis Plaza, Murree Road Faizabad Rawalpindi</span>
              </span>

              <span style={{ marginTop: 15 }}>

                <a href="tel:+92 3136460000" className="home-text36" >
                  <i className="fas fa-phone icon " ></i> +92 3136460000 <br></br>
                  
                  
                </a>
                <a href="tel:051 6424894" className="home-text36" >
                  <i className="fas fa-phone icon " ></i> 051 6424894 <br></br>
                  
                  
                </a>
              </span>
              <a href="mailto:VERSA@gmail.com" className="home-text37" style={{ marginTop: 15 }}>
                <i className="fas fa-envelope icon "></i> sajid.versahome@gmail.com
              </a>
            </div>
          
            <div className="home-links-container">
              <div className="home-container10"></div>
              <div className="home-container11"></div>
              <div className="home-container12"></div>
            </div>
          </footer>

        </div>
      </div>

    </div>


  )
}

export default About
