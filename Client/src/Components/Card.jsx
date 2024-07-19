import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div>
      <div className="m-3">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
       <img className="h-32 w-full"
      // src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
      src="https://fastly.picsum.photos/id/30/1280/901.jpg?hmac=A_hpFyEavMBB7Dsmmp53kPXKmatwM05MUDatlWSgATE"
      alt="Burger" />
   
      
       
      
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Card Heading
            </h5>
         
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div className="container w-full">
            <select className="m-2 h-full bg-gray-300 rounded">
              {Array.from(Array(5), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-full bg-gray-300 rounded">
              <option value="half">half</option>
              <option value="full">frull</option>
            </select>
            <div className="h-full inline-block font-bold">Final Price</div>
          </div>
          {/* <Link
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
