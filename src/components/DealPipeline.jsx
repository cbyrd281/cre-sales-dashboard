import React from 'react';
import useDashboardStore from '../store/dashboardStore';

export default function DealPipeline() {
  const {
    prospectCount, qualifiedCount, presentingCount, negotiatingCount, closedCount,
    prospectValue, qualifiedValue, presentingValue, negotiatingValue, closedValue
  } = useDashboardStore();

  const stages = [
    { name: 'Prospects', count: prospectCount || 45, value: prospectValue, color: 'from-blue-500 to-cyan-500', icon: '🎯' },
    { name: 'Qualified', count: qualifiedCount || 18, value: qualifiedValue, color: 'from-cyan-500 to-teal-500', icon: '✅' },
    { name: 'Presenting', count: presentingCount || 8, value: presentingValue, color: 'from-teal-500 to-emerald-500', icon: '📊' },
    { name: 'Negotiating', count: negotiatingCount || 3, value: negotiatingValue, color: 'from-emerald-500 to-green-500', icon: '🤝' },
    { name: 'Closed', count: closedCount || 2, value: closedValue, color: 'from-green-500 to-lime-500', icon: '🏆' },
  ];

  const totalValue = prospectValue + qualifiedValue + presentingValue + negotiatingValue + closedValue;
  const maxCount = Math.max(...stages.map(s => s.count));

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-6 shadow-lg border border-slate-600 col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Deal Pipeline</h3>
        <span className="text-3xl">📈</span>
      </div>

      {/* Pipeline Visualization */}
      <div className="flex gap-3 mb-6 overflow-x-auto pb-4">
        {stages.map((stage, i) => (
          <div key={i} className="flex-shrink-0 flex flex-col items-center">
            <div className={`w-20 h-40 bg-gradient-to-b ${stage.color} rounded-lg shadow-lg flex flex-col items-center justify-between p-3 relative`}>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{stage.count}</p>
                <p className="text-xs text-white/80">{stage.name}</p>
              </div>
              <p className="text-xl">{stage.icon}</p>
            </div>
            <p className="text-xs text-slate-400 mt-2 text-center max-w-20">
              ${(stage.value / 1000).toFixed(0)}k
            </p>
            <div className="w-20 h-1 bg-slate-600 rounded-full mt-1" style={{ backgroundSize: `100% 100%` }} />
          </div>
        ))}
      </div>

      {/* Conversion Rates */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: 'Prospect→Qualified', rate: ((qualifiedCount / prospectCount) * 100).toFixed(0) },
          { label: 'Qualified→Presenting', rate: ((presentingCount / qualifiedCount) * 100).toFixed(0) },
          { label: 'Presenting→Negotiating', rate: ((negotiatingCount / presentingCount) * 100).toFixed(0) },
          { label: 'Negotiating→Closed', rate: closedCount > 0 ? 100 : 0 },
        ].map((item, i) => (
          <div key={i} className="bg-slate-900 rounded p-3 border border-slate-600">
            <p className="text-slate-300 text-xs mb-1">{item.label}</p>
            <p className="text-2xl font-bold text-emerald-400">{item.rate}%</p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 bg-slate-900 rounded border border-slate-600">
        <p className="text-slate-300 text-sm">Total Pipeline Value</p>
        <p className="text-3xl font-bold text-emerald-400">${(totalValue / 1000000).toFixed(1)}M</p>
      </div>
    </div>
  );
}
