
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/lovable-uploads/a7e14b4f-94b3-42f8-875a-f96b2e11e00f.png')" }}
        ></div>
        
        <div className="hsv-container relative z-20 text-white">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Stadion Steakhaus SV
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Experience premium dining with a view of Hamburg's legendary stadium
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/menu" 
                className="btn-primary flex items-center justify-center sm:justify-start"
              >
                View Our Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white text-hsv-blue px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all transform hover:-translate-y-1 flex items-center justify-center sm:justify-start"
              >
                Make a Reservation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="hsv-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hsv-blue mb-4">
              Welcome to Stadion Steakhaus SV
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Where football passion meets culinary excellence in the heart of Hamburg's iconic Volksparkstadion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-hsv-blue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Premium Steakhouse</h3>
              <p className="text-gray-600 text-center">
                Enjoy the finest cuts of meat prepared to perfection by our expert chefs, with panoramic views of the stadium.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-hsv-blue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Match Day Experience</h3>
              <p className="text-gray-600 text-center">
                Watch the action unfold while enjoying our exclusive match day menu and special event packages.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-hsv-blue rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Cozy Café</h3>
              <p className="text-gray-600 text-center">
                Visit our café for artisanal coffee, fresh pastries, and light meals in a relaxed atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hsv-blue py-16">
        <div className="hsv-container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-3">Ready to experience the best of Hamburg?</h2>
              <p className="text-lg opacity-90">Reserve your table now or view our special match day offers.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/menu" 
                className="bg-white text-hsv-blue px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
              >
                View Menu
              </Link>
              <Link 
                to="/contact" 
                className="bg-hsv-lightblue text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
              >
                Make Reservation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
