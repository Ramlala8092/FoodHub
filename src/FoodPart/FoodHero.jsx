import React from 'react'
import HeroImage from "../Images/heroPage.jpg";

const FoodHero = () => {
  return (
    <section className='h-[50vh] bg-cover bg-no-repeat bg-center flex items-center mb-10 mt-21' style={{backgroundImage: `url(${HeroImage})`}}>
        <div className='max-w-7xl mx-auto px-6'>
            <h1 className='text-4xl font-bold'>Delicious <span className='text-orange-600'>Food</span></h1>
            <p className='mt-5 px-3 text-gray-500'>Fast Delivery at your Doorstep</p>
        </div>
    </section>
  )
}

export default FoodHero
