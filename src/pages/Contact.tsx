
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hsv-blue text-white py-20">
        <div className="hsv-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Get in touch with us for reservations, inquiries, or feedback
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="hsv-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-hsv-blue mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="contact-input"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="contact-input"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="contact-input"
                      placeholder="+49 123 456 7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject *</label>
                    <select 
                      id="subject" 
                      className="contact-input"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Make a Reservation</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="event">Private Event</option>
                      <option value="career">Career Opportunity</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message *</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="contact-input"
                    placeholder="Please enter your message here..."
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="mt-1"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 text-gray-700 text-sm">
                    I agree to the processing of my personal data in accordance with the <a href="#" className="text-hsv-blue hover:underline">Privacy Policy</a>. *
                  </label>
                </div>
                
                <button 
                  type="submit"
                  className="btn-primary w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Reservation Info */}
            <div>
              <h2 className="text-3xl font-bold text-hsv-blue mb-6">Reservations</h2>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">Book a Table</h3>
                <p className="text-gray-700 mb-6">
                  For the best dining experience, we recommend making a reservation, especially on match days and weekends.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-hsv-blue mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700">+49 123 456 7890</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-hsv-blue mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700">reservations@stadionsteakhaussv.de</span>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-hsv-blue mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="text-gray-700 block">Reservation Hours:</span>
                      <span className="text-gray-600 text-sm">Monday - Sunday: 10:00 - 21:00</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="btn-primary w-full">
                    Book Online
                  </button>
                </div>
              </div>
              
              {/* Additional Info */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Private Events</h3>
                <p className="text-gray-700 mb-4">
                  Looking to host a special event? Our venue is available for private bookings, corporate functions, and celebrations.
                </p>
                <p className="text-gray-700 mb-6">
                  Contact our events team for more information on packages and availability.
                </p>
                
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-hsv-blue mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">events@stadionsteakhaussv.de</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="hsv-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hsv-blue mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about visiting us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-hsv-blue mb-2">Do I need to make a reservation?</h3>
              <p className="text-gray-700">
                While walk-ins are welcome, we highly recommend making a reservation, especially on weekends and match days. This ensures we can provide the best service and seating for your visit.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-hsv-blue mb-2">Is there a dress code?</h3>
              <p className="text-gray-700">
                We maintain a smart-casual dress code. While match day attire is acceptable, we ask guests to avoid sportswear (except HSV merchandise) and beachwear in the steakhouse.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-hsv-blue mb-2">Do I need a match ticket to dine at the restaurant?</h3>
              <p className="text-gray-700">
                No, our restaurant is open to the public regardless of match attendance. However, on match days, priority is given to those with match tickets for pre and post-match dining.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-hsv-blue mb-2">Can you accommodate dietary restrictions?</h3>
              <p className="text-gray-700">
                Yes, we offer vegetarian, vegan, and gluten-free options. Please inform us of any allergies or dietary requirements when making your reservation so our chefs can prepare accordingly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-hsv-blue mb-2">Is the restaurant suitable for children?</h3>
              <p className="text-gray-700">
                Yes, we welcome families and offer a dedicated children's menu. High chairs are available upon request, and our café area is particularly family-friendly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-hsv-blue mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-700">
                We accept all major credit cards, debit cards, and cash payments. Unfortunately, we do not accept checks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
