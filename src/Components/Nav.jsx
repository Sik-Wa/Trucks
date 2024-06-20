import { useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <header className=" fixed w-full z-10 py-4 bg-slate-400">
      {/* desktop navigation bar */}
      <nav className=" container flex justify-between">
        {/* logo area */}
        <div className=" flex items-center gap-2">
          <GiSteeringWheel size={35} className=" text-primary" />
          <Link to="/">David'</Link>
        </div>
        {/* navbar in large devices */}
        <div className="hidden md:flex gap-8 items-center font-bold text-xl">
          <Link
            to="/"
            className=" bg-slate-500 transition duration-500 ease-linear"
          >
            Home
          </Link>
          <Link
            to="/cars"
            className=" bg-slate-500 transition duration-500 ease-linear"
          >
            Our Trucks
          </Link>
          <Link
            to="/services"
            className=" bg-slate-500 transition duration-500 ease-linear"
          >
            Services
          </Link>
          <Link
            to="/about"
            className=" bg-slate-500 transition duration-500 ease-linear"
          >
            About Us
          </Link>
        </div>
        {/* THE HAMBURGER MENU section */}
        <div className=" md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange} />
          )}
        </div>

        {/* Mobile responsive section */}
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} 
        md:hidden flex flex-col absolute rounded shadow shadow-black 
        bg-slate-200 text-white from-transparent to-slate-400
        left-0 top-16 font-serif text-xl text-center pt-8 pb-4 gap-8
        w-3/4 h-fit transition-transform duration-500
        `}>
                  <Link
          to="/"
          className=" hover:text-black transition duration-200 ease-linear"
        >
          Home
        </Link>
        <Link
          to="/about"
          className=" hover:text-black transition duration-200 ease-linear"
        >
          About Us
        </Link>
        <Link
          to="/cars"
          className=" hover:text-black transition duration-200 ease-linear"
        >
          Our Cars
        </Link>
        <Link
          to="/services"
          className=" hover:text-black transition duration-200 ease-linear"
        >
          Services
        </Link>


        </div>
      </nav>
    </header>
  );
};

export default Nav;
