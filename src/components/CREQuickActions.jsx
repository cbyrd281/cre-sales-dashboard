import React, { useState } from 'react';

export default function CREQuickActions() {
  const [expandedModal, setExpandedModal] = useState(null);

  const quickActions = [
    { name: 'Logseq', icon: '📓', color: 'from-purple-600 to-purple-500', description: 'Daily CRE journal' },
    { name: 'Vikunja', icon: '✓', color: 'from-blue-600 to-blue-500', description: 'Task management' },
    { name: 'Habitica', icon: '🎮', color: 'from-rose-600 to-rose-500', description: 'Daily habits' },
    { name: 'Calendar', icon: '📅', color: 'from-orange-600 to-orange-500', description: 'Schedule' },
    { name: 'Prospect List', icon: '👥', color: 'from-cyan-600 to-cyan-500', description: 'Houston contacts' },
    { name: 'LinkedIn', icon: '🔗', color: 'from-blue-700 to-blue-600', description: 'Outreach' },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-6 shadow-lg border border-slate-600 col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Quick Actions</h3>
        <span className="text-3xl">⚡</span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {quickActions.map((action, i) => (
          <button
            key={i}
            onClick={() => setExpandedModal(action.name)}
            className={`p-4 rounded-lg bg-gradient-to-br ${action.color} shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-center border border-opacity-50 border-white`}
          >
            <p className="text-3xl mb-2">{action.icon}</p>
            <p className="text-white font-semibold text-sm">{action.name}</p>
            <p className="text-white/70 text-xs mt-1">{action.description}</p>
          </button>
        ))}
      </div>

      {/* System Integration Info */}
      <div className="mt-6 p-4 bg-slate-900 rounded border border-slate-700">
        <p className="text-slate-300 text-sm font-medium mb-2">🔄 System Integration</p>
        <p className="text-slate-400 text-xs">
          All systems synced daily. Logseq updates are backfilled to this dashboard. Vikunja tasks auto-sync. Habitica streaks tracked.
        </p>
      </div>

      {/* Modal - Just informational for now */}
      {expandedModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-800 rounded-lg p-6 max-w-md w-full mx-4 border border-slate-600 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-white">{expandedModal}</h4>
              <button
                onClick={() => setExpandedModal(null)}
                className="text-slate-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            <p className="text-slate-300 mb-4">
              {expandedModal === 'Logseq' && 'Open your Logseq daily entry for CRE Sales journal.'}
              {expandedModal === 'Vikunja' && 'Manage your task board and recurring tasks.'}
              {expandedModal === 'Habitica' && 'Track your daily habits and earning streaks.'}
              {expandedModal === 'Calendar' && 'View your scheduled calls and meetings.'}
              {expandedModal === 'Prospect List' && 'Access your Houston prospect database.'}
              {expandedModal === 'LinkedIn' && 'Launch LinkedIn for outreach and networking.'}
            </p>
            <button
              onClick={() => setExpandedModal(null)}
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
