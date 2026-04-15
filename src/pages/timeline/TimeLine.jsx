import React, { useContext } from 'react';
import Video from '../../assets/video.png'
import Text from '../../assets/comments.png'
import Phone from '../../assets/phone-call.png'
import FriendDetailsContext from '../../context/DetailsContext';

const TimeLine = () => {

  const { timelineData } = useContext(FriendDetailsContext);

  return (
    <div className="bg-gray-50 container mx-auto p-8 min-h-[50vh]">
      <div className="max-w-3xl mx-auto">
        <p className="text-3xl text-gray-800 font-bold mb-5">Timeline</p>

        <div className="space-y-3">
          {timelineData.length === 0 ? (
            <div className="min-h-[50vh] bg-white rounded-xl shadow-sm border border-gray-100 text-center flex flex-col justify-center items-center">
              <p className="text-4xl text-gray-600 font-bold">
                No timeline history
              </p>
            </div>
          ) : (
            timelineData.map(data => (
              <div className="flex gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
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
                    Video{' '}
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