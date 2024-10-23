import React from 'react';
import { Award, Users, Globe, Briefcase } from 'lucide-react';

const stats = [
  { icon: <Users size={24} />, value: '10,000+', label: 'Students Trained' },
  { icon: <Award size={24} />, value: '95%', label: 'Success Rate' },
  { icon: <Globe size={24} />, value: '50+', label: 'Countries' },
  { icon: <Briefcase size={24} />, value: '200+', label: 'Corporate Partners' }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Team collaboration"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-indigo-900 bg-opacity-75 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About CodeSpiral</h1>
            <p className="text-xl text-indigo-100">Transforming Lives Through Technology Education</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg mb-6">
              At CodeSpiral, we believe that everyone deserves access to high-quality technology education. 
              Our mission is to empower individuals with the skills and knowledge they need to succeed in 
              the ever-evolving digital landscape.
            </p>
            <p className="text-gray-600 text-lg">
              Through innovative teaching methods, industry-relevant curriculum, and hands-on projects, 
              we prepare our students for successful careers in technology.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-indigo-600 mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community First</h3>
              <p className="text-gray-600">Building a supportive learning environment where everyone can thrive</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">Maintaining the highest standards in education and student support</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Impact</h3>
              <p className="text-gray-600">Making quality education accessible to learners worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}