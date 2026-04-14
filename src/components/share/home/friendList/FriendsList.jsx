import React, { use } from 'react';
import FriendsProfile from './FriendsProfile';

  const friendsPromise = fetch('/friends.json').then(res => res.json());

const FriendsList = () => {

  const friends = use(friendsPromise);

  return (
    <div className='mb-10'>
      <p className="text-3xl font-semibold">Your Friends</p>
      <div className="grid grid-cols-4 gap-5 mt-5">
        {
          friends.map(friend => <FriendsProfile key={friend.id} friend={ friend} />)
        }
      </div>
    </div>
  );
};

export default FriendsList;