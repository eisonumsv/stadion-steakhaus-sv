
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("steakhouse");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hsv-blue text-white py-20">
        <div className="hsv-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Menu</h1>
          <p className="text-xl max-w-3xl">
            Discover our exquisite selection of premium steaks, German specialties, and café offerings
          </p>
        </div>
      </section>

      {/* Menu Tabs */}
      <section className="py-16">
        <div className="hsv-container">
          <Tabs defaultValue="steakhouse" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="steakhouse" className="text-lg py-3">Steakhouse</TabsTrigger>
                <TabsTrigger value="cafe" className="text-lg py-3">Café</TabsTrigger>
              </TabsList>
            </div>

            {/* Steakhouse Menu */}
            <TabsContent value="steakhouse" className="animate-fade-in">
              <div className="mb-16">
                <h2 className="menu-category text-center">Premium Cuts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="menu-card">
                    <img 
                      src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Ribeye Steak" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold">Dry-Aged Ribeye</h3>
                        <span className="text-hsv-blue font-semibold">€38</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        300g prime German beef, dry-aged for 28 days, served with herb butter and your choice of side
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="bg-hsv-blue bg-opacity-10 text-hsv-blue px-2 py-1 rounded-full mr-2">Chef's Choice</span>
                        <span className="bg-gray-200 px-2 py-1 rounded-full">Gluten-Free</span>
                      </div>
                    </div>
                  </div>

                  <div className="menu-card">
                    <img 
                      src="https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Filet Mignon" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold">Filet Mignon</h3>
                        <span className="text-hsv-blue font-semibold">€42</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        250g tender filet, pan-seared to perfection, topped with truffle butter and served with roasted vegetables
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="bg-gray-200 px-2 py-1 rounded-full mr-2">Gluten-Free</span>
                        <span className="bg-gray-200 px-2 py-1 rounded-full">Grass-Fed</span>
                      </div>
                    </div>
                  </div>

                  <div className="menu-card">
                    <img 
                      src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="T-Bone Steak" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold">T-Bone Steak</h3>
                        <span className="text-hsv-blue font-semibold">€45</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        500g cut featuring both filet and strip portions, grilled with rosemary and garlic, served with potato gratin
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="bg-hsv-blue bg-opacity-10 text-hsv-blue px-2 py-1 rounded-full mr-2">Fan Favorite</span>
                        <span className="bg-gray-200 px-2 py-1 rounded-full">Local Beef</span>
                      </div>
                    </div>
                  </div>

                  <div className="menu-card">
                    <img 
                      src="https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Tomahawk Steak" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold">Tomahawk</h3>
                        <span className="text-hsv-blue font-semibold">€65</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        800g premium cut with bone, perfect for sharing, served with two sides of your choice and selection of sauces
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="bg-hsv-blue bg-opacity-10 text-hsv-blue px-2 py-1 rounded-full">Premium Selection</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="menu-category text-center">German Specialties</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="menu-card">
                    <img 
                      src="https://images.unsplash.com/photo-1599921841143-819065a55cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Schnitzel" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold">Wiener Schnitzel</h3>
                        <span className="text-hsv-blue font-semibold">€24</span>
                      </div>
                      <p className="text-gray-600">
                        Traditional breaded veal cutlet served with potato salad and cranberry sauce
                      </p>
                    </div>
                  </div>

                  <div className="menu-card">
                    <img 
                      src="https://images.unsplash.com/photo-1626711934535-9749ea933f73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Sauerbraten" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold">Sauerbraten</h3>
                        <span className="text-hsv-blue font-semibold">€26</span>
                      </div>
                      <p className="text-gray-600">
                        Marinated pot roast with rich gravy, served with red cabbage and potato dumplings
                      </p>
                    </div>
                  </div>

                  <div className="menu-card">
                    <img 
                      src="https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Bratwurst" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold">Currywurst</h3>
                        <span className="text-hsv-blue font-semibold">€16</span>
                      </div>
                      <p className="text-gray-600">
                        Hamburg-style curry sausage served with homemade curry sauce and hand-cut fries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="menu-category text-center">Sides & Extras</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Truffle Fries</h3>
                      <span className="text-hsv-blue font-medium">€8</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Creamed Spinach</h3>
                      <span className="text-hsv-blue font-medium">€7</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Potato Gratin</h3>
                      <span className="text-hsv-blue font-medium">€6</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Roasted Vegetables</h3>
                      <span className="text-hsv-blue font-medium">€7</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Green Salad</h3>
                      <span className="text-hsv-blue font-medium">€5</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Sautéed Mushrooms</h3>
                      <span className="text-hsv-blue font-medium">€7</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Pepper Sauce</h3>
                      <span className="text-hsv-blue font-medium">€3</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Béarnaise Sauce</h3>
                      <span className="text-hsv-blue font-medium">€3</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Café Menu */}
            <TabsContent value="cafe" className="animate-fade-in">
              <div className="mb-16">
                <h2 className="menu-category text-center">Coffee & Beverages</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="menu-card">
                    <img 
                      src="https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Coffee Selection" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">Coffee Selection</h3>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Espresso</span>
                          <span className="text-hsv-blue font-medium">€2.80</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Americano</span>
                          <span className="text-hsv-blue font-medium">€3.20</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Cappuccino</span>
                          <span className="text-hsv-blue font-medium">€3.80</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Latte Macchiato</span>
                          <span className="text-hsv-blue font-medium">€4.20</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Flat White</span>
                          <span className="text-hsv-blue font-medium">€4.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="menu-card">
                    <img 
                      src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Tea Selection" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">Tea & Hot Drinks</h3>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Loose Leaf Tea</span>
                          <span className="text-hsv-blue font-medium">€3.50</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Fresh Mint Tea</span>
                          <span className="text-hsv-blue font-medium">€3.80</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Chai Latte</span>
                          <span className="text-hsv-blue font-medium">€4.20</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Hot Chocolate</span>
                          <span className="text-hsv-blue font-medium">€4.00</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Matcha Latte</span>
                          <span className="text-hsv-blue font-medium">€4.50</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="menu-card">
                    <img 
                      src="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Cold Drinks" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">Cold Drinks</h3>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Iced Coffee</span>
                          <span className="text-hsv-blue font-medium">€4.00</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Fresh Lemonade</span>
                          <span className="text-hsv-blue font-medium">€3.80</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Fruit Smoothie</span>
                          <span className="text-hsv-blue font-medium">€5.20</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Fresh Orange Juice</span>
                          <span className="text-hsv-blue font-medium">€4.50</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Mineral Water</span>
                          <span className="text-hsv-blue font-medium">€2.80</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="menu-category text-center">Pastries & Light Meals</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="menu-card">
                    <img 
                      src="https://images.unsplash.com/photo-1609351593419-733240323529?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Pastries" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">Fresh Pastries</h3>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Butter Croissant</span>
                          <span className="text-hsv-blue font-medium">€2.80</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Pain au Chocolat</span>
                          <span className="text-hsv-blue font-medium">€3.20</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Apple Strudel</span>
                          <span className="text-hsv-blue font-medium">€4.50</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Black Forest Cake</span>
                          <span className="text-hsv-blue font-medium">€5.20</span>
                        </li>
                        <li className="flex justify-between">
                          <span>German Cheesecake</span>
                          <span className="text-hsv-blue font-medium">€4.80</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="menu-card">
                    <img 
                      src="https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Light Meals" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">Light Meals</h3>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Avocado Toast</span>
                          <span className="text-hsv-blue font-medium">€8.50</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Club Sandwich</span>
                          <span className="text-hsv-blue font-medium">€10.80</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Quiche of the Day</span>
                          <span className="text-hsv-blue font-medium">€9.20</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Caesar Salad</span>
                          <span className="text-hsv-blue font-medium">€11.50</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Soup of the Day</span>
                          <span className="text-hsv-blue font-medium">€6.80</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Match Day Specials */}
      <section className="py-16 bg-gray-100">
        <div className="hsv-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hsv-blue mb-4">Match Day Specials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join us before and after HSV matches for these exclusive offerings
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-hsv-blue mb-4">Pre-Match Menu</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <div>
                      <span className="font-semibold block">Fan Platter</span>
                      <span className="text-gray-600 text-sm">Assorted German sausages, pretzels, and pickles</span>
                    </div>
                    <span className="text-hsv-blue font-medium">€18</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <div>
                      <span className="font-semibold block">Blue-White Burger</span>
                      <span className="text-gray-600 text-sm">Beef patty with blue cheese on a brioche bun</span>
                    </div>
                    <span className="text-hsv-blue font-medium">€16</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold block">Victory Beer Flight</span>
                      <span className="text-gray-600 text-sm">Selection of four local Hamburg beers</span>
                    </div>
                    <span className="text-hsv-blue font-medium">€12</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-hsv-blue mb-4">Post-Match Celebration</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <div>
                      <span className="font-semibold block">Champion's Steak</span>
                      <span className="text-gray-600 text-sm">Special price on our signature ribeye after a win</span>
                    </div>
                    <span className="text-hsv-blue font-medium">€32</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <div>
                      <span className="font-semibold block">Team Sharing Platter</span>
                      <span className="text-gray-600 text-sm">Mixed grill for four with sides and sauces</span>
                    </div>
                    <span className="text-hsv-blue font-medium">€85</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold block">Victory Toast</span>
                      <span className="text-gray-600 text-sm">Complimentary glass of German sparkling wine with any main course</span>
                    </div>
                    <span className="text-hsv-blue font-medium">Free</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-hsv-blue bg-opacity-10 rounded-md">
              <p className="text-center font-medium">
                Match day specials available 3 hours before and 2 hours after HSV home games.
                Reservations highly recommended on match days!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
