import React from 'react';
import { GoPlus } from 'react-icons/go';

const Banner = () => {
  return (
    <section className="mt-15">
      <div className="flex flex-col justify-center items-center space-y-5">
        <h2 className="text-5xl font-bold text-center">
          Friends to keep close in your life
        </h2>
        <p className="max-w-150 mx-auto text-gray-500 text-center">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white justify-center gap-0.5">
          <GoPlus className="text-xl" />
          Add a Friend
        </button>
      </div>

      <div className="mt-10 grid grid-cols-4 gap-5">
        <div className="max-w-80 py-10 bg-base-100 shadow-sm rounded-lg">
          <p className="text-4xl font-semibold text-center">10</p>
          <p className="max-w-150 mx-auto text-gray-500 text-center">
            Total Friends
          </p>
        </div>
        <div className="max-w-80 py-10 bg-base-100 shadow-sm rounded-lg">
          <p className="text-4xl font-semibold text-center">3</p>
          <p className="max-w-150 mx-auto text-gray-500 text-center">
            On Track
          </p>
        </div>
        <div className="max-w-80 py-10 bg-base-100 shadow-sm rounded-lg">
          <p className="text-4xl font-semibold text-center">6</p>
          <p className="max-w-150 mx-auto text-gray-500 text-center">
            Need Attention
          </p>
        </div>
        <div className="max-w-80 py-10 bg-base-100 shadow-sm rounded-lg">
          <p className="text-4xl font-semibold text-center">12</p>
          <p className="max-w-150 mx-auto text-gray-500 text-center">
            Interactions This Month
          </p>
        </div>
      </div>
      <hr className='text-gray-300 my-8' />
    </section>
  );
};

export default Banner;