import React from 'react';
import FriendsProfile from './FriendsProfile';
import useFriends from '../../../../hooks/useFriends';
import { HashLoader } from 'react-spinners';

const FriendsList = () => {
  const { friends, loading } = useFriends();

  return (
    <div className="mb-10">
      <p className="text-3xl font-semibold">Your Friends</p>
      {loading ? (
        <HashLoader className='mx-auto mt-10' />
      ) : (
        <div className="grid grid-cols-4 gap-5 mt-5">
          {friends.map(friend => (
            <FriendsProfile key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsList;
