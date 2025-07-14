import React from 'react';

interface AboutProps {
    isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
    return (
        // Semantic portion
        <section id="about" className={`py-20 ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
            {/*Margin Div*/}
            <div className="container mx-auto px-6">
                {/*About Content Div*/}
                <div className="max-w-6xl mx-auto">
                    {/*Content*/}
                    {/*Header for About*/}
                    <h2 className={`text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-12`}>
                        About
                    </h2>

                    {/* Layout Div for About Paragraphs and Operational Philosophy */}
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/*Col 1*/}
                        <div>
                            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} leading-relaxed mb-6`}>
                                I'm Matt Raburn - a Computer Science graduate from the United States Naval Academy
                                and LCDR transitioning to the Navy Reserves after 12+ years of active duty. My life centers around
                                dedication to others, whether serving on submarines, taking care of my family, or coaching youth soccer.
                            </p>
                            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} leading-relaxed mb-6`}>
                                As a leader and technical expert for over a decade, I have pursued the hardest roles and toughest
                                challenges. From the Naval Academy to submarines to the intelligence community, I have honed skills
                                in the most demanding environments. This breadth of experience and passion makes me the ideal candidate
                                to drive results in any high-stakes and high-speed environment.
                            </p>
                        </div>

                        {/*Col 2*/}
                        <div className="flex flex-col justify-between h-full">
                            <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-amber-50'} p-8 rounded-lg`}>
                                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-4`}>
                                    Operating Philosophy
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <div className={`w-2 h-2 ${isDarkMode ? 'bg-amber-400' : 'bg-slate-800'} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                                        <div>
                                            <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Intellectual Curiosity</span>
                                            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} mt-1`}>
                                                Constantly learning across multiple domains, from new technologies to emerging trends to professional expertise
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className={`w-2 h-2 ${isDarkMode ? 'bg-amber-400' : 'bg-slate-800'} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                                        <div>
                                            <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Hands-On Leadership</span>
                                            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} mt-1`}>
                                                Leading by example and remaining actively engaged with both the work and its challenges
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className={`w-2 h-2 ${isDarkMode ? 'bg-amber-400' : 'bg-slate-800'} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                                        <div>
                                            <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Mission Focused</span>
                                            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} mt-1`}>
                                                Prioritizing what drives real impact and results
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className={`w-2 h-2 ${isDarkMode ? 'bg-amber-400' : 'bg-slate-800'} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                                        <div>
                                            <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Professional Mastery</span>
                                            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} mt-1`}>
                                                Dedicated to achieving and maintaining technical proficiency as a core professional responsibility
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Tech Heap */}
                    <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-amber-50'} p-8 py-5 rounded-lg mt-6`}>
                        <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-2 text-center`}>
                            Tech Heap
                        </h3>
                        <p className={`text-m ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} text-center mb-2`}>
                            My scattered collection of skills, technologies, and experience
                        </p>

                        {/* Tech Stack "Heap" */}
                        <div className="flex flex-wrap py-2">
                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 justify-center">
                                {/* Programming Languages - Blue */}
                                <div className={`${isDarkMode ? 'bg-blue-600 text-blue-100' : 'bg-blue-100 text-blue-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>Python</div>
                                <div className={`${isDarkMode ? 'bg-blue-600 text-blue-100' : 'bg-blue-100 text-blue-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>JavaScript</div>
                                <div className={`${isDarkMode ? 'bg-blue-600 text-blue-100' : 'bg-blue-100 text-blue-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>TypeScript</div>
                                <div className={`${isDarkMode ? 'bg-blue-600 text-blue-100' : 'bg-blue-100 text-blue-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>Java</div>
                                <div className={`${isDarkMode ? 'bg-blue-600 text-blue-100' : 'bg-blue-100 text-blue-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>SQL</div>

                                {/* Frameworks & Libraries - Green */}
                                <div className={`${isDarkMode ? 'bg-green-600 text-green-100' : 'bg-green-100 text-green-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>React</div>
                                <div className={`${isDarkMode ? 'bg-green-600 text-green-100' : 'bg-green-100 text-green-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>Node.js</div>
                                <div className={`${isDarkMode ? 'bg-green-600 text-green-100' : 'bg-green-100 text-green-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>Flask</div>
                                <div className={`${isDarkMode ? 'bg-green-600 text-green-100' : 'bg-green-100 text-green-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>Next.js</div>

                                {/* Tools & Platforms - Purple */}
                                <div className={`${isDarkMode ? 'bg-purple-600 text-purple-100' : 'bg-purple-100 text-purple-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>Docker</div>
                                <div className={`${isDarkMode ? 'bg-purple-600 text-purple-100' : 'bg-purple-100 text-purple-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>AWS</div>
                                <div className={`${isDarkMode ? 'bg-purple-600 text-purple-100' : 'bg-purple-100 text-purple-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>GCP</div>
                                <div className={`${isDarkMode ? 'bg-purple-600 text-purple-100' : 'bg-purple-100 text-purple-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>PostgreSQL</div>
                                <div className={`${isDarkMode ? 'bg-purple-600 text-purple-100' : 'bg-purple-100 text-purple-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>MongoDB</div>
                                <div className={`${isDarkMode ? 'bg-purple-600 text-purple-100' : 'bg-purple-100 text-purple-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>Tableau</div>

                                {/* Leadership & Experience - Amber */}
                                <div className={`${isDarkMode ? 'bg-amber-600 text-amber-100' : 'bg-amber-100 text-amber-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>Led Large and Small Teams</div>
                                <div className={`${isDarkMode ? 'bg-amber-600 text-amber-100' : 'bg-amber-100 text-amber-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>Program Management</div>

                                {/* Security & Clearance - Red */}
                                <div className={`${isDarkMode ? 'bg-red-600 text-red-100' : 'bg-red-100 text-red-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>TS//SCI w/ Polygraph</div>

                                {/* Domains & Specialties - Slate/Gray */}
                                <div className={`${isDarkMode ? 'bg-slate-600 text-slate-100' : 'bg-slate-200 text-slate-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>Data Analytics</div>
                                <div className={`${isDarkMode ? 'bg-slate-600 text-slate-100' : 'bg-slate-200 text-slate-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>Data Fusion Algorithms</div>
                                <div className={`${isDarkMode ? 'bg-slate-600 text-slate-100' : 'bg-slate-200 text-slate-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>ETL Pipelines</div>
                                <div className={`${isDarkMode ? 'bg-slate-600 text-slate-100' : 'bg-slate-200 text-slate-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>CLI Tools</div>
                                <div className={`${isDarkMode ? 'bg-slate-600 text-slate-100' : 'bg-slate-200 text-slate-800'} px-4 py-3 rounded-lg font-semibold flex items-center justify-center text-center`}>Web Apps</div>
                            </div>
                        </div>
                        {/* Legend */}
                        <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs">
                            <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-blue-600' : 'bg-blue-100'}`}></div>
                                <span className={isDarkMode ? 'text-gray-300' : 'text-slate-600'}>Languages</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-green-600' : 'bg-green-100'}`}></div>
                                <span className={isDarkMode ? 'text-gray-300' : 'text-slate-600'}>Frameworks</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-purple-600' : 'bg-purple-100'}`}></div>
                                <span className={isDarkMode ? 'text-gray-300' : 'text-slate-600'}>Tools</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-amber-600' : 'bg-amber-100'}`}></div>
                                <span className={isDarkMode ? 'text-gray-300' : 'text-slate-600'}>Leadership</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-red-600' : 'bg-red-100'}`}></div>
                                <span className={isDarkMode ? 'text-gray-300' : 'text-slate-600'}>Security</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-slate-600' : 'bg-slate-200'}`}></div>
                                <span className={isDarkMode ? 'text-gray-300' : 'text-slate-600'}>Domains</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;