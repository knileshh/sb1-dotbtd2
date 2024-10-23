import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Menu } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Code size={32} className="text-indigo-600" />
          <span className="text-xl sm:text-2xl font-bold text-gray-800">CodeSpiral</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/courses" className="text-gray-600 hover:text-indigo-600">Courses</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-indigo-600">About</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link></li>
          </ul>
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <Menu size={24} className="text-gray-600" />
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-white px-4 py-2">
          <ul className="flex flex-col space-y-2">
            <li><Link to="/courses" className="block py-2 text-gray-600 hover:text-indigo-600">Courses</Link></li>
            <li><Link to="/about" className="block py-2 text-gray-600 hover:text-indigo-600">About</Link></li>
            <li><Link to="/contact" className="block py-2 text-gray-600 hover:text-indigo-600">Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}