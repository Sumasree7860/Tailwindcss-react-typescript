import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
  
            <Link to="/">Home</Link>
             
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      <AppRoutes />
    </div>
  );
};

export default App;
