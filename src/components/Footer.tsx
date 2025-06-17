
import React from 'react';
import { Recycle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                EcoCampus
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Making campus sustainability fun and rewarding. Join the movement and help transform your university into an eco-paradise.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="/features" className="text-gray-400 hover:text-emerald-400 transition-colors">Features</a></li>
              <li><a href="/how-it-works" className="text-gray-400 hover:text-emerald-400 transition-colors">How It Works</a></li>
              <li><a href="/rewards" className="text-gray-400 hover:text-emerald-400 transition-colors">Rewards</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-400 text-sm">hello@ecocampus.edu</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-400 text-sm">123 Campus Drive<br />University City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 EcoCampus. All rights reserved. Made with 💚 for a sustainable future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
