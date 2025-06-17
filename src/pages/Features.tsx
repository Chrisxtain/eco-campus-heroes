
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, MapPin, Award, Recycle, Calendar, Leaf, Smartphone, Users, BarChart3 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Features = () => {
  const features = [
    {
      icon: Upload,
      title: "Smart Reporting",
      description: "Snap, categorize, and earn points instantly. Our AI helps you identify waste types and maximize your impact.",
      color: "from-emerald-400 to-green-500"
    },
    {
      icon: MapPin,
      title: "Bin Locator",
      description: "Never wonder where to dispose again. Interactive maps show the nearest recycling points in real-time.",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Award,
      title: "Epic Challenges",
      description: "Compete in hostel battles, join campus-wide events, and climb leaderboards to become an Eco Champion.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Recycle,
      title: "Rewards System",
      description: "Earn EcoPoints for every action and redeem them for exclusive merch, vouchers, and campus perks.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Calendar,
      title: "Event Planning",
      description: "Organize cleanup drives, schedule pickups, and coordinate with facilities for maximum impact.",
      color: "from-red-400 to-rose-500"
    },
    {
      icon: Leaf,
      title: "Eco Education",
      description: "Learn through interactive guides, take sustainability quizzes, and discover amazing DIY projects.",
      color: "from-teal-400 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Take action anywhere on campus with our intuitive mobile app designed for students on the go.",
      color: "from-violet-400 to-purple-500"
    },
    {
      icon: Users,
      title: "Community Hub",
      description: "Connect with like-minded eco warriors, share tips, and build a sustainable campus community.",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: BarChart3,
      title: "Impact Analytics",
      description: "Track your environmental impact with detailed analytics and see how you're making a difference.",
      color: "from-cyan-400 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <Navigation onOpenAuth={() => {}} />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-emerald-100 text-emerald-800 px-4 py-2 text-sm font-bold rounded-full">
            FEATURES
          </Badge>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
            <br />
            <span className="text-gray-900">for Campus Sustainability</span>
          </h1>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Discover all the amazing tools and features that make EcoCampus the ultimate platform for campus sustainability.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 rounded-2xl overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
