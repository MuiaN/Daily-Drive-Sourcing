import React, { useState } from 'react';
import { Package, Clock, MapPin, Globe, Info } from 'lucide-react';
import { Part } from '../types';
import { useAuthStore } from '../store/authStore';
import { useCartStore } from '../store/cartStore';
import AuthModal from './AuthModal';

interface Props {
  part: Part;
}

const PartCard: React.FC<Props> = ({ part }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user } = useAuthStore();
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    addItem(part);
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    addItem(part);
  };

  return (
    <>
      <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-border">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-card-foreground">{part.name}</h3>
            <p className="text-sm text-muted-foreground">{part.model}</p>
          </div>
          <span className="text-lg font-bold text-primary">
            KSh {part.price.toLocaleString()}
          </span>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Package className="h-4 w-4 mr-2" />
            <span>{part.availability} units available</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{part.location}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            <span>Delivery: {part.deliveryTime}</span>
          </div>
          {!part.isLocal && (
            <div className="flex items-center text-sm text-blue-500">
              <Globe className="h-4 w-4 mr-2" />
              <span>Import Item</span>
            </div>
          )}
          <div className="flex items-center text-sm text-muted-foreground">
            <Info className="h-4 w-4 mr-2" />
            <span>
              {part.engineType} • {part.transmissionType} • {part.trimLevel}
            </span>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-muted-foreground">{part.supplier}</span>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
        mode="signin"
      />
    </>
  );
};

export default PartCard;