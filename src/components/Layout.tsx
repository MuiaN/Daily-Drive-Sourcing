import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Car, Bell, User, Package, ShoppingCart } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import AuthModal from './AuthModal';
import { useAuthStore } from '../store/authStore';
import { useCartStore } from '../store/cartStore';

const Layout: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user } = useAuthStore();
  const { items } = useCartStore();
  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-card shadow-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <Car className="h-8 w-8 text-primary" />
                <span className="ml-2 text-xl font-bold text-foreground">Daily Drive Sourcing</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/parts" className="p-2 text-muted-foreground hover:text-foreground">
                <Car className="h-6 w-6" />
              </Link>
              <Link to="/orders" className="p-2 text-muted-foreground hover:text-foreground">
                <Package className="h-6 w-6" />
              </Link>
              <Link to="/notifications" className="p-2 text-muted-foreground hover:text-foreground">
                <Bell className="h-6 w-6" />
              </Link>
              <Link to="/cart" className="p-2 text-muted-foreground hover:text-foreground relative">
                <ShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
              {user ? (
                <Link to="/profile" className="p-2 text-muted-foreground hover:text-foreground">
                  <User className="h-6 w-6" />
                </Link>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="p-2 text-muted-foreground hover:text-foreground"
                >
                  <User className="h-6 w-6" />
                </button>
              )}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => setShowAuthModal(false)}
        mode="signin"
      />
    </div>
  );
};

export default Layout;