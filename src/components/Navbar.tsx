import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">InternshipPro</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">Dashboard</Link>
            <Link to="/interns" className="text-gray-600 hover:text-indigo-600">Interns</Link>
            <Link to="/mentor" className="text-gray-600 hover:text-indigo-600">Mentor</Link>
            <Link to="/coordinator" className="text-gray-600 hover:text-indigo-600">Coordinator</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}