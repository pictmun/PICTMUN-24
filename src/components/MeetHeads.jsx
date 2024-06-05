import React, { useState, useEffect } from 'react';

export default function MeetHeads() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/images/img1.png', // Update these paths if necessary
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-44 mb-16">
        <h3 className="text-2xl text-white font-bold pb-8">Recent Highlights</h3>
        <img
          className="rounded-md w-2/5 h-96"
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </div>
    </>
  );
}