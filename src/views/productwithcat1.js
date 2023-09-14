
import { Helmet } from 'react-helmet'
import React, { useContext, useState, useRef, useEffect } from 'react';

// Import Intersection Observer
import 'intersection-observer';

import './home.css'
import { data } from './alldata'
import { useLocation } from 'react-router-dom';
import SideBarFilter from './SideBarFilter';
import { MutatingDots } from "react-loader-spinner";
import './productwithcat.css'
import './toogle'
import './whatsapp.css'
import NavBar from "./NavBar";

export default function Productswithcat() {
    const [imageLoadError, setImageLoadError] = useState(Array(15).fill(false)); // Initialize with no errors
  
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const [loadingImages, setLoadingImages] = useState(Array(15).fill(true)); // Initialize with loaders

    const handleImageLoad = (index) => {
        // Set the specific image as loaded
        setLoadingImages((prevLoadingImages) => {
          const updatedLoadingImages = [...prevLoadingImages];
          updatedLoadingImages[index] = false;
          return updatedLoadingImages;
        });
        setImageLoadError((prevImageLoadError) => {
            const updatedImageLoadError = [...prevImageLoadError];
            updatedImageLoadError[index] = false;
            return updatedImageLoadError;
          });
      };
      const handleImageError = (index) => {
        // Set the specific image as having an error
        setImageLoadError((prevImageLoadError) => {
          const updatedImageLoadError = [...prevImageLoadError];
          updatedImageLoadError[index] = true;
          return updatedImageLoadError;
        });
      };





    const [loadedImages, setLoadedImages] = useState(15); // Initially, load the first 15 images
    const lastImageRef = useRef(null);
  
    // ... other code ...
  
    // Function to handle scrolling and load more images
    const handleScroll = () => {
      if (lastImageRef.current) {
        const lastImageOffset = lastImageRef.current.offsetTop + lastImageRef.current.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
  
        // Check if the user has scrolled to the last image
        if (pageOffset > lastImageOffset - 200 && loadedImages < productTiles.flat().length) {
          // Load more images
          setLoadedImages((prevLoadedImages) => prevLoadedImages + 15); // Load the next 15 images
        }
      }
    };
  
    // Attach the scroll event listener
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);



    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const SelectedSize = searchParams.get('size') || 'All';
    console.log("FROM LIK "+SelectedSize);
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    const productTiles = data;
    const sizes = [
        'All',
        'Ceramics',
        'Porcelain',
       
    ];


    // State for the selected size filter
    const [selectedSize, setSelectedSize] = useState(SelectedSize);
    const [selectedx, setSelectedx] = useState(null);
    


    // Filter the tiles based on selected size
    
    const [showLoader, setShowLoader] = useState(false);


    const [isLoading, setIsLoading] = useState(true);


    const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(prevState => !prevState);
  };
    const closeModal = () => {
        setShowModal(false);
    };
    const modalButtonRef = useRef(null);

    const handleOrderNow = () => {
        const phoneNumber = '923203011111';
        const message = 'Hey I want to order a product';
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
        setLoadedImages(15)
       if( event.target.value=='All')
       {
        setSelectedx(null)
       
       }
    };

    useEffect(() => {
        // Hide the loader after 2 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        // Clear the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    // Render the loader while isLoading is true
  
    const concatenatedTiles = [...productTiles[0], ...productTiles[1], ...productTiles[2]];
    const concatenatedTilesX = [...productTiles[3], ...productTiles[4], ...productTiles[5]];
    

    return (

        <div >
              {!isLoading ? null : (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <MutatingDots type="MutatingDots" color="#000000" height={80} width={80} ></MutatingDots><br></br>
          <p style={{ fontFamily: 'Jost', fontWeight: '500', fontSize: 19, marginTop: '10px', marginLeft: 15 }}> Loading Products...</p>

        </div>
      )}



            <Helmet>
                <title>Naveed Traders</title>
                <meta property="og:title" content="Naveed Traders" />
            </Helmet>
            <div className="home-navbar">
            <header style={{width:'100%'}}>
        <NavBar/>
          </header>
            </div>


            <div>
                <a className="float" target="_blank" onClick={handleOrderNow}>
                    <i className="fa fa-whatsapp my-float"></i>
                </a>
            </div>

            <div style={{ marginTop: 72, height: '100vh', backgroundColor: 'white', display: 'grid', gridTemplateRows: '15% 80%' }}>

                <div className="categories-container">
                    <h2 style={{marginTop:45}} className="categories-heading">CATEGORIES</h2>
                    <select
                        value={selectedSize}
                        onChange={handleSizeChange}
                        className="categories-select"
                    >
                        {sizes.map((size) => (
                            <option key={size} value={size} selected={selectedSize === size}>
                                {size}
                            </option>
                        ))}
                    </select>
                    <div className="categories-line"></div>
                </div>





                <div style={{ marginTop: 72, height: '100vh', backgroundColor: 'white', display: 'grid', gridTemplateRows: '15% 1fr' }}>
                    {/* Sidebar */}

                    <SideBarFilter setSelectedSize={setSelectedx} selectedSize={selectedSize} setSelectedx={setSelectedx} selectedx={selectedx} />
                </div>


                <div className="product-display">
                    <div className="topflex">
                    {selectedSize === 'All' && selectedx==null  &&
 productTiles.flat().slice(0, loadedImages).map((x, index) => (
   <div className="productcover1" key={index}>
    {index === loadedImages - 1 && (
      <div ref={lastImageRef}></div> // This is the last image
    )}
    <img
      style={{ borderRadius: 10, cursor: 'pointer' }}
      className="product-image"
      height={'100%'}
      width={'100%'}
      src={x}
      alt={`Product Image ${index}`}
      onLoad={() => handleImageLoad(index)}
    />
    {loadingImages[index] && <div className="product-image"> <h3 style={{color:'black'}}>Loading...</h3><br></br>
         </div>}
  </div>
  ))
}

{selectedSize === 'Ceramics' && selectedx==null  &&
 concatenatedTiles.flat().slice(0, loadedImages).map((x, index) => (
    <div className="productcover1" key={index}>
      <img
        style={{ borderRadius: 10, cursor: 'pointer' }}
        className="product-image"
        height={'100%'}
        width={'100%'}
        src={x}
        alt={`Product Image ${index}`}
      />
      {index === loadedImages - 1 && (
        <div ref={lastImageRef}></div> // This is the last image
      )}
    </div>
  
  ))
}

{selectedSize === 'Porcelain' && selectedx==null  &&
  concatenatedTilesX.flat().slice(0, loadedImages).map((x, index) => (
    <div className="productcover1" key={index}>
      <img
        style={{ borderRadius: 10, cursor: 'pointer' }}
        className="product-image"
        height={'100%'}
        width={'100%'}
        src={x}
        alt={`Product Image ${index}`}
      />
      {index === loadedImages - 1 && (
        <div ref={lastImageRef}></div> // This is the last image
      )}
    </div>
  
  ))
}

                        {selectedx === '25x50' && (
                            <>
                                {showLoader && (
                                    <div className='loader-container'>
                                        <div className='loader'></div>
                                    </div>
                                )}

                                {productTiles[0].flat().slice(0, loadedImages).map((x, index) => (
    <div className="productcover1" key={index}>
      <img
        style={{ borderRadius: 10, cursor: 'pointer' }}
        className="product-image"
        height={'100%'}
        width={'100%'}
        src={x}
        alt={`Product Image ${index}`}
      />
      {index === loadedImages - 1 && (
        <div ref={lastImageRef}></div> // This is the last image
      )}
    </div>
                                ))}
                            </>
                        )}
                        {selectedx === '30x60' && (
                            <>
                                {showLoader && (
                                    <div className='loader-container'>
                                        <div className='loader'></div>
                                    </div>
                                )}

                                {showLoader ? (
                                    <div className='loader-container'>
                                        <div className='loader'></div>
                                    </div>
                                ) : (

                                    productTiles[1].flat().slice(0, loadedImages).map((x, index) => (
                                        <div className="productcover1" key={index}>
                                          <img
                                            style={{ borderRadius: 10, cursor: 'pointer' }}
                                            className="product-image"
                                            height={'100%'}
                                            width={'100%'}
                                            src={x}
                                            alt={`Product Image ${index}`}
                                          />
                                          {index === loadedImages - 1 && (
                                            <div ref={lastImageRef}></div> // This is the last image
                                          )}
                                        </div>
                                    ))
                                )}
                            </>
                        )}



                        {selectedx === '40x40' && (
                            <>
                                {showLoader && (
                                    <div className='loader-container'>
                                        <div className='loader'></div>
                                    </div>
                                )}

                                {showLoader ? (
                                    <div className='loader-container'>
                                        <div className='loader'></div>
                                    </div>
                                ) : (
                                    productTiles[2].flat().slice(0, loadedImages).map((x, index) => (
                                        <div className="productcover1" key={index}>
                                          <img
                                            style={{ borderRadius: 10, cursor: 'pointer' }}
                                            className="product-image"
                                            height={'100%'}
                                            width={'100%'}
                                            src={x}
                                            alt={`Product Image ${index}`}
                                          />
                                          {index === loadedImages - 1 && (
                                            <div ref={lastImageRef}></div> // This is the last image
                                          )}
                                        </div>
                                    ))
                                )}
                            </>
                        )}

                        {selectedx === '40x80' && (
                            <>
                                {showLoader && (
                                    <div className='loader-container'>
                                        <div className='loader'></div>
                                    </div>
                                )}

                                {showLoader ? (
                                    <div className='loader-container'>
                                        <div className='loader'></div>
                                    </div>
                                ) : (
                                    productTiles[3].flat().slice(0, loadedImages).map((x, index) => (
                                        <div className="productcover1" key={index}>
                                          <img
                                            style={{ borderRadius: 10, cursor: 'pointer' }}
                                            className="product-image"
                                            height={'100%'}
                                            width={'100%'}
                                            src={x}
                                            alt={`Product Image ${index}`}
                                          />
                                          {index === loadedImages - 1 && (
                                            <div ref={lastImageRef}></div> // This is the last image
                                          )}
                                        </div>
                                    ))
                                )}
                            </>
                        )}


                        {selectedx === '60x60' && (
                            <>
                                {showLoader && (
                                    <div className='loader-container'>
                                        <div className='loader'></div>
                                    </div>
                                )}

                                {showLoader ? (
                                    <div className='loader-container'>
                                        <div className='loader'></div>
                                    </div>
                                ) : (
                                    productTiles[4].flat().slice(0, loadedImages).map((x, index) => (
                                        <div className="productcover1" key={index}>
                                          <img
                                            style={{ borderRadius: 10, cursor: 'pointer' }}
                                            className="product-image"
                                            height={'100%'}
                                            width={'100%'}
                                            src={x}
                                            alt={`Product Image ${index}`}
                                          />
                                          {index === loadedImages - 1 && (
                                            <div ref={lastImageRef}></div> // This is the last image
                                          )}
                                        </div>
                                    ))
                                )}
                            </>
                        )}

                        {selectedx === '60x120' && (
                            <>
                                {showLoader && (
                                    <div className='loader-container'>
                                        <div className='loader'></div>
                                    </div>
                                )}

                                {showLoader ? (
                                    <div className='loader-container'>
                                        <div className='loader'></div>
                                    </div>
                                ) : (
                                    productTiles[5].flat().slice(0, loadedImages).map((x, index) => (
                                        <div className="productcover1" key={index}>
                                          <img
                                            style={{ borderRadius: 10, cursor: 'pointer' }}
                                            className="product-image"
                                            height={'100%'}
                                            width={'100%'}
                                            src={x}
                                            alt={`Product Image ${index}`}
                                          />
                                          {index === loadedImages - 1 && (
                                            <div ref={lastImageRef}></div> // This is the last image
                                          )}
                                        </div>
                                    ))
                                )}
                            </>
                        )}


                    </div>







                </div>

            </div>
        </div>



    );
};


