import React, { useState } from "react";
import { NavLink, Link } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/images/logo.png";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const menus = [
    {
      id: 1,
      path: "/",
      label: "Home",
    },
    {
      id: 2,
      path: "/about",
      label: "About us",
    },
    {
      id: 3,
      path: "/what-we-do",
      label: "What We Do",
    },
    {
      id: 4,
      path: "/media",
      label: "Media",
    },
    {
      id: 5,
      path: "/contact",
      label: "Contact",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  return (
    <header className="py-[22px] border-b border-black/40 bg-white sticky top-0 left-0 w-full z-50">
      <div className="container text-white flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav
          className={`grow lg:flex lg:justify-center hidden h-screen lg:h-auto w-10/12 lg:w-auto absolute lg:static inset-0 lg:inset-auto pt-24 lg:pt-0 p-6 lg:p-0 bg-black/70 ${
            isMenuOpen ? "!flex" : "hidden"
          }`}
        >
          <button
            className="size-8 bg-white flex items-center justify-center lg:hidden absolute right-6 top-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IoCloseSharp className="text-black text-2xl font-bold" />
          </button>
          <ul className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto overflow-y-scroll">
            {menus.map((menu) => (
              <li key={menu.id} className="w-full text-center lg:w-auto">
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    `py-4 px-5  font-medium text-base text-nowrap block w-full lg:w-auto ${
                      isActive
                        ? "text-white lg:text-black"
                        : " text-white/70 lg:text-secondary-gray"
                    }`
                  }
                >
                  {menu.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          to="/donation"
          className="btn py-3 bg-secondary text-white hover:bg-primary transition-all duration-300 ease-linear lg:block hidden"
        >
          Donate
        </Link>
        <button
          className="size-8 bg-primary-dark flex items-center justify-center lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <GiHamburgerMenu className="text-white text-base" />
        </button>
      </div>
    </header>
  );
};

export default Header;
