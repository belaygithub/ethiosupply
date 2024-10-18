import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Globe size={32} />
          <span className="text-2xl font-bold">EthioSupply</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/products" className="hover:text-blue-200">Products</Link></li>
            <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-200">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;