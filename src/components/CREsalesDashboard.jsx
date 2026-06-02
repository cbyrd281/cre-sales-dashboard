import React, { useState, useEffect } from 'react';
import CallMetrics from './CallMetrics';
import ConfidenceTracker from './ConfidenceTracker';
import DealPipeline from './DealPipeline';
import ScriptProgress from './ScriptProgress';
import WeeklyMetrics from './WeeklyMetrics';
import ScriptV1Reference from './ScriptV1Reference';
import ScriptV2Receptionist from './ScriptV2Receptionist';
import SystemIntegrationHub from './SystemIntegrationHub';

export default function CREsalesDashboard() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const dateStr = currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                CRE Sales Mastery
              </h1>
              <p className="text-slate-400 text-sm mt-1">Commercial Real Estate Excellence</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">{dayOfWeek}</p>
              <p className="text-slate-400">{dateStr}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* System Integration Hub - Central Command */}
        <div className="mb-8">
          <SystemIntegrationHub />
        </div>

        {/* Scripts - Cold Call Templates */}
        <div className="space-y-6 mb-8">
          <ScriptV1Reference />
          <ScriptV2Receptionist />
        </div>

        {/* Top Section: Call Metrics and Confidence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2">
            <CallMetrics />
          </div>
          <div>
            <ConfidenceTracker />
          </div>
        </div>

        {/* Middle Section: Pipeline and Script */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <DealPipeline />
          <div className="md:col-span-1">
            <ScriptProgress />
          </div>
        </div>

        {/* Bottom Section: Weekly Metrics */}
        <WeeklyMetrics />

        {/* Footer Stats */}
        <footer className="mt-12 pt-8 border-t border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <p className="text-slate-400 text-sm">Goal</p>
              <p className="text-2xl font-bold text-blue-400 mt-1">Week 1 Focus</p>
              <p className="text-slate-500 text-xs mt-2">Master cold calling fundamentals</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <p className="text-slate-400 text-sm">Timeline</p>
              <p className="text-2xl font-bold text-cyan-400 mt-1">6 Weeks</p>
              <p className="text-slate-500 text-xs mt-2">Transformation protocol</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <p className="text-slate-400 text-sm">Coach</p>
              <p className="text-2xl font-bold text-emerald-400 mt-1">Agent</p>
              <p className="text-slate-500 text-xs mt-2">Real estate expert AI</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <p className="text-slate-400 text-sm">Region</p>
              <p className="text-2xl font-bold text-orange-400 mt-1">Houston</p>
              <p className="text-slate-500 text-xs mt-2">Industrial warehouses</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              🚀 Live Dashboard • 50 Prospects Loaded • 4 Habits Tracking • 6-Week Mastery Protocol
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
