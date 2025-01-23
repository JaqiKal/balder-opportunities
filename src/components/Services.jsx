import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="py-16 px-4 bg-gray-100"
    >
      <h2 className="text-3xl text-center font-bold">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="service bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Service 1</h3>
          <p className="mt-4">Description of service 1.</p>
        </div>
        <div className="service bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Service 2</h3>
          <p className="mt-4">Description of service 2.</p>
        </div>
        <div className="service bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Service 3</h3>
          <p className="mt-4">Description of service 3.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
