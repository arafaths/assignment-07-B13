import React, { useContext } from 'react';
import { LuArchive } from 'react-icons/lu';
import { PiBellZBold, PiVideoCameraBold } from 'react-icons/pi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { TbPhoneCall } from 'react-icons/tb';
import useFriends from '../../hooks/useFriends';
import { useParams } from 'react-router';
import { HashLoader } from 'react-spinners';
import { BiMessageDots } from 'react-icons/bi';
import FriendDetailsContext from '../../context/DetailsContext';



const FriendDetails = () => {
  const { handleAction } = useContext(FriendDetailsContext);

  const { id } = useParams();
  const { friends, loading } = useFriends();
  
  const selectFriend = friends.find(friend => friend.id == id);

  if (loading) {
    return (
      <div className="my-20">
        <HashLoader className='mx-auto' />
      </div>
    );
  }

  const {
    picture,
    name,
    status,
    tags,
    bio,
    email,
    days_since_contact,
    goal,
    next_due_date,
  } = selectFriend;


  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6">
        {/* Left site */}
        <div className="col-span-1 space-y-4">
          <div className="p-6 text-center bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="w-24 h-24 rounded-full bg-gray-200 shadow-md border-2 border-white mx-auto overflow-hidden">
              <img
                src={picture}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-800 mt-4">{name}</h3>

            <div className="flex flex-col items-center gap-2 mt-2">
              <span
                className={`px-2 py-1 text-white text-xs rounded-full font-semibold uppercase tracking-wider ${status === 'almost due' ? 'bg-[#EFAD44]' : status === 'on-track' ? 'bg-[#244D3F]' : 'bg-[#EF4444]'}`}
              >
                {status}
              </span>

              <div className="flex gap-1">
                {tags.map((tag, ind) => (
                  <span
                    key={ind}
                    className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-semibold uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="italic text-gray-500 font-semibold text-sm mt-4">
              "{bio}"
            </p>

            <p className="text-gray-500 text-xs mt-2">
              Preferred: <span className="text-blue-500">{email}</span>
            </p>
          </div>

          <div className="space-y-2">
            <button className="w-full py-3 flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition">
              <PiBellZBold size={18} />
              Snooze 2 weeks
            </button>
            <button className="w-full py-3 flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition">
              <LuArchive size={18} />
              Archive
            </button>
            <button className="w-full py-3 flex items-center justify-center gap-2 bg-white text-red-500 font-semibold rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition">
              <RiDeleteBin5Line size={18} />
              Delete
            </button>
          </div>
        </div>

        {/* Right site */}
        <div className="col-span-2 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center space-y-2 py-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-2xl text-[#244D3F] font-bold">
                {days_since_contact}
              </p>
              <p className="text-lg text-gray-500">Days Since Contact</p>
            </div>
            <div className="text-center space-y-2 py-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-2xl text-[#244D3F] font-bold">{goal}</p>
              <p className="text-lg text-gray-500">Goal (Days)</p>
            </div>
            <div className="text-center space-y-2 py-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-2xl text-[#244D3F] font-bold">
                {next_due_date}
              </p>
              <p className="text-lg text-gray-500">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-xl text-[#244D3F] font-semibold">
                Relationship Goal
              </p>
              <button className="text-gray-600 font-semibold py-1 px-2.5 bg-gray-100 rounded-sm border border-gray-300 hover:bg-gray-200 transition">
                Edit
              </button>
            </div>
            <p className="text-lg text-gray-500">
              Connect every{' '}
              <span className="text-gray-800 font-bold">{goal} days</span>
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 space-y-6">
            <p className="text-xl text-[#244D3F] font-semibold">
              Quick Check-In
            </p>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleAction('call', name)}
                className="flex flex-col justify-center items-center gap-2 py-5 bg-gray-100 rounded-xl border border-gray-300 hover:border-emerald-500 hover:text-emerald-600 transition group"
              >
                <TbPhoneCall size={25} />
                <p className="text-gray-700 font-medium group-hover:text-emerald-600">
                  Call
                </p>
              </button>
              <button
                onClick={() => handleAction('text', name)}
                className="flex flex-col justify-center items-center gap-2 py-5 bg-gray-100 rounded-xl border border-gray-300 hover:border-emerald-500 hover:text-emerald-600 transition group"
              >
                <BiMessageDots size={25} />
                <p className="text-gray-700 font-medium group-hover:text-emerald-600">
                  Text
                </p>
              </button>
              <button
                onClick={() => handleAction('video', name)}
                className="flex flex-col justify-center items-center gap-2 py-5 bg-gray-100 rounded-xl border border-gray-300 hover:border-emerald-500 hover:text-emerald-600 transition group"
              >
                <PiVideoCameraBold size={25} />
                <p className="text-gray-700 font-medium group-hover:text-emerald-600">
                  Video
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;