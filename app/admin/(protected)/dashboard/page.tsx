
import React from "react";

const stats = [
  { label: "Total Users", value: 1200 },
  { label: "Farmers", value: 800 },
  { label: "Investors", value: 300 },
  { label: "Farms", value: 150 },
];

const Page = () => {
  return (
    <div className="w-full min-h-[50vh] p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center"
          >
            <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-gray-600 text-lg font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
      {/* Chart placeholder */}
      <div className="bg-white rounded-lg shadow p-6 mt-4">
        <h2 className="text-lg font-semibold mb-4">User Growth (Mock Chart)</h2>
        <div className="w-full h-64 flex items-center justify-center text-gray-400">
          {/* Replace with a real chart library like recharts or chart.js */}
          <svg width="100%" height="100%" viewBox="0 0 400 200">
            <polyline
              fill="none"
              stroke="#6366f1"
              strokeWidth="4"
              points="0,180 50,120 100,140 150,80 200,100 250,60 300,90 350,40 400,60"
            />
            <text x="200" y="190" textAnchor="middle" fill="#a3a3a3" fontSize="14">User Growth Over Time</text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Page;