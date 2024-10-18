import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">EthioSupply</h3>
            <p className="text-sm">Streamlining Ethiopia's B2B marketplace</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="/" className="hover:text-blue-300">Home</a></li>
              <li><a href="/products" className="hover:text-blue-300">Products</a></li>
              <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300"><Facebook size={24} /></a>
              <a href="#" className="hover:text-blue-300"><Twitter size={24} /></a>
              <a href="#" className="hover:text-blue-300"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 EthioSupply.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;