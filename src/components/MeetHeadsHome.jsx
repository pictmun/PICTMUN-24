import React, { useState } from 'react';

export default function MeetHeadsHome({ images }){
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const goToPrevious = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  // const goToNext = () => {
  //   const isLastSlide = currentIndex === images.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  // return (
  //   <div className="relative w-full h-96">
  //     <div className="carousel flex h-full overflow-hidden">
  //       {images.map((image, index) => (
  //         <div
  //           className={`carousel-item flex-shrink-0 w-full h-full transition-opacity duration-500 ${
  //             index === currentIndex ? 'opacity-100' : 'opacity-0'
  //           }`}
  //           key={index}
  //         >
  //           <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
  //         </div>
  //       ))}
  //     </div>
  //     <button
  //       className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
  //       onClick={goToPrevious}
  //     >
  //       <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
  //         <path d="M15 19l-7-7 7-7"></path>
  //       </svg>
  //     </button>
  //     <button
  //       className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
  //       onClick={goToNext}
  //     >
  //       <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
  //         <path d="M9 5l7 7-7 7"></path>
  //       </svg>
  //     </button>
  //   </div>
  // );
};
