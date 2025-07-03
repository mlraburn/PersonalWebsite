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
                <div className="max-w-4xl mx-auto">
                    {/*Content*/}
                    {/*Header for About*/}
                    <h2 className={`text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-12`}>
                        About
                    </h2>

                    {/*Layout Div*/}
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/*Col 1*/}
                        <div>
                            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} leading-relaxed mb-6`}>
                                I'm Matt Raburn from Memphis, TN - a proud Computer Science graduate from the United States Naval Academy
                                and LCDR transitioning to the Navy Reserves after 12+ years of active duty. My life centers around
                                dedication to others, whether serving on submarines, taking care of my family, or coaching youth soccer.
                            </p>
                            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} leading-relaxed mb-6`}>
                                As a constant learner, I pursue excellence with passionate drive and am always the first to tackle
                                the toughest technical challenges. What sets me apart is my belief in incredible domain knowledge
                                intake and the desire to perform functions at every level - from hands-on creation to strategic leadership.
                            </p>

                            <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-amber-50'} p-6 rounded-lg`}>
                                <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-3`}>
                                    What Makes Me Special
                                </h3>
                                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} leading-relaxed`}>
                                    While many leaders transition from hands-on work to meetings and documentation, I maintain both.
                                    I can lead strategically while still creating with my hands, learning how operators perform,
                                    and making breakthroughs in process and design. This multi-level capability gives me an
                                    incredible ability to lead by example and optimize decision-making context.
                                </p>
                            </div>
                        </div>

                        {/*Col 2*/}
                        <div className="flex flex-col justify-between h-full">
                            <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-amber-50'} p-8 rounded-lg`}>
                                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-4`}>
                                    Core Values
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <div className={`w-2 h-2 ${isDarkMode ? 'bg-amber-400' : 'bg-slate-800'} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                                        <div>
                                            <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Voracious Learner</span>
                                            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} mt-1`}>
                                                Constantly acquiring domain knowledge across all levels of operation
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className={`w-2 h-2 ${isDarkMode ? 'bg-amber-400' : 'bg-slate-800'} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                                        <div>
                                            <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Hands-On Leadership</span>
                                            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} mt-1`}>
                                                Leading by example while maintaining technical creation and design skills
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className={`w-2 h-2 ${isDarkMode ? 'bg-amber-400' : 'bg-slate-800'} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                                        <div>
                                            <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Mission-Focused Excellence</span>
                                            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} mt-1`}>
                                                Passionate drive toward solving the most complex technical challenges
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className={`w-2 h-2 ${isDarkMode ? 'bg-amber-400' : 'bg-slate-800'} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                                        <div>
                                            <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>People-Centered Service</span>
                                            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} mt-1`}>
                                                Dedication to others through military service, family, and community
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-amber-50'} p-10 rounded-lg`}>
                                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-4`}>
                                    Technical Expertise
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h4 className={`font-medium ${isDarkMode ? 'text-amber-400' : 'text-slate-800'} mb-2`}>Leadership</h4>
                                        <ul className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} space-y-1`}>
                                            <li>• 120+ Personnel</li>
                                            <li>• Global Operations</li>
                                            <li>• Crisis Management</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className={`font-medium ${isDarkMode ? 'text-amber-400' : 'text-slate-800'} mb-2`}>Technical</h4>
                                        <ul className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} space-y-1`}>
                                            <li>• Software Development</li>
                                            <li>• Systems Integration</li>
                                            <li>• Process Innovation</li>
                                        </ul>
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

export default About;