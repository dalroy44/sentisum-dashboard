"use client";

import React from 'react';
import { ArrowUp, ArrowDown, Maximize2, Minimize2 } from 'lucide-react';
import {
  LineChart, Line, ResponsiveContainer, XAxis, YAxis} from 'recharts';
import { SourceNameLabel } from './sourceName'; // Assuming this component exists


interface TrendPoint {
  name: string;
  value: number;
}

interface ContactReason {
  id: string;
  tag: string;
  volume: number;
  change: number;
  trendData: TrendPoint[];
}

const contactReasonsData: ContactReason[] = [
  { id: '1', tag: 'Repetitive Issues', volume: 5836, change: 7, trendData: [{ name: 'P1', value: 10 }, { name: 'P2', value: 15 }, { name: 'P3', value: 13 }, { name: 'P4', value: 18 }, { name: 'P5', value: 20 }] },
  { id: '2', tag: 'Missing Ingredients', volume: 4105, change: -21, trendData: [{ name: 'P1', value: 20 }, { name: 'P2', value: 18 }, { name: 'P3', value: 15 }, { name: 'P4', value: 12 }, { name: 'P5', value: 10 }] },
  { id: '3', tag: 'Credit Not Applied', volume: 2951, change: -24, trendData: [{ name: 'P1', value: 25 }, { name: 'P2', value: 20 }, { name: 'P3', value: 18 }, { name: 'P4', value: 15 }, { name: 'P5', value: 12 }] },
  { id: '4', tag: 'Box Not Delivered', volume: 1912, change: -16, trendData: [{ name: 'P1', value: 10 }, { name: 'P2', value: 12 }, { name: 'P3', value: 9 }, { name: 'P4', value: 15 }, { name: 'P5', value: 13 }] },
  { id: '5', tag: 'Incorrectly Charged', volume: 1868, change: -10, trendData: [{ name: 'P1', value: 15 }, { name: 'P2', value: 12 }, { name: 'P3', value: 10 }, { name: 'P4', value: 13 }, { name: 'P5', value: 9 }] },
];

// Sparkline Chart component
const SparklineChart: React.FC<{ data: TrendPoint[]; positiveTrend: boolean }> = ({ data, positiveTrend }) => {
  const strokeColor = positiveTrend ? '#EF4444' : '#22C55E';
  const values = data.map(p => p.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const padding = (maxValue - minValue) * 0.1 || 1;

  return (
    <div style={{ width: 80, height: 30, marginLeft: '8px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <YAxis domain={[minValue - padding, maxValue + padding]} hide={true} />
          <XAxis dataKey="name" hide={true} />
          <Line type="monotone" dataKey="value" stroke={strokeColor} strokeWidth={2} dot={false} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};


const TableView: React.FC = () => {
  const [activeView] = React.useState<'table'>('table');
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className={isExpanded ? "col-span-2" : ""}>
      <div className="relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg h-full flex flex-col">
        <SourceNameLabel sourceName="Meal Kit Support" />

        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Top Contact Reasons
          </h2>
          <div className="flex items-center space-x-1">
            <button
              aria-label={isExpanded ? "Reduce size" : "Expand size"}
              className="p-2 rounded-md border border-gray-300 text-gray-500 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={toggleExpand}
            >
              {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>
          </div>
        </div>

        {/* Content Section: Table or Bar Chart */}
        <div className="flex-grow overflow-auto"> {/* Ensure this container can grow and scroll if needed */}
          {activeView === 'table' && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Sentisum Tag</th>
                    <th className="py-3 px-4 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Volume</th>
                    <th className="py-3 px-4 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">% Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {contactReasonsData.map((reason) => (
                    <tr key={reason.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="py-4 px-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{reason.tag}</td>
                      <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 text-right">{reason.volume.toLocaleString()}</td>
                      <td className="py-4 px-4 whitespace-nowrap text-sm text-right">
                        <div className="flex items-center justify-end">
                          {reason.change > 0 ? <ArrowUp size={16} className="text-red-500 dark:text-red-400 mr-1" /> : <ArrowDown size={16} className="text-green-500 dark:text-green-400 mr-1" />}
                          <span className={reason.change > 0 ? 'text-red-500 dark:text-red-400' : 'text-green-500 dark:text-green-400'}>{Math.abs(reason.change)}%</span>
                          <SparklineChart data={reason.trendData} positiveTrend={reason.change > 0} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableView;