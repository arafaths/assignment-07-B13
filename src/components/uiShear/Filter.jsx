import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex  ">
      <div className="flex bg-gray-200 p-1 rounded-full">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition
         ${
           filter === 'all'
             ? 'bg-blue-600 text-white shadow-md'
             : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
         }
      `}
        >
          All
        </button>

        <button
          onClick={() => setFilter('call')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition
         ${
           filter === 'call'
             ? 'bg-green-500 text-white shadow-md'
             : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
         }
      `}
        >
          Call
        </button>

        <button
          onClick={() => setFilter('text')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition
         ${
           filter === 'text'
             ? 'bg-blue-500 text-white shadow-md'
             : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
         }
      `}
        >
          Text
        </button>

        <button
          onClick={() => setFilter('video')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition
         ${
           filter === 'video'
             ? 'bg-red-500 text-white shadow-md'
             : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
         }
      `}
        >
          Video
        </button>
      </div>
    </div>
  );
};

export default Filter;
