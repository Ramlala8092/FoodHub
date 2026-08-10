import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from "react-icons/fi";
import { useSearch } from '../context/SearchContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll,setScroll] = useState(false);
  const location  = useLocation();
  const isShoppage = location.pathname === "/shop";

  const {search,setSearch} = useSearch();

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50){
        setScroll(true);
      }else{
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return() => {
      window.removeEventListener("scroll",handleScroll);
    }
  },[]);

  return (
    
    <header className={`fixed p-2 top-0 left-0 w-full z-50 transition-all duration-300 ${scroll ? "bg-black text-white shadow-lg":"bg-transparent text-black"} sticky top-0`}>
            <div className='w-full max-w-7xl mx-auto flex items-center justify-between gap-3 h-16'>
        <div className='text-2xl font-bold'>Food <span className='text-orange-600'>Hub</span></div>

        {
          isShoppage && (
            <div className='flex-1 justify-center px-2 md:px-8'>
              <input type="text"
                     placeholder='Search food...'
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                     className='w-full max-w-[120px] sm:max-w-[180px] md:max-w-md px-3 py-2 text-sm md:text-base rounded-full border border-gray-300 bg-white text-black outline-none focus:ring-2 focus:ring-orange-500' />
            </div>
          )
        }
        <nav className='hidden md:flex gap-5'>
          <NavLink to="/" className={({ isActive }) => `text-1xl font-semibold px-2 py-2 ${isActive ? "text-blue-700 underline underline-offset-7 decoration-red-700" : ""}`}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => `text-1xl font-semibold px-2 py-2 ${isActive ? "text-blue-700 underline underline-offset-7 decoration-red-700" : ""}`}>Shop</NavLink>
          <NavLink to="/resturant" className={({ isActive }) => `text-1xl font-semibold px-2 py-2 ${isActive ? "text-blue-700 underline underline-offset-7 decoration-red-700" : ""}`}>Resturant</NavLink>
          <NavLink to="/about" className={({ isActive }) => `text-1xl font-semibold px-2 py-2 ${isActive ? "text-blue-600 underline underline-offset-7 decoration-red-700" : ""}`}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `text-1xl font-semibold px-2 py-2 ${isActive ? "text-blue-600 underline underline-offset-7 decoration-red-700" : ""}`}>Contact</NavLink>
        </nav>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>      </div>

      {
        menuOpen && (
          <div className="md:hidden bg-white text-black flex flex-col items-center gap-5 py-5">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/shop" onClick={() => setMenuOpen(false)}>Shop</NavLink>
            <NavLink to="/resturant" onClick={() => setMenuOpen(false)}>Resturant</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          </div>
        )
      }
    </header>
  )
}

export default Header
