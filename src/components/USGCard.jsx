import React from 'react';

const USGCard = ({ USGcardData }) => {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row rounded-lg">
        <div className='my-2 bg-[#F1EEE7] p-2 mx-5 sm:mx-10 rounded-md shadow-lg'>
            <img className="w-96 h-96 object-cover rounded-md" 
                 src={USGcardData.image1} 
                 alt="Image 1"
                 />
            <div className="p-4">
            <h2 className="text-xl font-semibold">{USGcardData.title1}</h2>
            <p className="text-gray-700">{USGcardData.description1}</p>
            </div>
        </div>
      <div className='my-2 bg-[#F1EEE7] p-2 rounded-md mx-5 sm:mx-10 shadow-lg'>
        <img className=" h-96 w-96 object-cover rounded-md" 
             src={USGcardData.image2} 
             alt="Image 2"
             />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{USGcardData.title2}</h2>
          <p className="text-gray-700">{USGcardData.description2}</p>
        </div>
      </div>
    </div>
  );
};

export default USGCard;