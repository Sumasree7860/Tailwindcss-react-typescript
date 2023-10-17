import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-yellow-100 min-h-screen flex flex-col justify-center items-center border border-yellow-300 rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-green-900">About ECPL</h1>
      <p className="text-lg text-gray-700 font-semibold mt-10">
        Engineering Company Private Limited (ECPL) is a renowned technology
        company with a history of delivering excellence in innovative
        solutions.
      </p>
      <p className="text-lg text-gray-700 font-semibold mt-4">
        Founded in 2005, ECPL has been a pioneer in the technology sector. Our
        mission is to provide cutting-edge solutions to our clients, enabling
        them to thrive in the modern digital landscape.
      </p>
      <p className="text-lg text-gray-700 font-semibold mt-4">
        With a dedicated team of experts in software development, artificial
        intelligence, data analytics, and more, ECPL delivers high-quality
        services across various industries, including finance, healthcare,
        e-commerce, and manufacturing.
      </p>
      <p className="text-lg text-gray-700 font-semibold mt-4">
        At ECPL, we are committed to driving digital transformation and
        innovation. Our client-centric approach ensures that we understand and
        meet the unique needs of each of our partners.
      </p>
    </div>
  );
};

export default About;
