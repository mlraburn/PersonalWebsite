import React from 'react';

interface ContactProps {
    isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
    return (
        <section id="contact" className={`py-10 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-800'} text-white`}>
            <div className="container mx-auto px-6">
                <h2 className={`text-3xl lg:text-4xl font-bold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-white'}`}>
                    Contact
                </h2>

                <div className="max-w-2xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-2 items-center">
                        {/* Left Column - Contact Methods */}
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-semibold mb-1 text-amber-300">
                                Let's Connect
                            </h3>
                            <p className="text-gray-300 mb-2 text-lg leading-relaxed">
                                Looking forward to connecting and exploring how we can work together.
                            </p>

                            {/* Contact Methods */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-center md:justify-start space-x-4">
                                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                    </svg>
                                    <a
                                        href="mailto:matthew.raburn@gmail.com"
                                        className="text-lg text-amber-300 hover:text-amber-500 transition-colors font-medium"
                                    >
                                        matthew.raburn@gmail.com
                                    </a>
                                </div>

                                <div className="flex items-center justify-center md:justify-start space-x-4">
                                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                    </svg>
                                    <span className="text-lg text-gray-300 font-medium">(901) 517-0395</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Social Links */}
                        <div className="flex justify-center">
                            {/* Social Links Container */}
                            <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-slate-700'} border border-slate-600 p-6 rounded-lg shadow-lg`}>
                                <h4 className="text-lg font-semibold text-white mb-6 text-center">Find Me Online</h4>
                                <div className="flex justify-center space-x-8">
                                    {/* LinkedIn */}
                                    <a
                                        href="https://linkedin.com/in/matthew-raburn-76aaa746/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-14 h-14 bg-slate-600 rounded-lg hover:bg-slate-500 transition-all duration-200 group hover:scale-105"
                                        title="LinkedIn Profile"
                                    >
                                        <svg className="w-7 h-7 text-blue-400 group-hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>

                                    {/* GitHub */}
                                    <a
                                        href="https://github.com/mlraburn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-14 h-14 bg-slate-600 rounded-lg hover:bg-slate-500 transition-all duration-200 group hover:scale-105"
                                        title="GitHub Profile"
                                    >
                                        <svg className="w-7 h-7 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;