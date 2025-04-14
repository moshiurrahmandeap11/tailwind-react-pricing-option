import React from 'react';


const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Projects",
    path: "/projects",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];



const Navbar = () => {
    return (
      <nav>
        <ul className='flex gap-10'>
          {navLinks.map((route) => (
            <li key={route.id}>
              <a href={route.path}>{route.name}</a>
            </li>
          ))}
        </ul>
        {/* <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul> */}
      </nav>
    );
};

export default Navbar;