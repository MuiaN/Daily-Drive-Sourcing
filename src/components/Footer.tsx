import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card mt-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Car className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-card-foreground">
                Daily Drive Sourcing
              </span>
            </div>
            <p className="text-muted-foreground">
              Your trusted source for genuine auto parts in Kenya. Fast delivery and verified suppliers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-card-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-primary">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/suppliers" className="text-muted-foreground hover:text-primary">
                  For Suppliers
                </Link>
              </li>
              <li>
                <Link to="/dealerships" className="text-muted-foreground hover:text-primary">
                  For Dealerships
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-card-foreground">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-primary">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-primary">
                  Returns & Warranty
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-card-foreground">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground">
                <MapPin className="h-5 w-5 mr-2" />
                Nairobi, Kenya
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="h-5 w-5 mr-2" />
                +254 712 345 678
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail className="h-5 w-5 mr-2" />
                support@dailydrive.co.ke
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Daily Drive Sourcing. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms
              </Link>
              <Link to="/sitemap" className="text-sm text-muted-foreground hover:text-primary">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;