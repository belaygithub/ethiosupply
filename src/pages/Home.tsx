import React from 'react';
import { ArrowRight, ShoppingBag, Users, TrendingUp, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProducts = [
    { id: 1, name: 'Raw Materials', image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Industrial Equipment', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 3, name: 'Packaging Solutions', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  ];

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Streamline Your Supply Chain</h1>
          <p className="text-xl mb-8">Connect with local manufacturers, buyers, and suppliers in Ethiopia's first digital B2B marketplace.</p>
          <a href="/products" className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">Explore Products <ArrowRight className="inline ml-2" /></a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <a href="/products" className="text-blue-600 font-semibold hover:underline">Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose EthioSupply?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ShoppingBag className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">One-Stop M2M Marketplace</h3>
              <p>Direct access to products and raw materials from local manufacturers and suppliers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry Collaboration</h3>
              <p>Connect with other businesses and foster partnerships within Ethiopia's manufacturing ecosystem.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <TrendingUp className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Boost Economic Growth</h3>
              <p>Contribute to Ethiopia's economic development by enhancing supply chain efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains unchanged */}
    </div>
  );
};

export default Home;