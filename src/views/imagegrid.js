import React from 'react';
import './imagegrid.css'; // Import your CSS stylesheet

const ImageGrid = () => {
  const imageLinks = [
    'https://i.ibb.co/61qWrf4/1.jpg',
    'https://i.ibb.co/TR1CNWv/2.jpg',
    'https://i.ibb.co/CwtJz1B/3.jpg',
    'https://i.ibb.co/wWmFfgh/4.jpg',
    'https://i.ibb.co/ZHtsVLW/5.jpg',
    'https://i.ibb.co/sH5QyY2/6.jpg',
    'https://i.ibb.co/Tc60J9X/7.jpg',
    'https://i.ibb.co/qg9SR6W/12.jpg',
    'https://i.ibb.co/RzL17X5/43.jpg',
    'https://i.ibb.co/5szyxWw/44.jpg',
    // 'https://i.ibb.co/y817bT4/55.jpg',
    // 'https://i.ibb.co/31FwLRG/64.jpg',
    // 'https://i.ibb.co/M114q8k/77.jpg',
    // 'https://i.ibb.co/t3QYWqR/123.jpg',
    // 'https://i.ibb.co/9yhTY9P/764.jpg',
  ];

  return (
    <section className="gallery">
      {imageLinks.map((link, index) => (
        <div className="image" key={index}>
          <img
            src={link}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </section>
  );
};

export default ImageGrid;
