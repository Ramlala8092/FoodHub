import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-28 px-4">

      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8">

        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full bg-orange-600 text-white flex items-center justify-center text-3xl font-bold">
            {currentUser.name.charAt(0).toUpperCase()}
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center mb-6">
          My Profile
        </h1>

        <div className="space-y-4">

          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">
              Name
            </p>

            <p className="font-semibold text-lg">
              {currentUser.name}
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">
              Email
            </p>

            <p className="font-semibold text-lg">
              {currentUser.email}
            </p>
          </div>

        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full mt-6 bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
        >
          Back to Home
        </button>

      </div>
    </div>
  );
};

export default Profile;