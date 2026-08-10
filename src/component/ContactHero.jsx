import { div } from 'motion/react-client'
import React from 'react'
import ContactIm from "../Images/ContactIm.jpg";

const ContactHero = () => {
  return (
   
     <section className="relative w-full mb-10 max-w-7xl mx-auto h-[50vh] lg:h-[60vh] md:h-[40vh] rounded-xl overflow-hidden bg-cover bg-center" style={{backgroundImage: `url(${ContactIm})`}}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className=' relative z-10 px-6 py-5 mt-15 lg:mt-30'>
                <h2 className='p-5 text-white font-bold text-4xl'>Contact Us</h2>
                <p className='p-2 text-gray-300 text-lg'>We'd love to hear from you.Get in touch with us <br />for any query or feedback.</p>
            </div>
        </section>
  )
}

export default ContactHero
