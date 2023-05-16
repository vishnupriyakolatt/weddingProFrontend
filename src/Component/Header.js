import React, { useState, useEffect } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { IoMdLock } from "react-icons/io";
import { useLogout } from "../Hooks/User/useLogout";
// import logo
import logo from "../assets/logo.jpg";
// import data
import { navigation } from "../data";
// import components
import NavMobile from "./NavMobile";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../Hooks/useAuthContext";
const Header = () => {
  const{logout}=useLogout()
  
  const { user } = useAuthContext();
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const handlelogout=()=>{
    logout()
    
  }
  useEffect(() => {
    // add event listener
    window.addEventListener("scroll", () => {
      // when scrollY is bigger than 50px setBg to true, else false
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header
      className={`${
        // if bg is true
        bg
          ? "bg-white py-4 lg:py-6"
          : // if bg is false
            "bg-white"
      }
    fixed left-0 py-8 z-10 w-full  transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
        
            <h1 className=" text-5xl font-extrabold font-secondary mr-90 mt-2italic text-gray-900">
              Wedding pro
            </h1>
         
          {/* menu icon */}
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="md:hidden text-2xl lg:text-3xl text-white cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          {/* nav */}
          <nav className="hidden md:flex">
            <ul className="md:flex md:gap-x-12">
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink to="/">
                      {" "}
                      <h1 className="capitalize text-gray-900 text-2xl   font-bold hover:border-b">
                        {item.name}
                      </h1>
                    </NavLink>
                  </li>
                );
              })}
              <li>
                {!user && (
                  <NavLink to="/login">
                    <h1 className="capitalize text-gray-900 text-2xl   font-bold hover:border-b">
                      <IoMdLock />
                    </h1>
                  </NavLink>
                )}
                {user && (
                  <NavLink to="/">
                    <h1 className="capitalize text-gray-900 text-2xl   font-bold hover:border-b" onClick={handlelogout}>
                      LOGOUT
                    </h1>
                  </NavLink>
                )}

              </li>
            </ul>
            <ul>
              <li></li>
            </ul>
          </nav>
          {/* nav mobile */}
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
