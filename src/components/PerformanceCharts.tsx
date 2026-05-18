"use client";

import { useState, useEffect } from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Legend,
} from "recharts";

const performanceData = [
  { name: "Day 1", loadTime: 120, bounceRate: 45 },
  { name: "Day 2", loadTime: 110, bounceRate: 42 },
  { name: "Day 3", loadTime: 95, bounceRate: 38 },
  { name: "Day 4", loadTime: 105, bounceRate: 40 },
  { name: "Day 5", loadTime: 85, bounceRate: 32 },
  { name: "Day 6", loadTime: 70, bounceRate: 28 },
  { name: "Day 7", loadTime: 65, bounceRate: 25 },
  { name: "Day 8", loadTime: 60, bounceRate: 22 },
  { name: "Day 9", loadTime: 55, bounceRate: 20 },
  { name: "Day 10", loadTime: 50, bounceRate: 18 },
];

const scraperData = [
  { name: "Mon", sessions: 1240 },
  { name: "Tue", sessions: 1430 },
  { name: "Wed", sessions: 1650 },
  { name: "Thu", sessions: 1890 },
  { name: "Fri", sessions: 2100 },
  { name: "Sat", sessions: 2450 },
  { name: "Sun", sessions: 2800 },
];
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl min-w-[150px]">
        <p className="text-gray-300 font-medium mb-3 text-sm">{label}</p>
        <div className="flex flex-col gap-2">
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm flex items-center gap-2" style={{ color: entry.color }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
              {entry.name}: <span className="font-semibold text-white ml-auto pl-2">{entry.value}</span>
            </p>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default function PerformanceCharts() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="w-full h-[300px] animate-pulse bg-white/5 rounded-xl border border-white/10"></div>;

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6">
      {/* Chart 1: Performance vs Bounce Rate */}
      <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_rgba(255,255,255,0.03)] backdrop-blur-sm relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <h3 className="text-xl font-semibold text-white mb-6 tracking-tight">
          Page Load (LUX) vs Bounce Rate
        </h3>
        <div className="w-full h-[300px] min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff1a" vertical={false} />
              <XAxis dataKey="name" stroke="#ffffff80" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis yAxisId="left" stroke="#ffffff80" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis yAxisId="right" orientation="right" stroke="#ffffff80" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
              <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '14px' }} />
              <Bar yAxisId="left" dataKey="loadTime" name="Load Time (ms)" fill="#06b6d4" radius={[4, 4, 0, 0]} barSize={20} />
              <Line yAxisId="right" type="monotone" dataKey="bounceRate" name="Bounce Rate (%)" stroke="#d946ef" strokeWidth={3} dot={{ r: 4, fill: '#d946ef' }} activeDot={{ r: 6 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 2: Active Scraper Sessions */}
      <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_rgba(255,255,255,0.03)] backdrop-blur-sm relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <h3 className="text-xl font-semibold text-white mb-6 tracking-tight">
          Active Scraper Sessions (Last 7 Days)
        </h3>
        <div className="w-full h-[300px] min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={scraperData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff1a" vertical={false} />
              <XAxis dataKey="name" stroke="#ffffff80" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#ffffff80" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
              <Bar dataKey="sessions" name="Sessions" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
