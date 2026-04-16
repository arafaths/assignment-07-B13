import React from 'react';
import { Link } from 'react-router';

const FriendsProfile = ({ friend }) => {
  return (
    <Link
      to={`/details/${friend.id}`}
      className="flex flex-col justify-center items-center space-y-2 py-6 bg-white border border-gray-50 shadow-sm rounded-lg"
    >
      <img src={friend.picture} alt="" className="w-25 h-25 rounded-full" />
      <p className="text-2xl font-semibold">{friend.name}</p>
      <p className="text-gray-500">{friend.days_since_contact}d ago</p>
      <div className="flex gap-1">
        {friend.tags.map((tag, ind) => (
          <p
            key={ind}
            className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-semibold uppercase"
          >
            {tag}
          </p>
        ))}
      </div>
      <div className="">
        <p
          className={`px-2 py-1 text-white text-xs rounded-full font-semibold uppercase tracking-wider ${friend.status === 'almost due' ? 'bg-[#EFAD44]' : friend.status === 'on-track' ? 'bg-[#244D3F]' : 'bg-[#EF4444]'}`}
        >
          {friend.status}
        </p>
      </div>
    </Link>
  );
};

export default FriendsProfile;
