import React from "react";
import { FaMotorcycle } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaAward } from "react-icons/fa";

const ServiceFeatures = () => {
  const features = [
    {
      icon: <FaMotorcycle />,
      title: "Free Delivery",
      description: "On orders above ₹299",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Payment",
      description: "100% secure transactions",
    },
    {
      icon: <FaClock />,
      title: "Fast Delivery",
      description: "30-40 mins delivery",
    },
    {
      icon: <FaAward />,
      title: "Best Quality",
      description: "Fresh & hygienic food",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="bg-orange-50 border border-orange-100 rounded-xl px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4"
            >
              {/* Icon */}
              <div className="text-orange-500 text-4xl shrink-0">
                {feature.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-gray-900 text-base">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;