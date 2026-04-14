import React from 'react';
import { Link } from 'react-router';

const FriendsProfile = ({ friend }) => {
  return (
    <Link to={`/details/${friend.id}`} className="flex flex-col justify-center items-center space-y-2 py-6 bg-white border border-gray-50 shadow-sm rounded-lg">
      <img src={friend.picture} alt="" className="w-25 h-25 rounded-full" />
      <p className="text-2xl font-semibold">{friend.name}</p>
      <p className="text-gray-500">{friend.days_since_contact}d ago</p>
      <div className="flex gap-1">
        {friend.tags.map((tag, ind) => (
          <p key={ind} className="badge bg-[#CBFADB] rounded-full">
            {tag.toUpperCase()}
          </p>
        ))}
      </div>
      <div className="">
        <p
          className={`badge badge-primary ${friend.status === 'almost due' ? 'bg-[#EFAD44]' : friend.status === 'on-track' ? 'bg-[#244D3F]' : 'bg-[#EF4444]'} border-none rounded-full`}
        >
          {friend.status.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </p>
      </div>
    </Link>
  );
};

export default FriendsProfile;
