import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 1, name: 'Raw Materials', description: 'High-quality raw materials for manufacturing', image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Industrial Equipment', description: 'Modern machinery for efficient production', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 3, name: 'Packaging Solutions', description: 'Innovative packaging for various industries', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 4, name: 'Textile Products', description: 'High-quality textiles for manufacturing', image: 'https://images.unsplash.com/photo-1558304970-abd589baebe5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 5, name: 'Agricultural Supplies', description: 'Essential supplies for the agriculture sector', image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 6, name: 'Electronics Components', description: 'Cutting-edge electronics for various applications', image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Our Products and Services</h1>
        
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 px-4 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a href="#" className="text-blue-600 font-semibold hover:underline">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;