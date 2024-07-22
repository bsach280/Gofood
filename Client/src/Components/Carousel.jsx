import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const images = [
    'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg',
    'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg',
    'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg',
    'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredImages, setFilteredImages] = useState(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const filtered = images.filter((image) =>
      image.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredImages(filtered);
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Perform search for:', searchTerm);
  };

  return (
    <div className="relative w-full h-full">
      <div className="relative h-full overflow-hidden rounded-lg md:h-60">
        {filteredImages.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`absolute block w-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            alt={`carousel-${index}`}
          />
        ))}

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <form onSubmit={handleSearch} className="max-w-md w-full">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-3">
        {filteredImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-white'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;




// import React, { useState, useEffect } from 'react';

// const Carousel = () => {
//   const images = [
//     'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg',
//     'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg',
//     'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg',
//     'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
//     'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredImages, setFilteredImages] = useState(images);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   useEffect(() => {
//     const filtered = images.filter((image) =>
//       image.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredImages(filtered);
//   }, [searchTerm, images]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log('Perform search for:', searchTerm);
//   };

//   return (
//     <div className="relative w-full h-full">
//       <div className="relative h-full overflow-hidden rounded-lg md:h-60">
//         {filteredImages.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             className={`absolute block w-full object-cover transition-opacity duration-1000 ease-in-out ${
//               index === currentIndex ? 'opacity-100' : 'opacity-0'
//             }`}
//             alt={`carousel-${index}`}
//           />
//         ))}

//         <div className="absolute inset-0 flex items-center justify-center z-10">
//           <form onSubmit={handleSearch} className="max-w-md w-full">
//             <label
//               htmlFor="default-search"
//               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//             >
//               Search
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <svg
//                   className="w-4 h-4 text-gray-500 dark:text-gray-400"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                   />
//                 </svg>
//               </div>
//               <input
//                 type="search"
//                 id="default-search"
//                 className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="Search Mockups, Logos..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 required
//               />
//               <button
//                 type="submit"
//                 className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 Search
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-3">
//         {filteredImages.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? 'bg-blue-500' : 'bg-white'
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
