
// import React, { useEffect, useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
// import { useSearch } from "../context/SearchContext";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scroll, setScroll] = useState(false);

//   const location = useLocation();

//   // Check Shop page
//   const isShoppage = location.pathname === "/shop";

//   // Search Context
//   const { search, setSearch } = useSearch();

//   // Detect Scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScroll(true);
//       } else {
//         setScroll(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 p-2 transition-all duration-300 ${
//         scroll
//           ? "bg-black text-white shadow-lg"
//           : "bg-white text-black shadow-md"
//       }`}
//     >
//       {/* Header Container */}
//       <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-3 h-16">

//         {/* Logo */}
//         <div className="text-2xl font-bold whitespace-nowrap">
//           Food <span className="text-orange-600">Hub</span>
//         </div>

//         {/* Search Bar - Only Shop Page */}
//         {isShoppage && (
//           <div className="flex-1 flex justify-center px-2 md:px-8">
//             <input
//               type="text"
//               placeholder="Search food..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full max-w-[120px] sm:max-w-[180px] md:max-w-md px-3 py-2 text-sm md:text-base rounded-full border border-gray-300 bg-white text-black outline-none focus:ring-2 focus:ring-orange-500"
//             />
//           </div>
//         )}

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex gap-5 items-center">

//           {/* Home */}
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `text-1xl font-semibold px-2 py-2 transition-colors ${
//                 isActive
//                   ? "text-blue-700 underline underline-offset-7 decoration-red-700"
//                   : "text-current"
//               }`
//             }
//           >
//             Home
//           </NavLink>

//           {/* Shop */}
//           <NavLink
//             to="/shop"
//             className={({ isActive }) =>
//               `text-1xl font-semibold px-2 py-2 transition-colors ${
//                 isActive
//                   ? "text-blue-700 underline underline-offset-7 decoration-red-700"
//                   : "text-current"
//               }`
//             }
//           >
//             Shop
//           </NavLink>

//           {/* Resturant */}
//           <NavLink
//             to="/resturant"
//             className={({ isActive }) =>
//               `text-1xl font-semibold px-2 py-2 transition-colors ${
//                 isActive
//                   ? "text-blue-700 underline underline-offset-7 decoration-red-700"
//                   : "text-current"
//               }`
//             }
//           >
//             Resturant
//           </NavLink>

//           {/* About */}
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               `text-1xl font-semibold px-2 py-2 transition-colors ${
//                 isActive
//                   ? "text-blue-600 underline underline-offset-7 decoration-red-700"
//                   : "text-current"
//               }`
//             }
//           >
//             About
//           </NavLink>

//           {/* Contact */}
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               `text-1xl font-semibold px-2 py-2 transition-colors ${
//                 isActive
//                   ? "text-blue-600 underline underline-offset-7 decoration-red-700"
//                   : "text-current"
//               }`
//             }
//           >
//             Contact
//           </NavLink>

//           {/* Cart */}
//           <NavLink
//             to="/cart"
//             className={({ isActive }) =>
//               `text-1xl font-semibold px-2 py-2 transition-colors ${
//                 isActive
//                   ? "text-blue-600 underline underline-offset-7 decoration-red-700"
//                   : "text-current"
//               }`
//             }
//           >
//             Cart
//           </NavLink>

//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-3xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FiX /> : <FiMenu />}
//         </button>

//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white text-black flex flex-col items-center gap-5 py-5 shadow-lg">

//           <NavLink
//             to="/"
//             onClick={() => setMenuOpen(false)}
//           >
//             Home
//           </NavLink>

//           <NavLink
//             to="/shop"
//             onClick={() => setMenuOpen(false)}
//           >
//             Shop
//           </NavLink>

//           <NavLink
//             to="/resturant"
//             onClick={() => setMenuOpen(false)}
//           >
//             Resturant
//           </NavLink>

//           <NavLink
//             to="/about"
//             onClick={() => setMenuOpen(false)}
//           >
//             About
//           </NavLink>

//           <NavLink
//             to="/contact"
//             onClick={() => setMenuOpen(false)}
//           >
//             Contact
//           </NavLink>

//           <NavLink
//             to="/cart"
//             onClick={() => setMenuOpen(false)}
//           >
//             Cart
//           </NavLink>

//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiUser,
  FiLogOut,
} from "react-icons/fi";
import { useSearch } from "../context/SearchContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  // User State
  const [user, setUser] = useState(null);
  const [userMenu, setUserMenu] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Check Shop page
  const isShoppage = location.pathname === "/shop";

  // Search Context
  const { search, setSearch } = useSearch();

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check Logged In User
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
      try {
        setUser(JSON.parse(currentUser));
      } catch (error) {
        localStorage.removeItem("currentUser");
        setUser(null);
      }
    } else {
      setUser(null);
    }

    // Dropdown close
    setUserMenu(false);
  }, [location]);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("currentUser");

    setUser(null);
    setUserMenu(false);
    setMenuOpen(false);

    // React navigation - page refresh nahi hoga
    navigate("/login");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 p-2 transition-all duration-300 ${
        scroll
          ? "bg-black text-white shadow-lg"
          : "bg-white text-black shadow-md"
      }`}
    >
      {/* Header Container */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-3 h-16">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold whitespace-nowrap"
        >
          Food <span className="text-orange-600">Hub</span>
        </NavLink>

        {/* Search Bar - Only Shop Page */}
        {isShoppage && (
          <div className="flex-1 flex justify-center px-2 md:px-8">
            <input
              type="text"
              placeholder="Search food..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-[120px] sm:max-w-[180px] md:max-w-md px-3 py-2 text-sm md:text-base rounded-full border border-gray-300 bg-white text-black outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-5 items-center">

          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-1xl font-semibold px-2 py-2 transition-colors ${
                isActive
                  ? "text-blue-700 underline underline-offset-7 decoration-red-700"
                  : "text-current"
              }`
            }
          >
            Home
          </NavLink>

          {/* Shop */}
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `text-1xl font-semibold px-2 py-2 transition-colors ${
                isActive
                  ? "text-blue-700 underline underline-offset-7 decoration-red-700"
                  : "text-current"
              }`
            }
          >
            Shop
          </NavLink>

          {/* Resturant */}
          <NavLink
            to="/resturant"
            className={({ isActive }) =>
              `text-1xl font-semibold px-2 py-2 transition-colors ${
                isActive
                  ? "text-blue-700 underline underline-offset-7 decoration-red-700"
                  : "text-current"
              }`
            }
          >
            Resturant
          </NavLink>

          {/* About */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-1xl font-semibold px-2 py-2 transition-colors ${
                isActive
                  ? "text-blue-600 underline underline-offset-7 decoration-red-700"
                  : "text-current"
              }`
            }
          >
            About
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-1xl font-semibold px-2 py-2 transition-colors ${
                isActive
                  ? "text-blue-600 underline underline-offset-7 decoration-red-700"
                  : "text-current"
              }`
            }
          >
            Contact
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `text-1xl font-semibold px-2 py-2 transition-colors ${
                isActive
                  ? "text-blue-600 underline underline-offset-7 decoration-red-700"
                  : "text-current"
              }`
            }
          >
            Cart
          </NavLink>

          {/* ================= LOGIN / USER ================= */}

          {!user ? (
            <NavLink
              to="/login"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700 transition"
            >
              <FiUser />
              Login
            </NavLink>
          ) : (
            <div className="relative">

              {/* User Button */}
              <button
                onClick={() => setUserMenu(!userMenu)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg font-semibold hover:bg-gray-700/30 transition"
              >
                <FiUser className="text-xl" />

                <span className="max-w-[100px] truncate">
                  {user.name}
                </span>

                <span className="text-sm">
                  {userMenu ? "▲" : "▼"}
                </span>
              </button>

              {/* Dropdown */}
              {userMenu && (
                <div className="absolute right-0 mt-3 w-52 rounded-lg shadow-xl overflow-hidden border bg-white text-black border-gray-200">

                  {/* User Information */}
                  <div className="px-4 py-3 border-b bg-gray-50">
                    <p className="font-bold">
                      {user.name}
                    </p>

                    <p className="text-sm text-gray-500 truncate">
                      {user.email}
                    </p>
                  </div>

                  {/* Profile */}
                  <button
                    onClick={() => {
                      setUserMenu(false);
                      navigate("/profile");
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100 transition"
                  >
                    👤 My Profile
                  </button>

                  {/* Logout */}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 text-left px-4 py-3 text-red-600 hover:bg-gray-100 transition"
                  >
                    <FiLogOut />
                    Logout
                  </button>

                </div>
              )}
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}

      {menuOpen && (
        <div
          className={`md:hidden flex flex-col items-center gap-5 py-5 shadow-lg ${
            scroll
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </NavLink>

          <NavLink
            to="/resturant"
            onClick={() => setMenuOpen(false)}
          >
            Resturant
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          <NavLink
            to="/cart"
            onClick={() => setMenuOpen(false)}
          >
            Cart
          </NavLink>

          {/* Mobile Login */}
          {!user ? (
            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-orange-600 text-white font-semibold"
            >
              <FiUser />
              Login
            </NavLink>
          ) : (
            <>
              <div className="flex items-center gap-2 font-semibold">
                <FiUser />
                {user.name}
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-5 py-2 rounded-lg bg-red-600 text-white font-semibold"
              >
                <FiLogOut />
                Logout
              </button>
            </>
          )}

        </div>
      )}
    </header>
  );
};

export default Header;