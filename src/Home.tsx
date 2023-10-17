import React from 'react';

const Home: React.FC = () => {
  const backgroundImageStyle = {
    backgroundImage: `url('https://img.freepik.com/premium-vector/dark-blue-background-modern-line-stripes-curve-abstract-presentation-background-with-copy-space_252051-3833.jpg?size=626&ext=jpg&ga=GA1.1.1462319732.1697477824&semt=ais')`,
  };
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center border border-blue-300 rounded-lg shadow-md p-8" style={backgroundImageStyle}>
      <h1 className="text-4xl font-bold text-white">Welcome To ECPL Home Page</h1>
      <p className="text-lg text-pink-700  font-semibold mt-7">Win The Race With innovative Solutions...!</p>
    </div>
  );
};

export default Home;
