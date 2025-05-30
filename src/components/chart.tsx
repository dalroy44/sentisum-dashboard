"use client"
import React, { useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    BarChart,
    Bar,
} from 'recharts';
import { ArrowUp, Maximize2, Minimize2 } from 'lucide-react'; // Added Maximize2, Minimize2
import { SourceNameLabel } from './sourceName'; // Assuming this component exists

const data = [
    { date: '01 Oct', primary: 2100, secondary: 1900 },
    { date: '02 Oct', primary: 1950, secondary: 1850 },
    { date: '03 Oct', primary: 1850, secondary: 1900 },
    { date: '04 Oct', primary: 2100, secondary: 2000 },
    { date: '05 Oct', primary: 2900, secondary: 2850 },
    { date: '06 Oct', primary: 3500, secondary: 2900 },
    { date: '07 Oct', primary: 2800, secondary: 2200 },
    { date: '08 Oct', primary: 900, secondary: 2100 },
];


const ContactTrendChart: React.FC = () => {
    const [chartType, setChartType] = useState<'line' | 'bar'>('line');
    const [isExpanded, setIsExpanded] = useState<boolean>(false); // State for expand/reduce

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const commonChartProps = {
        data: data,
        margin: {
            top: 5,
            right: 20,
            left: 10,
            bottom: 5,
        },
    };

    const commonTooltipProps = {
        contentStyle: {
            backgroundColor: 'white',
            borderRadius: '0.375rem',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            borderColor: '#e5e7eb',
            color: '#1f2937',
        },
        itemStyle: { color: '#1f2937' },
        labelStyle: { color: '#4b5563', fontWeight: '500' },
    };

    const getButtonClasses = (type: 'line' | 'bar' | 'expand') => {
        const isActive = chartType === type; // Keep this for line/bar
        if (type === 'expand') { // Separate styling for expand/reduce if needed, or use common
             return "p-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800";
        }
        if (isActive) {
            return "p-2 rounded-md border border-indigo-600 bg-indigo-100 text-indigo-600 dark:border-indigo-400 dark:bg-indigo-950 dark:text-indigo-300";
        }
        return "p-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800";
    };


    return (
        <div className={isExpanded ? "col-span-2" : ""}> {/* Conditionally apply col-span-2 */}
            <div className="group relative min-h-36 rounded-xl bg-white dark:bg-gray-900 p-4 h-full flex flex-col"> {/* Ensure card takes full height */}
                <SourceNameLabel sourceName={'Meal Kit Support'} />
                {/* Header Section */}
                <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Contact Trend</h2>
                        </div>
                        <div className="flex items-center space-x-2"> {/* Ensure items-center for vertical alignment */}
                            <button
                              aria-label={isExpanded ? "Reduce size" : "Expand size"}
                              className={getButtonClasses('expand')} // Use specific or common style
                              onClick={toggleExpand}
                            >
                              {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                            </button>
                            <button
                                aria-label="Line chart view"
                                className={getButtonClasses('line')}
                                onClick={() => setChartType('line')}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 20 10 4 8 12 2 12"></polyline></svg>
                            </button>
                            <button
                                aria-label="Bar chart view"
                                className={getButtonClasses('bar')}
                                onClick={() => setChartType('bar')}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-end">
                        <p className="text-4xl font-bold text-gray-900 dark:text-gray-100">18,851</p>
                        <div className="flex items-center ml-2 text-green-500 dark:text-green-400">
                            <ArrowUp size={18} className="mr-0.5" />
                            <p className="text-sm font-semibold">3%</p>
                        </div>
                    </div>
                </div>

                {/* Chart Section */}
                {/* Added flex-grow to allow chart to take available space */}
                <div className="h-80 flex-grow">
                    <ResponsiveContainer>
                        {chartType === 'line' ? (
                            <LineChart {...commonChartProps}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" className="dark:stroke-gray-700" />
                                <XAxis
                                    dataKey="date"
                                    axisLine={false}
                                    tickLine={false}
                                    stroke="#6b7280"
                                    fontSize={12}
                                    tick={{ className: 'fill-gray-800 dark:fill-gray-400 text-xs' }}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    stroke="#6b7280"
                                    fontSize={12}
                                    domain={[0, 'dataMax + 500']}
                                    ticks={[950, 1900, 2850, 3800]}
                                    tickFormatter={(value) => value.toLocaleString()}
                                    tick={{ className: 'fill-gray-800 dark:fill-gray-400 text-xs' }}
                                />
                                <Tooltip {...commonTooltipProps} />
                                <Line
                                    type="monotone"
                                    dataKey="primary"
                                    stroke="#4f46e5"
                                    strokeWidth={2.5}
                                    dot={false}
                                    activeDot={{ r: 6, strokeWidth: 0, fill: '#4f46e5' }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="primary"
                                    stroke="none"
                                    fill="url(#colorUv)"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="secondary"
                                    stroke="#a0aec0"
                                    strokeWidth={2}
                                    strokeDasharray="5 5"
                                    dot={false}
                                    activeDot={{ r: 6, strokeWidth: 0, fill: '#a0aec0' }}
                                />
                            </LineChart>
                        ) : (
                            <BarChart {...commonChartProps}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" className="dark:stroke-gray-700" />
                                <XAxis
                                    dataKey="date"
                                    axisLine={false}
                                    tickLine={false}
                                    stroke="#6b7280"
                                    fontSize={12}
                                    tick={{ className: 'fill-gray-800 dark:fill-gray-400 text-xs' }}
                                    interval={0}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    stroke="#6b7280"
                                    fontSize={12}
                                    domain={[0, 'dataMax + 500']}
                                    ticks={[950, 1900, 2850, 3800]}
                                    tickFormatter={(value) => value.toLocaleString()}
                                    tick={{ className: 'fill-gray-800 dark:fill-gray-400 text-xs' }}
                                />
                                <Tooltip {...commonTooltipProps} />
                                <Bar dataKey="primary" fill="#4f46e5" />
                                <Bar dataKey="secondary" fill="#a0aec0" />
                            </BarChart>
                        )}
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default ContactTrendChart;