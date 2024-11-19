import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CircleUser, GraduationCap, ClipboardList, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import InternList from './components/InternList';
import MentorDashboard from './components/MentorDashboard';
import CoordinatorDashboard from './components/CoordinatorDashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/interns" element={<InternList />} />
            <Route path="/mentor" element={<MentorDashboard />} />
            <Route path="/coordinator" element={<CoordinatorDashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;