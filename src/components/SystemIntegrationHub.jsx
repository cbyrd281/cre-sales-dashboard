import React from 'react';
import { BookOpen, CheckSquare, Zap, Calendar, Users, Linkedin, ExternalLink } from 'lucide-react';

export default function SystemIntegrationHub() {
  const systems = [
    {
      name: 'Logseq',
      description: 'Daily CRE journal',
      icon: BookOpen,
      url: 'https://logseq.com/',
      color: 'from-purple-600 to-purple-700',
      emoji: '📓'
    },
    {
      name: 'Vikunja',
      description: 'Task management',
      icon: CheckSquare,
      url: 'http://localhost:3456',
      color: 'from-blue-600 to-blue-700',
      emoji: '✓'
    },
    {
      name: 'Habitica',
      description: 'Daily habits',
      icon: Zap,
      url: 'https://habitica.com',
      color: 'from-yellow-600 to-yellow-700',
      emoji: '🎮'
    },
    {
      name: 'Calendar',
      description: 'Schedule',
      icon: Calendar,
      url: 'https://calendar.google.com',
      color: 'from-red-600 to-red-700',
      emoji: '📅'
    },
    {
      name: 'Prospect List',
      description: 'Houston contacts',
      icon: Users,
      url: 'https://docs.google.com/spreadsheets/d/1_YOUR_SHEET_ID',
      color: 'from-green-600 to-green-700',
      emoji: '👥'
    },
    {
      name: 'LinkedIn',
      description: 'Outreach',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'from-cyan-600 to-cyan-700',
      emoji: '🔗'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700 p-6 shadow-2xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">System Integration Hub</h2>
        <p className="text-slate-400 text-sm">Direct access to all tools • Real-time sync</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {systems.map((system, idx) => {
          const Icon = system.icon;
          return (
            <a
              key={idx}
              href={system.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-4 border border-slate-600 hover:border-slate-500 transition hover:shadow-lg hover:scale-105 transform duration-200"
            >
              <div className="text-3xl mb-2">{system.emoji}</div>
              <h3 className="font-bold text-white text-sm mb-1 group-hover:text-cyan-400 transition">
                {system.name}
              </h3>
              <p className="text-slate-400 text-xs mb-3">{system.description}</p>
              <div className="flex items-center justify-between">
                <Icon className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition" />
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-cyan-400 transition opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1" />
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-slate-700 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/50 rounded-lg p-3 text-center">
          <p className="text-slate-400 text-xs mb-1">Prospects</p>
          <p className="text-xl font-bold text-cyan-400">50</p>
          <p className="text-xs text-slate-500 mt-1">Houston area</p>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3 text-center">
          <p className="text-slate-400 text-xs mb-1">Daily Habits</p>
          <p className="text-xl font-bold text-emerald-400">4</p>
          <p className="text-xs text-slate-500 mt-1">Active tracking</p>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3 text-center">
          <p className="text-slate-400 text-xs mb-1">Call Target</p>
          <p className="text-xl font-bold text-orange-400">55</p>
          <p className="text-xs text-slate-500 mt-1">Week 1 goal</p>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-3 text-center">
          <p className="text-slate-400 text-xs mb-1">Timeline</p>
          <p className="text-xl font-bold text-blue-400">6 Weeks</p>
          <p className="text-xs text-slate-500 mt-1">Mastery protocol</p>
        </div>
      </div>
    </div>
  );
}
