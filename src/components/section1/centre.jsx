import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Clock, FileText, Search } from 'lucide-react';

const KYCExceptionDashboard = () => {
  const [exceptions, setExceptions] = useState([
    { id: 1, entity: "Money Laundering", type: "AML Red Flag", risk: "High", status: "New", assigned: "Sarah J.", daysOpen: 1 },
    { id: 2, entity: "Credit Card Fraud Detection ", type: "Expired ID", risk: "Medium", status: "Pending User", assigned: "Auto-System", daysOpen: 3 },
    { id: 3, entity: "KYC Manipulation Detection", type: "UBO Discrepancy", risk: "High", status: "In Review", assigned: "David K.", daysOpen: 5 },
    { id:4, entity:"SaaS Supply Chain Attack", type:"", risk:"High",status:"pending",assigned:"Officer",daysOpen:"5d"}
  ]);

  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans">
      {/* Header - High Level Exception Stats */}
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Compliance Command Center</h1>
          <p className="text-slate-500 text-sm">3 urgent exceptions require manual intervention.</p>
        </div>
        <div className="flex gap-4">
          <StatCard label="Critical" count="12" color="text-red-600" />
          <StatCard label="Pending" count="45" color="text-amber-600" />
          <StatCard label="Resolved (24h)" count="128" color="text-emerald-600" />
        </div>
      </header>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex gap-4 items-center border border-slate-200">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 text-slate-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search Entity, UBO, or Case ID..." 
            className="pl-10 w-full p-2 border rounded-lg bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <select className="p-2 bg-slate-50 border rounded-lg text-sm text-slate-600">
          <option>Filter by Risk: All</option>
          <option>High Risk</option>
        </select>
      </div>

      {/* Exception Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr className="text-xs uppercase text-slate-500 font-semibold">
              <th className="px-6 py-4">Entity / Client</th>
              <th className="px-6 py-4">Exception Type</th>
              <th className="px-6 py-4">Risk Level</th>
              <th className="px-6 py-4">Days Open</th>
              <th className="px-6 py-4">Assigned To</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {exceptions.map((exc) => (
              <tr key={exc.id} className="hover:bg-blue-50/30 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900">{exc.entity}</td>
                <td className="px-6 py-4">
                  <span className="flex items-center gap-2 text-sm text-slate-600">
                    <AlertTriangle className={`w-4 h-4 ${exc.risk === 'High' ? 'text-red-500' : 'text-amber-500'}`} />
                    {exc.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    exc.risk === 'High' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {exc.risk}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500 italic">{exc.daysOpen}d</td>
                <td className="px-6 py-4 text-sm text-slate-600">{exc.assigned}</td>
                <td className="px-6 py-4">
                  <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all">
                    Resolve Case
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const StatCard = ({ label, count, color }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 min-w-[120px]">
    <p className="text-xs text-slate-500 font-bold uppercase">{label}</p>
    <p className={`text-2xl font-black ${color}`}>{count}</p>
  </div>
);

export default KYCExceptionDashboard;