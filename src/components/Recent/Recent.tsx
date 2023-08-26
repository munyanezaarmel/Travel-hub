import React from 'react'
import arena from '../../assets/arena.png'
export default function Recent() {
  return (
    <div className="mb-20">
      <h1 className="ml-20 font-bold font-inter text-[24px] mb-4 ">
        Your recent searches
      </h1>
      <div className="bg-white shadow-xl w-[400px] h-[100px]  ml-20">
        <div className="flex gap-4 items-center">
          <img
            src={arena}
            alt="recent search image"
            className="w-[100px] h-[100px] p-5"
          />
          <div className="flex flex-col">
            <h1 className='font-bold'>Kigali</h1>
            <p>2 Augh - 3 Augh,2 people</p>
          </div>
        </div>
      </div>
    </div>
  );
}
