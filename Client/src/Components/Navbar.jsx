import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
   const navigate =useNavigate();
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const navbar = document.querySelector("nav");
  //     if (window.scrollY > 50) {
  //       navbar.classList.add("bg-gray-800");
  //     } else {
  //       navbar.classList.remove("bg-gray-800");
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
   const handleLogout =()=>{
    localStorage.removeItem("authToken")
    navigate("/login")
   }

  return (
    <div>
      <nav className=" sticky top-0 shadow-lg bg-transparent w-full">
        <div className="flex flex-wrap sm:flex-nowrap sm:ml-6 ">
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-gray-800 hover:bg-orange-300 hover:text-white px-3 py-2 rounded-xl text-2xl font-medium"
            >
              Home
            </Link>
            {localStorage.getItem("authToken") && (
              <Link
                to="#"
                className="text-gray-800 hover:bg-orange-300 hover:text-white px-3 py-2 rounded-xl text-2xl font-medium"
              >
                My Orders
              </Link>
            )}
          </div>

          <div className="flex space-x-4 ml-auto p-4">
            {!localStorage.getItem("authToken") ? (
              <div>
                <Link
                  to="/createuser"
                  className="text-gray-800 hover:bg-orange-300 hover:text-white px-3 py-2 rounded-xl text-2xl font-medium"
                >
                  Signup
                </Link>
                <Link
                  to="/login"
                  className="text-gray-800 hover:bg-orange-300 hover:text-white px-3 py-2 rounded-xl text-2xl font-medium"
                >
                  Login
                </Link>
              </div>
            ) : (
              <div className="flex space-x-4">
                <div className="p-2">My Cart</div>
              <button className="bg-red-200 p-2 rounded-lg" 
              onClick={handleLogout}>Logout</button>

              </div>
            )}
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
