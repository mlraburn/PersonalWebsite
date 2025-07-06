import React, { useEffect } from 'react';

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
                {/*Container for Overflow for hidding content*/}
                <div className="overflow-hidden relative max-w-6xl mx-auto">

                    {/* Left fade edge */}
                    <div className={`absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none ${
                        isDarkMode
                            ? 'bg-gradient-to-r from-slate-800 to-transparent'
                            : 'bg-gradient-to-r from-white to-transparent'
                    }`}></div>

                    {/* Right fade edge */}
                    <div className={`absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none ${
                        isDarkMode
                            ? 'bg-gradient-to-l from-slate-800 to-transparent'
                            : 'bg-gradient-to-l from-white to-transparent'
                    }`}></div>
                    {/* Scrolling Container */}
                    <div className="flex animate-infinite-scroll gap-8" style={{ width: '250%' }}>
                        {/* First Set Div*/}
                        <div className="flex gap-8 w-1/2">
                            {/* Matt's March Madness */}
                            <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-amber-50'} p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                                <a
                                    href="https://mattsmarchmadness.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="h-48 rounded-lg mb-6 overflow-hidden relative cursor-pointer hover:opacity-90 transition-opacity">
                                        <img
                                            src="/MattsMarchMadness.png"
                                            alt="Matt's March Madness Bracket Simulator"
                                            className="w-full h-full object-contain bg-blue-900"
                                        />
                                    </div>
                                </a>
                                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-3`}>Matt's March Madness</h3>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-slate-600'} mb-4`}>
                                    Simulate, save, and see the latest NCAA tournament brackets: Web app allow users to
                                    create brackets based on ELO scores and save their brackets for later.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Javascript</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Python</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Flask</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>CSV Data Mangement</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>GCP</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Docker</span>
                                </div>
                                <a
                                    href="https://mattsmarchmadness.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${isDarkMode ? 'text-amber-400 hover:text-amber-300' : 'text-slate-800 hover:text-slate-600'} font-semibold transition-colors inline-block`}
                                >
                                    Visit →
                                </a>
                            </div>

                            {/* HoverView */}
                            <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-amber-50'} p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                                <a
                                    href="https://hoverview.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="h-48 rounded-lg mb-6 overflow-hidden relative">
                                        <img
                                            src="/HOVerview%20Logo%20Transparent.png"
                                            alt="HOV-erview"
                                            className="w-full h-full object-contain bg-green-600"
                                        />
                                    </div>
                                </a>
                                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-3`}>HOV-erview</h3>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-slate-600'} mb-4`}>
                                    Want to use the express lane but don't know what direction its going? The
                                    HOV-erview PWA has got you covered. PWA does one thing and one thing well - for
                                    Virginia 95 Express
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Node.js</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Express</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Javascript</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>PWA</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Service Workers</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>API Integration</span>
                                </div>
                                <a
                                    href="https://hoverview.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${isDarkMode ? 'text-amber-400 hover:text-amber-300' : 'text-slate-800 hover:text-slate-600'} font-semibold transition-colors`}
                                >
                                    Visit →
                                </a>
                            </div>

                            {/* JSON Explorer */}
                            <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-amber-50'} p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                                <div className="h-48 rounded-lg mb-6 overflow-hidden relative">
                                    <img
                                        src="/json%20explore%20logo.png"
                                        alt="json explore logo"
                                        className="w-full h-full object-contain bg-slate-900"
                                    />
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

                            {/* Portfolio Website */}
                            <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-amber-50'} p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                                <div className="h-48 rounded-lg mb-6 overflow-hidden relative">
                                    <img
                                        src="/Personal%20Logo.png"
                                        alt="Personal Portfolio"
                                        className="w-full h-full object-contain bg-blue-950"
                                    />
                                </div>
                                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-3`}>Professional Portfolio</h3>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-slate-600'} mb-4`}>
                                    Modern, responsive portfolio website showcasing professional experience, projects, and technical skills.
                                    Features dark mode, interactive timeline, infinite scroll, and custom animations.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>React</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>TypeScript</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Tailwind CSS</span>
                                </div>
                                <button className={`${isDarkMode ? 'text-amber-400 hover:text-amber-300' : 'text-slate-800 hover:text-slate-600'} font-semibold transition-colors`}>
                                    Learn More →
                                </button>
                            </div>
                        </div>
                        {/* Second Set Div*/}
                        <div className="flex gap-8 w-1/2">
                            {/* Matt's March Madness */}
                            <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-amber-50'} p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                                <a
                                    href="https://mattsmarchmadness.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="h-48 rounded-lg mb-6 overflow-hidden relative cursor-pointer hover:opacity-90 transition-opacity">
                                        <img
                                            src="/MattsMarchMadness.png"
                                            alt="Matt's March Madness Bracket Simulator"
                                            className="w-full h-full object-contain bg-blue-900"
                                        />
                                    </div>
                                </a>
                                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-3`}>Matt's March Madness</h3>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-slate-600'} mb-4`}>
                                    Simulate, save, and see the latest NCAA tournament brackets: Web app allow users to
                                    create brackets based on ELO scores and save their brackets for later.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Javascript</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Python</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Flask</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>CSV Data Mangement</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>GCP</span>
                                </div>
                                <a
                                    href="https://mattsmarchmadness.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${isDarkMode ? 'text-amber-400 hover:text-amber-300' : 'text-slate-800 hover:text-slate-600'} font-semibold transition-colors inline-block`}
                                >
                                    Visit →
                                </a>
                            </div>

                            {/* HoverView */}
                            <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-amber-50'} p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                                <a
                                    href="https://hoverview.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="h-48 rounded-lg mb-6 overflow-hidden relative">
                                        <img
                                            src="/HOVerview%20Logo%20Transparent.png"
                                            alt="HOV-erview"
                                            className="w-full h-full object-contain bg-green-600"
                                        />
                                    </div>
                                </a>
                                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-3`}>HOV-erview</h3>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-slate-600'} mb-4`}>
                                    Want to use the express lane but don't know what direction its going? The
                                    HOV-erview PWA has got you covered. PWA does one thing and one thing well - for
                                    Virginia 95 Express
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Node.js</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Express</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Javascript</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>PWA</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Service Workers</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>API Integration</span>
                                </div>
                                <a
                                    href="https://hoverview.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${isDarkMode ? 'text-amber-400 hover:text-amber-300' : 'text-slate-800 hover:text-slate-600'} font-semibold transition-colors`}
                                >
                                    Visit →
                                </a>
                            </div>

                            {/* JSON Explorer */}
                            <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-amber-50'} p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                                <div className="h-48 rounded-lg mb-6 overflow-hidden relative">
                                    <img
                                        src="/json%20explore%20logo.png"
                                        alt="json explore logo"
                                        className="w-full h-full object-contain bg-slate-900"
                                    />
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

                            {/* Portfolio Website */}
                            <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-amber-50'} p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                                <div className="h-48 rounded-lg mb-6 overflow-hidden relative">
                                    <img
                                        src="/Personal%20Logo.png"
                                        alt="Personal Portfolio"
                                        className="w-full h-full object-contain bg-blue-950"
                                    />
                                </div>
                                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-3`}>Professional Portfolio</h3>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-slate-600'} mb-4`}>
                                    Modern, responsive portfolio website showcasing professional experience, projects, and technical skills.
                                    Features dark mode, interactive timeline, infinite scroll, and custom animations.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>React</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>TypeScript</span>
                                    <span className={`px-2 py-1 text-xs rounded ${isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>Tailwind CSS</span>
                                </div>
                                <button className={`${isDarkMode ? 'text-amber-400 hover:text-amber-300' : 'text-slate-800 hover:text-slate-600'} font-semibold transition-colors`}>
                                    Learn More →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;