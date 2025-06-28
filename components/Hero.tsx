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
                  </div>

              </div>
          </div>
      </main>
    );
};

export default Hero;