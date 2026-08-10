

import React from "react";
import AboutHero from "../component/AboutHero";
import AboutFoodHub from "../Images/AboutFoodHub.jpg";
import Footer from "../component/Footer";
import { motion} from "motion/react";
import { div } from 'motion/react-client';


const About = () => {
  return (
    <>
      <AboutHero />

      
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div>
              <p className="text-orange-500 font-semibold text-sm sm:text-base uppercase tracking-wider mb-3">
                About FoodHub
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our <span className="text-orange-500">Story</span>
              </h2>

              <div className="w-16 h-1 bg-orange-500 rounded-full mt-4 mb-6"></div>

              <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 mb-5">
                FoodHub was founded with a simple idea - to connect food
                lovers with the best restaurants in their city. We started
                in 2026 and have since grown to become one of the most
                trusted food delivery platforms.
              </p>

              <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8">
                Our mission is to deliver delicious food, fast and safe,
                while providing an exceptional experience to our customers.
              </p>

              <button  className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full font-semibold transition duration-300 shadow-md hover:shadow-lg">
                Explore Food 🍕
              </button>
            </div>

            <div className="relative">

              <img
                src={AboutFoodHub}
                alt="Delicious Food"
                className="w-full h-[280px] sm:h-[350px] lg:h-[420px] object-cover rounded-3xl shadow-xl"
              />

              <div className="absolute -bottom-6 left-5 sm:left-8 bg-white shadow-xl rounded-2xl px-6 py-4">
                <h3 className="text-2xl font-bold text-orange-500">
                  2026
                </h3>

                <p className="text-gray-600 text-sm">
                  FoodHub Started
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className=" py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-orange-500 font-semibold uppercase tracking-wider">
              What We Believe
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Our <span className="text-orange-500">Mission</span>
            </h2>

            <p className="text-gray-600 mt-5 text-base sm:text-lg leading-7">
              We believe great food should be accessible to everyone.
              FoodHub makes ordering your favorite meals simple, fast,
              safe and enjoyable.
            </p>
          </div>

          <motion.div initial={{opacity:1, y:80, scale:0.9}} whileInView={{opacity:1, y:0, scale:1}} viewport={{once:true, amount:0.4}} transition={{duration:0.9, ease:"easeOut"}} whileHover={{ y:-10, scale:1.03}}  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            <div  className="bg-white rounded-2xl p-7 text-center shadow-md hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">🍔</div>

              <h3 className="text-xl font-bold text-gray-900">
                Delicious Food
              </h3>

              <p className="text-gray-500 mt-3 leading-6">
                Discover delicious dishes from restaurants around your city.
              </p>
            </div>

            <div  className="bg-white rounded-2xl p-7 text-center shadow-md hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">🚀</div>

              <h3 className="text-xl font-bold text-gray-900">
                Fast Delivery
              </h3>

              <p className="text-gray-500 mt-3 leading-6">
                Get your favorite meals delivered quickly to your doorstep.
              </p>
            </div>

            <div  className="bg-white rounded-2xl p-7 text-center shadow-md hover:shadow-xl transition duration-300 sm:col-span-2 lg:col-span-1">
              <div className="text-4xl mb-4">❤️</div>

              <h3 className="text-xl font-bold text-gray-900">
                Happy Customers
              </h3>

              <p className="text-gray-500 mt-3 leading-6">
                We focus on providing a smooth and enjoyable food ordering
                experience.
              </p>
            </div>

          </motion.div>
        </div>
      </section>

      <section  className="max-w-7xl mx-auto xl:ml-25  relative  overflow-hidden mb-10 mt-20 rounded-md bg-orange-100 lg:h-30">
            <div className="flex lg:gap-110 md:gap-15 sm:gap-10">
              <div  className="mt-10 ml-10 text-lg font-semibold lg:ml-30"><span className="text-2xl text-orange-600">''</span>Food brings people together on many different levels. <br /> It's nourishment of the soul and body; It's truly love.</div>
              <div>
                <img src="https://static.vecteezy.com/system/resources/previews/041/925/374/non_2x/ai-generated-tasty-creamy-kheer-isolated-on-transparent-background-free-png.png" alt="Kheer image"  className="w-50 h-40"/>
              </div>
            </div>
      </section>


      <Footer />
    </>
  );
};

export default About;
