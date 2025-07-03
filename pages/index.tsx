import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Periscope from '../components/Periscope';
import About from '../components/About';
import Experience from '../components/Experience';

export default function HomePage(): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
      <>
          <Periscope />
          <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-amber-50'}`}>
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <Hero isDarkMode={isDarkMode} />
              {/*Add section for tech stack*/}
            <About isDarkMode={isDarkMode} />
            <Experience isDarkMode={isDarkMode} />
            {/*Projects />
            <Contact />
            <Footer />*/}
          </div>
      </>
  );
}