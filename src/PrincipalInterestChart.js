// import './styles.css';
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

export default function PrincipalInterestChart({ chartData }) {
  return (
    <AreaChart
      width={700}
      height={400}
      data={chartData.map(
        ({ principal: Principal, interest: Interest }, index) => ({
          Principal,
          Interest,
          index: index + 1,
        })
      )}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="index" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="Principal"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="Interest"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
  );
}
