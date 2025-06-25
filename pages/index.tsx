import React from 'react';

export default function HomePage(): JSX.Element {
  return (
      <div className="min-h-screen bg-amber-50 ">
        {/* Header with Naval Theme */}
        <header className="bg-slate-800 shadow-lg sticky top-0 z-50">
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
              <p>[Moon]</p>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="bg-amber-50">
          <div className="container mx-auto px-6 py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* Left side - Text content */}
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 mb-6 tracking-wide">
                  Matt Raburn
                </h1>
                <h2 className="text-2xl lg:text-3xl text-slate-700 mb-4 font-medium">
                  LCDR Cryptologic Warfare Officer, USN
                </h2>
                <h3 className="text-xl lg:text-2xl text-slate-700 mb-8 font-medium">
                  Extensive Leadership Experience | Software Development | Advanced Technical Solutions
                </h3>

                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                  Proven leader with 12+ years solving the most complex technical challenges across intelligence programs,
                  leading teams of various sizes include a team of 120+ world-wide deploying Sailors, and developing innovative software solutions
                  that deliver mission-critical capabilities to warfighters and the Intelligence Community.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    View Projects
                  </button>
                  <button className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Download Resume
                  </button>
                </div>
              </div>

              {/* Right side - Hero image */}
              <div className="lg:w-1/2 flex justify-center">
                <div className="w-96 h-64 rounded-lg shadow-xl overflow-hidden relative">
                  <img
                      src="/matt-and-george-on-christmas.jpg"
                      alt="Matt Raburn with Washington Crossing the Delaware painting"
                      className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-12">About</h2>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    I'm Matt Raburn from Memphis, TN - a proud Computer Science graduate from the United States Naval Academy
                    and LCDR transitioning to the Navy Reserves after 12+ years of active duty. My life centers around
                    dedication to others, whether serving on submarines, taking care of my family, or coaching youth soccer.
                    As a constant learner, I pursue excellence with passionate drive and am always the first to tackle
                    the toughest technical challenges.
                  </p>
                </div>

                <div className="bg-amber-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Core Values</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-slate-800 rounded-full mr-3"></div>
                      Voracious Learner
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-slate-800 rounded-full mr-3"></div>
                      Out of the Box Problem Solving
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-slate-800 rounded-full mr-3"></div>
                      Mission-Focused Excellence
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-slate-800 rounded-full mr-3"></div>
                      People-Centered Leadership
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section - HORIZONTAL TIMELINE */}
        <section id="experience" className="py-20 bg-amber-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-16 text-center">Experience</h2>

            <div className="max-w-6xl mx-auto">
              {/* Timeline Container */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-20 left-0 right-0 h-1 bg-slate-300"></div>

                {/* Timeline Items - REVERSED ORDER */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

                  {/* Naval Academy - Now First */}
                  <div className="relative group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-lg z-10 relative">
                        🎓
                      </div>
                      <h3 className="text-sm font-semibold text-slate-800 text-center mb-2">Computer Science</h3>
                      <p className="text-xs text-slate-600 text-center mb-1">US Naval Academy</p>
                      <p className="text-xs text-slate-500">2011 - 2015</p>
                    </div>

                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                      <div className="bg-slate-800 text-white p-4 rounded-lg shadow-xl w-80">
                        <h4 className="font-semibold mb-2">Computer Science Graduate</h4>
                        <p className="text-sm mb-2">Bachelor of Science in Computer Science from the United States Naval Academy.</p>
                        <ul className="text-xs space-y-1">
                          <li>• Strong technical foundation in software development</li>
                          <li>• Leadership development and military training</li>
                          <li>• Commissioned as Naval Officer</li>
                        </ul>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-transparent border-t-slate-800"></div>
                      </div>
                    </div>
                  </div>

                  {/* Division Officer */}
                  <div className="relative group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-lg z-10 relative">
                        🚤
                      </div>
                      <h3 className="text-sm font-semibold text-slate-800 text-center mb-2">Division Officer</h3>
                      <p className="text-xs text-slate-600 text-center mb-1">Submarine Operations</p>
                      <p className="text-xs text-slate-500">2016 - 2018</p>
                    </div>

                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                      <div className="bg-slate-800 text-white p-4 rounded-lg shadow-xl w-80">
                        <h4 className="font-semibold mb-2">Division Officer - 20+ Sailors</h4>
                        <p className="text-sm mb-2">Led teams of 20+ Sailors on worldwide submarine deployments performing critical operations.</p>
                        <ul className="text-xs space-y-1">
                          <li>• Managed submarine-based operations globally</li>
                          <li>• Built foundation in SIGINT operations</li>
                          <li>• Developed early leadership experience</li>
                        </ul>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-transparent border-t-slate-800"></div>
                      </div>
                    </div>
                  </div>

                  {/* Department Head */}
                  <div className="relative group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-lg z-10 relative">
                        👥
                      </div>
                      <h3 className="text-sm font-semibold text-slate-800 text-center mb-2">Department Head</h3>
                      <p className="text-xs text-slate-600 text-center mb-1">Global Operations</p>
                      <p className="text-xs text-slate-500">2018 - 2020</p>
                    </div>

                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                      <div className="bg-slate-800 text-white p-4 rounded-lg shadow-xl w-80">
                        <h4 className="font-semibold mb-2">Department Head - 120+ Personnel</h4>
                        <p className="text-sm mb-2">Operationally and administratively responsible for 120+ Sailors deploying worldwide for DoD and IC operations.</p>
                        <ul className="text-xs space-y-1">
                          <li>• Managed training and qualifications globally</li>
                          <li>• Led highly technical operations worldwide</li>
                          <li>• Ultimate responsibility for personnel and missions</li>
                        </ul>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-transparent border-t-slate-800"></div>
                      </div>
                    </div>
                  </div>

                  {/* Pentagon */}
                  <div className="relative group">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-lg z-10 relative">
                        🏛️
                      </div>
                      <h3 className="text-sm font-semibold text-slate-800 text-center mb-2">Material Support Officer</h3>
                      <p className="text-xs text-slate-600 text-center mb-1">Pentagon</p>
                      <p className="text-xs text-slate-500">2020 - 2022</p>
                    </div>

                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                      <div className="bg-slate-800 text-white p-4 rounded-lg shadow-xl w-80">
                        <h4 className="font-semibold mb-2">Material Support Officer, Intelligence Planning Officer</h4>
                        <p className="text-sm mb-2">Special Advisor for Information Warfare and intelligence systems for national programs.</p>
                        <ul className="text-xs space-y-1">
                          <li>• #1 of 22 LTs across all designators</li>
                          <li>• Managed $100M+ Congressional Budget submissions</li>
                          <li>• Developed fleet-wide EW training programs</li>
                        </ul>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-transparent border-t-slate-800"></div>
                      </div>
                    </div>
                  </div>

                  {/* NRO Current - Now Last */}
                  <div className="relative group">
                    <div className="flex flex-col items-center">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-lg z-10 relative">
                        🛰️
                      </div>
                      {/* Title */}
                      <h3 className="text-sm font-semibold text-slate-800 text-center mb-2">Operations Support Chief</h3>
                      <p className="text-xs text-slate-600 text-center mb-1">NRO</p>
                      <p className="text-xs text-slate-500">2022 - Present</p>
                    </div>

                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                      <div className="bg-slate-800 text-white p-4 rounded-lg shadow-xl w-80">
                        <h4 className="font-semibold mb-2">Operations Support Chief, Metrics Chief</h4>
                        <p className="text-sm mb-2">Leading operations support and metrics for multi-billion dollar satellite ground systems serving IC and DoD.</p>
                        <ul className="text-xs space-y-1">
                          <li>• Authored 30+ reports, 4 briefed to DNI</li>
                          <li>• Led 23+ person global tradecraft team</li>
                          <li>• Established 24/7 operations support desk</li>
                        </ul>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-transparent border-t-slate-800"></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-12 text-center">Projects</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-amber-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-900 to-slate-700 rounded-lg mb-6 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-3xl mb-2">📊</div>
                    <span className="text-sm font-medium">Metrics & Analytics</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Automated Metrics Platform</h3>
                <p className="text-slate-600 mb-4">Developed web-based metrics collection system providing real-time visibility into program performance, user engagement, and system health across 20+ different metrics.</p>
                <button className="text-slate-800 font-semibold hover:text-slate-600 transition-colors">
                  Learn More →
                </button>
              </div>

              <div className="bg-amber-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-emerald-700 to-teal-600 rounded-lg mb-6 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🛡️</div>
                    <span className="text-sm font-medium">Operations Support</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">24/7 Operations Center</h3>
                <p className="text-slate-600 mb-4">Established permanent round-the-clock support desk and standard operating procedures, ensuring continuous mission support during multiple national crisis events.</p>
                <button className="text-slate-800 font-semibold hover:text-slate-600 transition-colors">
                  Learn More →
                </button>
              </div>

              <div className="bg-amber-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg mb-6 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-3xl mb-2">📡</div>
                    <span className="text-sm font-medium">Electronic Warfare</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Fleet EW Training Program</h3>
                <p className="text-slate-600 mb-4">Created comprehensive fleet-wide Electronic Warfare training program and operational field guides, dramatically improving intelligence collection while reducing mission risk.</p>
                <button className="text-slate-800 font-semibold hover:text-slate-600 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-12">Contact</h2>

            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-300 mb-8">
                Ready to bring proven leadership and technical expertise to your organization?
                Let's discuss how my experience in intelligence operations and program management
                can drive mission success for your team.
              </p>

              <div className="space-y-4">
                <a href="mailto:matt.raburn@example.com" className="block text-lg text-amber-200 hover:text-amber-100 transition-colors">
                  matt.raburn@example.com
                </a>
                <a href="https://linkedin.com/in/mattraburnUSN" className="block text-lg text-amber-200 hover:text-amber-100 transition-colors">
                  LinkedIn Profile
                </a>
                <div className="pt-8">
                  <button className="bg-amber-200 text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-amber-100 transition-colors">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-gray-400 py-8">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2025 LCDR Matt Raburn, USN. All rights reserved.</p>
          </div>
        </footer>
      </div>
  );
}