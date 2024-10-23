import React from 'react';
import { Clock, Users, Star, ChevronRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    description: 'Master both frontend and backend development with modern technologies',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '12 weeks',
    students: '2.5k+',
    rating: 4.8,
    price: 999,
    topics: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript']
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Build native mobile apps for iOS and Android using React Native',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '10 weeks',
    students: '1.8k+',
    rating: 4.7,
    price: 899,
    topics: ['React Native', 'iOS', 'Android', 'API Integration']
  },
  {
    id: 3,
    title: 'Cloud Computing & DevOps',
    description: 'Learn cloud architecture and deployment with AWS and Docker',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '8 weeks',
    students: '1.2k+',
    rating: 4.9,
    price: 799,
    topics: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  }
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600">Transform your career with our industry-leading courses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock size={16} className="mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users size={16} className="mr-1" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star size={16} className="mr-1" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, index) => (
                      <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">₹{course.price}</span>
                  <button className="flex items-center text-indigo-600 font-semibold hover:text-indigo-700">
                    Learn More <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}