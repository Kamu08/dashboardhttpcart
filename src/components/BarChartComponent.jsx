import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BarChartComponent = ({ data, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform duration-500 hover:scale-105 col-span-1 md:col-span-2 lg:col-span-3">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-400">{description}</p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="port" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
