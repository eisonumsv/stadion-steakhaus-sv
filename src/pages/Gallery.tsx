
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("dishes");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hsv-blue text-white py-20">
        <div className="hsv-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl max-w-3xl">
            Explore our visual journey through food, ambiance, and the Volksparkstadion experience
          </p>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-16">
        <div className="hsv-container">
          <Tabs defaultValue="dishes" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-2xl grid-cols-4">
                <TabsTrigger value="dishes" className="text-sm md:text-base py-3">Dishes</TabsTrigger>
                <TabsTrigger value="interior" className="text-sm md:text-base py-3">Interior</TabsTrigger>
                <TabsTrigger value="stadium" className="text-sm md:text-base py-3">Stadium</TabsTrigger>
                <TabsTrigger value="football" className="text-sm md:text-base py-3">Football</TabsTrigger>
              </TabsList>
            </div>

            {/* Dishes Gallery */}
            <TabsContent value="dishes" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Premium Ribeye Steak" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Premium Ribeye Steak</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="T-Bone Steak" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">T-Bone Steak</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Grilled Vegetables" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Grilled Vegetables</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1599921841143-819065a55cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Wiener Schnitzel" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Wiener Schnitzel</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Currywurst" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Currywurst</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1609351593419-733240323529?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Fresh Pastries" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Fresh Pastries</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Artisanal Coffee" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Artisanal Coffee</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Club Sandwich" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Club Sandwich</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1511018556340-d16986a1c194?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Breakfast Plate" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Breakfast Plate</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Interior Gallery */}
            <TabsContent value="interior" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/a7e14b4f-94b3-42f8-875a-f96b2e11e00f.png" 
                    alt="Steakhouse Dining Area" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Steakhouse Dining Area</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Private Dining Room" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Private Dining Room</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Bar Area" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Bar Area</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Café Seating" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Café Seating</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Chef's Table" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Chef's Table</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1586999768265-24af89630739?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Outdoor Terrace" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Outdoor Terrace</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Stadium Gallery */}
            <TabsContent value="stadium" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative group overflow-hidden rounded-lg md:col-span-2 md:row-span-2">
                  <img 
                    src="https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Volksparkstadion Exterior" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Volksparkstadion Exterior</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1508997449629-303059a039c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Stadium Seating" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Stadium Seating</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1540744276164-9dc988e739a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="VIP Entrance" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">VIP Entrance</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Stadium at Night" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Stadium at Night</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1577583113306-703e0071f8b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Stadium View from Restaurant" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Stadium View from Restaurant</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Football Gallery */}
            <TabsContent value="football" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative group overflow-hidden rounded-lg md:col-span-3">
                  <img 
                    src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Match Day Crowd" 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Match Day Crowd</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Celebration Moment" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Celebration Moment</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Team Huddle" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Team Huddle</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Fan Zone" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Fan Zone</span>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg md:col-span-2">
                  <img 
                    src="https://images.unsplash.com/photo-1540552999122-a0ac7a9a0008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Victory Celebration" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">Victory Celebration</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Photo Shoot Info */}
      <section className="py-16 bg-gray-100">
        <div className="hsv-container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-hsv-blue mb-4">Private Events & Photo Shoots</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our unique location is available for private events and commercial photo shoots
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-hsv-blue mb-4">Unique Setting for Your Special Occasions</h3>
                <p className="text-gray-600 mb-4">
                  With its stunning views of Volksparkstadion, Stadion Steakhaus SV offers an unforgettable backdrop for your private events, corporate functions, or commercial photo shoots.
                </p>
                <p className="text-gray-600 mb-4">
                  Our dedicated events team can help you plan every detail, from custom menus to specialized setups tailored to your needs.
                </p>
                <button className="btn-primary mt-2">Inquire About Availability</button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Private Event" 
                  className="rounded-lg shadow-md w-full h-40 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Corporate Function" 
                  className="rounded-lg shadow-md w-full h-40 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Photo Shoot" 
                  className="rounded-lg shadow-md w-full h-40 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Special Celebration" 
                  className="rounded-lg shadow-md w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
