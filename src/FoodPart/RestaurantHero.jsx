import React, { useEffect, useState } from "react";
import Hotel1 from "../Images/Hotel1.jpg";
import Hotel2 from "../Images/Hotel2.jpg";
import Hotel3 from "../Images/Hotel3.jpg";
import Hotel4 from "../Images/Hotel4.jpg";

const images = [
  Hotel1,
  Hotel2,
  Hotel3,
  Hotel4
];

const RestaurantHero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto xl:ml-25  relative h-[50vh] overflow-hidden mb-10 rounded-md">

      <img
        key={currentImage}
        src={images[currentImage]}
        alt="Restaurant"
        className="absolute inset-0 w-full h-full object-cover animate-[zoom_5s_linear]"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6">
        <div>
          <h1 className="text-5xl font-bold text-white">
            Best <span className="text-orange-500">Restaurant</span>
          </h1>

          <p className="text-white mt-4 text-lg">
            Fast Delivery at your Doorstep
          </p>
        </div>
      </div>

    </section>
  );
};

export default RestaurantHero;