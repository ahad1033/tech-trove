import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { PiArticle } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { useState } from "react";

const TopNavOptions = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navOptions = (
    <>
      <Link className="text-sm mx-2" to="/">
        Home
      </Link>
      <span className="mx-2 text-sm hidden lg:block">|</span>
      <Link className="text-sm mx-2" to="/about">
        About Us
      </Link>
      <span className="mx-2 text-sm hidden lg:block">|</span>
      <Link className="text-sm mx-2" to="/blog">
        Blog
      </Link>
      <span className="mx-2 text-sm hidden lg:block">|</span>
      <Link className="text-sm mx-2" to="/products">
        All Products
      </Link>
      {/* <span className="mx-2 text-sm hidden lg:block">|</span>
      <p className="text-sm mx-2">Contact Us</p>
      <span className="mx-2 text-sm hidden lg:block">|</span>
      <p className="text-sm mx-2">Help & Support</p> */}
    </>
  );

  return (
    <div className="flex justify-between">
      <div className="dropdown">
        <label
          tabIndex={0}
          onClick={toggleMenu}
          className="btn btn-ghost md:hidden lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className={`menu menu-sm dropdown-content mt-3 py-10 z-[1] p-2 shadow bg-white rounded-box w-72 font-semibold text-sm ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li className="mx-2 mb-3 font-semibold text-base sm:text-sm hover:text-primary hover:bg-primary hover:bg-opacity-20">
            <Link className="text-xl">
              <GoHome className="text-xl" /> Home
            </Link>
          </li>
          <li className="mx-2 mb-3 font-semibold text-base sm:text-sm hover:text-primary hover:bg-primary hover:bg-opacity-20">
            <Link className="text-xl" to="/about">
              <IoIosInformationCircleOutline className="text-xl" /> About
            </Link>
          </li>
          <li className="mx-2 mb-3 font-semibold text-base sm:text-sm hover:text-primary hover:bg-primary hover:bg-opacity-20">
            <Link className="text-xl" to="/blog">
              <PiArticle className="text-xl" /> Blog
            </Link>
          </li>
          <li className="mx-2 mb-3 font-semibold text-base sm:text-sm hover:text-primary hover:bg-primary hover:bg-opacity-20">
            <Link className="text-xl" to="/products">
              <PiArticle className="text-xl" /> All Product
            </Link>
          </li>
          <li className="mx-2 mb-3 font-semibold text-base sm:text-sm hover:text-primary hover:bg-primary hover:bg-opacity-20">
            <Link className="text-xl" to="/signin">
              <RxAvatar className="text-xl" />
              Sign In
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex lg:flex flex-row">
        <ul className="menu menu-horizontal px-1 md:px-0 lg:px-0 font-bold text-sm">
          {navOptions}
        </ul>
      </div>
    </div>
  );
};

export default TopNavOptions;
