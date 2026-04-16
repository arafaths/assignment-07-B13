import React from 'react';
import Banner from '../../components/share/home/Banner';
import FriendsList from '../../components/share/friendList/FriendsList';

const Home = () => {
  return (
    <div className="container mx-auto px-5 bg-gray-50 pt-25">
      <Banner />
      <FriendsList />
    </div>
  );
};

export default Home;