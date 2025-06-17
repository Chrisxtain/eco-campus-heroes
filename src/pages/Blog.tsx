
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, User, ArrowLeft, Leaf, Recycle, Lightbulb, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Easy Ways to Reduce Plastic Waste on Campus",
      excerpt: "Discover simple and effective strategies to minimize plastic consumption in your daily campus life. From reusable bottles to eco-friendly alternatives.",
      author: "Sarah Chen",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Tips & Tricks",
      image: "🌱",
      tags: ["Plastic", "Sustainability", "Campus Life"],
      featured: true
    },
    {
      id: 2,
      title: "The Science Behind Campus Composting Programs",
      excerpt: "Learn how organic waste transforms into nutrient-rich soil and why your food scraps matter more than you think.",
      author: "Dr. Mike Rodriguez",
      date: "2024-01-12",
      readTime: "8 min read",
      category: "Education",
      image: "🌿",
      tags: ["Composting", "Science", "Environment"]
    },
    {
      id: 3,
      title: "Student Spotlight: Phoenix Hall's Zero Waste Challenge",
      excerpt: "How one hostel achieved a 90% waste reduction in just 30 days. Get inspired by their incredible journey and practical tips.",
      author: "Emma Thompson",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Success Stories",
      image: "🏆",
      tags: ["Challenge", "Community", "Zero Waste"]
    },
    {
      id: 4,
      title: "DIY: Turn Old T-Shirts into Shopping Bags",
      excerpt: "A step-by-step guide to upcycling your old clothes into practical shopping bags. No sewing required!",
      author: "Lisa Wang",
      date: "2024-01-08",
      readTime: "4 min read",
      category: "DIY Projects",
      image: "✂️",
      tags: ["DIY", "Upcycling", "Fashion"]
    },
    {
      id: 5,
      title: "The Hidden Impact of E-Waste on Our Environment",
      excerpt: "Understanding the environmental consequences of electronic waste and how students can make a difference.",
      author: "James Miller",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Environment",
      image: "📱",
      tags: ["E-Waste", "Technology", "Impact"]
    },
    {
      id: 6,
      title: "Campus Green Energy: Solar Panels and Beyond",
      excerpt: "Exploring renewable energy initiatives on university campuses and their role in creating sustainable communities.",
      author: "Anna Garcia",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "Green Energy",
      image: "☀️",
      tags: ["Solar", "Renewable", "Innovation"]
    }
  ];

  const categories = ["All", "Tips & Tricks", "Education", "Success Stories", "DIY Projects", "Environment", "Green Energy"];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Tips & Tricks": return <Lightbulb className="w-4 h-4" />;
      case "Education": return <Leaf className="w-4 h-4" />;
      case "Success Stories": return <TreePine className="w-4 h-4" />;
      case "DIY Projects": return <Recycle className="w-4 h-4" />;
      default: return <Leaf className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white border-b border-emerald-100">
        <div className="container mx-auto px-6 py-8">
          <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6 font-semibold">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 px-4 py-2 text-sm font-bold rounded-full">
              ECO BLOG
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Green
              </span>
              <span className="text-gray-900"> Insights</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover sustainability tips, success stories, and eco-friendly innovations from students and experts around the world.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" 
                ? "bg-emerald-600 hover:bg-emerald-700 text-white rounded-full" 
                : "border-emerald-200 text-emerald-700 hover:bg-emerald-50 rounded-full"
              }
            >
              {category !== "All" && getCategoryIcon(category)}
              <span className={category !== "All" ? "ml-2" : ""}>{category}</span>
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.find(post => post.featured) && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Article</h2>
            {(() => {
              const featuredPost = blogPosts.find(post => post.featured)!;
              return (
                <Card className="bg-gradient-to-r from-emerald-600 to-green-600 text-white border-0 shadow-2xl rounded-3xl overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-white/20 text-white border-0 rounded-full">
                        {featuredPost.category}
                      </Badge>
                      <div className="text-6xl">{featuredPost.image}</div>
                    </div>
                    <CardTitle className="text-3xl md:text-4xl font-black mb-4">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-emerald-100 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-emerald-100">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CalendarDays className="w-4 h-4" />
                          <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <Button className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold rounded-full">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })()}
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <Card key={post.id} className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 rounded-2xl overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-emerald-100 text-emerald-800 border-0 rounded-full flex items-center gap-1">
                    {getCategoryIcon(post.category)}
                    {post.category}
                  </Badge>
                  <div className="text-4xl">{post.image}</div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs text-gray-500 border-gray-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <Button variant="outline" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-semibold">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
