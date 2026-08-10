
import React, { useEffect, useState } from "react";
import { motion} from "motion/react";
import { div } from 'motion/react-client';
import Footer from "../component/Footer"
import HomeImage from "../Images/HomePage.jpg";
import Video from "../Images/video.mp4";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [restaurants,setRestaurants] = useState([]);

  const categories = [
    {
      name: "Pizza",
      image:"https://static.vecteezy.com/system/resources/previews/030/660/303/large_2x/pizza-with-white-background-high-quality-ultra-hd-free-photo.jpg"
    },
    {
      name: "Samosa",
      image:"https://static.vecteezy.com/system/resources/previews/045/871/479/non_2x/tasty-samosa-isolated-on-transparent-background-free-png.png"
    },
    {
      name: "Burger",
      image:"https://static.vecteezy.com/system/resources/previews/034/468/017/large_2x/burger-cheese-burger-hamburger-ham-burger-beef-burger-burger-transparent-background-ai-generated-png.png"
    },
    {
      name: "Momo",
      image:"https://i.pinimg.com/originals/c5/7b/02/c57b02de251872629042f30942a26540.png"
    },
    {
      name: "Biryani",
      image:"https://png.pngtree.com/png-clipart/20240801/original/pngtree-indian-vegetable-biryani-in-balti-dish-shot-from-topview-and-isolated-png-image_15682096.png"
    },
    {
      name: "Thali",
      image:"https://e7.pngegg.com/pngimages/1018/856/png-clipart-north-indian-cuisine-vegetarian-cuisine-thali-south-indian-cuisine-india-food-recipe.png"
    },
  ];

  const foods = [
  {
    id: 1,
    name: "Chocolate Cake",
    category: "Dessert Bakery",
    price: 99,
    rating: "4.8",
    image:
      "https://img.freepik.com/premium-photo/dark-chocolate-cakes_187678-40.jpg",
  },
  {
    id: 2,
    name: "Momo",
    category: "Street Food",
    price: 149,
    rating: "4.7",
    image:
      "https://img.freepik.com/premium-photo/momo-india-food-generative-ai_677136-1927.jpg",
  },
  {
    id: 3,
    name: "Veg Biryani",
    category: "Indian Food",
    price: 199,
    rating: "4.9",
    image:
      "https://img.freepik.com/premium-photo/colorful-veg-biryani-copper-handi_1169880-25823.jpg",
  },
  {
    id: 4,
    name: "Burger",
    category: "Fast Food",
    price: 149,
    rating: "4.6",
    image:
      "https://img.freepik.com/premium-photo/burgers-high-quality-4k-hdr_889056-32316.jpg",
  },
  {
    id: 5,
    name: "Rasmalai",
    category: "Sweet",
    price: 129,
    rating: "4.8",
    image:
      "https://img.freepik.com/premium-photo/rasmalai-popular-indian-sweet-made-with-soft-spongy-cottage-cheese_1230902-3322.jpg?w=2000",
  },
  {
    id: 6,
    name: "Dhokla",
    category: "Gujarati",
    price: 99,
    rating: "4.7",
    image:
      "https://img.freepik.com/premium-photo/golden-soft-dhokla-popular-restaurant-food-dhokla-image-photography_1020697-125997.jpg",
  },
  {
    id: 7,
    name: "Pizza",
    category: "Viral food",
    price: 199,
    rating: "5.7",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.rkWRdQOtHTSzOqyMFXCddwHaE8?r=0&pid=Api&P=0&h=180",
  },
  {
    id: 8,
    name: "Veg Thali",
    category: "thali",
    price: 120,
    rating: "7.7",
    image:
      "https://img.freepik.com/fotos-premium/veg-thali-hindu-indio-o-plato-comida-enfoque-selectivo_466689-36019.jpg",
  },
];


   useEffect(() => {
    fetch("https://restaurant-api.dicoding.dev/list")
    .then((res) => res.json())
    .then((data) => {
      setRestaurants(data.restaurants);
    })
    .catch((error) => {
      console.log("Restaurants API error",error);
    })
   }, []);
  return (
  <div>
    <section
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${HomeImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center min-h-screen">
        <div className="max-w-xl">
          <h5 className="text-orange-500 font-semibold text-lg sm:text-xl mb-3">
            🍴 Best Food For Your Taste
          </h5>

          <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight">
            Delicious Food <br />
            Delivered <span className="text-orange-500">Fast</span>
          </h1>

          <p className="text-gray-200 mt-6 text-base sm:text-lg leading-7">
            Order your favorite food from the best restaurants near you
            and get it delivered quickly at your doorstep.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={() => navigate("/shop")} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300">
              Order Now 🍔
            </button>

            <button onClick={() => navigate("/shop")} className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold transition duration-300">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </section>


        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-20">
                 <h2 className="text-4xl font-bold">
                   Popular <span className="text-orange-500">Categories</span>
                 </h2>
                 <p className="text-gray-500 mt-3">
                   Choose your favorite dishes from our delicious menu.
                 </p>
            </div>

 <motion.div initial={{opacity:0, y:80, scale:0.9}} 
             whileInView={{opacity:1, y:0, scale:1}} 
             viewport={{once:true, amount:0.4}} 
             transition={{duration:0.9, ease:"easeOut"}} 
             whileHover={{ y:-10, scale:1.03}} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
    {categories.map((item) => (
      <div
        key={item.name}
        onClick={() => navigate(`/shop?category=${item.name.toLowerCase()}`)}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 text-center cursor-pointer"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-28 h-28 mx-auto rounded-full object-cover"
        />

        <h3 className="mt-4 font-bold text-lg">{item.name}</h3>

        <p className="text-orange-500 text-sm mt-1">
          25+ Items
        </p>
      </div>
    ))}
  </motion.div>
  
  </div>

          <div  className="max-w-7xl mx-auto px-4 py-16 mb-20">
              <div>
                  <h2 className="text-4xl font-bold text-center mb-3">Popular <span className="text-orange-500">Restaurants</span></h2>
                  <p className="text-center [word-spacing:3px] text-gray-500 mb-18 text-lg">Choose your popular restaurants</p>
              </div>
              <motion.div initial={{opacity:0, y:80, scale:0.9}} 
                          whileInView={{opacity:1, y:0, scale:1}} 
                          viewport={{once:true, amount:0.4}} 
                          transition={{duration:0.9, ease:"easeOut"}} 
                          whileHover={{ y:-10, scale:1.03}} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12">

                 {restaurants.slice(0,6).map((restaurant) => (
                     <motion.div key={restaurant.id} onClick={() => navigate(`/resturant/${restaurant.id}`)} whileHover={{y: -10, scale:1.03}} className="border border-gray-300 rounded-2xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">

                                <img src={`https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}`} alt={restaurant.name} className="w-full h-32 object-cover" />

                                <div className="p-2">
                                  <div className="flex items-center justify-between gap-2">
                                         <h5 className="font-bold text-base">{restaurant.name}</h5>
                                         <button className="bg-green-500 text-sm text-white rounded-md px-2 py-1">{restaurant.rating}</button>
                                  </div>
                                  <p className="text-gray-400 text-sm mt-2">{restaurant.city}</p>
                                </div>
                      </motion.div>
                 ))}
              </motion.div>
              </div>
           <div>
          </div>

          <div className="w-full relative">
              <video autoPlay loop muted playsInline  className="w-full h-[300px] object-cover"><source src={Video} type="video/mp4" /></video>
              <div className="absolute inset-0 bg-black/50"></div>
          </div>


          <section className="max-w-7xl mx-auto px-4 py-16">

      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Top Rated <span className="text-orange-500">Foods</span>
        </h2>

        <p className="text-gray-500 mt-3">
          Discover our most loved dishes
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"
      >
        {foods.map((food) => (
          <motion.div
            key={food.id}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-[260px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-44 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-bold">{food.name}</h3>

              <p className="text-gray-500 text-sm mt-1">
                {food.category}
              </p>

              <p className="text-green-600 font-semibold mt-2">
                ⭐ {food.rating}
              </p>

              <div className="flex items-center justify-between mt-4">
                <h4 className="text-lg font-bold text-orange-600">
                  ₹{food.price}
                </h4>

                <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-4 py-2 rounded-xl font-semibold">
                  Add +
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>

    <Footer />
    </div>
  );
};

export default Home;


