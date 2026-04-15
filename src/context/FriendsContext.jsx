import React, { useState } from 'react';
import FriendDetailsContext from './DetailsContext';

const FriendsContext = ({ children }) => {
  const [timelineData, setTimelineData] = useState([]);

  const handleAction = (action, name) => {
    const date = new Date().toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    const obj = {
      action,
      name,
      date,
    };
    const newArr = [...timelineData, obj]
    setTimelineData(newArr);
  };

  const data = {
    timelineData,
    setTimelineData,
    handleAction
  }

  return (
    <FriendDetailsContext.Provider value={data}>{ children}</FriendDetailsContext.Provider>
  );
};

export default FriendsContext;