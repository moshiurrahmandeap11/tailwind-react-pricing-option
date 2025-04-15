import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Projects", path: "/projects" },
  { id: 5, name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = navLinks.map((navlink) => (
    <li key={navlink.id}>
      <a href={navlink.path}>{navlink.name}</a>
    </li>
  ));

  return (
    <nav className="md:px-20 md:py-4 px-4 py-4 shadow-sm md:shadow-none flex justify-between items-center">
      {/* logo and responsive menu icon */}
      <div className="flex items-center gap-4">
        <span
          className="md:hidden cursor-pointer"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <X></X> : <Menu></Menu>}
        </span>
        <ul
          className={`md:hidden absolute z-50 bg-amber-200 ${
            navOpen ? "left-0" : "-left-full"
          } top-16 duration-200 h-screen w-full`}
        >
          {links}
        </ul>
        <h1 className="font-bold text-2xl md:text-3xl">Moshiur</h1>
      </div>
      <ul className="hidden md:flex items-center gap-10 ">{links}</ul>
      <button className="btn">Sign In</button>
    </nav>
  );
};

export default Navbar;
