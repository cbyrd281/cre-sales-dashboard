import React from 'react';
import useDashboardStore from '../store/dashboardStore';

export default function CallMetrics() {
  const { callsToday, callsThisWeek, connectionRate, meetingsSet, conversionRate } = useDashboardStore();

  const dailyCalls = callsToday || 8;
  const weeklyConnections = Math.round(dailyCalls * 5 * connectionRate);
  const meetingsThisWeek = meetingsSet || 2;
  const conversionCount = Math.round(meetingsThisWeek * conversionRate);

  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-6 shadow-lg border border-blue-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Call Metrics</h3>
        <span className="text-3xl">📞</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Daily Calls */}
        <div className="bg-blue-950 rounded p-4 border border-blue-700">
          <p className="text-blue-300 text-sm mb-2">Today's Calls</p>
          <p className="text-4xl font-bold text-white">{dailyCalls}</p>
          <div className="mt-3 bg-blue-900 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-400 to-cyan-400 h-full"
              style={{ width: `${(dailyCalls / 20) * 100}%` }}
            />
          </div>
          <p className="text-blue-200 text-xs mt-2">Goal: 20 dials/day</p>
        </div>

        {/* Weekly Connections */}
        <div className="bg-blue-950 rounded p-4 border border-blue-700">
          <p className="text-blue-300 text-sm mb-2">Week Connections</p>
          <p className="text-4xl font-bold text-white">{weeklyConnections}</p>
          <div className="mt-3 bg-blue-900 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-400 to-teal-400 h-full"
              style={{ width: `${(weeklyConnections / 15) * 100}%` }}
            />
          </div>
          <p className="text-blue-200 text-xs mt-2">{(connectionRate * 100).toFixed(0)}% rate</p>
        </div>

        {/* Meetings Set */}
        <div className="bg-blue-950 rounded p-4 border border-blue-700">
          <p className="text-blue-300 text-sm mb-2">Meetings Set</p>
          <p className="text-4xl font-bold text-white">{meetingsThisWeek}</p>
          <div className="mt-3 bg-blue-900 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-400 to-green-400 h-full"
              style={{ width: `${(meetingsThisWeek / 5) * 100}%` }}
            />
          </div>
          <p className="text-blue-200 text-xs mt-2">Target: 5/week</p>
        </div>

        {/* Conversion Rate */}
        <div className="bg-blue-950 rounded p-4 border border-blue-700">
          <p className="text-blue-300 text-sm mb-2">Conversions</p>
          <p className="text-4xl font-bold text-white">{conversionCount}</p>
          <div className="mt-3 bg-blue-900 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-yellow-400 to-orange-400 h-full"
              style={{ width: `${(conversionRate * 100) / 2}%` }}
            />
          </div>
          <p className="text-blue-200 text-xs mt-2">{(conversionRate * 100).toFixed(0)}% conversion</p>
        </div>
      </div>
    </div>
  );
}
