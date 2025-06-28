import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function HomePage(): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
      <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-amber-50'}`}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Hero />
        {/*<About />
        <Timeline />
        <Projects />
        <Contact />
        <Footer />*/}
    </div>
  );

}