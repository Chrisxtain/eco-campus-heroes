
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  PlayCircle, 
  CheckCircle, 
  Clock, 
  Award,
  Lightbulb,
  Recycle,
  Leaf
} from 'lucide-react';

const EducationHub = () => {
  const recyclingGuides = [
    {
      id: 1,
      title: "Plastic Recycling 101",
      description: "Learn the basics of plastic types and how to recycle them properly",
      duration: "5 min read",
      difficulty: "Beginner",
      points: 50,
      completed: true,
      image: "🥤"
    },
    {
      id: 2,
      title: "E-Waste Disposal",
      description: "Safely dispose of electronic devices and components",
      duration: "8 min read",
      difficulty: "Intermediate",
      points: 75,
      completed: false,
      image: "📱"
    },
    {
      id: 3,
      title: "Composting at Campus",
      description: "Turn organic waste into valuable compost for campus gardens",
      duration: "10 min read",
      difficulty: "Advanced",
      points: 100,
      completed: false,
      image: "🌱"
    }
  ];

  const diyProjects = [
    {
      id: 1,
      title: "Bottle Planters",
      description: "Transform plastic bottles into beautiful planters",
      materials: ["Plastic bottles", "Soil", "Seeds", "Paint"],
      difficulty: "Easy",
      time: "30 minutes",
      points: 150,
      image: "🪴"
    },
    {
      id: 2,
      title: "Paper Bag Making",
      description: "Create reusable bags from old newspapers",
      materials: ["Newspapers", "Glue", "Scissors", "Handles"],
      difficulty: "Medium",
      time: "45 minutes",
      points: 200,
      image: "👜"
    },
    {
      id: 3,
      title: "Tin Can Organizers",
      description: "Repurpose cans into desk organizers",
      materials: ["Tin cans", "Fabric", "Glue", "Decorations"],
      difficulty: "Easy",
      time: "20 minutes",
      points: 125,
      image: "🗂️"
    }
  ];

  const quizzes = [
    {
      id: 1,
      title: "Recycling Symbols Quiz",
      description: "Test your knowledge of recycling symbols and meanings",
      questions: 10,
      points: 100,
      completed: true,
      score: 8,
      image: "♻️"
    },
    {
      id: 2,
      title: "Campus Sustainability",
      description: "How well do you know your campus's green initiatives?",
      questions: 15,
      points: 150,
      completed: false,
      score: null,
      image: "🏫"
    },
    {
      id: 3,
      title: "Climate Change Impact",
      description: "Understanding the environmental impact of waste",
      questions: 12,
      points: 120,
      completed: false,
      score: null,
      image: "🌍"
    }
  ];

  const tips = [
    {
      title: "Reduce First, Then Recycle",
      description: "Always try to reduce consumption before thinking about recycling",
      icon: "🔄",
      category: "General"
    },
    {
      title: "Clean Containers",
      description: "Rinse food containers before recycling to avoid contamination",
      icon: "🧽",
      category: "Recycling"
    },
    {
      title: "Know Your Numbers",
      description: "Learn plastic recycling codes 1-7 to recycle correctly",
      icon: "🔢",
      category: "Plastic"
    },
    {
      title: "Battery Drop-off",
      description: "Never throw batteries in regular trash - use campus drop-off points",
      icon: "🔋",
      category: "E-Waste"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <Card className="bg-gradient-to-r from-blue-500 to-green-500 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold">Learning Progress</h3>
              <p className="text-blue-100">Keep learning to earn more EcoPoints!</p>
            </div>
            <div className="text-3xl">📚</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Completed Modules</span>
              <span>3/12</span>
            </div>
            <Progress value={25} className="h-2 bg-blue-400" />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="guides" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
          <TabsTrigger value="guides" className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4" />
            <span>Guides</span>
          </TabsTrigger>
          <TabsTrigger value="diy" className="flex items-center space-x-2">
            <Lightbulb className="w-4 h-4" />
            <span>DIY</span>
          </TabsTrigger>
          <TabsTrigger value="quizzes" className="flex items-center space-x-2">
            <Award className="w-4 h-4" />
            <span>Quizzes</span>
          </TabsTrigger>
          <TabsTrigger value="tips" className="flex items-center space-x-2">
            <Leaf className="w-4 h-4" />
            <span>Tips</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="guides">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recyclingGuides.map((guide) => (
              <Card key={guide.id} className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="text-4xl mb-2">{guide.image}</div>
                    {guide.completed && (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    )}
                  </div>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <CardDescription className="text-sm">{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{guide.duration}</span>
                      </div>
                      <Badge className={getDifficultyColor(guide.difficulty)}>
                        {guide.difficulty}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-green-600 font-semibold">+{guide.points} points</div>
                      <Button 
                        size="sm" 
                        className={guide.completed ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-blue-600 hover:bg-blue-700"}
                        disabled={guide.completed}
                      >
                        {guide.completed ? 'Completed' : 'Start Reading'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="diy">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diyProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <div className="text-4xl mb-2">{project.image}</div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium mb-2">Materials needed:</div>
                      <div className="flex flex-wrap gap-1">
                        {project.materials.map((material, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{project.time}</span>
                      </div>
                      <Badge className={getDifficultyColor(project.difficulty)}>
                        {project.difficulty}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-green-600 font-semibold">+{project.points} points</div>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        <PlayCircle className="w-4 h-4 mr-1" />
                        Watch Tutorial
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="quizzes">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz) => (
              <Card key={quiz.id} className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="text-4xl mb-2">{quiz.image}</div>
                    {quiz.completed && (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    )}
                  </div>
                  <CardTitle className="text-lg">{quiz.title}</CardTitle>
                  <CardDescription className="text-sm">{quiz.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span>{quiz.questions} questions</span>
                      {quiz.completed && quiz.score && (
                        <Badge className="bg-green-100 text-green-800">
                          Score: {quiz.score}/{quiz.questions}
                        </Badge>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-green-600 font-semibold">+{quiz.points} points</div>
                      <Button 
                        size="sm" 
                        className={quiz.completed ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-orange-600 hover:bg-orange-700"}
                      >
                        {quiz.completed ? 'Retake Quiz' : 'Take Quiz'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tips">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 hover:shadow-md transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{tip.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold">{tip.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {tip.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{tip.description}</p>
                    </div>
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

export default EducationHub;
