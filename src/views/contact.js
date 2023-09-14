import SectionHeading from '../components/section-heading'
import CategoryCard from '../components/category-card'
import ItemCard from '../components/item-card'
import { Link } from 'react-router-dom';
import './contact.css'
import './home.css'
import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import { Helmet } from 'react-helmet'
import { MutatingDots } from 'react-loader-spinner';
import './whatsapp.css'

export default function Contact() {
    const handleOrderNow = () => {
        const phoneNumber = '923115270759';
        const message = 'Hey I want to order a product';
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
      };
    return (
        <div>

            <Helmet>
                <title>Contact Us</title>
                <meta property="og:title" content="Contact Us Naveed Traders" />
            </Helmet>
            <div className="home-navbar">
            <header style={{width:'100%'}}>
        <NavBar/>
          </header>
            </div>

            <section id='mysec'>
                <div className="section-header">
                    <div className="containerxa">
                        <h2 >Contact Us</h2><br></br>
                        <p style={{ textAlign: 'center' }}>

                            Feel Free To Contact and Visit us.
                        </p>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fas fa-home"></i>
                                </div>
                                <hr />
                                <div className="contact-info-content">
                                    <h4>Address</h4>
                                    <p>
                                    Shop # 2-3 Murree Road, Faizabad Rawalpindi                                       

                                    </p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fas fa-phone"></i>
                                </div>

                                <div className="contact-info-content">
                                    <h4>Phone</h4>
                                    <a href="tel:0515675821">051 5675821</a>
                                    
                                    
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>

                                <div className="contact-info-content">

                                    <h4>Email</h4>
                                    <a href="mailto:naveedtraders333@gmail.com" >naveedtraders333@gmail.com</a>
                                </div>
                            </div>
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
                            heading="Locate Us!"
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

            </section>

            <div className="home-footer conatiner-fluid ">
                <div className="max-width-container">
                    <footer className="home-footer1">
                    <div className="home-container09">
              <h3 className="home-text32 Heading-3">Naveed Traders</h3>
              <span className="home-text33">
                <i className="fas fa-home icon " ></i>
                <span style={{ paddingLeft: 8 }}>Shop # 2-3 Murree Road, Faizabad Rawalpindi</span>
              </span>

              <span style={{ marginTop: 15 }}>

                <a href="tel:051 5675821" className="home-text36" >
                  <i className="fas fa-phone icon " ></i> 051 5675821 <br></br>
                  
                  
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

    );

}