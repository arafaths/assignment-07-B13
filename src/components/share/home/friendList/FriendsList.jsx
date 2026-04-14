import React from 'react';
import Profile_1 from '../../../../assets/image/profile1.jpg'

const FriendsList = () => {
  return (
    <div className='mb-10'>
      <p className="text-3xl font-semibold">Your Friends</p>
      <div className="grid grid-cols-4 gap-5 mt-5">
        <div className="flex flex-col justify-center items-center space-y-2 py-6 bg-base-100 shadow-sm rounded-lg">
          <img src={Profile_1} alt="" className="w-25 h-25 rounded-full" />
          <p className="text-2xl font-semibold">David Kim</p>
          <p className="text-gray-500">62d ago</p>
          <div className="">
            <p className="badge bg-green-300 rounded-full">work</p>
          </div>
          <div className="">
            <p className="badge badge-primary bg-yellow-300 border-none rounded-full">
              Almost Due
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2 py-6 bg-base-100 shadow-sm rounded-lg">
          <img src={Profile_1} alt="" className="w-25 h-25 rounded-full" />
          <p className="text-2xl font-semibold">David Kim</p>
          <p className="text-gray-500">62d ago</p>
          <div className="">
            <p className="badge bg-green-300 rounded-full">work</p>
          </div>
          <div className="">
            <p className="badge badge-primary bg-yellow-300 border-none rounded-full">
              Almost Due
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2 py-6 bg-base-100 shadow-sm rounded-lg">
          <img src={Profile_1} alt="" className="w-25 h-25 rounded-full" />
          <p className="text-2xl font-semibold">David Kim</p>
          <p className="text-gray-500">62d ago</p>
          <div className="">
            <p className="badge bg-green-300 rounded-full">work</p>
          </div>
          <div className="">
            <p className="badge badge-primary bg-yellow-300 border-none rounded-full">
              Almost Due
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2 py-6 bg-base-100 shadow-sm rounded-lg">
          <img src={Profile_1} alt="" className="w-25 h-25 rounded-full" />
          <p className="text-2xl font-semibold">David Kim</p>
          <p className="text-gray-500">62d ago</p>
          <div className="">
            <p className="badge bg-green-300 rounded-full">work</p>
          </div>
          <div className="">
            <p className="badge badge-primary bg-yellow-300 border-none rounded-full">
              Almost Due
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsList;