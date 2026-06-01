import React, { useState } from 'react';
import useDashboardStore from '../store/dashboardStore';

export default function ScriptProgress() {
  const { scriptVersion, scriptVersions } = useDashboardStore();

  return (
    <div className="bg-gradient-to-br from-amber-900 to-orange-800 rounded-lg p-6 shadow-lg border border-amber-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Script Progress</h3>
        <span className="text-3xl">📝</span>
      </div>

      {/* Current Version Highlight */}
      <div className="mb-6 p-4 bg-gradient-to-r from-amber-800 to-orange-700 rounded-lg border-2 border-amber-500">
        <p className="text-amber-200 text-sm mb-1">Current Version</p>
        <p className="text-4xl font-bold text-white">v{scriptVersion}</p>
        <p className="text-amber-100 text-sm mt-2">Ready for live calls</p>
      </div>

      {/* Script Timeline */}
      <div className="space-y-3">
        {scriptVersions.map((script, i) => (
          <div key={i} className={`p-3 rounded-lg border ${
            script.status === 'current'
              ? 'bg-amber-800 border-amber-600'
              : 'bg-amber-950 border-amber-700'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-white">Version {script.version}</p>
              <span className={`text-xs px-2 py-1 rounded ${
                script.status === 'current'
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-700 text-slate-300'
              }`}>
                {script.status === 'current' ? 'Live' : 'Upcoming'}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <p className="text-amber-200 text-sm mb-1">Recordings: {script.recordings} / 5</p>
                <div className="bg-amber-950 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-amber-400 to-orange-400 h-full"
                    style={{ width: `${(script.recordings / 5) * 100}%` }}
                  />
                </div>
              </div>
              <span className="text-amber-300 text-sm">{(script.recordings / 5 * 100).toFixed(0)}%</span>
            </div>
            {script.feedback && (
              <p className="text-amber-100 text-xs mt-2 italic">💡 {script.feedback}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 p-3 bg-amber-950 rounded border border-amber-700">
        <p className="text-amber-300 text-sm font-medium">📊 Script Mastery</p>
        <p className="text-amber-200 text-xs mt-1">Record 5 versions to move to next level. Coach reviews weekly.</p>
      </div>
    </div>
  );
}
