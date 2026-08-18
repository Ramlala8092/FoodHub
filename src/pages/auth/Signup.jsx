// import React,{useState} from 'react';
// import { Form,Link } from 'react-router-dom';

// const Signup = () => {

//    const [fullname,setFullname] = useState("");
//    const [email,setEmail] = useState("");
//    const [password, setPassword] = useState("");

//   return (
//     <div className='w-full h-screen flex justify-center items-center'>
//          <form action="" className=' max-w-100 w-full space-y-6 border-2 border-gray-300 p-6 rounded-2xl'>
//           <div className=''>
//               <h2 className='text-2xl text-center text-purple-600 font-bold'>Sign-up</h2>
//               <p className='text-center text-gray-500 text-sm font-medium'>It will take 3 seconds.</p>
//           </div>

//           <div className='flex flex-col gap-5'>
//              <div>
//                  <label htmlFor="fullname">Fullname <sup className='text-red-700 font-bold text-lg'>*</sup></label>
//                  <input type="text" id='fullname' value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder='Enter fullname' className='mt-2 w-full outline-0 rounded p-2.5 ring-1 focus:ring-1 focus:ring-purple-600' required />
//              </div>
//              <div>
//                  <label htmlFor="email">Email <sup className='text-red-600 font-bold text-lg'>*</sup></label>
//                  <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' className='mt-2 w-full outline-0 rounded p-2.5 ring-1 focus:ring-1 focus:ring-purple-600' required />
//              </div>
//              <div>
//                  <label htmlFor="password">Password <sup className='text-red-600 font-bold text-lg'>*</sup></label>
//                  <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='at least 8 character' className='mt-2 w-full outline-0 rounded p-2.5 ring-1 focus:ring-1 focus:ring-purple-600' required />
//              </div>
//           </div>
          
//           <div>
//               <button type='submit' className='w-full p-2.5 bg-purple-600 font-semibold rounded-md text-white tracking-wide mb-3 hover:bg-purple-700 hover:cursor-pointer'>Signup</button>
//               <p className='text-center text-gray-500'>Already have an account? <Link to="/login" className='text-purple-500 font-medium hover:text-purple-600'>Login</Link></p>
//           </div>
//          </form>
//     </div>
//   );
// }

// export default Signup



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  // Signup
  const handleSignup = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    // Empty field
    if (!name || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    // Get old users
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    // Check email
    const existingUser = users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase()
    );

    if (existingUser) {
      setError(
        "This email is already registered. Please login."
      );
      return;
    }

    // New user
    const newUser = {
      id: Date.now(),
      name: name,
      email: email,
      password: password,
    };

    // Add user
    users.push(newUser);

    // Save users
    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    // Signup successful
    // Page refresh nahi hoga
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 pt-24">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Join Food Hub today
        </p>

        {/* Error */}
        {error && (
          <div className="mb-5 bg-red-100 text-red-600 px-4 py-3 rounded-lg text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup}>

          {/* Name */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* Signup */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 active:scale-95 transition"
          >
            Sign Up
          </button>

        </form>

        {/* Login */}
        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;
