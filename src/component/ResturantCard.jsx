
import React from "react";
import { motion} from "motion/react";
import { div } from 'motion/react-client';

const RestaurantCard = ({ restaurant }) => {
  return (
    <motion.div initial={{opacity:0, y:80, scale:0.9}} 
                whileInView={{opacity:1, y:0, scale:1}} 
                viewport={{once:true, amount:0.4}} 
                transition={{duration:0.9, ease:"easeOut"}} 
                whileHover={{ y:-10, scale:1.03}} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-300 w-65 h-99 ml-3">
         <img
        src={`https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}`}
        alt={restaurant.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">

        <h2 className="text-xl font-bold">
          {restaurant.name}
        </h2>

        <p className="text-gray-500 mt-2">
          📍 {restaurant.city}
        </p>

        <p className="text-yellow-500 font-semibold mt-2">
          ⭐ {restaurant.rating}
        </p>

        <button className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold">
          Book Now
        </button>

      </div>
    </motion.div>
  );
};

export default RestaurantCard;
