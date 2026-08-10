// import React from 'react'
// import ContactHero from "../component/ContactHero"

// import { IoLocationOutline } from "react-icons/io5";
// import { MdOutlineEmail } from "react-icons/md";
// import { IoCallOutline } from "react-icons/io5";
// import { FaRegClock } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <>
//       <ContactHero />

//       <section className="mt-5 relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden">
//         <div className='px-6'>
//            <h3 className='text-2xl font-bold mb-3'>Get in Touch</h3>
//            <p className='text-gray-600'>Have questions or feedback ? fill out the form or reach out <br /> to us via the contact details below.</p>

//            <div className=' flex gap-30 px-3 mt-10 border border-gray-400 w-70 rounded-2xl'>
               
//                <div>
//                 <div className='flex gap-6 mb-3 mt-8 ml-5'>
//                      <div>
//                          <IoLocationOutline className='text-orange-600 mt-5 font-bold text-2xl'/>
//                      </div>
//                      <div>
//                          <h5 className='font-bold text-gray-700'>Our Location</h5>
//                          <p className='text-sm text-gray-400'>123 FoodHub streat, <br /> patna</p>
//                      </div>
//                 </div>
                
//                 <div className='flex gap-6 mb-5 mt-5 ml-5'>
//                      <div>
//                          <MdOutlineEmail className='text-orange-600 mt-5 font-bold text-2xl'/>
//                      </div>
//                      <div>
//                         <h5 className='font-bold text-gray-700'>Email Us</h5>
//                         <p className='text-sm text-gray-400'>foodHub@gmail.com</p>
//                      </div>
//                 </div>

//                 <div className='flex gap-6 mb-3 mt-5 ml-5'>
//                      <div>
//                          <IoCallOutline className='text-orange-600 mt-5 font-bold text-2xl'/>
//                      </div>
//                      <div>
//                         <h5 className='font-bold text-gray-700'>Call us</h5>
//                         <p className='text-sm text-gray-400'>+91 8092609317</p>
//                      </div>
//                 </div>

//                 <div className='flex gap-6 mb-3 mt-5 ml-5'>
//                      <div>
//                          <FaRegClock className='text-orange-600 mt-5 font-bold text-2xl'/>
//                      </div>
//                      <div>
//                         <h5 className='font-bold text-gray-700'>Working Hours</h5>
//                         <p className='text-sm text-gray-400'>24 x 7</p>
//                      </div>
//                 </div>
//                 </div>

//                 <div className='border w-90 border-gray-400'>

//                 </div>
//           </div>
           
        
//       </div>
//       </section>
//     </>
//   )
// }

// export default Contact

import React from "react";
import ContactHero from "../component/ContactHero";

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Footer from "../component/Footer";


const Contact = () => {
  return (
    <>
      <ContactHero />

      <section className="w-full max-w-6xl mx-auto px-5 py-10">

        <div className="mb-7">
          <h2 className="text-2xl font-bold text-gray-800">
            Get in Touch
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Have questions or feedback? Fill out the form or reach out
            <br className="hidden sm:block" />
            to us via the contact details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="border border-gray-200 rounded-xl p-6 shadow-sm">

            <div className="flex gap-5 mb-7">
              <IoLocationOutline
                className="text-orange-500 text-2xl mt-1 shrink-0"
              />

              <div>
                <h4 className="text-sm font-semibold text-gray-700">
                  Our Location
                </h4>

                <p className="text-xs text-gray-500 mt-1">
                  123 FoodHub Street,
                  <br />
                  Bangalore, Karnataka 560001
                </p>
              </div>
            </div>

            <div className="flex gap-5 mb-7">
              <MdOutlineEmail
                className="text-orange-500 text-2xl mt-1 shrink-0"
              />

              <div>
                <h4 className="text-sm font-semibold text-gray-700">
                  Email Us
                </h4>

                <p className="text-xs text-gray-500 mt-1">
                  support@foodhub.com
                </p>
              </div>
            </div>

            <div className="flex gap-5 mb-7">
              <IoCallOutline
                className="text-orange-500 text-2xl mt-1 shrink-0"
              />

              <div>
                <h4 className="text-sm font-semibold text-gray-700">
                  Call Us
                </h4>

                <p className="text-xs text-gray-500 mt-1">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <FaRegClock
                className="text-orange-500 text-2xl mt-1 shrink-0"
              />

              <div>
                <h4 className="text-sm font-semibold text-gray-700">
                  Working Hours
                </h4>

                <p className="text-xs text-gray-500 mt-1">
                  Mon - Sun: 9:00 AM - 11:00 PM
                </p>
              </div>
            </div>

          </div>

          <div className="border border-gray-200 rounded-xl p-6 shadow-sm">

            <form className="space-y-4">

              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Type your message..."
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none resize-none focus:border-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2.5 rounded-md transition"
              >
                Send Message →
              </button>

            </form>
          </div>

        </div>

        <div className="mt-6 border border-gray-200 rounded-2xl overflow-hiden mb-30 h-65">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3419.6124770269967!2d85.14511019999999!3d25.617550400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58598eb52405%3A0x7f6d196ac3dce5ce!2sGandhi%20Maidan!5e1!3m2!1sen!2sin!4v1786364099147!5m2!1sen!2sin" loading="lazy" className="w-full rounded-2xl h-full"></iframe>
        </div>

        <div className="">
            <h1 className="text-center font-bold text-2xl">Follow Us</h1>
            <p className="text-center text-gray-500">Follow us on social media for the latest updates nd offers.</p>

             <div className="flex gap-9 mx-auto w-80 mt-5">
                <div className="w-20 h-10 p-3 bg-gray-200 rounded-3xl hover:bg-gray-300">
                  <FaFacebookF />
                </div>
                <div className="w-20 h-10 p-3 bg-gray-200 rounded-3xl hover:bg-gray-300">
                  <FaInstagram />
                </div>
                <div className="w-20 h-10 p-3 bg-gray-200 rounded-3xl hover:bg-gray-300">
                  <FaTwitter />
                </div>
                <div className="w-20 h-10 p-3 bg-gray-200 rounded-3xl hover:bg-gray-300">
                  <FaYoutube />
                </div>
                <div className="w-20 h-10 p-3 bg-gray-200 rounded-3xl hover:bg-gray-300">
                  <FaLinkedinIn />
                </div>
             </div>
        </div>


      </section>
      <Footer />
    </>
  );
};

export default Contact;
