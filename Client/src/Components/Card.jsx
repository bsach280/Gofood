import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {

let options =props.options; //here options is object which have options and price i just want options now 
let priceOptions = Object.keys(options)
const handleCart=()=>{

}

  return (
    <div>
      <div className="m-3">
        <div className="max-w-2xl p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

      <img  src={props.imgSrc} className="h-32 w-full" />
   
      
       
      
            <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             {props.foodname}
            </h5>
         
          {/* <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
           {props.description}
          </p> */}
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
             {priceOptions.map((op)=>{
              return <option key={op} value={op}>{op}</option>
             })}
            </select>
            <div className="h-full inline-block font-bold">Final Price</div>
          </div>
          <hr/>
          <button className="bg-green-800 p-2 rounded-lg my-2 text-white" 
              onClick={handleCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
