import React from 'react';
import { Code, Rocket, Users, BookOpen, ChevronRight } from 'lucide-react';

interface HomeProps {
  onEnroll: () => void;
}

const features = [
  { icon: <Code size={24} />, title: 'Learn to Code', description: 'Master the latest web technologies' },
  { icon: <Rocket size={24} />, title: 'Launch Your Career', description: 'Build a portfolio that stands out' },
  { icon: <Users size={24} />, title: 'Join a Community', description: 'Connect with fellow developers' },
  { icon: <BookOpen size={24} />, title: 'Comprehensive Curriculum', description: 'From basics to advanced topics' },
];

export default function Home({ onEnroll }: HomeProps) {
  return (
    <main>
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Unlock Your Web Development Potential</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">Join CodeSpiral and spiral your way to success in the world of web development</p>
        <button 
          onClick={onEnroll}
          className="bg-indigo-600 text-white px-6 sm:px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Get Started
        </button>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">Why Choose CodeSpiral?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="text-indigo-600 mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-indigo-600 rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
              <p className="text-indigo-100 mb-6">Join thousands of successful developers who have transformed their careers with CodeSpiral.</p>
              <button
                onClick={onEnroll}
                className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-50 transition duration-300"
              >
                Enroll Now <ChevronRight size={20} className="ml-2" />
              </button>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="Students coding" className="w-full h-64 md:h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}