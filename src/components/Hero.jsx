import React from "react";

const Hero = () => {
  return (
    <section className="hero bg-blue-600 text-white text-center py-20">
      <h1 className="text-4xl font-bold">Welcome to Balder Opportunities</h1>
      <p className="mt-4">We specialize in regulatory affairs for life science.</p>
      <a
        href="#services"
        className="mt-8 inline-block px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-gray-100"
      >
        Learn More
      </a>
    </section>
  );
};

export default Hero;
