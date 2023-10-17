import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-100 p-4 rounded-lg border-2 border-blue-100">
        <ul className="flex space-x-4 justify-normal">
          <li>
            <Link to="/" className="bg-teal-300 rounded-md p-1 text-white font-semibold hover:bg-blue-300 hover:text-gray-800">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="bg-teal-300 rounded-md p-1 text-white font-semibold hover:bg-blue-300 hover:text-gray-800">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="bg-teal-300 rounded-md p-1 text-white font-semibold hover:bg-blue-300 hover:text-gray-800">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="container mx-auto p-4">
        <Outlet />
      </div>
      
      <AppRoutes />
    </div>
  );
};

export default App;
