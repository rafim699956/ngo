import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/images/footerLogo.png";
import { mores } from "../utilis/more";
import { footerLinks } from "../utilis/footerLinks";
import { socialLinks } from "../utilis/socialLinks";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setError(true);
    }
    setEmail("");
    return setError(false);
  };

  return (
    <footer className="py-12 lg:py-24 bg-primary-dark">
      <div className="container mx-auto px-3 flex flex-col lg:flex-row justify-between gap-8">
        <Link className="w-[7.813rem] shrink-0 block" to="/">
          <img className="w-full max-w-full" src={logo} alt="logo" />
        </Link>
        <div className="flex flex-wrap justify-between gap-[5.5rem]">
          <div className="space-y-6">
            <div className="flex flex-col gap-6">
              {footerLinks.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-roboto ${
                      isActive
                        ? "text-white font-bold text-base leading-[1.6rem]"
                        : "text-white/78 text-sm font-normal leading-[1.4rem]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="text-base leading-[1.6rem] text-white">More</h5>
            <div className="flex flex-col gap-6">
              {mores.map((item) => (
                <Link
                  className="font-roboto font-normal text-sm leading-[1.6rem] text-white/78"
                  key={item.id}
                  to={item.path}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="text-base leading-[1.6rem] text-white">Connect</h5>
            <div className="flex flex-col gap-6">
              {socialLinks.map((link) => (
                <a
                  className="font-roboto font-normal text-sm leading-[1.6rem] text-white/78"
                  key={link.id}
                  href={link.path}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-8 lg:max-w-[34rem]">
          <h2 className="text-white text-[2.5rem] leading-[3.5rem]">
            Subscribe to get latest updates
          </h2>
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="rounded border border-soft-blue/30 px-6 py-[1.375rem] grow text-base font-normal text-soft-blue placeholder:text-base placeholder:font-normal placeholder:leading-none placeholder:text-soft-blue/80 focus:ring-1"
            />
            <button className="btn btn-white" type="submit">
              Subscribe
            </button>
          </form>
          {error && (
            <p className="text-red-500 text-base font-semibold">
              Please Enter Your Email
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
