import React from 'react';

export default function HomePage(): JSX.Element {
  return (
      <div className="min-h-screen bg-amber-50">
        {/* Header with Naval Theme */}
        <header className="bg-slate-800 shadow-lg">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo with Anchor */}
            <div className="flex items-center space-x-3 text-white">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V9H21ZM3 9V7L9 6.5V9H3ZM12 8C12.8 8 13.6 8.2 14.3 8.5L15.9 12.8C16.1 13.5 15.6 14.2 14.8 14.2H13V22H11V14.2H9.2C8.4 14.2 7.9 13.5 8.1 12.8L9.7 8.5C10.4 8.2 11.2 8 12 8Z"/>
              </svg>
              <span className="text-xl font-bold tracking-wider">YOUR NAME</span>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex space-x-8 text-white">
              <a href="#about" className="hover:text-amber-200 transition-colors font-medium">About</a>
              <a href="#experience" className="hover:text-amber-200 transition-colors font-medium">Experience</a>
              <a href="#projects" className="hover:text-amber-200 transition-colors font-medium">Projects</a>
              <a href="#contact" className="hover:text-amber-200 transition-colors font-medium">Contact</a>
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
                  YOUR NAME
                </h1>
                <h2 className="text-2xl lg:text-3xl text-slate-700 mb-4 font-medium">
                  Navy Officer
                </h2>
                <h3 className="text-xl lg:text-2xl text-slate-700 mb-8 font-medium">
                  & Project Manager
                </h3>

                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                  Experienced leader with a strong background in project management and operations.
                  Dedicated to service and excellence.
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

              {/* Right side - Hero image with historical painting background */}
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative max-w-md">
                  {/* Background with Washington Crossing Delaware style */}
                  <div className="w-96 h-64 bg-gradient-to-br from-amber-200 via-amber-100 to-slate-200 rounded-lg shadow-xl overflow-hidden relative">
                    {/* Simulated historical painting background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-amber-800/30 to-orange-300/40"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-700/40 to-transparent"></div>

                    {/* Placeholder for your photo */}
                    <div className="absolute bottom-4 right-4 w-24 h-24 bg-slate-300 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <span className="text-slate-600 text-sm font-medium">Your Photo</span>
                    </div>

                    {/* Flag element */}
                    <div className="absolute top-4 left-4 w-16 h-12 bg-slate-800 rounded-sm shadow-md flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
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
                    This image reflects my dedication to leadership and service, reminding me of the
                    values of courage and perseverance that I uphold in my career.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    With extensive experience in naval operations and project management, I bring
                    discipline, strategic thinking, and proven leadership to every challenge.
                  </p>
                </div>

                <div className="bg-amber-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Core Values</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-slate-800 rounded-full mr-3"></div>
                      Leadership & Service
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-slate-800 rounded-full mr-3"></div>
                      Strategic Planning
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-slate-800 rounded-full mr-3"></div>
                      Operational Excellence
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-slate-800 rounded-full mr-3"></div>
                      Team Development
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-amber-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-12 text-center">Experience</h2>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* Experience items */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-800">Naval Officer</h3>
                  <span className="text-slate-600 font-medium">2015 - Present</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Led cross-functional teams in complex operational environments, managing multi-million
                  dollar projects and ensuring mission success through strategic planning and execution.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-800">Project Manager</h3>
                  <span className="text-slate-600 font-medium">2012 - 2015</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Coordinated large-scale initiatives, managed stakeholder relationships, and delivered
                  projects on time and under budget while maintaining the highest quality standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-12 text-center">Projects</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3].map((project) => (
                  <div key={project} className="bg-amber-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-slate-200 rounded-lg mb-6 flex items-center justify-center">
                      <span className="text-slate-600">Project {project}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">Project Title</h3>
                    <p className="text-slate-600 mb-4">Brief description of the project scope, challenges overcome, and results achieved.</p>
                    <button className="text-slate-800 font-semibold hover:text-slate-600 transition-colors">
                      Learn More →
                    </button>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-12">Contact</h2>

            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-300 mb-8">
                Ready to work together? Let's connect and discuss how I can contribute to your team's success.
              </p>

              <div className="space-y-4">
                <a href="mailto:your.email@example.com" className="block text-lg text-amber-200 hover:text-amber-100 transition-colors">
                  your.email@example.com
                </a>
                <a href="https://linkedin.com/in/yourprofile" className="block text-lg text-amber-200 hover:text-amber-100 transition-colors">
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
            <p>&copy; 2025 Your Name. All rights reserved.</p>
          </div>
        </footer>
      </div>
  );
}