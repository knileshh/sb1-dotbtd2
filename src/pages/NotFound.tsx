import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <AlertCircle size={64} className="text-indigo-600" />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              !
            </div>
          </div>
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have taken a different path in its coding journey.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300"
          >
            <Home size={20} className="mr-2" />
            Back to Home
          </Link>
          <Link
            to="/courses"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 rounded-full border-2 border-indigo-600 hover:bg-indigo-50 transition duration-300"
          >
            <Search size={20} className="mr-2" />
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
}