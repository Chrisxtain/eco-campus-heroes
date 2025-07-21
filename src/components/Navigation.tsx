
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Recycle, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface NavigationProps {
  onOpenAuth: () => void;
}

const Navigation = ({ onOpenAuth }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/features", label: "Features" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/blog", label: "Blog" },
    { to: "/rewards", label: "Rewards" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-emerald-100 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <Recycle className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              EcoCampus
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className="text-gray-700 hover:text-emerald-600 transition-colors font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gray-700">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <div className="flex items-center justify-between mb-8">
                  <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-green-600 rounded-lg flex items-center justify-center">
                      <Recycle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                      EcoCampus
                    </span>
                  </Link>
                </div>
                
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block px-2 py-3 text-lg font-semibold text-gray-700 hover:text-emerald-600 transition-colors border-b border-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="flex flex-col gap-3 mt-8 pt-8 border-t border-gray-100">
                  <Button 
                    variant="ghost" 
                    className="justify-start text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 font-semibold h-12"
                    onClick={() => {
                      onOpenAuth();
                      setIsOpen(false);
                    }}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-12 rounded-full shadow-lg hover:shadow-emerald-200 transition-all duration-300"
                    onClick={() => {
                      onOpenAuth();
                      setIsOpen(false);
                    }}
                  >
                    Join Now
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
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
