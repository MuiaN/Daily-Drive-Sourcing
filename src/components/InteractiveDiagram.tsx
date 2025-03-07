import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCw, ChevronRight, ChevronLeft, ShoppingCart } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useCartStore } from '../store/cartStore';
import AuthModal from './AuthModal';

interface DiagramPart {
  id: string;
  name: string;
  coordinates: { x: number; y: number; width: number; height: number };
  partNumber: string;
  description?: string;
  price?: number;
  availability?: number;
}

interface Props {
  diagramImage: string;
  parts: DiagramPart[];
  onPartSelect: (partId: string) => void;
  selectedPartId?: string;
}

const InteractiveDiagram: React.FC<Props> = ({
  diagramImage,
  parts,
  onPartSelect,
  selectedPartId
}) => {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [showSidebar, setShowSidebar] = useState(true);
  const [hoveredPartId, setHoveredPartId] = useState<string | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [selectedPartForCart, setSelectedPartForCart] = useState<string | null>(null);
  
  const { user } = useAuthStore();
  const { addItem } = useCartStore();

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 2.5));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };

  const handleAddToCart = (part: DiagramPart) => {
    if (!user) {
      setSelectedPartForCart(part.id);
      setShowAuthModal(true);
      return;
    }
    
    addItem({
      id: part.id,
      name: part.name,
      partNumber: part.partNumber,
      price: part.price || 0,
      availability: part.availability || 0,
      category: 'Suspension',
      model: 'BMW 3 Series 2019',
      supplier: 'German Auto Spares',
      location: 'Nairobi, Kenya',
      deliveryTime: '1-2 days',
      isLocal: true,
      description: part.description
    });
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    if (selectedPartForCart) {
      const part = parts.find(p => p.id === selectedPartForCart);
      if (part) {
        handleAddToCart(part);
      }
      setSelectedPartForCart(null);
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-md p-4 border border-border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-card-foreground">Interactive Diagram</h3>
        <div className="flex space-x-2">
          <button
            onClick={handleZoomIn}
            className="p-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80"
            aria-label="Zoom in"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80"
            aria-label="Zoom out"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <button
            onClick={handleRotate}
            className="p-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80"
            aria-label="Rotate"
          >
            <RotateCw className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex">
        <div className={`relative overflow-hidden border border-border rounded-lg ${showSidebar ? 'w-3/4' : 'w-full'}`} style={{ height: '500px' }}>
          <div 
            className="relative w-full h-full transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `scale(${zoom}) rotate(${rotation}deg)`,
              transformOrigin: 'center center'
            }}
          >
            <img 
              src={diagramImage} 
              alt="Part diagram" 
              className="w-full h-full object-contain"
            />
            
            {parts.map(part => (
              <div
                key={part.id}
                className={`absolute cursor-pointer transition-all duration-200 ${
                  selectedPartId === part.id || hoveredPartId === part.id
                    ? 'bg-primary/30 border-2 border-primary' 
                    : 'bg-transparent hover:bg-primary/20 border border-transparent hover:border-primary'
                }`}
                style={{
                  left: `${part.coordinates.x}%`,
                  top: `${part.coordinates.y}%`,
                  width: `${part.coordinates.width}%`,
                  height: `${part.coordinates.height}%`,
                }}
                onClick={() => onPartSelect(part.id)}
                onMouseEnter={() => setHoveredPartId(part.id)}
                onMouseLeave={() => setHoveredPartId(null)}
              >
                <div className={`absolute top-0 left-0 transform -translate-y-full bg-card p-1 rounded shadow-md text-xs ${
                  selectedPartId === part.id || hoveredPartId === part.id ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-200 pointer-events-none z-10`}>
                  {part.id}
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={toggleSidebar}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-card p-1 rounded-full shadow-md z-10"
          >
            {showSidebar ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>
        
        {showSidebar && (
          <div className="w-1/4 ml-4 border border-border rounded-lg overflow-y-auto" style={{ height: '500px' }}>
            <div className="p-3 bg-muted">
              <h4 className="font-medium text-sm">Parts List</h4>
            </div>
            <div className="divide-y divide-border">
              {parts.map(part => (
                <div 
                  key={part.id}
                  className={`p-3 cursor-pointer transition-colors ${
                    selectedPartId === part.id ? 'bg-primary/10' : 'hover:bg-muted/50'
                  }`}
                  onClick={() => onPartSelect(part.id)}
                  onMouseEnter={() => setHoveredPartId(part.id)}
                  onMouseLeave={() => setHoveredPartId(null)}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-sm">{part.name}</div>
                    <div className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                      {part.id}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Part #: {part.partNumber}
                  </div>
                  {part.description && (
                    <div className="text-xs text-muted-foreground mt-1">
                      {part.description}
                    </div>
                  )}
                  {part.price && (
                    <div className="flex justify-between items-center mt-2">
                      <div className="text-sm font-semibold text-primary">
                        KSh {part.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {part.availability} in stock
                      </div>
                    </div>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(part);
                    }}
                    className="mt-2 w-full flex items-center justify-center px-3 py-1.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        Click on a highlighted area to select a specific part.
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => {
          setShowAuthModal(false);
          setSelectedPartForCart(null);
        }}
        onSuccess={handleAuthSuccess}
        mode="signin"
      />
    </div>
  );
};

export default InteractiveDiagram;