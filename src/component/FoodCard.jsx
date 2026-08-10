import React from 'react'
import { motion} from "motion/react";
import { div } from 'motion/react-client';

const FoodCard = ({ food }) => {
  return (
    <motion.div initial={{opacity:1, y:80, scale:0.9}} whileInView={{opacity:1, y:0, scale:1}} viewport={{once:true, amount:0.4}} transition={{duration:0.9, ease:"easeOut"}} whileHover={{ y:-10, scale:1.03}}  className='bg-white rounded-2xl shadow-md overflow-hidden  cursor-pointer'>
          <img src={food.image} alt={food.name} className='w-full h-48 object-cover' />

          <div className='p-4'>
               <h2 className='font-bold text-lg'>{food.name}</h2>
               <p className='text-gray-500'>{food.category}</p>
               <p className='text-green-600 mt-2'>⭐ {food.rating}</p>

                <div className='flex justify-between items-center mt-4'>
                  <span className='font-bold text-orange-500'>
                     &#8377;{food.price}
                  </span>
                  <button className='bg-orange-500 text-white px-4 rounded-lg py-2'>Add +</button>
                </div>
          </div>
    </motion.div>
  )
}

export default FoodCard;
