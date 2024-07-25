import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Card from "../Components/Card";


const Home = () => {
  const [foodcategory, setfoodCategory] = useState([]);
  const [foodItem, setfoodItem] = useState([]);
  const [search, setSearch] = useState("");
  let loadData = async () => {
    let response = await fetch("http://localhost:7000/api/foodData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    response = await response.json();
    console.log(response[0], response[1]);
    setfoodItem(response[0]);
    setfoodCategory(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        {" "}
        <Navbar />
      </div>
      <div className="relative w-full h-full">
        <div
          id="controls-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <form className="absolute inset-0 flex items-center justify-center z-10 max-w-4xl mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative w-full">
                <input
                  type="search"
                  id="default-search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  className="block w-[70%] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-5"
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRpa2thfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item="active"
            >
              <img
                src="https://picsum.photos/536/354"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-3.svg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-4.svg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
      {/* <div className="container mx-auto p-4">
        {foodcategory != [] ? (
          foodcategory.map((data) => {
            return (
              <div>
                <div key={data._id} className="text-2xl text-gray-600 md:font-bold m-5">{data.CategoryName}</div>
                <hr />
                
                {foodItem != [] ? (
                
                  foodItem
                    .filter((item) => item.CategoryName == data.CategoryName)
                    .map((filterItems) => {
                      return (
                        <div key={filterItems._id} className="flex flex-wrap gap-4" >
                          <Card></Card>
                        </div>
                      );
                    })
               ) : (
                  <div>No SUch Data </div>
                )}
              </div>
            );
          })
        ) : (
          <div>""""""""""""""""""</div>
        )}
        <Card />
      </div> */}
      <div className=" w-full px-4">
        <div className="container mx-auto">
          {foodcategory.length ? (
            foodcategory.map((data) => {
              return (
                <div key={data._id} className="mb-8">
                  <div className="text-2xl text-orange-600 font-bold m-3">
                    {data.CategoryName}
                  </div>
                  <hr className="mb-3" />
                  {foodItem.length ? (
                    <div className="flex flex-wrap">
                      {foodItem
                        .filter(
                          (item) =>
                            item.CategoryName === data.CategoryName &&
                            item.name
                              .toLowerCase()
                              .includes(search.toLowerCase())
                        )
                        .map((filterItems) => {
                          return (
                            <div
                              key={filterItems._id}
                              className="flex-shrink-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 "
                            >
                              <Card
                                foodname={filterItems.name}
                                options={filterItems.options[0]}
                                imgSrc={filterItems.img}
                                description={filterItems.description}
                              ></Card>
                            </div>
                          );
                        })}
                    </div>
                  ) : (
                    <div>No Such Data</div>
                  )}
                </div>
              );
            })
          ) : (
            <div>No Data Available</div>
          )}
        </div>
        <div>
          {" "}
          <Footer />
        </div>
      </div>{" "}
    </div>
  );
};

export default Home;
