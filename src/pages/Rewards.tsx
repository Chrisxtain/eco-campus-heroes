
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gift, Trophy, Star, Zap, Crown, Sparkles } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Rewards = () => {
  const rewardTiers = [
    {
      title: "Eco Starter",
      points: "0-100",
      color: "from-gray-400 to-gray-500",
      icon: Sparkles,
      rewards: ["Welcome Badge", "Campus Map Access", "Basic Challenges"]
    },
    {
      title: "Green Warrior",
      points: "101-500",
      color: "from-green-400 to-emerald-500",
      icon: Zap,
      rewards: ["Eco Stickers", "Priority Support", "Weekly Challenges", "10% Campus Store Discount"]
    },
    {
      title: "Sustainability Champion",
      points: "501-1000",
      color: "from-blue-400 to-indigo-500",
      icon: Trophy,
      rewards: ["Eco T-Shirt", "Exclusive Events Access", "Monthly Challenges", "20% Campus Store Discount"]
    },
    {
      title: "Eco Legend",
      points: "1000+",
      color: "from-yellow-400 to-orange-500",
      icon: Crown,
      rewards: ["Limited Edition Merch", "VIP Event Access", "Custom Challenges", "50% Campus Store Discount", "Eco Ambassador Program"]
    }
  ];

  const instantRewards = [
    { name: "Campus Coffee Voucher", points: 50, category: "Food & Drink" },
    { name: "Library Extension Pass", points: 75, category: "Academic" },
    { name: "Eco-Friendly Notebook", points: 100, category: "Stationery" },
    { name: "Reusable Water Bottle", points: 150, category: "Lifestyle" },
    { name: "Campus Gym Day Pass", points: 200, category: "Fitness" },
    { name: "Sustainable Tote Bag", points: 250, category: "Accessories" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <Navigation onOpenAuth={() => {}} />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-emerald-100 text-emerald-800 px-4 py-2 text-sm font-bold rounded-full">
            REWARDS
          </Badge>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
              Amazing Rewards
            </span>
            <br />
            <span className="text-gray-900">Await You</span>
          </h1>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Earn EcoPoints for every sustainable action and unlock incredible rewards, exclusive perks, and campus benefits.
          </p>
        </div>
      </section>

      {/* Reward Tiers */}
      <section className="container mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Reward Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewardTiers.map((tier, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{tier.title}</CardTitle>
                <CardDescription className="text-emerald-600 font-semibold">{tier.points} Points</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tier.rewards.map((reward, rewardIndex) => (
                    <li key={rewardIndex} className="text-sm text-gray-600 flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                      {reward}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Instant Rewards */}
      <section className="container mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Instant Rewards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instantRewards.map((reward, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-900">{reward.name}</CardTitle>
                    <CardDescription className="text-emerald-600 text-sm">{reward.category}</CardDescription>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-800 px-3 py-1 text-sm font-bold">
                    {reward.points} pts
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  Redeem Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rewards;
