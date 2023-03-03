import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);
 
  const handleNav = () => {
    setNav(!nav);
  };
 
  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duracion-300">
      <div>
        <ul className="hidden sm:flex">
          <li className="p-6 font-semibold hover:underline text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="p-6 font-semibold hover:underline text-white">
            <Link href="/about">About me</Link>
          </li>
          <li className="p-6 font-semibold hover:underline text-white">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="p-6 font-semibold hover:underline text-white">
            <Link href="/portfolio">Projects</Link>
          </li>
          <li className="p-6 font-semibold hover:underline text-white">
            <Link href="/contact">Contact me</Link>
          </li>
        </ul>
        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-0 right-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-5x1 font-semibold hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-5x1 font-semibold hover:text-gray-500"
            >
              <Link href="/about">About me</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-5x1 font-semibold hover:text-gray-500"
            >
              <Link href="/skill">Skills</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-5x1 font-semibold hover:text-gray-500"
            >
              <Link href="/portfolio">Projects</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-5x1 font-semibold hover:text-gray-500"
            >
              <Link href="/contact">Contact me</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
