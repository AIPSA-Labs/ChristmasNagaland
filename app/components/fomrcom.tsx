import { useSearchParams } from "@remix-run/react";
import React, { useState } from "react";
import getContact from "~/lib/contact";
import { getDataById } from "~/lib/offers";

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [search] = useSearchParams();
  const gift = search.get('g') || '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const number = getContact()

  return (
    <div className="h-screen w-screen flex justify-center items-center fixed top-0 left-0 z-50 bg-black bg-opacity-50">
      <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-white">Claim Your Gift</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-lg font-medium text-white">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="flex justify-around items-center align-middle" >
      <button 
        className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:scale-100 hover:shadow-lg transition-all duration-300"
      >
        Claim Your Gift 🎁
      </button>
      <p>OR</p>
      <a href={`https://wa.me/${number}?text=Hi! 🎉 \n I’m excited to share that I won a prize! 🏆 \n Prize : ${getDataById(gift)?.prize}`} className="rounded-full px-6 py-3 bg-gray-700">Whatsapp Us</a>
      </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
