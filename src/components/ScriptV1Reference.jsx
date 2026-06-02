import React, { useState } from 'react';
import { Copy, Play, Volume2 } from 'lucide-react';

export default function ScriptV1Reference() {
  const [copied, setCopied] = useState(false);

  const scriptText = `Hi [First Name], it's [Your Name]. I talk to warehouse operators in Houston pretty regularly, and most of them are dealing with facility costs eating into margin—whether that's space constraints or overpaying on their current lease. Is that something you're wrestling with right now?`;

  const followUpQualified = `Got it. So what we typically do is either find better space that actually saves you money month-to-month, or if you're locked in, we renegotiate and get you better terms. Where are you at with it right now?`;

  const followUpNotInterested = `No worries. But if that ever becomes a priority for you or someone on your team—whether it's finding cheaper space or renegotiating your lease—just think of me. That's literally what we do.`;

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
          ~15 sec
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
          <li>✓ Lead with the problem they're facing, not your service</li>
          <li>✓ Ask about their specific situation, not their time</li>
          <li>✓ Sound like you're solving an issue, not making a pitch</li>
          <li>✓ Listen more than you talk</li>
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
          <p className="text-blue-300 font-bold text-2xl">~15s</p>
          <p className="text-slate-400 text-xs">Duration</p>
        </div>
        <div>
          <p className="text-blue-300 font-bold text-2xl">Problem</p>
          <p className="text-slate-400 text-xs">Focused</p>
        </div>
        <div>
          <p className="text-blue-300 font-bold text-2xl">2 Ask</p>
          <p className="text-slate-400 text-xs">Paths</p>
        </div>
      </div>
    </div>
  );
}
