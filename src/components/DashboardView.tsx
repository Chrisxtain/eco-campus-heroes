
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Upload, 
  MapPin, 
  Calendar, 
  Trophy, 
  Recycle, 
  Camera, 
  User,
  LogOut,
  Star,
  Award,
  TrendingUp,
  BookOpen
} from 'lucide-react';
import WasteReportModal from './WasteReportModal';
import LeaderboardView from './LeaderboardView';
import EducationHub from './EducationHub';

interface User {
  id: string;
  name: string;
  email: string;
  studentId: string;
  role: string;
  hostel: string;
  points: number;
  level: string;
  joinDate: string;
}

interface DashboardViewProps {
  user: User;
  onLogout: () => void;
}

const DashboardView = ({ user, onLogout }: DashboardViewProps) => {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [userStats, setUserStats] = useState({
    totalReports: 23,
    totalRecycled: 15,
    streakDays: 7,
    rank: 12
  });

  const recentReports = [
    { id: 1, type: 'Plastic Bottles', location: 'Library Entrance', points: 25, date: '2024-01-15', status: 'collected' },
    { id: 2, type: 'Paper Waste', location: 'Computer Lab', points: 15, date: '2024-01-14', status: 'pending' },
    { id: 3, type: 'Food Waste', location: 'Cafeteria', points: 20, date: '2024-01-13', status: 'collected' }
  ];

  const achievements = [
    { name: 'First Report', description: 'Submitted your first waste report', earned: true, icon: '🎯' },
    { name: 'Streak Master', description: 'Reported waste for 7 consecutive days', earned: true, icon: '🔥' },
    { name: 'Eco Warrior', description: 'Earned 1000+ EcoPoints', earned: true, icon: '⚡' },
    { name: 'Campus Champion', description: 'Top 10 in monthly leaderboard', earned: false, icon: '👑' }
  ];

  const handleReportSubmit = (reportData: any) => {
    console.log('New waste report:', reportData);
    setUserStats(prev => ({
      ...prev,
      totalReports: prev.totalReports + 1
    }));
    setIsReportModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">EcoCampus Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, {user.name}!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-800 px-3 py-1">
                {user.points} EcoPoints
              </Badge>
              <Button variant="ghost" size="sm" onClick={onLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Total Reports</p>
                  <p className="text-3xl font-bold">{userStats.totalReports}</p>
                </div>
                <Upload className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">EcoPoints</p>
                  <p className="text-3xl font-bold">{user.points}</p>
                </div>
                <Star className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Current Rank</p>
                  <p className="text-3xl font-bold">#{userStats.rank}</p>
                </div>
                <Trophy className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Streak Days</p>
                  <p className="text-3xl font-bold">{userStats.streakDays}</p>
                </div>
                <Award className="w-8 h-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center" onClick={() => setIsReportModalOpen(true)}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Camera className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Report Waste</h3>
              <p className="text-gray-600">Snap a photo and earn points</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Find Bins</h3>
              <p className="text-gray-600">Locate nearest collection points</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule Pickup</h3>
              <p className="text-gray-600">Organize waste collection</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span>Reports</span>
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center space-x-2">
              <Trophy className="w-4 h-4" />
              <span>Leaderboard</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>Learn</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Level Progress */}
              <Card className="bg-white/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span>Your Progress</span>
                  </CardTitle>
                  <CardDescription>
                    Current Level: <Badge className="ml-2 bg-green-100 text-green-800">{user.level}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress to Eco Champion</span>
                        <span>{user.points}/2000 points</span>
                      </div>
                      <Progress value={(user.points / 2000) * 100} className="h-2" />
                    </div>
                    <div className="text-sm text-gray-600">
                      {2000 - user.points} more points needed for next level
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="bg-white/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-5 h-5" />
                    <span>Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className={`flex items-center space-x-3 p-2 rounded-lg ${achievement.earned ? 'bg-green-50' : 'bg-gray-50'}`}>
                        <div className="text-2xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <div className={`font-medium ${achievement.earned ? 'text-green-800' : 'text-gray-600'}`}>
                            {achievement.name}
                          </div>
                          <div className="text-xs text-gray-500">{achievement.description}</div>
                        </div>
                        {achievement.earned && (
                          <Badge className="bg-green-100 text-green-800 text-xs">Earned</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports">
            <Card className="bg-white/80 backdrop-blur-sm border-0">
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Your latest waste reporting activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <Recycle className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium">{report.type}</div>
                          <div className="text-sm text-gray-600">{report.location}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-green-600">+{report.points} points</div>
                        <Badge className={`text-xs ${report.status === 'collected' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {report.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leaderboard">
            <LeaderboardView currentUser={user} />
          </TabsContent>

          <TabsContent value="education">
            <EducationHub />
          </TabsContent>
        </Tabs>
      </div>

      <WasteReportModal 
        isOpen={isReportModalOpen} 
        onClose={() => setIsReportModalOpen(false)}
        onSubmit={handleReportSubmit}
      />
    </div>
  );
};

export default DashboardView;
