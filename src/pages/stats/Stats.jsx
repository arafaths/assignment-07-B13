import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import FriendDetailsContext from '../../context/DetailsContext';
import NoDocument from '../../components/uiShear/NoDocument';

const Stats = () => {
  const { timelineData } = useContext(FriendDetailsContext);

  const call = timelineData.filter(item => item.action == 'call').length;
  const text = timelineData.filter(item => item.action == 'text').length;
  const video = timelineData.filter(item => item.action == 'video').length;

  const data = [
    { name: 'Call', value: call, fill: '#22c55e' },
    { name: 'Text', value: text, fill: '#3b82f6' },
    { name: 'Video', value: video, fill: '#ef4444' },
  ];

  return (
    <div className="bg-gray-50 container mx-auto pt-20 sm:pt-25">
      <div className="px-4 sm:px-8 pb-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-4xl text-gray-800 font-bold mb-5">
            Friendship Analytics
          </p>
          {timelineData.length === 0 ? (
            <NoDocument />
          ) : (
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mt-8">
              <p className="text-lg sm:text-xl text-[#244D3F] font-semibold mb-4">
                By Interaction Type
              </p>
              <PieChart
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  maxHeight: '50vh',
                  aspectRatio: 1,
                  margin: 'auto',
                }}
                responsive
              >
                <Pie
                  data={data}
                  innerRadius="80%"
                  outerRadius="100%"
                  // Corner radius is the rounded edge of each pie slice
                  cornerRadius="50%"
                  fill="#8884d8"
                  // padding angle is the gap between each pie slice
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={true}
                />
                <Legend />
                <Tooltip />
              </PieChart>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
