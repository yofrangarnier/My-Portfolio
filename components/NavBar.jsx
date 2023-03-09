import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);
 const [color ,setColor] = useState("transparent")
 const [textColor,setTextColor] = useState("white")
  const handleNav = () => {
    setNav(!nav);
  };
 useEffect (() => {
const changeColor = () => {
if(window.scrollY >= 90){
  setColor("#ffffff");
  setTextColor("#000000")
}else{
  setColor("transparent");
  setTextColor("#ffffff")
}
}
window.addEventListener("scroll",changeColor)
 },[])
  return (
    <div  className="fixed left-0 top-0 w-full z-10 ease-in duracion-300">
      <div className="max-w-[1240px m-auto flex justify-btween items-center p-4 text-white">
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
          {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-5xl font-semibold hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-5xl font-semibold hover:text-gray-500"
            >
              <Link href="/about">About me</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-5xl font-semibold hover:text-gray-500"
            >
              <Link href="/skills">Skills</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-5xl font-semibold hover:text-gray-500"
            >
              <Link href="/portfolio">Projects</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-5xl font-semibold hover:text-gray-500"
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
