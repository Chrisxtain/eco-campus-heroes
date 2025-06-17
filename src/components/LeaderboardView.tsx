
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Medal, Award, TrendingUp, Users } from 'lucide-react';

interface User {
  id: string;
  name: string;
  points: number;
  level: string;
  hostel: string;
}

interface LeaderboardViewProps {
  currentUser: User;
}

const LeaderboardView = ({ currentUser }: LeaderboardViewProps) => {
  const globalLeaderboard = [
    { rank: 1, name: 'Sarah Chen', points: 2847, level: 'Eco Champion', hostel: 'Phoenix Hall', avatar: '👩‍🎓' },
    { rank: 2, name: 'Mike Rodriguez', points: 2634, level: 'Eco Champion', hostel: 'Aurora Wing', avatar: '👨‍🎓' },
    { rank: 3, name: 'Emma Thompson', points: 2456, level: 'Eco Warrior', hostel: 'Campus Residence', avatar: '👩‍🔬' },
    { rank: 4, name: 'David Kim', points: 2298, level: 'Eco Warrior', hostel: 'Phoenix Hall', avatar: '👨‍💻' },
    { rank: 5, name: 'Lisa Wang', points: 2145, level: 'Eco Warrior', hostel: 'Aurora Wing', avatar: '👩‍🎨' },
    { rank: 6, name: 'James Miller', points: 1987, level: 'Eco Warrior', hostel: 'Campus Residence', avatar: '👨‍🔧' },
    { rank: 7, name: 'Anna Garcia', points: 1834, level: 'Green Guardian', hostel: 'Phoenix Hall', avatar: '👩‍⚕️' },
    { rank: 8, name: 'Tom Wilson', points: 1756, level: 'Green Guardian', hostel: 'Aurora Wing', avatar: '👨‍🎓' },
    { rank: 9, name: 'Sophie Brown', points: 1698, level: 'Green Guardian', hostel: 'Campus Residence', avatar: '👩‍🏫' },
    { rank: 10, name: 'Chris Davis', points: 1567, level: 'Green Guardian', hostel: 'Phoenix Hall', avatar: '👨‍🎨' },
    { rank: 11, name: 'Maya Patel', points: 1423, level: 'Green Guardian', hostel: 'Aurora Wing', avatar: '👩‍💼' },
    { rank: 12, name: currentUser.name, points: currentUser.points, level: currentUser.level, hostel: currentUser.hostel, avatar: '👤' }
  ];

  const hostelLeaderboard = {
    'Phoenix Hall': [
      { rank: 1, name: 'Sarah Chen', points: 2847, level: 'Eco Champion' },
      { rank: 2, name: 'David Kim', points: 2298, level: 'Eco Warrior' },
      { rank: 3, name: 'Anna Garcia', points: 1834, level: 'Green Guardian' }
    ],
    'Aurora Wing': [
      { rank: 1, name: 'Mike Rodriguez', points: 2634, level: 'Eco Champion' },
      { rank: 2, name: 'Lisa Wang', points: 2145, level: 'Eco Warrior' },
      { rank: 3, name: 'Tom Wilson', points: 1756, level: 'Green Guardian' }
    ],
    'Campus Residence': [
      { rank: 1, name: 'Emma Thompson', points: 2456, level: 'Eco Warrior' },
      { rank: 2, name: 'James Miller', points: 1987, level: 'Eco Warrior' },
      { rank: 3, name: 'Sophie Brown', points: 1698, level: 'Green Guardian' }
    ]
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-orange-400" />;
      default:
        return <div className="w-6 h-6 flex items-center justify-center text-sm font-bold text-gray-500">#{rank}</div>;
    }
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Eco Champion':
        return 'bg-yellow-100 text-yellow-800';
      case 'Eco Warrior':
        return 'bg-green-100 text-green-800';
      case 'Green Guardian':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Current User Rank Card */}
      <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-4xl">👤</div>
              <div>
                <h3 className="text-xl font-bold">{currentUser.name}</h3>
                <p className="text-green-100">Your Current Rank</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold"># 12</div>
              <div className="text-lg">{currentUser.points} points</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="global" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          <TabsTrigger value="global" className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span>Global</span>
          </TabsTrigger>
          <TabsTrigger value="hostel" className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Hostel</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="global">
          <Card className="bg-white/80 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span>Global Leaderboard</span>
              </CardTitle>
              <CardDescription>Top eco-warriors across the entire campus</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {globalLeaderboard.map((user, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                      user.name === currentUser.name 
                        ? 'bg-green-50 border-2 border-green-200 shadow-md' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      {getRankIcon(user.rank)}
                      <div className="text-2xl">{user.avatar}</div>
                      <div>
                        <div className={`font-semibold ${user.name === currentUser.name ? 'text-green-800' : 'text-gray-800'}`}>
                          {user.name}
                          {user.name === currentUser.name && (
                            <Badge className="ml-2 bg-green-100 text-green-800 text-xs">You</Badge>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">{user.hostel}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{user.points}</div>
                      <Badge className={`text-xs ${getLevelBadgeColor(user.level)}`}>
                        {user.level}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hostel">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(hostelLeaderboard).map(([hostelName, members]) => (
              <Card key={hostelName} className="bg-white/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <CardTitle className="text-lg">{hostelName}</CardTitle>
                  <CardDescription>Top performers in this hostel</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {members.map((member, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          {getRankIcon(member.rank)}
                          <div>
                            <div className="font-medium text-sm">{member.name}</div>
                            <Badge className={`text-xs ${getLevelBadgeColor(member.level)}`}>
                              {member.level}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-sm font-semibold">{member.points}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LeaderboardView;
