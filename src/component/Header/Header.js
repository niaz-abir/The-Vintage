import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between mt-3 mr-8">
        <h1 className="text-4xl lg:ml-32 tracking-widest font-serif  font-bold text-pink-400">
          T<span className="text-blue-400">H</span>E V
          <span className="text-blue-400">I</span>N
          <span className="text-blue-400">T</span>A
          <span className="text-blue-400">G</span>E
        </h1>
        <div className="text-1xl mr-16">
          <Link
            className="mr-6 font-semibold tracking-wider px-2 py-3 rounded-lg transition duration-700 hover:scale-125 hover:bg-pink-300 "
            to="/Home"
          >
            Home
          </Link>
          <Link
            className="mr-6  font-semibold tracking-wider px-2 py-3 rounded-lg transition duration-700 hover:scale-125 hover:bg-pink-300"
            to="/Product"
          >
            Fruits
          </Link>
          <Link
            className="mr-6 font-semibold  tracking-wider px-2 py-3 rounded-lg transition duration-700 hover:scale-125 hover:bg-pink-300"
            to="/Vegetable"
          >
            Vegetable
          </Link>
          <Link
            className="mr-6 font-semibold  tracking-wider px-2 py-3 rounded-lg transition duration-700 hover:scale-125 hover:bg-pink-300"
            to="/Brance"
          >
            Brance
          </Link>
          <Link
            className="mr-6 font-semibold  tracking-wider px-2 py-3 rounded-lg transition duration-700 hover:scale-125 hover:bg-pink-300"
            to="/Login"
          >
            Login
          </Link>
        </div>
      </nav>
      <hr className="mt-4"></hr>
    </div>
  );
};

export default Header;
