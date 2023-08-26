import React from 'react'
import desk from '../../assets/desk.png'

export default function TrendingDestination() {
  return (
    <div>
      <h1 className="ml-20 font-bold font-inter text-[24px]  ">
        Trending destinations
      </h1>
      <p className="ml-20 text-[#333] text-[16px] font-inter">
        travellers searching for Rwanda also booked this
      </p>
      <div className="grid grid-cols-3 p-8 m-8">
        <img src={desk} alt="trending image" className="rounded-lg " />
        <img src={desk} alt="trending image" className="rounded-lg ml-4 mr-4" />
        <img src={desk} alt="trending image" className="rounded-lg ml-8 " />
        <img src={desk} alt="trending image" className="rounded-lg mt-4 " />
        <img src={desk} alt="trending image" className="rounded-lg ml-4 mt-4" />
      </div>
    </div>
  );
}
