import React, { useState } from 'react';

interface HeaderProps {
    isDarkMode: boolean;
    setIsDarkMode: (value: boolean) => void;
}

export default function Header({ isDarkMode, setIsDarkMode }: HeaderProps) {
    // animation completion states
    const [isAnimating, setIsAnimating] = useState(false);

    const animateToggle = () => {
        setIsAnimating(true);

        // after animation set back to false
        setTimeout(() => {
           setIsAnimating(false);
        }, 1000);

        // then small timeout to finally convert to dark mode
        setTimeout(() => {
            setIsDarkMode(!isDarkMode);
        }, 500);
    }

    return (
        <header className="bg-slate-800 shadow-lg sticky top-0 z-50 overflow-hidden">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo with Anchor */}
                <div className="flex items-center space-x-3 text-white">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V9H21ZM3 9V7L9 6.5V9H3ZM12 8C12.8 8 13.6 8.2 14.3 8.5L15.9 12.8C16.1 13.5 15.6 14.2 14.8 14.2H13V22H11V14.2H9.2C8.4 14.2 7.9 13.5 8.1 12.8L9.7 8.5C10.4 8.2 11.2 8 12 8Z"/>
                    </svg>
                    <span className="text-xl font-bold tracking-wider">Matt Raburn</span>
                </div>

                {/* Navigation */}
                <div className="hidden md:flex space-x-8 text-white">
                    <a href="#about" className="hover:text-amber-200 transition-colors font-medium">About</a>
                    <a href="#experience" className="hover:text-amber-200 transition-colors font-medium">Experience</a>
                    <a href="#projects" className="hover:text-amber-200 transition-colors font-medium">Projects</a>
                    <a href="#contact" className="hover:text-amber-200 transition-colors font-medium">Contact</a>
                    <button
                        onClick={() => animateToggle()}
                        className="text-white hover:text-amber-200 transition-colors ml-4 relative">
                        {/*Animation Div*/}
                        <div // animate-reverse-spin is a custom animation in globall.css
                            className={`transition-transform ${isAnimating ? 'animate-reverse-spin' : ''}`}
                            style={{
                                transformOrigin: '50% calc(100% + 1rem)',
                            }}
                        >
                            {isDarkMode ? (
                                // Display sun when in dark mode
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:fill-amber-200 size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                </svg>
                            ) : (
                                // Display moon when in light mode
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:fill-amber-200 size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                </svg>
                            )}
                        </div>
                    </button>
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>
        </header>
    );
}
