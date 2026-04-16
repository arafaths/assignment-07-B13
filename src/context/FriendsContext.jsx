import React, { useState } from 'react';
import FriendDetailsContext from './DetailsContext';
import { toast } from 'react-toastify';

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
    
    if (action === 'call') {
      toast.success(`call with ${name}`, {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }

    if (action === 'text') {
      toast.success(`text with ${name}`, {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }

    if (action === 'video') {
      toast.success(`video with ${name}`, {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
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