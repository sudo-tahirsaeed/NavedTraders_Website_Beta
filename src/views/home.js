import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { DataContext } from './data';

import { Helmet } from 'react-helmet'
import styles from '../components/VideoBackground.module.css'; // Import CSS module if using CSS modules

import SectionHeading from '../components/section-heading'
import CategoryCard from '../components/category-card'
import ItemCard from '../components/item-card'
import { Link } from 'react-router-dom';
import { MutatingDots } from "react-loader-spinner";
import './home.css'
import './whatsapp.css'
import x from './logo192.png'
import NavBar from "./NavBar";
import ImageGrid from './imagegrid';
const Home = () => {

  const videoRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const videoElement = videoRef.current;
    const checkLoadingStatus = () => {


      setIsLoading(false);
    };
    if (videoElement) {
      // console.log("ok");
      videoElement.addEventListener('loadeddata', checkLoadingStatus);

      // Call the checkLoadingStatus function here
      return () => {
        videoElement.removeEventListener('loadeddata', checkLoadingStatus);

      };

    }

  }, [videoRef]);
  const images = [
    'https://i.ibb.co/2jvfjkj/image-008.jpg',
    'https://i.ibb.co/tDw3rpf/image-038.jpg',
    'https://i.ibb.co/r6BCY8z/3-21.png',
  ];
  
  const VideoBackground = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const videoRef = useRef(null);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 4000); // Change image every 3 seconds (3000 milliseconds)
  
      return () => clearInterval(intervalId);
    }, []);
  
    const backgroundImageStyle = {
      backgroundImage: `url(${images[currentImage]})`,
      transition: 'background-image 1s ease-in-out', // Add transition for background-image
    };
  
    return (
      <div className={styles.container} style={backgroundImageStyle}>
        <div className={styles.content}>
          <h1 style={{padding:18,borderWidth:1,borderRadius:9}}>Your Destination for Beautiful Tiles! </h1>
          <Link to="/products">
            <button
              className="btnnn"
              style={{
                padding: '10px 20px',
                backgroundColor: 'white',
                marginTop: 15,
                border: 'none',
                color: 'black',
                borderRadius: '5px',
                width: 150,
                height: 50,
                alignSelf: 'center',
              }}
            >
             Shop Now
            </button>
          </Link>
        </div>
      </div>
    );
  };
  
  
  
  
  
  

  const { data, updateData } = useContext(DataContext);
  

 
    const handleOrderNow = () => {
      const phoneNumber = '923115270759';
      const message = 'Hey I want to order a product';
      const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, '_blank');
    };
  
    return (
      <div className="home-container">
        {!isLoading ? null : (
          <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <MutatingDots type="MutatingDots" color="#000000" height={80} width={80} ></MutatingDots><br></br>
            <p style={{ fontFamily: 'Jost', fontWeight: '500', fontSize: 19, marginTop: '10px', marginLeft: 15 }}> Loading Naveed Traders...</p>

          </div>
        )}
        <Helmet>
          <title></title>
          <meta property="og:title" content="Naveed Traders" />
        </Helmet>
        <div className="home-navbar">
          <header style={{width:'100%'}}>
        <NavBar/>
          </header>

        </div>
        {/* HAMBURGER ICON ENDS */}
        <div className="home-main">
         
          <VideoBackground></VideoBackground>
         
          <div className="section-container column">
            <div className="max-width-container">
              <SectionHeading
                heading="Discover Tiles"
                subtitle="Find best Fit for your needs from our variety of collection!"
              ></SectionHeading>
              <div className="home-cards-container">
                <Link to={`/products?size=${encodeURIComponent('Ceramics')}`}>
                  <CategoryCard name="Ceramics Tiles" category_img="https://rethority.com/wp-content/uploads/2022/11/Shutterstock_2117695976.jpg.webp" />
                </Link>


               
                <Link to={`/products?size=${encodeURIComponent('Porcelain')}`}>
                  <CategoryCard
                    name="Porcelain"
                    category_img="https://i.ibb.co/745yyKh/por.jpg"
                  ></CategoryCard>  </Link>

                
              </div>
            </div>
            <SectionHeading
                heading="Gallery"
                subtitle="We deliver best quality tiles!"
              ></SectionHeading>
            <ImageGrid/>
            <Link to="/products">
            <button
              className="btnnn"
              style={{
                padding: '10px 20px',
                backgroundColor: '#002D62',
                marginTop: 0,
                marginBottom:35,
                border: 'none',
                // color: 'white',
                borderRadius: '5px',
                width: 150,
                height: 50,
                alignSelf: 'center',
              }}
            >
             View More
            </button>
            </Link>
            <div className="home-banner">
              <div className="home-container05">
                <h3 className="home-text19 Heading-3" style={{ paddingLeft: 60 }}>Naveed Traders <span style={{ paddingLeft: 8 }}></span> </h3>
                <span className="home-text20">
                  <span style={{ paddingLeft: 5 }}>Luxury Tiles Dealership</span>
                </span>
              </div>
            </div>
            <div className="home-container06 max-width-container">
              <div className="home-container07">
                <span className="home-text23">
                  <span style={{ fontWeight: '800' }}>
                    Naveed Traders
                  </span>
                  <br></br>
                  <span style={{ fontWeight: '800' }}  >Tiles Dealership</span>
                  <br></br>
                  <span style={{ fontWeight: '500' }}>
                  Experience elegance at our Rawalpindi tile store! We specialize in high-quality tiles that turn your spaces into beautiful artworks. Our collection includes lovely bathroom tiles for a peaceful atmosphere and versatile choices for your kitchen and rooms. We're known for trust and quality, offering the best in tile craftsmanship. Our friendly team is here to make your ideas come true, giving you not just tiles, but a home masterpiece. Elevate your space with us, your reliable source for premium tiles.
                     <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>


              </div>
            </div>
          </div>





          <div>
            

            <a  className="float" target="_blank" onClick={handleOrderNow}>
              <i className="fa fa-whatsapp my-float"></i>
            </a>
          </div>










          
          <div className="section-container">
            <div className="max-width-container">
              <SectionHeading
                heading="Locate Us"
                subtitle="Feel Free to Visit us 7AM-9PM"
                rootClassName="section-heading-root-class-name"
              ></SectionHeading>
              <div className="home-container08">

                <div style={{ width: '100%' }}>
                  <iframe
                    title="Google Maps"
                    width="100%"
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                    height="550"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Naveed%20Traders%20Murree%20Road+(Naveed%20Traders)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population Estimator map</a>           </iframe>



                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-footer">
          <div className="max-width-container">
            <footer className="home-footer1 " >
              <div className="home-container09">
                <h3 className="home-text32 Heading-3">Naveed Traders</h3>
                <span className="home-text33">
                  <i className="fas fa-home icon " ></i>
                  <span style={{ paddingLeft: 8 }}>Shop # 2-3 Murree Road, Faizabad Rawalpindi</span>
                </span>

                <span style={{ marginTop: 15 }}>

                  <a href="tel:051 4575821" className="home-text36" >
                    <i className="fas fa-phone icon " ></i> 051 4575821 <br></br>


                  </a>
                  
                </span>
                <a href="mailto:naveedtraders333@gmail.com" className="home-text37" style={{ marginTop: 15 }}>
                  <i className="fas fa-envelope icon "></i> naveedtraders333@gmail.com
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

  export default Home
