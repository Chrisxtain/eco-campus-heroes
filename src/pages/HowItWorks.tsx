
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, MapPin, Trophy, Gift } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: "Report Waste",
      description: "Snap a photo of waste you find around campus. Our AI automatically categorizes it and awards you points.",
      step: "1"
    },
    {
      icon: MapPin,
      title: "Find Disposal Points",
      description: "Use our interactive map to locate the nearest recycling bins and disposal points for proper waste management.",
      step: "2"
    },
    {
      icon: Trophy,
      title: "Compete & Challenge",
      description: "Join challenges, compete with friends, and climb the leaderboards to become your campus's top eco warrior.",
      step: "3"
    },
    {
      icon: Gift,
      title: "Earn Rewards",
      description: "Redeem your EcoPoints for exclusive rewards, campus perks, and sustainable merchandise.",
      step: "4"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <Navigation onOpenAuth={() => {}} />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-emerald-100 text-emerald-800 px-4 py-2 text-sm font-bold rounded-full">
            HOW IT WORKS
          </Badge>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="text-gray-900">Simple Steps to</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
              Campus Sustainability
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Making your campus more sustainable is easier than ever. Follow these simple steps to start your eco-journey today.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-emerald-200 transform -translate-y-1/2 z-10" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-white/5"></div>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Join the movement and start making a positive impact on your campus today!
            </p>
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
            >
              Join the Revolution
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
