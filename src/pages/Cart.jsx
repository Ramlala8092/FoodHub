

import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { useCart } from "../context/CartContext";
import Footer from "../component/Footer";
import shop from "../pages/Shop"
import { useNavigate } from "react-router-dom";
import ServiceFeatures from "../component/ServiceFeatures";

const Cart = () => {

  const navigate = useNavigate();
  const { cart, increase, decrease } = useCart();

  return (
    <>
    <div className="mx-auto max-w-7xl px-5 mt-7">

      {/* Heading */}
      
      <div className="mt-27">
        <h1 className="mt-5 px-5 text-2xl font-semibold">
          Your Cart
        </h1>

        <div>
           <button className="bg-orange-500 p-2 text-sm mt-3 ml-2 rounded-sm text-white font-semibold" onClick={() => navigate("/shop")}>Continue shopping</button>
        </div>
      </div>


      {/* Offer Section */}
      <div className="max-w-7xl w-full p-8 mt-7 bg-gray-100 shadow-md shadow-gray-300 flex gap-25 justify-center items-center">

        <div className="flex gap-3">
          <BiSolidOffer className="text-red-500 font-bold text-xl" />

          <p className="text-sm text-gray-900">
            Yay! You are saving{" "}
            <span className="text-green-500 font-bold">
              &#8377;120
            </span>{" "}
            on this order
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-900">
            Add more items worth{" "}
            <span>&#8377;280</span>{" "}
            to get free delivery
          </p>
        </div>

      </div>


      {/* Cart Items */}
      {cart.length === 0 ? (

        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-gray-600">
            Your Cart is Empty
          </h2>

          <p className="text-gray-400 mt-2">
            Add some delicious food to your cart!
          </p>
        </div>

      ) : (

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Side - Items */}
          <div className="lg:col-span-2 space-y-4">

            {cart.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between"
              >

                {/* Image + Name + Price */}
                <div className="flex items-center gap-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-20 object-cover rounded-lg"
                  />

                  <div>
                    <h2 className="font-bold text-lg">
                      {item.name}
                    </h2>

                    <p className="text-gray-500 text-sm">
                      {item.category}
                    </p>

                    <p className="text-orange-500 font-semibold mt-1">
                      &#8377;{item.price}
                    </p>
                  </div>

                </div>


                {/* Quantity Buttons */}
                <div className="flex items-center gap-3">

                  <button
                    onClick={() => decrease(item.id)}
                    className="w-9 h-9 rounded-lg bg-gray-200 hover:bg-gray-300 text-xl font-bold"
                  >
                    -
                  </button>

                  <span className="font-bold text-lg">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increase(item.id)}
                    className="w-9 h-9 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold"
                  >
                    +
                  </button>

                </div>

              </div>

            ))}

          </div>


          {/* Right Side - Order Summary */}
          <div className="bg-white rounded-xl shadow-md p-6 h-fit">

            <h2 className="text-xl font-bold mb-5">
              Order Summary
            </h2>

            {/* Total Items */}
            <div className="flex justify-between mb-3">
              <span className="text-gray-600">
                Items
              </span>

              <span className="font-semibold">
                {cart.reduce(
                  (total, item) => total + item.quantity,
                  0
                )}
              </span>
            </div>


            {/* Subtotal */}
            <div className="flex justify-between mb-3">
              <span className="text-gray-600">
                Subtotal
              </span>

              <span className="font-semibold">
                &#8377;
                {cart.reduce(
                  (total, item) =>
                    total + item.price * item.quantity,
                  0
                )}
              </span>
            </div>


            {/* Delivery */}
            <div className="flex justify-between mb-3">
              <span className="text-gray-600">
                Delivery
              </span>

              <span className="text-green-600 font-semibold">
                FREE
              </span>
            </div>


            <hr className="my-4" />


            {/* Final Total */}
            <div className="flex justify-between text-lg font-bold">
              <span>
                Total
              </span>

              <span className="text-orange-500">
                &#8377;
                {cart.reduce(
                  (total, item) =>
                    total + item.price * item.quantity,
                  0
                )}
              </span>
            </div>


            {/* Checkout */}
            <button
              className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Proceed to Checkout
            </button>

          </div>

        </div>

      )}

    </div>
    <ServiceFeatures />
    <Footer />
    </>
  );
};

export default Cart;


