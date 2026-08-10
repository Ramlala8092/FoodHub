import React, {useState, useEffect } from 'react'
import FoodHero from "../FoodPart/FoodHero"
import Offerslider from '../component/Offerslider';
import Footer from '../component/Footer';
import FoodData from "../data/FoodData";
import FoodCard from '../component/FoodCard';
import { useSearch } from '../context/SearchContext';
import { useSearchParams } from 'react-router-dom';

const Shop = () => {
  const [foods,setFoods] = useState([]);
  const {search} = useSearch();
  const [searchParms] = useSearchParams();
  const category = searchParms.get("category");


  useEffect(() => {
    const shuffled = [...FoodData].sort(() => Math.random()-0.5);
    setFoods(shuffled);
  },[]);
  
  //const filteredFood = foods.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()));
   const filteredFood = foods.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase())||
                          item.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = !category||item.category.toLowerCase() === category.toLowerCase();
    
    return matchesSearch && matchesCategory;
   })

  return ( 
   
    <>
      <FoodHero />
      <div className='max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
          {
            filteredFood.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))
          }
      </div>
      
      <Footer />
    </>   
  )
}

export default Shop
