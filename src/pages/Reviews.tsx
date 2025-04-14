
import React from 'react';
import { Star } from 'lucide-react';

// Review Card Component
const ReviewCard = ({ name, date, rating, comment, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-700">{comment}</p>
    </div>
  );
};

const Reviews = () => {
  const testimonials = [
    {
      id: 1,
      name: "Thomas Weber",
      date: "March 15, 2024",
      rating: 5,
      comment: "Amazing experience dining here after the HSV match! The ribeye was cooked to perfection, and the view of the stadium from our table was spectacular. Will definitely be back for the next home game!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Laura Schmidt",
      date: "February 28, 2024",
      rating: 4,
      comment: "Visited the café before a match and was impressed by both the quality of the coffee and the warm atmosphere. The pastries are delicious, especially the apple strudel. Service was friendly but a bit slow during the pre-match rush.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Michael Baumann",
      date: "April 2, 2024",
      rating: 5,
      comment: "Had our anniversary dinner here and it was perfect. The staff went above and beyond to make our evening special. The filet mignon was the best I've had in Hamburg, and the stadium views at night are romantic and unique.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Sophia Müller",
      date: "March 10, 2024",
      rating: 4,
      comment: "Great spot for a business lunch. The lunch menu offers good value, and the quiet atmosphere away from the match-day crowds was perfect for our meeting. The German specialties are authentic and delicious.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Jan Hoffmann",
      date: "April 10, 2024",
      rating: 5,
      comment: "As a season ticket holder, I regularly visit the steakhouse after matches. The 'Victory Toast' with complimentary sparkling wine after an HSV win makes the celebration even sweeter! The staff know regular fans by name - it feels like home.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Monika Klein",
      date: "March 25, 2024",
      rating: 3,
      comment: "The food was excellent, particularly the T-bone steak. However, service was quite slow on match day despite having reservations. Understand it's busy, but they could use more staff. Still, the quality makes up for the wait.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      name: "Felix Wagner",
      date: "February 18, 2024",
      rating: 5,
      comment: "Brought clients from out of town here before a match and they were thoroughly impressed. The Fan Platter is perfect for sharing and showcases authentic German flavors. The staff's knowledge of both the menu and HSV history added to the experience.",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      name: "Emma Fischer",
      date: "April 5, 2024",
      rating: 5,
      comment: "The café is my regular weekend spot - their coffee is consistently excellent and the view can't be beat. The breakfast options are fresh and delicious. It's quieter than the steakhouse and perfect for a relaxed morning.",
      image: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const matchdayExperiences = [
    {
      id: 1,
      name: "HSV vs. St. Pauli Derby",
      date: "March 3, 2024",
      comment: "What an incredible derby day experience! Started with the pre-match menu at the steakhouse, enjoyed the electric atmosphere during the match, and celebrated the win with the Victory Toast afterward. The staff handled the full house with ease, and the energy was contagious!",
      image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Family Match Day Package",
      date: "February 10, 2024",
      comment: "Booked the family package for my son's birthday during the HSV match. The kids' menu was a hit, and they went above and beyond with a small birthday surprise. Being able to watch the warm-up from our table before heading to our seats was magical for the little ones!",
      image: "https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "International Visitors Experience",
      date: "April 7, 2024",
      comment: "Visiting from England, we wanted the full German football experience. The match day package with reserved seats and pre-match dining was perfect. The staff explained local traditions and the chef even prepared a special plate showcasing Hamburg specialties. A perfect cultural immersion!",
      image: "https://images.unsplash.com/photo-1531299983330-093763e1d08d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hsv-blue text-white py-20">
        <div className="hsv-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Guest Reviews</h1>
          <p className="text-xl max-w-3xl">
            Hear what our guests have to say about their dining experiences and match day celebrations
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="hsv-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hsv-blue mb-4">Guest Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Authentic reviews from our valued guests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map(review => (
              <ReviewCard 
                key={review.id}
                name={review.name}
                date={review.date}
                rating={review.rating}
                comment={review.comment}
                image={review.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Match Day Experiences */}
      <section className="py-16 bg-gray-100">
        <div className="hsv-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hsv-blue mb-4">Match Day Experiences</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Special stories from our guests on HSV match days
            </p>
          </div>

          <div className="space-y-8">
            {matchdayExperiences.map(experience => (
              <div key={experience.id} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <img 
                      src={experience.image} 
                      alt={experience.name} 
                      className="w-full h-64 object-cover rounded-lg shadow-sm"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-hsv-blue">{experience.name}</h3>
                      <span className="text-gray-500 text-sm">{experience.date}</span>
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{experience.comment}"</p>
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="h-5 w-5 text-yellow-400 fill-yellow-400" 
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">Outstanding Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="py-16 bg-white">
        <div className="hsv-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hsv-blue mb-4">Share Your Experience</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We value your feedback. Let us know about your visit to Stadion Steakhaus SV
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="contact-input"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="contact-input"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Your Rating</label>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-8 w-8 text-gray-300 cursor-pointer hover:text-yellow-400" 
                    />
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="review" className="block text-gray-700 font-medium mb-2">Your Review</label>
                <textarea 
                  id="review" 
                  rows={5} 
                  className="contact-input"
                  placeholder="Share your experience with us..."
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Visit Type</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="visit-type" className="mr-2" />
                    <span>Regular Visit</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="visit-type" className="mr-2" />
                    <span>Match Day</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="visit-type" className="mr-2" />
                    <span>Special Event</span>
                  </label>
                </div>
              </div>
              
              <button 
                type="submit"
                className="btn-primary w-full"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
