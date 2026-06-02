import React, { useState } from 'react';
import { Copy, Play, Volume2 } from 'lucide-react';

export default function ScriptV1Reference() {
  const [copied, setCopied] = useState(false);

  const scriptText = `Hi [First Name], this is [Your Name]. I work with warehouse operators and logistics companies in the Houston area who are looking to optimize their supply chain and real estate costs. I've been helping companies like [Similar Company] reduce their operational costs by identifying better warehouse locations and negotiating space more effectively. I know you're busy—do you have 30 seconds? I have an idea that might be relevant.`;

  const followUpQualified = `Great! I work with warehouse operators looking to relocate or optimize their current space. Do you have facility needs we should talk about?`;

  const followUpNotInterested = `No problem. Do you know any warehouse operators or logistics companies in Houston looking for better space? I'd love a quick intro.`;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-xl border border-blue-800 p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-blue-300 flex items-center gap-2">
          <Volume2 className="w-6 h-6" />
          Script v1: Cold Call Opening
        </h2>
        <span className="text-xs bg-blue-900 text-blue-200 px-3 py-1 rounded-full font-semibold">
          15-20 sec
        </span>
      </div>

      {/* Main Script */}
      <div className="bg-slate-950 rounded-lg p-5 mb-6 border border-slate-700 relative">
        <p className="text-white leading-relaxed text-lg font-medium">
          {scriptText}
        </p>
        <button
          onClick={() => handleCopy(scriptText)}
          className="absolute top-3 right-3 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition flex items-center gap-2 text-sm"
        >
          <Copy className="w-4 h-4" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Delivery Tips */}
      <div className="bg-slate-800 rounded-lg p-4 mb-6 border-l-4 border-emerald-500">
        <h3 className="font-bold text-emerald-300 mb-3 flex items-center gap-2">
          <Play className="w-4 h-4" /> Delivery Tips
        </h3>
        <ul className="space-y-2 text-sm text-slate-300">
          <li>✓ Speak at conversational pace (not rushed)</li>
          <li>✓ Pause after CTA — wait for response</li>
          <li>✓ Confident, helpful tone (not salesy)</li>
          <li>✓ Total time: 15–20 seconds</li>
        </ul>
      </div>

      {/* Follow-ups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* If Interested */}
        <div className="bg-slate-800 rounded-lg p-4 border border-emerald-600">
          <h4 className="text-emerald-400 font-bold mb-3">If Interested</h4>
          <p className="text-slate-300 text-sm mb-3">{followUpQualified}</p>
          <button
            onClick={() => handleCopy(followUpQualified)}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-3 rounded text-sm transition flex items-center justify-center gap-2"
          >
            <Copy className="w-4 h-4" />
            Copy
          </button>
        </div>

        {/* If Not Interested */}
        <div className="bg-slate-800 rounded-lg p-4 border border-amber-600">
          <h4 className="text-amber-400 font-bold mb-3">If Not Interested</h4>
          <p className="text-slate-300 text-sm mb-3">{followUpNotInterested}</p>
          <button
            onClick={() => handleCopy(followUpNotInterested)}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-3 rounded text-sm transition flex items-center justify-center gap-2"
          >
            <Copy className="w-4 h-4" />
            Copy
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-6 pt-6 border-t border-slate-700 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-blue-300 font-bold text-2xl">15-20</p>
          <p className="text-slate-400 text-xs">Seconds</p>
        </div>
        <div>
          <p className="text-blue-300 font-bold text-2xl">v1</p>
          <p className="text-slate-400 text-xs">Version</p>
        </div>
        <div>
          <p className="text-blue-300 font-bold text-2xl">+4</p>
          <p className="text-slate-400 text-xs">Follow-ups</p>
        </div>
      </div>
    </div>
  );
}
