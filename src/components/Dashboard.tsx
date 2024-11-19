import React from 'react';
import { CircleUser, ClipboardList, MapPin, Calendar } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Internship Management System</h1>
        <p className="mt-2 text-gray-600">Track and manage your internship progress</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          icon={<CircleUser className="h-8 w-8" />}
          title="Profile"
          description="View and update your internship profile"
        />
        <DashboardCard
          icon={<ClipboardList className="h-8 w-8" />}
          title="Reports"
          description="Submit fortnightly reports and assignments"
        />
        <DashboardCard
          icon={<MapPin className="h-8 w-8" />}
          title="Location"
          description="Update your current internship location"
        />
        <DashboardCard
          icon={<Calendar className="h-8 w-8" />}
          title="Schedule"
          description="View upcoming deadlines and meetings"
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <ActivityItem
            title="Report Submitted"
            description="Fortnightly report for period ending June 15"
            time="2 hours ago"
          />
          <ActivityItem
            title="Location Updated"
            description="Current location: Tech Park, Building A"
            time="1 day ago"
          />
          <ActivityItem
            title="Meeting Scheduled"
            description="Review meeting with internal mentor"
            time="2 days ago"
          />
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ActivityItem({ title, description, time }) {
  return (
    <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg">
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <span className="text-xs text-gray-500">{time}</span>
    </div>
  );
}