import React, { useState, useEffect } from 'react';

interface MetricsProps {
    isDarkMode: boolean;
    isPeriscopeActive: boolean;
    periscopeStatus: string;
    periscopeDips: number;
}

// Mock data - replace with real data later
const mockData = {
    totalVisits: 15847,
    uniqueVisits24h: 342,
    resumeDownloads: 127,
    periscopeDips: 2893,
    browserTypes: {
        desktop: 45,
        mobile: 35,
        tablet: 12,
        linux: 5,
        mac: 3
    }
};

const Metrics: React.FC<MetricsProps> = ({ isDarkMode, isPeriscopeActive, periscopeStatus, periscopeDips }) => {

    const [metricsData, setMetricsData] = useState({
        totalVisits: 0,
        uniqueVisits: 0,
        uniqueRecentVisits: 0,
        resumeDownloadCount: 0,
        platformMetrics: {}

    });

    useEffect(() => {
        const fetchMetrics = async () => {
            try {
                const response = await fetch('/api/metrics');
                const data = await response.json();
                setMetricsData(prev => ({
                    ...prev,
                    totalVisits: data.totalVisits,
                    uniqueRecentVisits: data.uniqueVisitors24HoursSize,
                    uniqueVisits: data.uniqueVisitors,
                    resumeDownloadCount: data.resumeDownloadCount,
                    platformMetrics: {
                        desktop: (data.platformPercentages.Windows || 0) + (data.platformPercentages.Mac || 0) + (data.platformPercentages.Linux || 0),
                        mobile: data.platformPercentages.Mobile || 0,
                        windows: data.platformPercentages.Windows || 0,
                        mac: data.platformPercentages.Mac || 0,
                        other: (data.platformPercentages.Linux || 0) + (data.platformPercentages.Other || 0)
                    }

                }));
            } catch (error) {
                console.error('Failed to fetch metrics', error);
            }
        };

        fetchMetrics();
    }, []);

    return (
        <section id="metrics" className={`py-20 ${isDarkMode ? 'bg-slate-900' : 'bg-amber-50'}`}>
            <div className="container mx-auto px-6">
                <h2 className={`text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-16 text-center`}>
                    Metrics
                </h2>

                <div className="max-w-4xl mx-auto">
                    {/* Terminal Window */}
                    <div className={`${isDarkMode ? 'bg-black border-amber-500' : 'bg-gray-900 border-amber-400'} border-2 rounded-lg shadow-2xl overflow-hidden`}>

                        {/* Terminal Header */}
                        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-800'} px-4 py-3 flex items-center`}>
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <span className={`ml-4 text-sm ${isDarkMode ? 'text-amber-400' : 'text-amber-300'} font-courier font-semibold`}>
                                analytics@portfolio.raburn.dev:~$
                            </span>
                        </div>

                        {/* Terminal Content */}
                        <div className="p-8 font-mono flex gap-8">

                            {/* Left Side Normal Terminal */}
                            <div className="flex-1">

                                {/* Total Visits - Largest */}
                                <div className={`${isDarkMode ? 'text-amber-400' : 'text-amber-300'} mb-8`}>
                                    <div className="flex items-center">
                                        <span className="text-gray-500">{'>'}</span>
                                        <span className="ml-2 text-sm font-courier font-semibold">query --metric=total_visits --format=primary</span>
                                    </div>
                                    <div className="text-8xl font-bold mt-3 tracking-tight">
                                        {metricsData.totalVisits.toLocaleString()}
                                    </div>
                                    <div className="text-xs text-gray-400 mt-1 font-courier font-semibold">↳ All-time site visits</div>
                                </div>

                                {/* Secondary Metrics */}
                                {/* All Time Unique-ish Users */}
                                <div className={`${isDarkMode ? 'text-amber-400' : 'text-amber-300'} mb-8`}>
                                    <div className="flex items-center">
                                        <span className="text-gray-500">{'>'}</span>
                                        <span className="ml-2 text-sm font-courier font-semibold">query --metric=unique_visits</span>
                                    </div>
                                    <div className="text-5xl font-bold mt-3">
                                        {metricsData.uniqueVisits.toLocaleString()}
                                    </div>
                                    <div className="text-xs text-gray-400 mt-1 font-courier font-semibold">↳ Unique all-time visits</div>
                                </div>

                                <div className={`${isDarkMode ? 'text-amber-400' : 'text-amber-300'} mb-8`}>
                                    <div className="flex items-center">
                                        <span className="text-gray-500">{'>'}</span>
                                        <span className="ml-2 text-sm font-courier font-semibold">query --metric=unique_visits_24h</span>
                                    </div>
                                    <div className="text-6xl font-bold mt-3">
                                        {metricsData.uniqueRecentVisits.toLocaleString()}
                                    </div>
                                    <div className="text-xs text-gray-400 mt-1 font-courier font-semibold">↳ Unique-ish visitors last 24 hours</div>
                                </div>

                                {/* Resume Downloads */}
                                <div className={`${isDarkMode ? 'text-amber-400' : 'text-amber-300'} mb-8`}>
                                    <div className="flex items-center">
                                        <span className="text-gray-500">{'>'}</span>
                                        <span className="ml-2 text-sm font-courier font-semibold">query --metric=resume_downloads</span>
                                    </div>
                                    <div className="text-5xl font-bold mt-3">
                                        {metricsData.resumeDownloadCount.toLocaleString()}
                                    </div>
                                    <div className="text-xs text-gray-400 mt-1 font-courier font-semibold">↳ All-time resume downloads</div>
                                </div>

                                {/* Browser Distribution */}
                                <div className={`${isDarkMode ? 'text-amber-400' : 'text-amber-300'} mb-6`}>
                                    <div className="flex items-center">
                                        <span className="text-gray-500">{'>'}</span>
                                        <span className="ml-2 text-sm font-courier font-semibold">query --metric=browser_distribution --format=table</span>
                                    </div>
                                    <div className="mt-4">
                                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                                            {Object.entries(metricsData.platformMetrics).map(([type, percentage]) => (
                                                <div key={type} className="border border-gray-600 rounded p-3">
                                                    <div className="text-3xl font-bold mb-1">{percentage}%</div>
                                                    <div className="text-xs uppercase tracking-wider text-gray-400 font-courier font-semibold">{type}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="text-xs text-gray-400 mt-3 font-courier font-semibold">↳ Platform distribution breakdown</div>
                                    </div>
                                </div>

                                {/* Terminal Prompt */}
                                <div className={`${isDarkMode ? 'text-amber-400' : 'text-amber-300'} flex items-center`}>
                                    <span className="text-gray-500">{'>'}</span>
                                    <span className="ml-2 text-sm opacity-60">_</span>
                                    <div className="w-2 h-5 bg-amber-400 ml-1 animate-pulse"></div>
                                </div>
                            </div>

                            {/* Right Side Periscope Log */}
                            <div className="w-70">
                                {/* Periscope Log */}
                                <div className={`text-s font-courier font-semibold ${isDarkMode ? 'text-amber-500' : 'text-amber-400'} whitespace-pre`}>
                                    <div>╔═══════════════════════════╗</div>
                                    <div>║       PERISCOPE LOG       ║</div>
                                    <div>╠═══════════════════════════╣</div>
                                    <div>║ Tracking: {isPeriscopeActive ? 'ACTIVE  ' : 'INACTIVE'}        ║</div>
                                    <div>║ Status:   {periscopeStatus.padEnd(15)} ║</div>
                                    <div>║ Dips:     {periscopeDips.toString().padEnd(15)} ║</div>
                                    <div>╚═══════════════════════════╝</div>
                                </div>

                                {/* Terminal style note */}
                                <div className={`${isDarkMode ? 'text-amber-500' : 'text-amber-400'} text-xs font-courier mt-4`}>
                                    <span className="text-gray-500">{'>'}</span>
                                    <span className="ml-3 font-semibold animate-pulse">Click anchor to activate...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Metrics;