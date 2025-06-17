
import { Button } from "@/components/ui/button";
import { Recycle } from 'lucide-react';

interface NavigationProps {
  onOpenAuth: () => void;
}

const Navigation = ({ onOpenAuth }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Recycle className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              EcoCampus
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              How It Works
            </a>
            <a href="#rewards" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Rewards
            </a>
            <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-green-600 hover:text-green-700 hover:bg-green-50"
              onClick={onOpenAuth}
            >
              Sign In
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={onOpenAuth}
            >
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
