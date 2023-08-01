import React from 'react'
import background from '../assets/back2.jpg'
export default function Hero() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: 400,
          }}
        >
          <h1 className="text-[48px] text-white w-[50%] ml-20 pt-8 font-bold">
            Your Haven Awaits.The Adventure Awaits
          </h1>
          <p className="text-white ml-20 text-[24px] font-medium">
            Discover dreamy beach houses, cabins & more
          </p>
          <button className="bg-[#006CE4] text-white text-center w-[258px] h-[45px] ml-20 rounded mt-5 font-bold">
            Find your holiday rental
          </button>
        </div>
   
      </div>
    );
}
