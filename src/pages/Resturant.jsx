

import React, { useEffect, useState } from "react";
import RestaurantCard from "../component/ResturantCard";
import RestaurantHero from "../FoodPart/RestaurantHero";
import Footer from "../component/Footer";
import { useParams } from "react-router-dom";


const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const {id} = useParams();

  console.log(id);

  useEffect(() => {
    fetch("https://restaurant-api.dicoding.dev/list")
      .then((res) => res.json())
      .then((data) => setRestaurants(data.restaurants))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <div className=" mx-auto px-4 py-1">
      <RestaurantHero />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </div>

      <Footer />
    </div>
  </>  
  );
};

export default Restaurant;
