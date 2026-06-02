import { create } from 'zustand';

const useDashboardStore = create((set) => ({
  // Call metrics
  callsToday: 0,
  callsThisWeek: 0,
  connectionRate: 0.30,
  meetingsSet: 0,
  conversionRate: 0.15,

  // Confidence
  confidenceRating: 6,
  confidenceLog: [],
  weeklyTrend: [6, 6, 6.5, 6.5, 7, 7, 7.5],

  // Deal pipeline
  prospectCount: 50,
  qualifiedCount: 0,
  presentingCount: 0,
  negotiatingCount: 0,
  closedCount: 0,
  prospectValue: 0,
  qualifiedValue: 0,
  presentingValue: 0,
  negotiatingValue: 0,
  closedValue: 0,

  // Script progress
  scriptVersion: 1,
  scriptVersions: [
    { version: 1, status: 'current', recordings: 0, feedback: 'Professional, authentic tone for warehouse operators' },
    { version: 2, status: 'upcoming', recordings: 0, feedback: '' },
    { version: 3, status: 'upcoming', recordings: 0, feedback: '' },
    { version: 4, status: 'upcoming', recordings: 0, feedback: '' },
    { version: 5, status: 'upcoming', recordings: 0, feedback: '' },
  ],

  // Weekly metrics
  dailyMetrics: [
    { day: 'Mon', calls: 0, connections: 0, meetings: 0, conversions: 0 },
    { day: 'Tue', calls: 0, connections: 0, meetings: 0, conversions: 0 },
    { day: 'Wed', calls: 0, connections: 0, meetings: 0, conversions: 0 },
    { day: 'Thu', calls: 0, connections: 0, meetings: 0, conversions: 0 },
    { day: 'Fri', calls: 0, connections: 0, meetings: 0, conversions: 0 },
  ],
  
  // Actions
  updateCallMetrics: (calls, meetings) => set((state) => ({
    callsToday: calls,
    meetingsSet: meetings,
  })),
  
  updateConfidence: (rating) => set((state) => ({
    confidenceRating: Math.min(10, Math.max(1, rating)),
  })),
  
  addCallToDailyMetric: (dayIndex) => set((state) => {
    const updated = [...state.dailyMetrics];
    updated[dayIndex].calls += 1;
    return { dailyMetrics: updated };
  }),
}));

export default useDashboardStore;
