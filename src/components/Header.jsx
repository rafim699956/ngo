import React from "react";
import { NavLink, Link } from "react-router";
import logo from "../assets/images/logo.png";

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
  return (
    <header className="py-[22px] border-b border-black/40 bg-white sticky top-0 left-0 w-full z-50">
      <div className="container text-white flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav className="grow flex justify-center">
          <ul className="flex items-center gap-4">
            {menus.map((menu) => (
              <li key={menu.id}>
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    `py-4 px-5  font-medium text-base ${
                      isActive ? "text-black" : "text-secondary-gray"
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
          className="btn py-3 bg-secondary text-white hover:bg-primary transition-all duration-300 ease-linear"
        >
          Donate
        </Link>
      </div>
    </header>
  );
};

export default Header;
