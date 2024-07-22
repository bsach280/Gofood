
import React, {useEffect} from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (window.scrollY > 50) {
        navbar.classList.add('bg-gray-800');
      } else {
        navbar.classList.remove('bg-gray-800');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className=" sticky top-0 shadow-lg bg-transparent ">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="text-gray-800 hover:bg-orange-300 hover:text-white px-3 py-2 rounded-xl text-2xl font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-800 hover:bg-orange-300 hover:text-white px-3 py-2 rounded-xl text-2xl font-medium"
                  >
                    Features
                  </Link>
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
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
