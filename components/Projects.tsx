import React from 'react';

interface ProjectsProps {
    isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
    return (
        <section id="projects" className={`py-20 ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
            <div className="container mx-auto px-6">
                <h2 className={`text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-16 text-center`}>
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Matt's March Madness */}
                    <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-amber-50'} p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                        <div className={`h-48 ${isDarkMode ? 'bg-gradient-to-br from-orange-600 to-red-600' : 'bg-gradient-to-br from-orange-500 to-red-500'} rounded-lg mb-6 flex items-center justify-center text-white`}>
                            <div className="text-center">
                                <div className="text-3xl mb-2">🏀</div>
                                <span className="text-sm font-medium">March Madness Analytics</span>
                            </div>
                        </div>
                        <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-3`}>Matt's March Madness</h3>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-slate-600'} mb-4`}>
                            Interactive web application for NCAA tournament bracket analysis featuring data visualization,
                            team performance metrics, and predictive modeling for tournament outcomes.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>React</span>
                            <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Data Analytics</span>
                            <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Sports API</span>
                        </div>
                        <button className={`${isDarkMode ? 'text-amber-400 hover:text-amber-300' : 'text-slate-800 hover:text-slate-600'} font-semibold transition-colors`}>
                            Learn More →
                        </button>
                    </div>

                    {/* HoverView */}
                    <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-amber-50'} p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                        <div className={`h-48 ${isDarkMode ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-gradient-to-br from-blue-500 to-purple-500'} rounded-lg mb-6 flex items-center justify-center text-white`}>
                            <div className="text-center">
                                <div className="text-3xl mb-2">👁️</div>
                                <span className="text-sm font-medium">Data Visualization</span>
                            </div>
                        </div>
                        <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-3`}>HoverView</h3>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-slate-600'} mb-4`}>
                            Advanced data visualization tool that provides interactive hover insights and detailed analytics
                            overlays for complex datasets, enabling rapid data exploration and pattern recognition.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>JavaScript</span>
                            <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>D3.js</span>
                            <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Data Viz</span>
                        </div>
                        <button className={`${isDarkMode ? 'text-amber-400 hover:text-amber-300' : 'text-slate-800 hover:text-slate-600'} font-semibold transition-colors`}>
                            Learn More →
                        </button>
                    </div>

                    {/* JSON Explorer */}
                    <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-amber-50'} p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                        <div className={`h-48 ${isDarkMode ? 'bg-gradient-to-br from-green-600 to-teal-600' : 'bg-gradient-to-br from-green-500 to-teal-500'} rounded-lg mb-6 flex items-center justify-center text-white`}>
                            <div className="text-center">
                                <div className="text-3xl mb-2">🔍</div>
                                <span className="text-sm font-medium">JSON Analysis</span>
                            </div>
                        </div>
                        <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-3`}>JSON Explorer</h3>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-slate-600'} mb-4`}>
                            Powerful JSON data exploration and analysis tool featuring tree visualization, search capabilities,
                            and schema analysis for efficiently navigating complex nested data structures.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Node.js</span>
                            <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>JSON</span>
                            <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>CLI Tool</span>
                        </div>
                        <button className={`${isDarkMode ? 'text-amber-400 hover:text-amber-300' : 'text-slate-800 hover:text-slate-600'} font-semibold transition-colors`}>
                            Learn More →
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;