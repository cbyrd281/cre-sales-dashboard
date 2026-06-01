import React, { useState } from 'react';
import useDashboardStore from '../store/dashboardStore';

export default function ConfidenceTracker() {
  const { confidenceRating, updateConfidence, weeklyTrend } = useDashboardStore();
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState(confidenceRating);

  const handleUpdate = () => {
    updateConfidence(parseInt(inputValue));
    setShowInput(false);
  };

  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (confidenceRating / 10) * circumference;

  return (
    <div className="bg-gradient-to-br from-purple-900 to-indigo-800 rounded-lg p-6 shadow-lg border border-purple-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Confidence Tracker</h3>
        <span className="text-3xl">💪</span>
      </div>

      <div className="flex flex-col items-center">
        {/* Circular Gauge */}
        <svg width="140" height="140" viewBox="0 0 140 140" className="transform -rotate-90">
          <circle
            cx="70"
            cy="70"
            r="45"
            fill="none"
            stroke="#312e81"
            strokeWidth="8"
          />
          <circle
            cx="70"
            cy="70"
            r="45"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          />
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
          </defs>
        </svg>

        <div className="mt-4 text-center">
          <p className="text-5xl font-bold text-white">{confidenceRating}</p>
          <p className="text-purple-300 text-sm mt-1">/10</p>
        </div>

        {showInput ? (
          <div className="mt-4 flex gap-2">
            <input
              type="number"
              min="1"
              max="10"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-16 px-2 py-1 bg-purple-950 border border-purple-600 rounded text-white text-center"
              autoFocus
            />
            <button
              onClick={handleUpdate}
              className="px-3 py-1 bg-purple-600 hover:bg-purple-500 rounded text-white text-sm font-medium"
            >
              Update
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowInput(true)}
            className="mt-4 px-4 py-2 bg-purple-700 hover:bg-purple-600 rounded-lg text-white text-sm font-medium transition"
          >
            Log Today
          </button>
        )}
      </div>

      {/* Weekly Trend */}
      <div className="mt-6 pt-6 border-t border-purple-700">
        <p className="text-purple-300 text-sm mb-3">7-Day Trend</p>
        <div className="flex items-end gap-2 h-16">
          {weeklyTrend.map((value, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-purple-500 to-pink-400 rounded-t"
              style={{ height: `${(value / 10) * 100}%`, minHeight: '4px' }}
              title={`${value}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
