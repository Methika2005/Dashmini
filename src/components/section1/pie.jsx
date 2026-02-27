import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const FRAUD_DATA = [
  { name: 'Account Takeover', value: 45, color: '#EF4444' }, // Red-500
  { name: 'Money mule ring detection', value: 25, color: '#F97316' }, // Orange-500
  { name: 'Card/transaction fraud', value: 20, color: '#EAB308' }, // Yellow-500
  { name: 'ID/KYC fraud', value: 10, color: '#3B82F6' }, // Blue-500
];

const FraudDistributionChart = () => {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-2xl max-w-md">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white">Fraud Risk Distribution</h3>
        <p className="text-slate-400 text-sm">Real-time threat vector analysis</p>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={FRAUD_DATA}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {FRAUD_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
              itemStyle={{ color: '#fff' }}
            />
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
          <p className="text-slate-400 text-xs uppercase tracking-wider">High Risk Alert</p>
          <p className="text-red-500 text-lg font-mono font-bold">Critical</p>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
          <p className="text-slate-400 text-xs uppercase tracking-wider">Avg. Latency</p>
          <p className="text-emerald-400 text-lg font-mono font-bold">142ms</p>
        </div>
      </div>
    </div>
  );
};

export default FraudDistributionChart;