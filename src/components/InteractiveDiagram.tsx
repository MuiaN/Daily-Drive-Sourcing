import React, { useState, useRef } from 'react';
import { ZoomIn, ZoomOut, RotateCw, ChevronRight, ChevronLeft, ChevronDown, ChevronUp } from 'lucide-react';
import PartVariationsModal from './PartVariationsModal';

interface DiagramPart {
  id: string;
  name: string;
  coordinates: { x: number; y: number; width: number; height: number };
  partNumber: string;
  description?: string;
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
  const [showVariationsModal, setShowVariationsModal] = useState(false);
  const [expandedParts, setExpandedParts] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);

  const selectedPart = selectedPartId ? parts.find(p => p.id === selectedPartId) : null;

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

  const handlePartClick = (partId: string) => {
    onPartSelect(partId);
    setShowVariationsModal(true);
  };

  const togglePartExpansion = (partId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setExpandedParts(prev => 
      prev.includes(partId) 
        ? prev.filter(id => id !== partId)
        : [...prev, partId]
    );
  };

  // Mock variations data
  const mockVariations = [
    {
      id: '1',
      type: 'OEM' as const,
      manufacturer: 'BMW',
      partNumber: 'BMW-31216765423',
      price: 78500,
      supplier: {
        name: 'German Auto Spares Ltd.',
        rating: 4.8,
        location: 'Nairobi, Kenya',
        deliveryTime: '1-2 days',
        companyInfo: {
          established: '1995',
          specialization: 'BMW, Mercedes-Benz, Audi parts',
          contact: {
            phone: '+254 712 345 678',
            email: 'sales@germanauto.co.ke',
            website: 'https://germanauto.co.ke'
          },
          certifications: ['BMW Certified Partner', 'ISO 9001:2015'],
          verificationStatus: 'Premium Partner',
          totalOrders: 15000,
          satisfactionRate: 98
        }
      },
      warranty: '2 years',
      availability: 4,
      qualityScore: 10,
      certification: ['BMW Certified', 'Genuine Part']
    },
    {
      id: '2',
      type: 'Generic' as const,
      manufacturer: 'Bosch',
      partNumber: 'BSH-31216765423',
      price: 45000,
      supplier: {
        name: 'Euro Car Parts Kenya',
        rating: 4.5,
        location: 'Mombasa, Kenya',
        deliveryTime: '2-3 days',
        companyInfo: {
          established: '2005',
          specialization: 'European vehicle parts',
          contact: {
            phone: '+254 722 987 654',
            email: 'info@europarts.co.ke',
            website: 'https://europarts.co.ke'
          },
          certifications: ['ISO 9001:2015', 'TÜV Certified'],
          verificationStatus: 'Verified',
          totalOrders: 8500,
          satisfactionRate: 95
        }
      },
      warranty: '1 year',
      availability: 8,
      qualityScore: 8.5,
      certification: ['ISO 9001', 'TÜV Certified']
    },
    {
      id: '3',
      type: 'Second Hand' as const,
      manufacturer: 'BMW',
      partNumber: 'BMW-31216765423-SH',
      price: 25000,
      supplier: {
        name: 'Quality Used Auto Parts',
        rating: 4.2,
        location: 'Nairobi, Kenya',
        deliveryTime: '1-2 days',
        companyInfo: {
          established: '2010',
          specialization: 'Used European car parts',
          contact: {
            phone: '+254 733 123 456',
            email: 'info@qualityused.co.ke'
          },
          certifications: ['KRA Registered', 'KEBS Certified'],
          verificationStatus: 'Verified',
          totalOrders: 5000,
          satisfactionRate: 92
        }
      },
      condition: 'Good - 70,000 km',
      availability: 1,
      qualityScore: 7.5
    }
  ];

  return (
    <div className="w-full">
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

      <div className="flex bg-card rounded-lg shadow-md p-4 border border-border">
        <div 
          ref={containerRef}
          className={`relative overflow-hidden border border-border rounded-lg ${showSidebar ? 'w-[65%]' : 'w-full'}`} 
          style={{ height: '700px' }}
        >
          <div 
            ref={diagramRef}
            className="relative w-full h-full"
            style={{
              transform: `scale(${zoom}) rotate(${rotation}deg)`,
              transformOrigin: 'center center',
              transition: 'transform 300ms ease-in-out'
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
                onClick={() => handlePartClick(part.id)}
                onMouseEnter={() => setHoveredPartId(part.id)}
                onMouseLeave={() => setHoveredPartId(null)}
              >
                <div 
                  className={`absolute top-0 left-0 transform -translate-y-full bg-card p-1 rounded shadow-md text-xs ${
                    selectedPartId === part.id || hoveredPartId === part.id ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-200 pointer-events-none z-10`}
                >
                  {part.name}
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
          <div className="w-[35%] ml-4 border border-border rounded-lg overflow-hidden" style={{ height: '700px' }}>
            <div className="p-3 bg-muted">
              <h4 className="font-medium text-sm">Parts List</h4>
            </div>
            <div className="divide-y divide-border overflow-y-auto" style={{ height: 'calc(100% - 41px)' }}>
              {parts.map(part => (
                <div 
                  key={part.id}
                  className={`transition-colors ${
                    selectedPartId === part.id ? 'bg-primary/10' : 'hover:bg-muted/50'
                  }`}
                >
                  <div 
                    className="p-3 cursor-pointer flex items-start justify-between"
                    onClick={() => handlePartClick(part.id)}
                    onMouseEnter={() => setHoveredPartId(part.id)}
                    onMouseLeave={() => setHoveredPartId(null)}
                  >
                    <div className="flex-1 min-w-0 pr-2">
                      <div className="font-medium text-sm truncate">{part.name}</div>
                      <div className="text-xs text-muted-foreground truncate">
                        #{part.partNumber}
                      </div>
                    </div>
                    <button
                      onClick={(e) => togglePartExpansion(part.id, e)}
                      className="ml-2 p-1 hover:bg-muted rounded-full flex-shrink-0"
                    >
                      {expandedParts.includes(part.id) ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  
                  {expandedParts.includes(part.id) && (
                    <div className="px-3 pb-3">
                      <div className="bg-muted/50 rounded p-2 text-xs space-y-1.5">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">ID:</span>
                          <span className="font-medium text-foreground">{part.id}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Part Number:</span>
                          <span className="font-medium text-foreground">{part.partNumber}</span>
                        </div>
                        {part.description && (
                          <div className="pt-1.5 mt-1.5 border-t border-border/50">
                            <span className="text-muted-foreground">{part.description}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        Click on a highlighted area to select a specific part.
      </div>

      {selectedPart && (
        <PartVariationsModal
          isOpen={showVariationsModal}
          onClose={() => setShowVariationsModal(false)}
          partName={selectedPart.name}
          variations={mockVariations}
        />
      )}
    </div>
  );
};

export default InteractiveDiagram;