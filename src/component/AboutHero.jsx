import React from 'react'
import Image from "../Images/AboutHero.jpg";
import { useNavigate } from 'react-router-dom';

const AboutHero = () => {
    const navigate = useNavigate();

  return (
    <section className="max-w-7xl mt-21 mx-auto xl:ml-25  relative h-[50vh] overflow-hidden mb-10 rounded-md">

      <img
        src={Image}
        alt="Restaurant"
        className="absolute inset-0 w-full h-full object-cover animate-[zoom_5s_linear]"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6">
        <div>
          <h1 className="text-5xl font-bold text-white">About
             <span className="text-orange-500">FoodHub</span>
          </h1>

          <p className="text-gray-200 mt-4 text-sm">
              We are passionate about food and dedicated to <br />delivering the best food experience to you.
          </p>

          <button onClick={() => navigate("/shop")} className='px-3 py-2 bg-orange-600 mt-5 text-white font-bold rounded-xl hover:bg-orange-500'>Order Now</button>
        </div>
      </div>

    </section>
  )
}

export default AboutHero
