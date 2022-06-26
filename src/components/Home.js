import React from "react";
import svg from '../assests/qr.png'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className=" mt-96 lg:mt-40">
        <div className="">
          <img className="w-3/4 lg:w-80 mx-auto my-auto shadow-2xl rounded-xl" src={svg} alt="Home" />
        </div>
        <div className="text-center">
          <Link to="/Qr">
            <button className="py-2 px-4 bg-green-400 text-gray-800 text-7xl lg:text-4xl font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 duration-500 w-3/4 lg:w-80">CONTINUE </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
