import { create } from 'zustand';

const useDashboardStore = create((set) => ({
  // Call metrics
  callsToday: 0,
  callsThisWeek: 0,
  connectionRate: 0.35,
  meetingsSet: 0,
  conversionRate: 0.12,
  
  // Confidence
  confidenceRating: 7,
  confidenceLog: [],
  weeklyTrend: [5, 5.5, 6, 6.5, 7, 7, 7],
  
  // Deal pipeline
  prospectCount: 45,
  qualifiedCount: 18,
  presentingCount: 8,
  negotiatingCount: 3,
  closedCount: 2,
  prospectValue: 450000,
  qualifiedValue: 180000,
  presentingValue: 120000,
  negotiatingValue: 60000,
  closedValue: 50000,
  
  // Script progress
  scriptVersion: 1,
  scriptVersions: [
    { version: 1, status: 'current', recordings: 0, feedback: 'Initial script' },
    { version: 2, status: 'upcoming', recordings: 0, feedback: '' },
    { version: 3, status: 'upcoming', recordings: 0, feedback: '' },
    { version: 4, status: 'upcoming', recordings: 0, feedback: '' },
    { version: 5, status: 'upcoming', recordings: 0, feedback: '' },
  ],
  
  // Weekly metrics
  dailyMetrics: [
    { day: 'Mon', calls: 8, connections: 3, meetings: 1, conversions: 0 },
    { day: 'Tue', calls: 10, connections: 3, meetings: 1, conversions: 0 },
    { day: 'Wed', calls: 12, connections: 4, meetings: 2, conversions: 0 },
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
