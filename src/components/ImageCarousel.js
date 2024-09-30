import React, { useState } from 'react';

function ImageCarousel() {
  const images = [
    `${process.env.PUBLIC_URL}/images/image1.jpg`,
    `${process.env.PUBLIC_URL}/images/image2.jpeg`,
    `${process.env.PUBLIC_URL}/images/image3.jpg`,
    // Add more image paths as needed
  ];

  const [imageIndex, setImageIndex] = useState(0);

  const prevImage = () => {
    setImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="section active">
      <div className="image-section">
        <img
          id="displayed-image"
          src={images[imageIndex]}
          alt="Fart"
          width="500"
        />
        <div className="image-buttons">
          <button onClick={prevImage}>Previous</button>
          <button onClick={nextImage}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;