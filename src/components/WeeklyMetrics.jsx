import React from 'react';
import useDashboardStore from '../store/dashboardStore';

export default function WeeklyMetrics() {
  const { dailyMetrics } = useDashboardStore();

  const totals = dailyMetrics.reduce(
    (acc, day) => ({
      calls: acc.calls + day.calls,
      connections: acc.connections + day.connections,
      meetings: acc.meetings + day.meetings,
      conversions: acc.conversions + day.conversions,
    }),
    { calls: 0, connections: 0, meetings: 0, conversions: 0 }
  );

  const maxCalls = Math.max(...dailyMetrics.map(d => d.calls), 15);

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-6 shadow-lg border border-slate-600 col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Weekly Metrics</h3>
        <span className="text-3xl">📊</span>
      </div>

      {/* Daily Call Chart */}
      <div className="mb-6">
        <p className="text-slate-300 text-sm mb-3">Daily Call Volume</p>
        <div className="flex items-end gap-2 h-24 p-3 bg-slate-900 rounded-lg border border-slate-700">
          {dailyMetrics.map((day, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <div
                className="w-full bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t"
                style={{ height: `${(day.calls / maxCalls) * 100}%`, minHeight: '2px' }}
                title={`${day.day}: ${day.calls} calls`}
              />
              <p className="text-slate-400 text-xs mt-1">{day.day}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: 'Calls', value: totals.calls, color: 'from-blue-500 to-cyan-500' },
          { label: 'Connections', value: totals.connections, color: 'from-cyan-500 to-teal-500' },
          { label: 'Meetings', value: totals.meetings, color: 'from-teal-500 to-emerald-500' },
          { label: 'Conversions', value: totals.conversions, color: 'from-emerald-500 to-green-500' },
        ].map((stat, i) => (
          <div key={i} className="p-3 bg-slate-900 rounded border border-slate-700">
            <p className="text-slate-400 text-xs mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Week Summary */}
      <div className="mt-4 p-4 bg-slate-900 rounded border border-slate-700">
        <p className="text-slate-300 text-sm mb-2">Week Summary</p>
        <p className="text-white text-sm">
          <span className="font-bold text-cyan-400">{totals.calls} calls</span> with{' '}
          <span className="font-bold text-teal-400">{totals.connections} connections</span>. Set{' '}
          <span className="font-bold text-emerald-400">{totals.meetings} meetings</span>, closed{' '}
          <span className="font-bold text-green-400">{totals.conversions}</span>.
        </p>
      </div>
    </div>
  );
}
