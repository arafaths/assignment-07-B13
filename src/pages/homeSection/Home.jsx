import React from 'react';
import Banner from '../../components/share/home/Banner';
import FriendsList from '../../components/share/home/friendList/FriendsList';

const Home = () => {
  return (
    <div className='container mx-auto px-5'>
      <Banner />
      <FriendsList/>
    </div>
  );
};

export default Home;