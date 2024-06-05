import {Routes, Route} from 'react-router-dom'
import MeetHeads from './components/MeetHeads'
import MeetHeadsHome from './components/MeetHeadsHome'
import React, { useState, useEffect } from 'react';
import USGCard from './components/USGCard';

function App() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesSec = [
    'img1.png', 
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesSec.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const USGcardsData = [
    {
      image1: 'img1.png',
      title1: 'Title 1',
      description1: 'Description 1',
      image2: 'img2.jpg',
      title2: 'Title 2',
      description2: 'Description 2',
    },
    {
      image1: 'img3.jpg',
      title1: 'Title 3',
      description1: 'Description 3',
      image2: 'img4.jpg',
      title2: 'Title 4',
      description2: 'Description 4',
    },
  ];
  const [currentUSGCardIndex, setCurrentUSGCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUSGCardIndex((prevIndex) => (prevIndex + 1) % USGcardsData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [USGcardsData.length]);

  return (
    <>
      <div className='bg-[#F1EEE7] p-7 sm:p-16'>

      <div className='bg-[#A1B9C6] flex flex-col items-center pt-10 sm:p-5 rounded-3xl'>
        <h1 className='text-[#1C2C44] text-3xl sm:text-5xl font-extrabold mt-8'>MEET OUR HEADS</h1>
        <h1 className='text-[#1C2C44] text-2xl sm:text-4xl sm py-5 font-bold'>The Secretariat</h1>
        
        <div className="flex flex-col justify-center items-center mx-5">
        <img
          className="rounded-md"
          src={imagesSec[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          height={600}
          width={600}
        />
        </div>

        <hr className="border-0 bg-gray-300 h-px pt-5" />        
        <h1 className='text-[#1C2C44] text-xl sm:text-4xl sm py-5 font-bold'>Under Secretary General(USG)</h1>
        <div className="flex mb-10">
        <USGCard USGcardData={USGcardsData[currentUSGCardIndex]} />
        </div>

      </div>

      </div>
        
      {/* <Routes>
        <Route path='MeetHeads' element={<MeetHeads />}></Route>
        <Route path='MeetHeadsHome' element={<MeetHeadsHome />}></Route>
      </Routes> */}
    </>
  )
}

export default App
