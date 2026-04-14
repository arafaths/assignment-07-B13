import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/navbar/Navbar';

const RootLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default RootLayout;