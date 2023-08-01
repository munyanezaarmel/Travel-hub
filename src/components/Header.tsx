import React from 'react'
import flag from "../assets/flag.png"
export default function Header() {
  return (
    <div className="bg-[#003B95] text-white font-Roboto p-5">
      <div className="flex justify-between items-center">
        <h1 className="ml-20 font-bold text-[24px]">Travelhub.com</h1>
        <div className="flex justify-end gap-8 items-center">
          <h2 className="font-bold">USD</h2>
          <img src={flag} width={30} height={30} alt="national flag" />
          <p className='font-bold'>List your property</p>
          <button className="bg-white w-[154px] h-[45px] text-[#006CE4] rounded font-medium ">
            Register
          </button>
          <button className="bg-white w-[154px] h-[45px] text-[#006CE4] rounded font-medium">
            Sign in
          </button>
        </div>
      </div>
      <div className="flex gap-8 ml-20 pt-4">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-bed-double"
          >
            <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
            <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
            <path d="M12 4v6" />
            <path d="M2 18h20" />
          </svg>
          <p>Stays</p>
        </div>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-plane"
          >
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
          </svg>
          <p>Flights</p>
        </div>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-car"
          >
            <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
            <circle cx="6.5" cy="16.5" r="2.5" />
            <circle cx="16.5" cy="16.5" r="2.5" />
          </svg>
          <p>Car rentals</p>
        </div>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-ferris-wheel"
          >
            <circle cx="12" cy="12" r="2" />
            <path d="M12 2v4" />
            <path d="m6.8 15-3.5 2" />
            <path d="m20.7 7-3.5 2" />
            <path d="M6.8 9 3.3 7" />
            <path d="m20.7 17-3.5-2" />
            <path d="m9 22 3-8 3 8" />
            <path d="M8 22h8" />
            <path d="M18 18.7a9 9 0 1 0-12 0" />
          </svg>
          <p>Attractions</p>
        </div>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-plane"
          >
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
          </svg>
          <p>Airport Taxis</p>
        </div>
      </div>
    </div>
  );
}
