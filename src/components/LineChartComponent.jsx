import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const LineChartComponent = ({ data, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform duration-500 hover:scale-105">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-400">{description}</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
