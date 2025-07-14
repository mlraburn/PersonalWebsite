import React, { useState, useEffect } from 'react';

interface HeroProps {
    isDarkMode: boolean;
}

const imageList = [
    {
        src: "/matt-and-george-on-christmas.jpg",
        alt: "Matt and George Crossing The Delaware"
    },
    {
        src: "/Prof-Photo-W-Tie.jpeg",
        alt: "Professional Photo"
    },
    {
        src: "/Photo-Promotion-to-LT.JPG",
        alt: "Promotion to LT"
    }
];

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {

    // states for which image
    const [currentImage, setCurrentImage] = useState(0);



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % imageList.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    // Resume Button Click Function
    const resumeDownloadButton = async () => {
        try {
            // fetch api endpoint to add record of download
            await fetch('/api/track-downloads', { method: 'POST' });
        } catch (error) {
            console.error('Failed to track download of resume:', error);
        }

        // simulate a user clicking an a tag
        const link = document.createElement('a');
        link.href = '/resume/Matt%20Raburn%20-%20Resume.pdf';
        link.download = 'Matt_Raburn_Resume.pdf';
        document.body.appendChild(link); // add invisible a tag
        link.click();  // programmed click
        document.body.removeChild(link);  // clean up
    };

    return (
      // Semantic portion
      <main id="hero" className={`${isDarkMode ? 'bg-slate-900' : 'bg-amber-50'}`}>
          {/*margin div*/}
          <div className="container mx-auto px-6 py-16">
              {/*layout div*/}
              <div className="flex flex-col lg:flex-row items-center justify-between">
                  {/*Left side content*/}
                  <div className="lg:w-1/2 mb-12 lg:mb-0">
                      <h1 className={`text-5xl lg:text-7xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-6 tracking-wide`}>
                          Matt Raburn
                      </h1>
                      <h2 className={`text-2xl lg:text-3xl ${isDarkMode ? 'text-gray-300' : 'text-slate-700'} mb-4 font-medium`}>
                          LCDR, USN - Cryptologic Warfare Officer
                      </h2>
                      <h3 className={`text-xl lg:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-slate-700'} mb-8 font-medium`}>
                          Leadership | Software Development | Complex Technical Solutions
                      </h3>
                      <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-slate-600'} leading-relaxed mb-8 max-w-xl`}>
                          Proven leader with 12+ years solving the most complex technical challenges across intelligence programs,
                          leading teams of various sizes including a team of 120+ world-wide deploying Sailors, and developing innovative software solutions
                          that deliver mission-critical capabilities to warfighters and the intelligence community.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                          <a
                              href="#projects"
                              className={`inline-block ${isDarkMode ? 'bg-amber-600 hover:bg-amber-700' : 'bg-slate-800 hover:bg-slate-700'} text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center`}
                          >
                              View Projects
                          </a>
                          <button
                              onClick={resumeDownloadButton}
                              className={`inline-block border-2 ${isDarkMode ? 'border-amber-600 text-amber-600 hover:bg-amber-600' : 'border-slate-800 text-slate-800 hover:bg-slate-800'} hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center`}
                          >
                              Download Resume
                          </button>
                      </div>
                  </div>

                  {/*Right side content*/}
                  <div className="lg:w-1/2 flex justify-center">
                      {/*Image container*/}
                      <div className="w-80 h-80 rounded-lg shadow-x1 overflow-hidden relative">
                          <img
                              src={imageList[currentImage].src}
                              alt={imageList[currentImage].alt}
                              className="w-full h-full object-cover"
                          />
                      </div>
                  </div>
              </div>
          </div>
      </main>
    );
};

export default Hero;