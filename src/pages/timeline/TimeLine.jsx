import React, { useContext, useState } from 'react';
import Video from '../../assets/video.png'
import Text from '../../assets/comments.png'
import Phone from '../../assets/phone-call.png'
import FriendDetailsContext from '../../context/DetailsContext';
import Filter from '../../components/uiShear/Filter';
import NoDocument from '../../components/uiShear/NoDocument';


const TimeLine = () => {

  const { timelineData } = useContext(FriendDetailsContext);

  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filters = filter === 'all' ? timelineData : filter === 'call' ? timelineData.filter(item => item.action === 'call') : filter === 'text' ? timelineData.filter(item => item.action === 'text') : filter === 'video' ? timelineData.filter(item => item.action === 'video') : '';

  const filtersData = filters.filter(
    item =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.action.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-gray-50 container mx-auto p-8 min-h-[50vh] pt-25">
      <div className="max-w-3xl mx-auto">
        <p className="text-3xl text-gray-800 font-bold mb-5">Timeline</p>

        <div className="space-y-3 min-h-[60vh]">
          <div className="flex justify-between items-center">
            <Filter filter={filter} setFilter={setFilter} />
            <div className="flex">
              <input
                type="text"
                placeholder="Search by name..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full max-w-md px-4 py-2 border rounded-full outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          {timelineData.length === 0 ? (
            <NoDocument/>
          ) : (
            filtersData.map((data, index) => (
              <div key={index} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="w-9 h-9">
                  <img
                    src={
                      data.action == 'call'
                        ? Phone
                        : data.action == 'text'
                          ? Text
                          : Video
                    }
                    alt="Video"
                    className="w-full h-full"
                  />
                </div>
                <div className="">
                  <p className="text-base text-[#244D3F] font-semibold">
                    {data.action.charAt(0).toUpperCase() + data.action.slice(1)}{' '}
                    <span className="text-sm text-gray-500">
                      with {data.name}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">{data.date}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;