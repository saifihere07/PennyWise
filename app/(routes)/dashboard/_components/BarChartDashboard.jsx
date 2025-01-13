"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function LineChartDashboard({ budgetList }) {
  return (
    <div>
      {budgetList.length > 0 ? (
        <ResponsiveContainer width="80%" height={400}>
          <LineChart
            data={budgetList}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            {/* Line for Total Spend */}
            <Line
              type="monotone"
              dataKey="totalSpend"
              stroke="#5B25B4"
              activeDot={{ r: 8 }}
            />

            {/* Line for Amount */}
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#C3C2FF"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex justify-center items-center h-[400px] bg-gray-100 italic text-[#32383F] rounded-md">
          <p>No data available</p>
        </div>
      )}
    </div>
  );
}

export default LineChartDashboard;
