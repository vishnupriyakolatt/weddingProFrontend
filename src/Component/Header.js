import React, { useState, useEffect } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { IoMdLock } from "react-icons/io";
import { useLogout } from "../Hooks/User/useLogout";
import logo from "../assets/logo.jpg";
import { navigation } from "../data";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../Hooks/useAuthContext";

const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBg(window.scrollY > 50);
    });
  }, []);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header
      className={`${
        bg ? "bg-white py-4 lg:py-6" : "bg-white"
      } fixed left-0 py-[-30] z-10 w-full transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-extrabold font-secondary mr-9 mt-2 italic text-gray-900">
            Wedding pro
          </h1>
          <div
            onClick={toggleMobileNav}
            className="md:hidden text-2xl lg:text-3xl text-gray-900 cursor-pointer"
          >
            {mobileNav ? (
              <CgClose className="text-gray-900" />
            ) : (
              <CgMenuRight className="text-gray-900" />
            )}
          </div>
          <nav className={`${mobileNav ? "block" : "hidden"} md:block`}>
            <ul className="md:flex md:gap-x-4">
            <NavLink to="/">
                      <button
  type="button"
  class="inline-block rounded-full border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-md font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
  data-te-ripple-init>
    HOME

</button></NavLink>
<NavLink to="/bookpage">
                      <button
  type="button"
  class="inline-block rounded-full border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-md font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
  data-te-ripple-init>
 Event 

</button></NavLink>

              <li>
                {!user && (
                  <NavLink
                    to="/login"
                    onClick={toggleMobileNav}
                    activeClassName="nav-link-active"
                  >
                    <h1 className="capitalize text-gray-900 text-3xl w-10 h-10 font-bold hover:border-b">
                      <IoMdLock className="mr-8 w-12 h-12" />
                    </h1>
                  </NavLink>
                )}
                {user && (
                  <button  type="button"
                  class="inline-block rounded-full border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-md font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
                  data-te-ripple-init onClick={handleLogout}>
                    Logout
                  </button>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {mobileNav && <div className="mobile-nav-overlay" onClick={toggleMobileNav} />}
    </header>
  );
};

export default Header;


