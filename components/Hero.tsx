import React from 'react';

interface HeroProps {
    isDarkMode: boolean;
    onViewProjects?: () => void;
    onDownloadResume?: () => void;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode, onViewProjects, onDownloadResume }) => {
    return (
      // Semantic portion
      <main className={`$isDarkMode ? 'bg-slate-900' : 'bg-amber-50'}`}>
          {/*margin div*/}
          <div className="container mx-auto px-6 py-16">
              {/*layout div*/}
              <div className="flex flex-col lg:flex-row items-center justify-between">
                  {/*Left side content*/}
                  <div className="lg:w-1/2 mb-12 lg:mb-0">
                      <h1 className={`text-5xl lg:text-7xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-6 tracking-wide`}>
                          LCDR Matt Raburn
                      </h1>
                      <h2 className={`text-2xl lg:text-3xl ${isDarkMode ? 'text-gray-300' : 'text-slate-700'} mb-4 font-medium`}>
                          Cryptologic Warfare Officer, USN
                      </h2>
                      <h3 className={`text-xl lg:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-slate-700'} mb-8 font-medium`}>
                          Extensive Leadership Experience | Software Development | Advanced Technical Solutions
                      </h3>
                      <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                          Proven leader with 12+ years solving the most complex technical challenges across intelligence programs,
                          leading teams of various sizes including a team of 120+ world-wide deploying Sailors, and developing innovative software solutions
                          that deliver mission-critical capabilities to warfighters and the Intelligence Community.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                          <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                              View projects
                          </button>
                          <button className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                              Download Resume
                          </button>
                      </div>
                  </div>

              </div>
          </div>
      </main>
    );
};

export default Hero;