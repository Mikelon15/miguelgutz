import React from 'react';
import './index.css'; // Ensure this imports the Tailwind CSS file

const Timeline = () => {
  const events = [
    { year: '2021-2024', description: 'State Farm', side: 'left', color: 'bg-blue-500' },
    { year: '2024', description: 'alltrak.one', side: 'right', color: 'bg-red-500' },
    { year: '2023', description: 'High Ground Leadership Group', side: 'right', color: 'bg-red-500' },
    { year: '2018-2021', description: 'American Airlines', side: 'left', color: 'bg-blue-500' },
    { year: '2020', description: 'Grace Clean', side: 'right', color: 'bg-red-500' },
    { year: '2017', description: 'Concord Consortium', side: 'left', color: 'bg-blue-500' }
  ];

  return (
    <div className="relative p-4 flex justify-center w-full">
      <div className="absolute top-0 bottom-0 w-1 bg-gray-300 left-1/2 transform -translate-x-1/2"></div>
      <div className="w-full flex flex-col space-y-8">
        {events.map((event, index) => (
          <div key={index} className={`flex ${event.side === 'left' ? 'flex-row-reverse' : ''} items-center`}>
            <div className={`w-1/2 p-1`}>
              <div className={`p-1 mx-2 rounded-lg shadow-md ${event.color}`}>
                <h3 className="text-sm text-white">{event.year}</h3>
                <p className="text-sm text-white">{event.description}</p>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <div className={`w-4 h-4 rounded-full ${event.color}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
