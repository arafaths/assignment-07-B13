import React, { useEffect, useState } from 'react';

const useFriends = () => {

  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promise = async () => {
      const res = await fetch('/friends.json');
      const data = await res.json();
      setFriends(data);
      setLoading(false)
    }
    promise();
  }, [])

  return (
    {friends, loading}
  );
};

export default useFriends;