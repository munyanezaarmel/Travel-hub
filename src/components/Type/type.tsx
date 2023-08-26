import React from 'react'
import explore from '../../assets/explore.png'
export default function Type() {
  return (
    <div>
      <h1 className="ml-20 font-bold font-inter text-[24px]  ">
        Browse by property type
      </h1>
      <div className="flex ml-20 gap-3 mb-4">
        <div className="flex flex-col">
          <img src={explore} alt="explore image" />
          <p className="font-bold font-inter text-[16px] pt-2">Apartments</p>
          <p className="font-semi-bold font-inter text-[16px]">24 Apartments</p>
        </div>
        <div className="flex flex-col  ">
          <img src={explore} alt="explore image" />
          <p className="font-bold font-inter text-[16px] pt-2">Resort</p>
          <p className="font-semi-bold font-inter text-[16px]">24 Resort</p>
        </div>
        <div className="flex flex-col  ">
          <img src={explore} alt="explore image" />
          <p className="font-bold font-inter text-[16px] pt-2">Villas</p>
          <p className="font-semi-bold font-inter text-[16px]">24 Villas</p>
        </div>
        <div className="flex flex-col  ">
          <img src={explore} alt="explore image" />
          <p className="font-bold font-inter text-[16px] pt-2">Cabins</p>
          <p className="font-semi-bold font-inter text-[16px]">24 cabins</p>
        </div>
        <div className="flex flex-col  ">
          <img src={explore} alt="explore image" />
          <p className="font-bold font-inter text-[16px] pt-2">Kigali</p>
          <p className="font-semi-bold font-inter text-[16px]">24 properties</p>
        </div>
      </div>
    </div>
  );
}
