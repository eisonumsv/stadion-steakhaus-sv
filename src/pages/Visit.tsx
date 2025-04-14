
import React from 'react';
import { MapPin, Clock, Phone, Mail, Car, Train, Bus } from 'lucide-react';

const Visit = () => {
  const openingHours = [
    { day: 'Monday', hours: '11:00 - 22:00' },
    { day: 'Tuesday', hours: '11:00 - 22:00' },
    { day: 'Wednesday', hours: '11:00 - 22:00' },
    { day: 'Thursday', hours: '11:00 - 22:00' },
    { day: 'Friday', hours: '11:00 - 23:00' },
    { day: 'Saturday', hours: '10:00 - 23:00' },
    { day: 'Sunday', hours: '10:00 - 22:00' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hsv-blue text-white py-20">
        <div className="hsv-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Visit Us</h1>
          <p className="text-xl max-w-3xl">
            Find us at Volksparkstadion, the home of Hamburger SV
          </p>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="hsv-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-hsv-blue mb-6">Our Location</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-hsv-blue mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Address</h3>
                    <p className="text-gray-700">
                      Stadion Steakhaus SV<br />
                      Volksparkstadion<br />
                      Sylvesterallee 7<br />
                      22525 Hamburg<br />
                      Germany
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-hsv-blue mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Opening Hours</h3>
                    <p className="text-gray-700">
                      Steakhouse: Daily 11:00 - 23:00<br />
                      Café: Daily 08:00 - 20:00<br />
                      <span className="text-hsv-blue font-medium">*Extended hours on match days</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-hsv-blue mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Contact</h3>
                    <p className="text-gray-700">
                      Phone: +49 123 456 7890<br />
                      Email: info@stadionsteakhaussv.de
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://maps.google.com/?q=Volksparkstadion+Hamburg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Get Directions
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="h-96 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.5344520693164!2d9.898329677397367!3d53.58690997252568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1862c9c6af2d7%3A0xca48f38d548dd027!2sVolksparkstadion!5e0!3m2!1sen!2sus!4v1686061234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Volksparkstadion"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Hours */}
      <section className="py-16 bg-gray-100">
        <div className="hsv-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hsv-blue mb-4">Opening Hours</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our regular business hours for both the steakhouse and café
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Steakhouse Hours */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-hsv-blue mb-6 text-center">Steakhouse</h3>
              
              <div className="space-y-4">
                {openingHours.map((day, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="font-medium">{day.day}</span>
                    <span className="text-gray-700">{day.hours}</span>
                  </div>
                ))}
                
                <div className="pt-4">
                  <p className="text-hsv-blue font-medium">Match Days</p>
                  <p className="text-gray-700">Open 3 hours before and 2 hours after every HSV home match</p>
                </div>
              </div>
            </div>
            
            {/* Café Hours */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-hsv-blue mb-6 text-center">Café</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-gray-700">08:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium">Saturday & Sunday</span>
                  <span className="text-gray-700">08:00 - 20:00</span>
                </div>
                
                <div className="pt-4">
                  <p className="text-hsv-blue font-medium">Match Days</p>
                  <p className="text-gray-700">Open from 08:00 until 1 hour after match end</p>
                </div>
                
                <div className="pt-4">
                  <p className="text-hsv-blue font-medium">Breakfast Service</p>
                  <p className="text-gray-700">Monday - Friday: 08:00 - 11:00</p>
                  <p className="text-gray-700">Saturday & Sunday: 08:00 - 12:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
            <p className="text-center text-gray-700">
              <span className="font-semibold">Special Holiday Hours:</span> Please check our social media or contact us directly for holiday hours and special events.
            </p>
          </div>
        </div>
      </section>

      {/* How to Get There */}
      <section className="py-16 bg-white">
        <div className="hsv-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hsv-blue mb-4">How to Get Here</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Various transportation options to reach Volksparkstadion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* By Car */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Car className="h-8 w-8 text-hsv-blue mr-3" />
                <h3 className="text-xl font-bold">By Car</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-hsv-blue mr-2">•</span>
                  <span>From city center: Take the A7 highway towards Kiel/Flensburg</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hsv-blue mr-2">•</span>
                  <span>Exit at Hamburg-Stellingen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hsv-blue mr-2">•</span>
                  <span>Follow signs to Volksparkstadion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hsv-blue mr-2">•</span>
                  <span>Parking available on-site (€5 per vehicle)</span>
                </li>
              </ul>
            </div>
            
            {/* By Public Transport */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Train className="h-8 w-8 text-hsv-blue mr-3" />
                <h3 className="text-xl font-bold">By Public Transport</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-hsv-blue mr-2">•</span>
                  <span>S-Bahn: Line S3 or S5 to "Stellingen" station</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hsv-blue mr-2">•</span>
                  <span>15-minute walk to the stadium</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hsv-blue mr-2">•</span>
                  <span>Special shuttle buses operate on match days</span>
                </li>
              </ul>
            </div>
            
            {/* By Bus */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Bus className="h-8 w-8 text-hsv-blue mr-3" />
                <h3 className="text-xl font-bold">By Bus</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-hsv-blue mr-2">•</span>
                  <span>Bus lines 22 and 180 stop directly at the stadium</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hsv-blue mr-2">•</span>
                  <span>From Central Station: Bus 22 direction "Stellingen"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hsv-blue mr-2">•</span>
                  <span>Journey time approximately 25 minutes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Information */}
      <section className="py-16 bg-gray-100">
        <div className="hsv-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hsv-blue mb-4">Accessibility Information</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We strive to make our restaurant accessible for all guests
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-hsv-blue mb-4">Restaurant Access</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Wheelchair accessible entrance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Elevator access to all dining areas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Accessible restroom facilities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Service animals welcome</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-hsv-blue mb-4">Special Assistance</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Menu available in large print and Braille upon request</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Staff trained to assist guests with special needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reserved accessible parking spaces near the entrance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Please contact us in advance for any specific requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visit;
