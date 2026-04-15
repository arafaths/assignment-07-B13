import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-7xl md:text-9xl font-bold text-gray-800">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;