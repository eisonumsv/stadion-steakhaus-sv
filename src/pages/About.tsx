
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hsv-blue text-white py-20">
        <div className="hsv-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl">
            Discover the story behind Stadion Steakhaus SV, where passion for football meets culinary excellence
          </p>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-16 bg-white">
        <div className="hsv-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-hsv-blue mb-6">Owner's Welcome</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Welcome to Stadion Steakhaus SV! I'm Isaac John Marcial, the proud owner of this unique dining establishment nestled within the iconic Volksparkstadion.
                </p>
                <p>
                  My journey began with dual passions: a love for football and a dedication to culinary excellence. Having spent years in the hospitality industry, I dreamed of creating a space where fans could experience premium dining while surrounded by the energy of Hamburg's legendary football club.
                </p>
                <p>
                  At Stadion Steakhaus SV, we combine traditional German cuisine with contemporary steakhouse offerings. Every dish is crafted with locally-sourced ingredients and served with the same passion that HSV brings to the pitch.
                </p>
                <p>
                  Whether you're joining us on match day for the electric atmosphere or visiting during the week for a quiet meal with a view, we're committed to providing an unforgettable dining experience.
                </p>
                <p>
                  Thank you for being our guest. We look forward to welcoming you again and again.
                </p>
                <p className="font-semibold">
                  Isaac John Marcial<br />
                  Owner, Stadion Steakhaus SV
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/e70dbdbe-7147-4679-b3b1-756040b644b6.png" 
                alt="Isaac John Marcial" 
                className="rounded-lg shadow-xl max-w-full h-auto mx-auto"
              />
              <div className="absolute -bottom-5 -right-5 bg-hsv-blue text-white py-3 px-6 rounded-lg">
                <p className="font-semibold">Isaac John Marcial</p>
                <p className="text-sm">Owner & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Message */}
      <section className="py-16 bg-gray-100">
        <div className="hsv-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hsv-blue mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated team that brings passion and expertise to every aspect of your dining experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Executive Chef */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-300">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Executive Chef" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Hans Müller</h3>
                <p className="text-hsv-blue font-medium mb-3">Executive Chef</p>
                <p className="text-gray-600">
                  With over 20 years of experience in premium restaurants across Europe, Chef Hans brings culinary mastery to every dish we serve.
                </p>
              </div>
            </div>
            
            {/* Restaurant Manager */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-300">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Restaurant Manager" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sophia Weber</h3>
                <p className="text-hsv-blue font-medium mb-3">Restaurant Manager</p>
                <p className="text-gray-600">
                  Sophia ensures that your dining experience is flawless from reservation to farewell, leading our service team with grace and attention to detail.
                </p>
              </div>
            </div>
            
            {/* Head Barista */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-300">
                <img 
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Head Barista" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Luis Schmidt</h3>
                <p className="text-hsv-blue font-medium mb-3">Head Barista</p>
                <p className="text-gray-600">
                  An award-winning coffee expert, Luis creates artisanal beverages that perfectly complement your meal or provide a cozy café experience.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-hsv-blue mb-4">Staff Message</h3>
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <img 
                src="/lovable-uploads/a7e14b4f-94b3-42f8-875a-f96b2e11e00f.png" 
                alt="Stadium Interior" 
                className="w-full md:w-1/3 rounded-lg shadow-md"
              />
              <div className="md:w-2/3">
                <p className="text-gray-700 mb-4 italic">
                  "As the team behind Stadion Steakhaus SV, we take immense pride in creating memorable dining experiences within these historic walls. Every day, we have the privilege of welcoming guests to a space where Hamburg's football legacy meets culinary excellence.
                </p>
                <p className="text-gray-700 mb-4 italic">
                  Our connection to this stadium goes beyond just our location – we embody the same values of passion, teamwork, and dedication that HSV represents. From our kitchen staff to our servers, we work together to ensure each guest feels the special atmosphere that makes dining here unique.
                </p>
                <p className="text-gray-700 italic">
                  Whether you're celebrating a victory, enjoying a pre-match meal, or simply dining with us on a quiet evening, know that we pour our hearts into making your experience exceptional. We look forward to serving you and sharing our love for great food and football."
                </p>
                <p className="text-right font-semibold text-hsv-blue mt-4">
                  - The Stadion Steakhaus SV Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="hsv-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hsv-blue mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide us in creating exceptional experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 border-l-4 border-hsv-blue bg-gray-50">
              <h3 className="text-xl font-bold mb-3">Passion</h3>
              <p className="text-gray-600">
                We bring the same passion to our cuisine that HSV brings to the pitch.
              </p>
            </div>
            
            <div className="p-6 border-l-4 border-hsv-blue bg-gray-50">
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                From ingredients to service, we never compromise on delivering excellence.
              </p>
            </div>
            
            <div className="p-6 border-l-4 border-hsv-blue bg-gray-50">
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                We're proud to be part of Hamburg's football community and culture.
              </p>
            </div>
            
            <div className="p-6 border-l-4 border-hsv-blue bg-gray-50">
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                While respecting tradition, we constantly evolve our offerings and experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
