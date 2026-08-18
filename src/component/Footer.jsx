
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold">
            Food <span className="text-orange-500">Hub</span>
          </h1>

          <p className="text-gray-400 mt-5 leading-7">
            Delicious food delivered to your doorstep. Fresh ingredients,
            fast delivery and the best restaurants in your city.
          </p>

          <div className="flex gap-4 mt-6 text-2xl">
            <FaFacebookF className="cursor-pointer hover:text-orange-500 duration-300" />
            <FaInstagram className="cursor-pointer hover:text-orange-500 duration-300" />
            <FaTwitter className="cursor-pointer hover:text-orange-500 duration-300" />
            <FaYoutube className="cursor-pointer hover:text-orange-500 duration-300" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-5">Quick Links</h2>

          <div className="flex flex-col gap-3 text-gray-400">
            <Link to="/" className="hover:text-orange-500 duration-300">Home</Link>
            <Link to="/shop" className="hover:text-orange-500 duration-300">Shop</Link>
            <Link to="/resturant" className="hover:text-orange-500 duration-300">Restaurant</Link>
            <Link to="/about" className="hover:text-orange-500 duration-300">About</Link>
            <Link to="/contact" className="hover:text-orange-500 duration-300">Contact</Link>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-xl font-semibold mb-5">Categories</h2>

          <div className="flex flex-col gap-3 text-gray-400">
            <p>🍕 Pizza</p>
            <p>🍔 Burger</p>
            <p>🥟 Momos</p>
            <p>🥗 Paneer</p>
            <p>🥤 Cold Drink</p>
            <p>🌮 Samosa</p>
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-xl font-semibold mb-5">Support</h2>

          <div className="flex flex-col gap-3 text-gray-400">
            <p className="hover:text-blue-700">Help Center</p>
            <p className="hover:text-blue-700">FAQs</p>
            <p className="hover:text-blue-700">Terms & Conditions</p>
            <p className="hover:text-blue-700">Privacy Policy</p>
            <p className="hover:text-blue-700">Return Policy</p>
            <p className="hover:text-blue-700">Email: support@foodhub.com</p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-gray-400 text-sm text-center">
            © 2026 FoodHub. All Rights Reserved.
          </p>

          <p className="text-gray-400 text-sm">
            Made with ❤️ using React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;