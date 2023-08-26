import React from "react";
import explore from '../../assets/explore.png'
export default function Explore() {
  return (
    <div>
      <h1 className="ml-20 font-bold font-inter text-[24px]  ">
        Explore Rwanda
      </h1>
      <p className="ml-20 text-[#333] text-[16px] font-inter mb-2">
        These popular destinations have a lot to offer
      </p>
      <div className="flex ml-20 gap-3 mb-4">
        <div className="flex flex-col">
          <img src={explore} alt="explore image" />
          <p className="font-bold font-inter text-[16px] pt-2">Kigali</p>
          <p className="font-semi-bold font-inter text-[16px]">24 properties</p>
        </div>
        <div className="flex flex-col  ">
          <img src={explore} alt="explore image" />
          <p className="font-bold font-inter text-[16px] pt-2">Kigali</p>
          <p className="font-semi-bold font-inter text-[16px]">24 properties</p>
        </div>
        <div className="flex flex-col  ">
          <img src={explore} alt="explore image" />
          <p className="font-bold font-inter text-[16px] pt-2">Kigali</p>
          <p className="font-semi-bold font-inter text-[16px]">24 properties</p>
        </div>
        <div className="flex flex-col  ">
          <img src={explore} alt="explore image" />
          <p className="font-bold font-inter text-[16px] pt-2">Kigali</p>
          <p className="font-semi-bold font-inter text-[16px]">24 properties</p>
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
