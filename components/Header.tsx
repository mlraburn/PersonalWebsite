import React, { useState } from 'react';

interface HeaderProps {
    isDarkMode: boolean;
    setIsDarkMode: (value: boolean) => void;
    onActivatePeriscope: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, setIsDarkMode, onActivatePeriscope }) => {
    // sun and mooon animation completion states
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const darkLightModeToggle = () => {
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

    // anchor animation states
    const [isShaking, setIsShaking] = useState(false);

    const anchorClick = () => {
        setIsShaking(true); // shake the anchor
        setTimeout(() => setIsShaking(false), 500); // stop shaking after 300 ms

        // Activate the Periscope
        onActivatePeriscope();
    };

    return (
        <>
            <header className="bg-slate-800 shadow-lg sticky top-0 z-50 overflow-hidden">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo with Anchor */}
                    <div className="flex items-center space-x-3 text-white">
                        <svg
                            className={`w-8 h-8 cursor-pointer hover:text-amber-300 active:text-amber-300 transition-colors ${isShaking ? 'animate-shake': ''}`}
                            fill="currentColor"
                            viewBox="0 0 64 64"
                            id="anchor-svg"
                            onClick={anchorClick}
                        >
                            <path d="m28.226 6.682c-.142.078-.412.236-.763.465.798.713 1.457 1.483 1.967 2.303.141-.086.229-.134.232-.135.341-.186.598-.503.711-.887.113-.383.07-.787-.121-1.139-.378-.701-1.285-1.006-2.026-.607z"/>
                            <path d="m29.249 32.036c.636.815 1.213 1.605 1.735 2.373.715-.436 1.666-.899 2.785-1.213-.477-.729-.997-1.472-1.565-2.232-1.171.206-2.189.644-2.955 1.072z"/>
                            <path d="m34.943 35.12c-.194-.344-.399-.692-.614-1.042-1.124.273-2.083.733-2.795 1.165.609.952 1.128 1.87 1.558 2.755.939-.484 1.879-.82 2.811-1-.28-.595-.582-1.197-.929-1.811-.011-.022-.022-.044-.031-.067z"/>
                            <path d="m15.508 52.878c.028 1.722.756 3.076 1.558 4.055.537-.546 1.024-1.194 1.457-1.935-1.037-.558-2.042-1.273-3.015-2.12z"/>
                            <path d="m26.488 11.882c.335-.367.672-.695.989-.976.408-.363.791-.661 1.121-.9-.497-.807-1.158-1.566-1.974-2.266-.096.072-.184.134-.285.213-.585.458-1.211 1.018-1.824 1.659.627.545 1.344 1.304 1.973 2.27z"/>
                            <path d="m25.82 12.692c-.605-1.009-1.343-1.789-1.974-2.336-.719.859-1.386 1.845-1.889 2.972.992.406 1.871.915 2.622 1.526.325-.807.762-1.529 1.241-2.162z"/>
                            <path d="m27.402 54.817c-.639.42-1.319.836-2.045 1.247-.111.063-.233.104-.349.158.702.556 1.465 1.326 2.108 2.285.367-.211.733-.421 1.075-.639.825-.509 1.597-1.03 2.315-1.562-1.089-.779-2.228-1.239-3.104-1.489z"/>
                            <path d="m26.08 21.968c.77.133 1.445.258 1.966.354l.195.035c.728.119 1.26.775 1.229 1.523l-.073 2.117c2.255 2.516 4.049 4.83 5.448 7.025l-.314-9.146c-.031-.745.501-1.401 1.238-1.521l8.673-1.579c.586-.1 1.166.148 1.505.654.46.669 1.23 1.07 2.053 1.07.736 0 1.431-.321 1.907-.881.484-.571.684-1.302.56-2.058-.174-1.018-1.014-1.854-2.041-2.028-.98-.162-1.923.241-2.474 1.04-.307.443-.823.694-1.355.645l-7.718-.64c-.789-.075-1.379-.719-1.379-1.498v-5.62c0-.144.062-.279.169-.374 1.163-1.031 1.831-2.521 1.831-4.086 0-3.032-2.468-5.5-5.5-5.5-2.89 0-5.261 2.243-5.479 5.078.571-.398 1.017-.66 1.218-.77.356-.19.732-.276 1.103-.288.566-1.219 1.786-2.02 3.158-2.02 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-.593 0-1.163-.154-1.676-.433-.065.044-.125.094-.195.133-.014.007-.746.415-1.648 1.164.007.032.019.063.019.097v5.62c0 .779-.59 1.423-1.372 1.498l-7.726.64c-.542.05-1.049-.202-1.354-.644-.552-.801-1.496-1.193-2.479-1.041-1.023.175-1.863 1.011-2.037 2.031-.124.753.075 1.483.56 2.055.477.559 1.172.88 1.908.88.823 0 1.593-.401 2.059-1.074.333-.499.906-.754 1.497-.648l1.728.321c1.147.199 2.553.457 3.854.696z"/>
                            <path d="m23.831 56.601c-.017.003-.032.01-.049.013-.24.056-.53.086-.862.086-.226 0-.447-.025-.666-.055.18.852.286 1.911.19 3.043.155.009.309.022.466.022 1.142 0 2.271-.264 3.313-.74-.745-1.077-1.66-1.865-2.392-2.369z"/>
                            <path d="m31.523 30.077c-.63-.805-1.31-1.63-2.047-2.479-1.017.145-2.049.5-3.081 1.054.78.871 1.522 1.739 2.22 2.6.956-.551 1.929-.947 2.908-1.175z"/>
                            <path d="m25.692 22.912-.735-.134c-.988-.181-2.035-.374-2.988-.544.362.874.838 1.757 1.413 2.645.934-.526 1.901-.91 2.858-1.129-.196-.281-.379-.561-.548-.838z"/>
                            <path d="m28.519 26.515c-.155-.166-.318-.349-.481-.531-.411-.449-.786-.897-1.136-1.343-1.171.201-2.191.638-2.956 1.063.522.726 1.112 1.453 1.771 2.182.991-.556 1.989-.95 2.983-1.165-.062-.07-.119-.137-.181-.206z"/>
                            <path d="m34.616 45.195c.83.139 1.855.416 2.903.924.001-.009.004-.018.006-.027.222-1.384.195-2.809-.055-4.282-.94.252-1.891.679-2.839 1.28.068.72.063 1.421-.015 2.105z"/>
                            <path d="m52.5 49.87v.958c6.443-6.588 2.919-13.539 1.037-16.296-.073-.109-.174-.112-.232-.103-.048.007-.163.04-.205.182-.722 2.452-2.769 7.996-7.132 10.889h.672c.448 0 .843.271 1.006.688.161.412.057.871-.267 1.169-1.707 1.602-5.453 4.403-11.316 5.139-.074.011-.145.004-.211-.017-.356.487-.749.964-1.172 1.433-.011.016-.015.036-.028.051-.017.02-.041.029-.06.045-1.397 1.528-3.159 2.969-5.322 4.355.948.912 1.765 2.194 2.418 3.867.095.241.307.275.394.279.069.004.324-.007.452-.27 1.335-2.716 3.874-6.088 8.396-6.735 4.739-.676 8.069-4.229 9.633-6.288.292-.378.765-.521 1.212-.369.44.152.725.553.725 1.023z"/>
                            <path d="m20.57 54.848c.822.321 1.662.543 2.497.657.22.028.432.067.64.111.375-.069.787-.21 1.156-.42 5.31-3.011 8.159-6.191 8.713-9.723.523-3.289-.947-7.2-4.435-11.906l-.561 16.134c-.026.753-.387 1.446-.988 1.903-.606.459-1.378.62-2.117.439-1.918-.467-3.729-1.188-5.385-2.141-1.545-.892-2.663-1.805-3.328-2.414-.005-.005-.08-.075-.086-.08-.378-.35-.482-.809-.321-1.221.163-.418.558-.688 1.006-.688h.672c-4.363-2.893-6.41-8.437-7.132-10.889-.042-.142-.157-.175-.205-.182-.056-.01-.158-.008-.231.1-1.883 2.76-5.407 9.711 1.036 16.299v-.957c0-.47.285-.871.727-1.022.445-.15.919-.009 1.209.366.604.797 1.27 1.552 1.984 2.249 1.601 1.553 3.309 2.68 5.077 3.35.025.009.05.021.072.035z"/>
                            <path d="m28.443 54.099c.891.321 1.922.816 2.896 1.56.798-.639 1.524-1.292 2.169-1.959-.985-.727-2.01-1.178-2.812-1.438-.665.622-1.416 1.234-2.253 1.837z"/>
                            <path d="m34.48 42.014c.931-.548 1.869-.944 2.802-1.187-.223-.941-.545-1.905-.957-2.892-.907.146-1.858.473-2.817.973.459 1.079.783 2.112.972 3.106z"/>
                            <path d="m33.531 48.67c1.053.169 2.025.466 2.905.885.377-.791.668-1.597.871-2.427-1.017-.532-2.037-.809-2.852-.946-.187.85-.495 1.678-.924 2.488z"/>
                            <path d="m20.083 55.725c-.221-.085-.437-.198-.656-.296-.494.859-1.057 1.608-1.683 2.238 1.024.984 2.301 1.64 3.707 1.906.101-1.247-.079-2.391-.299-3.224-.388-.159-.75-.364-1.069-.624z"/>
                            <path d="m35.561 51.148c.151-.235.276-.472.41-.709-.892-.419-1.893-.702-2.991-.841-.419.636-.918 1.261-1.496 1.875.819.307 1.78.79 2.704 1.487.518-.594.977-1.198 1.373-1.812z"/>
                            <path d="m24.116 16.471c.033-.201.086-.391.134-.584-.731-.657-1.618-1.2-2.645-1.624-.184.537-.344 1.091-.443 1.681-.116.697-.144 1.415-.122 2.136l2.995-.248c-.01-.442.006-.889.081-1.361z"/>
                        </svg>
                        <a href="#top" className="text-xl font-bold tracking-wider hover:text-amber-300 active:text-amber-300 transition-colors">Matt Raburn</a>
                    </div>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center space-x-8 text-white">
                        <a href="#about" className="hover:text-amber-300 active:text-amber-300 transition-colors font-medium">About</a>
                        <a href="#experience" className="hover:text-amber-300 active:text-amber-300 transition-colors font-medium">Experience</a>
                        <a href="#projects" className="hover:text-amber-300 active:text-amber-300 transition-colors font-medium">Projects</a>
                        <a href="#metrics" className="hover:text-amber-300 active:text-amber-300 transition-colors font-medium">Metrics</a>
                        <a href="#contact" className="hover:text-amber-300 active:text-amber-300 transition-colors font-medium">Contact</a>

                        {/* Dark mode toggle - shows on all screen sizes */}
                        <button
                            onClick={() => darkLightModeToggle()}
                            className="text-white cursor-pointer hover:text-amber-200 active:text-amber-200 transition-colors ml-4 relative">
                            {/*Animation Div*/}
                            <div
                                className={`transition-transform ${isAnimating ? 'animate-reverse-spin' : ''}`}
                                style={{
                                    transformOrigin: '50% calc(100% + 1rem)',
                                }}
                            >
                                {isDarkMode ? (
                                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:fill-amber-200 active:fill-amber-200 size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                    </svg>
                                ) : (
                                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:fill-amber-200 active:fill-amber-200 size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                    </svg>
                                )}
                            </div>
                        </button>

                    </div>
                    {/* Mobile buttons */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            className="text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg className="w-6 h-6 active:text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {/* Dark mode toggle in Mobile */}
                        <button
                            onClick={() => darkLightModeToggle()}
                            className="text-white cursor-pointer active:text-amber-200 transition-colors relative">
                            <div
                                className={`transition-transform ${isAnimating ? 'animate-reverse-spin' : ''}`}
                                style={{
                                    transformOrigin: '50% calc(100% + 1rem)',
                                }}
                            >
                                {isDarkMode ? (
                                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="active:fill-amber-200 size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                    </svg>
                                ) : (
                                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="active:fill-amber-200 size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                    </svg>
                                )}
                            </div>
                        </button>
                    </div>
                </nav>
            </header>
            {/* Mobile menu as separate overlay */}
            <div className={`fixed left-0 right-0 bg-slate-800 border-t border-slate-600 z-40 md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="px-6 py-4 space-y-4">
                    <a
                        href="#about"
                        className="block text-white active:text-amber-300 transition-colors font-medium py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        About
                    </a>
                    <a
                        href="#experience"
                        className="block text-white active:text-amber-300 transition-colors font-medium py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Experience
                    </a>
                    <a
                        href="#projects"
                        className="block text-white active:text-amber-300 transition-colors font-medium py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Projects
                    </a>
                    <a
                        href="#metrics"
                        className="block text-white active:text-amber-300 transition-colors font-medium py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Metrics
                    </a>
                    <a
                        href="#contact"
                        className="block text-white active:text-amber-300 transition-colors font-medium py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;