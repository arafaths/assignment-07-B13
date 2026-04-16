import React from 'react';
import { Link } from 'react-router';

const NoDocument = () => {
  return (
    <div className="min-h-[60vh] bg-white rounded-xl shadow-sm border border-gray-100 text-center flex flex-col justify-center items-center">
      <div className="space-y-2">
        <img src={NoDocument} alt="" className="w-30 mx-auto text-gray-400" />
        <p className="text-4xl text-gray-600 font-bold">Nothing here yet</p>
        <p className="text-xl text-gray-500">
          Start by adding a call, text, or video interaction.
        </p>
        <Link to={'/'} className="btn bg-[#244D3F] text-white">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NoDocument;
