import React from 'react';

const StatisticsCard = ({ title, value, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform duration-500 hover:scale-105">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default StatisticsCard;
