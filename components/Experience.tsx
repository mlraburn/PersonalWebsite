import React from 'react';

interface ExperienceProps {
    isDarkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
    return (
        <section id="experience" className={`py-20 ${isDarkMode ? 'bg-slate-900' : 'bg-amber-50'}`}>
            <div className="container mx-auto px-6">
                <h2 className={`text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-16 text-center`}>
                    Experience
                </h2>

                <div className="max-w-6xl mx-auto">
                    {/* Timeline Container */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className={`absolute top-18 left-0 right-8 h-1 ${isDarkMode ? 'bg-slate-600' : 'bg-slate-300'}`}>
                            <div className={`absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-t-4 border-b-4 border-transparent ${isDarkMode ? 'border-l-slate-600' : 'border-l-slate-300'}`}></div>
                        </div>

                        {/* Timeline Items */}
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">

                            {/* Naval Academy */}
                            <div className="relative group">
                                <div className="flex flex-col items-center">
                                    <div className={`w-16 h-16 ${isDarkMode ? 'bg-slate-500' : 'bg-slate-800'} rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-lg z-10 relative`}>
                                        🎓
                                    </div>
                                    <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} text-center mb-2`}>Computer Science</h3>
                                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} text-center mb-1`}>U.S. Naval Academy</p>
                                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`}>2009 - 2013</p>
                                </div>

                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                    <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-slate-800'} text-white p-4 rounded-lg shadow-xl w-80`}>
                                        <h4 className="font-semibold mb-2">Computer Science Graduate</h4>
                                        <p className="text-sm mb-2">Bachelor of Science in Computer Science from the United States Naval Academy</p>
                                        <ul className="text-xs space-y-1">
                                            <li>• Strong technical foundation in software development</li>
                                            <li>• Leadership development and military training</li>
                                            <li>• Commissioned as Naval Officer</li>
                                            <li>• Rigorous environment building resilience and performance under pressure</li>
                                        </ul>
                                        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-transparent ${isDarkMode ? 'border-t-slate-700' : 'border-t-slate-800'}`}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Division Officer */}
                            <div className="relative group">
                                <div className="flex flex-col items-center">
                                    <div className={`w-16 h-16 ${isDarkMode ? 'bg-slate-500' : 'bg-slate-800'} rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-lg z-10 relative`}>
                                        ⚓
                                    </div>
                                    <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} text-center mb-2`}>Division Officer</h3>
                                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} text-center mb-1`}>NIOC Georgia</p>
                                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`}>2013 - 2016</p>
                                </div>

                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                    <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-slate-800'} text-white p-4 rounded-lg shadow-xl w-80`}>
                                        <h4 className="font-semibold mb-2">Direct Support Officer - Submarines</h4>
                                        <p className="text-sm mb-2">Led specialized teams of 22+ personnel on multiple submarine deployments</p>
                                        <ul className="text-xs space-y-1">
                                            <li>• Maintained sophisticated technical equipment in austere operational environments</li>
                                            <li>• Qualified as Cryptologic Warfare Officer in record time</li>
                                            <li>• Recognized as "Best DSO in 7 deployments" by commanding officer</li>
                                        </ul>
                                        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-transparent ${isDarkMode ? 'border-t-slate-700' : 'border-t-slate-800'}`}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Department Head */}
                            <div className="relative group">
                                <div className="flex flex-col items-center">
                                    <div className={`w-16 h-16 ${isDarkMode ? 'bg-slate-500' : 'bg-slate-800'} rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-lg z-10 relative`}>
                                        👥
                                    </div>
                                    <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} text-center mb-2`}>Department Head</h3>
                                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} text-center mb-1`}>NIOC Georgia</p>
                                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`}>2016 - 2019</p>
                                </div>

                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                    <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-slate-800'} text-white p-4 rounded-lg shadow-xl w-80`}>
                                        <h4 className="font-semibold mb-2">Department Head - 120+ Personnel</h4>
                                        <p className="text-sm mb-2">Led submarine operations department with 11 officers and 120+ Sailors deploying worldwide.</p>
                                        <ul className="text-xs space-y-1">
                                            <li>• Full administrative and operational responsibility for department</li>
                                            <li>• Managed training, qualifications, and day to day operational decisions</li>
                                            <li>• Responsible for critical personnel decisions balancing operational needs with individual readiness</li>
                                            <li>• Ran security program with zero security incidents</li>
                                        </ul>
                                        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-transparent ${isDarkMode ? 'border-t-slate-700' : 'border-t-slate-800'}`}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Pentagon */}
                            <div className="relative group">
                                <div className="flex flex-col items-center">
                                    <div className={`w-16 h-16 ${isDarkMode ? 'bg-slate-500' : 'bg-slate-800'} rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-lg z-10 relative`}>
                                        🏛️
                                    </div>
                                    <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} text-center mb-2`}>Technical Advisor</h3>
                                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} text-center mb-1`}>Pentagon</p>
                                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`}>2019 - 2022</p>
                                </div>

                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                    <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-slate-800'} text-white p-4 rounded-lg shadow-xl w-80`}>
                                        <h4 className="font-semibold mb-2">Intelligence Planning Officer & Acquisition Officer</h4>
                                        <p className="text-sm mb-2">Special Advisor to CNO for cryptologic operations and national-level program management.</p>
                                        <ul className="text-xs space-y-1">
                                            <li>• Ranked #1 of 22 LTs across all specialties</li>
                                            <li>• Technical Director for $100M+ program managing acquisition strategy and Congressional Budget Justification Submission</li>
                                            <li>• Personally developed Electronic Warfare employment manual adopted Navy-wide</li>
                                        </ul>
                                        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-transparent ${isDarkMode ? 'border-t-slate-700' : 'border-t-slate-800'}`}></div>
                                    </div>
                                </div>
                            </div>

                            {/* NRO Current */}
                            <div className="relative group">
                                <div className="flex flex-col items-center">
                                    <div className={`w-16 h-16 ${isDarkMode ? 'bg-slate-500' : 'bg-slate-800'} rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-lg z-10 relative`}>
                                        🛰️
                                    </div>
                                    <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} text-center mb-2`}>Developer & PM</h3>
                                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} text-center mb-1`}>NRO</p>
                                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`}>2022 - Present</p>
                                </div>

                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                    <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-slate-800'} text-white p-4 rounded-lg shadow-xl w-80`}>
                                        <h4 className="font-semibold mb-2">Operations Support & Metrics Chief</h4>
                                        <p className="text-sm mb-2">Leading operations support for multi-billion dollar satellite ground systems serving IC and DoD worldwide.</p>
                                        <ul className="text-xs space-y-1">
                                            <li>• Created breakthrough analytic capability for entire IC/DoD</li>
                                            <li>• Led 30+ person global tradecraft support team</li>
                                            <li>• Authored 30+ reports, 4 briefed to DNI</li>
                                            <li>• Established 24/7 operations support desk</li>
                                        </ul>
                                        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-transparent ${isDarkMode ? 'border-t-slate-700' : 'border-t-slate-800'}`}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Future Opportunity */}
                            <div className="relative group">
                                <div className="flex flex-col items-center">
                                    <div className={`w-16 h-16 ${isDarkMode ? 'bg-slate-500' : 'bg-slate-800'} rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-lg z-10 relative border-2 ${isDarkMode ? 'border-amber-400' : 'border-amber-500'}`}>
                                        🚀
                                    </div>
                                    <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-amber-400' : 'text-slate-800'} text-center mb-2`}>Next Challenge</h3>
                                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} text-center mb-1`}>Ready to Lead</p>
                                    <p className={`text-xs ${isDarkMode ? 'text-amber-400' : 'text-amber-600'} font-medium`}>2025+</p>
                                </div>

                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                    <div className={`${isDarkMode ? 'bg-gradient-to-br from-amber-600 to-orange-600' : 'bg-gradient-to-br from-slate-800 to-slate-900'} text-white p-4 rounded-lg shadow-xl w-80`}>
                                        <h4 className="font-semibold mb-2">What I Bring to Your Organization</h4>
                                        <p className="text-sm mb-2">Proven ability to lead complex technical programs while maintaining hands-on expertise and driving innovation.</p>
                                        <ul className="text-xs space-y-1">
                                            <li>• Multi-level leadership from 20 to 120+ personnel</li>
                                            <li>• Program management of multi-million dollar initiatives</li>
                                            <li>• Breakthrough software development capabilities</li>
                                            <li>• Crisis management and 24/7 operations experience</li>
                                        </ul>
                                        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-transparent ${isDarkMode ? 'border-t-orange-600' : 'border-t-slate-900'}`}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;