import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-green-100 min-h-screen flex flex-col justify-center items-center border border-green-300 rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-blue-900">Contact ExpertCallers Solutions</h1>
      <p className="text-lg text-gray-700 font-semibold mt-4">
        <strong>Address:</strong> 1234 Tech Park Road, Bangalore, India
      </p>
      <p className="text-lg text-gray-700 font-semibold mt-2">
        <strong>Email:</strong> info@expertcallers.com
      </p>
      <p className="text-lg text-gray-700 font-semibold mt-2">
        <strong>Phone:</strong> +91 123-456-7890
      </p>
      <p className="text-lg text-gray-700 font-semibold mt-4">
        We are here to assist you with any inquiries or services you need. Feel
        free to reach out to us through email or phone.
      </p>
    </div>
  );
};

export default Contact;
