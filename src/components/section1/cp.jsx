import React, { useState, useEffect } from 'react';
import { Clock, ShieldCheck, AlertCircle } from 'lucide-react';

const CoolingProgressBar = ({ startTime, durationHours = 24 }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const durationMs = durationHours * 60 * 60 * 1000;
  const endTime = startTime + durationMs;

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);
      const elapsed = durationMs - remaining;
      
      setTimeLeft(remaining);
      setPercentage((elapsed / durationMs) * 100);
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime, durationMs]);

  // Formatting MS to HH:MM:SS
  const formatTime = (ms) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const mins = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((ms % (1000 * 60)) / 1000);
    return `${hours}h ${mins}m ${secs}s`;
  };

  return (
    <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-amber-600">
          <Clock className="w-5 h-5 animate-pulse" />
          <span className="font-bold text-sm uppercase tracking-wider">Cooling Period Active</span>
        </div>
        <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
          {formatTime(timeLeft)} remaining
        </span>
      </div>

      {/* Progress Bar Container */}
      <div className="relative h-3 w-full bg-slate-100 rounded-full overflow-hidden mb-4">
        <div 
          className="absolute top-0 left-0 h-full bg-linear-to-r from-amber-400 to-amber-600 transition-all duration-1000 ease-linear"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
        <div className="flex gap-3">
          <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
          <p className="text-xs text-blue-800 leading-relaxed">
            Standard 24-hour verification window is in effect following your 
            <strong> Password Update</strong>. Transfers will resume automatically at 
            <span className="block font-bold mt-1">
              {new Date(endTime).toLocaleString()}
            </span>
          </p>
        </div>
      </div>

      <button className="w-full py-2 text-sm font-semibold text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
        <AlertCircle className="w-4 h-4" /> I did not make this change
      </button>
    </div>
  );
};

export default CoolingProgressBar;