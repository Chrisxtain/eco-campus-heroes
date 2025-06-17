
import { Button } from "@/components/ui/button";
import { Recycle } from 'lucide-react';

interface NavigationProps {
  onOpenAuth: () => void;
}

const Navigation = ({ onOpenAuth }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-emerald-100 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <Recycle className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              EcoCampus
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors font-semibold">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition-colors font-semibold">
              How It Works
            </a>
            <a href="/blog" className="text-gray-700 hover:text-emerald-600 transition-colors font-semibold">
              Blog
            </a>
            <a href="#rewards" className="text-gray-700 hover:text-emerald-600 transition-colors font-semibold">
              Rewards
            </a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-semibold">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 font-semibold"
              onClick={onOpenAuth}
            >
              Sign In
            </Button>
            <Button 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2 rounded-full shadow-lg hover:shadow-emerald-200 transition-all duration-300"
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
