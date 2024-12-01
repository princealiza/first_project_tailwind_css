"use client"

import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';


const HomeContent = () => {
    useEffect (() => {
        AOS.init({
            duration:1000,
            once: true,
        });
    }, []);
  return (
    <div>
      <section
        className="hero bg-cover bg-center h-screen flex justify-center items-center text-center text-black px-5"
        style={{ backgroundImage: "url('/image home.jpg')" }}
      >
        <div>
          <h1 className="text-5xl font-bold text-shadow-md mb-5" data-aos="fade-down">Welcome to ZB Foods</h1>
          <p className="text-xl mt-4">
            "Welcome to ZB Foods-where taste meets quality! We take pride in offering pure ingredients, authentic flavors, and a passion for culinary excellence. At ZB Foods, every bite is a journey of deliciousness, crafted with love and care to bring you the freshest and most delightful food experience. Discover the magic of taste with us!"
          </p>
          <button className="mt-6 px-4 py-2 bg-blue-500 rounded text-white font-bold hover:bg-indigo-700">
            Order Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;