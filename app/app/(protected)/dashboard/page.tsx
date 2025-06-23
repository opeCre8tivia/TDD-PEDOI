"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, BookOpen, Users, Leaf, TrendingUp, MessageCircle } from "lucide-react";
import { useUser } from "../context/UserContext";

const stats = [
  { label: "My Gardens", value:0, icon: Leaf },
  { label: "Community Members", value:5000, icon: Users },
  { label: "Upcoming Events", value:1, icon: Calendar },
  { label: "Knowledge Base", value: 18, icon: BookOpen },
];

const quickActions = [
  { label: "Add Garden", icon: Leaf },
  { label: "Ask a Question", icon: MessageCircle },
  { label: "View Tips", icon: BookOpen },
  { label: "Progress", icon: TrendingUp },
];

const Page = () => {

const user = useUser()



  return (
    <div className="min-h-screen bg-white md:bg-gray-50 flex flex-col items-center py-4 px-2 md:px-0">
      {/* Welcome Section */}
      <div className="w-full max-w-md bg-primary/10 rounded-xl p-4 flex flex-col items-center mb-4">
        <h1 className="text-lg md:text-2xl font-bold text-primary  text-center">Hi {user && user.firstName}</h1>
        <h1 className="text-lg md:text-2xl font-bold text-primary mb-1 text-center">Welcome, Cocoa Farmer!</h1>
        <p className="text-gray-700 text-sm md:text-base text-center">Here is your personalized dashboard. Track your gardens, connect with the community, and access resources to help you grow.</p>
      </div>
      {/* Stats Cards */}
      <div className="w-full max-w-md grid grid-cols-2 gap-3 mb-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow flex flex-col items-center py-4 px-2">
            <stat.icon className="w-6 h-6 text-primary mb-1" />
            <div className="text-xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-500 text-center">{stat.label}</div>
          </div>
        ))}
      </div>
      {/* Quick Actions */}
      <div className="w-full max-w-md mb-6">
        <h2 className="text-base font-semibold text-gray-800 mb-2">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <Button key={action.label} variant="outline" className="flex flex-col items-center py-4">
              <action.icon className="w-5 h-5 mb-1 text-primary" />
              <span className="text-xs font-medium text-gray-700">{action.label}</span>
            </Button>
          ))}
        </div>
      </div>
      <Separator className="my-4 w-full max-w-md" />
      {/* Resource Links */}
      <div className="w-full max-w-md">
        <h2 className="text-base font-semibold text-gray-800 mb-2">Resources & Support</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#" className="block bg-primary/5 rounded px-4 py-3 text-primary font-medium text-sm hover:bg-primary/10 transition">Cocoa Farming Best Practices</a>
          </li>
          <li>
            <a href="#" className="block bg-primary/5 rounded px-4 py-3 text-primary font-medium text-sm hover:bg-primary/10 transition">Join Farmer Community Chat</a>
          </li>
          <li>
            <a href="#" className="block bg-primary/5 rounded px-4 py-3 text-primary font-medium text-sm hover:bg-primary/10 transition">Upcoming Trainings & Events</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;