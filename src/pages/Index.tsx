
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Recycle, Users, Calendar, Upload, MapPin, Settings, Sparkles, Leaf, Award } from 'lucide-react';
import Navigation from '@/components/Navigation';
import AuthModal from '@/components/AuthModal';
import DashboardView from '@/components/DashboardView';

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <DashboardView user={currentUser} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <Navigation onOpenAuth={() => setIsAuthModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Making Campus Sustainable & Fun
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
              Campus Green
            </span>
            <br />
            <span className="text-gray-900">Revolution</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Turn waste management into an exciting game! Report, compete, earn rewards, and transform your campus into an eco-paradise while having fun with friends.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-emerald-200 transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsAuthModalOpen(true)}
            >
              Join the Revolution
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-10 py-4 text-lg font-bold rounded-full"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100">
              <div className="text-4xl font-black text-emerald-600 mb-3">2,847</div>
              <div className="text-gray-600 font-medium">Waste Reports</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-100">
              <div className="text-4xl font-black text-blue-600 mb-3">1,230</div>
              <div className="text-gray-600 font-medium">Eco Warriors</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-teal-100">
              <div className="text-4xl font-black text-teal-600 mb-3">25 Tons</div>
              <div className="text-gray-600 font-medium">Waste Recycled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20 bg-white/50">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-emerald-100 text-emerald-800 px-4 py-2 text-sm font-bold rounded-full">
            FEATURES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Everything You Need to Go Green
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From smart reporting to epic challenges, we've built the ultimate toolkit for campus sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 rounded-2xl overflow-hidden">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Upload className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Smart Reporting</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 text-base leading-relaxed">
                Snap, categorize, and earn points instantly. Our AI helps you identify waste types and maximize your impact.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 rounded-2xl overflow-hidden">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Bin Locator</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 text-base leading-relaxed">
                Never wonder where to dispose again. Interactive maps show the nearest recycling points in real-time.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 rounded-2xl overflow-hidden">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Epic Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 text-base leading-relaxed">
                Compete in hostel battles, join campus-wide events, and climb leaderboards to become an Eco Champion.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 rounded-2xl overflow-hidden">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Recycle className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Rewards System</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 text-base leading-relaxed">
                Earn EcoPoints for every action and redeem them for exclusive merch, vouchers, and campus perks.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 rounded-2xl overflow-hidden">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Event Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 text-base leading-relaxed">
                Organize cleanup drives, schedule pickups, and coordinate with facilities for maximum impact.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 rounded-2xl overflow-hidden">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Eco Education</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 text-base leading-relaxed">
                Learn through interactive guides, take sustainability quizzes, and discover amazing DIY projects.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Lead the Change?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Join thousands of students already making a difference. Start your eco-journey today and become a campus legend!
            </p>
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsAuthModalOpen(true)}
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Index;
