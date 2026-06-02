import React, { useState } from 'react';
import { Copy, Shield, Volume2 } from 'lucide-react';

export default function ScriptV2Receptionist() {
  const [copied, setCopied] = useState(false);

  const scriptText = `Hi, this is [Your Name] with [Company]. I'm not trying to sell anything—I just need about 90 seconds with [Decision Maker's Name] or whoever handles facility strategy for your company. It's regarding space optimization. Is [Name] available, or who would be the right person?`;

  const ifBlockedOnFirst = `I understand they're busy. This is time-sensitive—it's about reducing facility costs, and I need to speak directly with them. Can I get their direct line or email? Or when's the best time to reach them?`;

  const ifAskedWhoReferredYou = `I don't have a referral—I work with warehouse operators in the Houston area on facility strategy. Your operation caught my attention as someone who should be aware of this. Who handles that for you?`;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-amber-950 to-slate-900 rounded-xl border border-amber-800 p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-amber-300 flex items-center gap-2">
          <Shield className="w-6 h-6" />
          Script v2: Getting Past Receptionists
        </h2>
        <span className="text-xs bg-amber-900 text-amber-200 px-3 py-1 rounded-full font-semibold">
          ~20 sec
        </span>
      </div>

      {/* Main Script */}
      <div className="bg-slate-950 rounded-lg p-5 mb-6 border border-slate-700 relative">
        <p className="text-white leading-relaxed text-lg font-medium">
          {scriptText}
        </p>
        <button
          onClick={() => handleCopy(scriptText)}
          className="absolute top-3 right-3 bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-lg transition flex items-center gap-2 text-sm"
        >
          <Copy className="w-4 h-4" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Key Principles */}
      <div className="bg-slate-800 rounded-lg p-4 mb-6 border-l-4 border-amber-500">
        <h3 className="font-bold text-amber-300 mb-3 flex items-center gap-2">
          <Shield className="w-4 h-4" /> The Bypass Framework
        </h3>
        <ul className="space-y-2 text-sm text-slate-300">
          <li>✓ Be direct about NOT selling (builds credibility)</li>
          <li>✓ Mention a specific function, not a name first</li>
          <li>✓ Give a specific reason (facility costs, space optimization)</li>
          <li>✓ Ask for direct line/email, not "is he available"</li>
          <li>✓ Assume they exist and they care (not asking permission)</li>
        </ul>
      </div>

      {/* If-Then Scenarios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* If Blocked */}
        <div className="bg-slate-800 rounded-lg p-4 border border-orange-600">
          <h4 className="text-orange-400 font-bold mb-3">If Blocked ("He's in a meeting")</h4>
          <p className="text-slate-300 text-sm mb-3">{ifBlockedOnFirst}</p>
          <button
            onClick={() => handleCopy(ifBlockedOnFirst)}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-3 rounded text-sm transition flex items-center justify-center gap-2"
          >
            <Copy className="w-4 h-4" />
            Copy
          </button>
        </div>

        {/* If Asked "Who Referred You?" */}
        <div className="bg-slate-800 rounded-lg p-4 border border-blue-600">
          <h4 className="text-blue-400 font-bold mb-3">If Asked "Who Referred You?"</h4>
          <p className="text-slate-300 text-sm mb-3">{ifAskedWhoReferredYou}</p>
          <button
            onClick={() => handleCopy(ifAskedWhoReferredYou)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm transition flex items-center justify-center gap-2"
          >
            <Copy className="w-4 h-4" />
            Copy
          </button>
        </div>
      </div>

      {/* Advanced Tactics */}
      <div className="bg-slate-800 rounded-lg p-4 mb-6 border-l-4 border-cyan-500">
        <h3 className="font-bold text-cyan-300 mb-3">Advanced Tactics</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          <li><strong>Caller ID trick:</strong> Call back at different times (8 AM, 4:30 PM) to get different receptionists</li>
          <li><strong>Direct line hunt:</strong> If given main #, ask for accounting, billing, or ops—they'll know the DM's line</li>
          <li><strong>Specificity wins:</strong> "The person who handles your 3PL contracts" beats "the owner"</li>
          <li><strong>LinkedIn first:</strong> Get decision maker's name/title before calling—say it confidently</li>
          <li><strong>The email ask:</strong> If can't get through, "Can you just email me their address so I can send something over?"</li>
        </ul>
      </div>

      {/* Stats */}
      <div className="mt-6 pt-6 border-t border-slate-700 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-amber-300 font-bold text-2xl">~20s</p>
          <p className="text-slate-400 text-xs">Duration</p>
        </div>
        <div>
          <p className="text-amber-300 font-bold text-2xl">Direct</p>
          <p className="text-slate-400 text-xs">Approach</p>
        </div>
        <div>
          <p className="text-amber-300 font-bold text-2xl">2 Paths</p>
          <p className="text-slate-400 text-xs">Contingencies</p>
        </div>
      </div>
    </div>
  );
}
