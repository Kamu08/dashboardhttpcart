import React from 'react';

const TopIPsTable = ({ data, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-400 text-center">{description}</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">IP Address</th>
              <th className="py-2 px-4 border-b">Alert Count</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ipData, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{ipData.ip}</td>
                <td className="py-2 px-4 border-b">{ipData.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopIPsTable;
