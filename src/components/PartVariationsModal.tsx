import React, { useState } from 'react';
import { X, Shield, Package, Clock, MapPin, Star, AlertTriangle, Building2, Phone, Mail, Globe, Award, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useCartStore } from '../store/cartStore';
import AuthModal from './AuthModal';

interface PartVariation {
  id: string;
  type: 'OEM' | 'Generic' | 'Second Hand';
  manufacturer: string;
  partNumber: string;
  price: number;
  supplier: {
    name: string;
    rating: number;
    location: string;
    deliveryTime: string;
    companyInfo: {
      established: string;
      specialization: string;
      contact: {
        phone: string;
        email: string;
        website?: string;
      };
      certifications: string[];
      verificationStatus: 'Verified' | 'Premium Partner' | 'Standard';
      totalOrders: number;
      satisfactionRate: number;
    };
  };
  warranty?: string;
  condition?: string;
  availability: number;
  qualityScore?: number;
  certification?: string[];
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  partName: string;
  variations: PartVariation[];
}

const PartVariationsModal: React.FC<Props> = ({
  isOpen,
  onClose,
  partName,
  variations
}) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [selectedVariation, setSelectedVariation] = useState<PartVariation | null>(null);
  const [expandedVariations, setExpandedVariations] = useState<string[]>([]);
  const { user } = useAuthStore();
  const { addItem } = useCartStore();

  if (!isOpen) return null;

  const handleAddToCart = (variation: PartVariation) => {
    if (!user) {
      setSelectedVariation(variation);
      setShowAuthModal(true);
      return;
    }

    addItem({
      id: variation.id,
      name: partName,
      partNumber: variation.partNumber,
      price: variation.price,
      availability: variation.availability,
      category: variation.type,
      model: 'BMW 3 Series 2019',
      supplier: variation.supplier.name,
      location: variation.supplier.location,
      deliveryTime: variation.supplier.deliveryTime,
      isLocal: true,
      description: `${variation.type} part by ${variation.manufacturer}`,
      engineType: variation.type === 'OEM' ? 'Original' : undefined,
      warranty: variation.warranty
    });

    onClose();
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    if (selectedVariation) {
      handleAddToCart(selectedVariation);
    }
  };

  const toggleVariationDetails = (variationId: string) => {
    setExpandedVariations(prev =>
      prev.includes(variationId)
        ? prev.filter(id => id !== variationId)
        : [...prev, variationId]
    );
  };

  const getTypeIcon = (type: PartVariation['type']) => {
    switch (type) {
      case 'OEM':
        return <Shield className="h-5 w-5 text-blue-500" />;
      case 'Generic':
        return <Package className="h-5 w-5 text-green-500" />;
      case 'Second Hand':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    }
  };

  const getVerificationBadge = (status: string) => {
    switch (status) {
      case 'Premium Partner':
        return (
          <div className="flex items-center gap-1 text-blue-500">
            <Award className="h-4 w-4" />
            <span className="text-xs font-medium">Premium Partner</span>
          </div>
        );
      case 'Verified':
        return (
          <div className="flex items-center gap-1 text-green-500">
            <CheckCircle className="h-4 w-4" />
            <span className="text-xs font-medium">Verified Supplier</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-1 text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span className="text-xs font-medium">Standard Supplier</span>
          </div>
        );
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-card rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
          <div className="p-6 border-b border-border sticky top-0 bg-card z-10">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-card-foreground">{partName}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span className="text-sm text-primary font-medium">
                    Available from {variations.length} supplier{variations.length !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="overflow-y-auto max-h-[calc(90vh-5rem)]">
            <div className="p-6 space-y-4">
              {variations.map((variation) => (
                <div
                  key={variation.id}
                  className="bg-background rounded-lg border border-border overflow-hidden"
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          {getTypeIcon(variation.type)}
                          <span className="font-semibold text-lg text-card-foreground">
                            {variation.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Package className="h-4 w-4" />
                            <span>{variation.manufacturer}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span>{variation.supplier.rating.toFixed(1)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{variation.supplier.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-card-foreground">
                          KSh {variation.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {variation.availability} in stock
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <button
                        onClick={() => toggleVariationDetails(variation.id)}
                        className="text-primary hover:text-primary/80 text-sm flex items-center gap-1"
                      >
                        {expandedVariations.includes(variation.id) ? (
                          <>
                            <ChevronUp className="h-4 w-4" />
                            Less Details
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4" />
                            More Details
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => handleAddToCart(variation)}
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>

                    {expandedVariations.includes(variation.id) && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div>
                              <div className="text-sm font-medium text-card-foreground">Part Details</div>
                              <div className="space-y-1 text-sm text-muted-foreground">
                                <p>Part Number: {variation.partNumber}</p>
                                {variation.warranty && <p>Warranty: {variation.warranty}</p>}
                                {variation.condition && <p>Condition: {variation.condition}</p>}
                                {variation.qualityScore && <p>Quality Score: {variation.qualityScore}/10</p>}
                              </div>
                            </div>
                            {variation.certification && variation.certification.length > 0 && (
                              <div>
                                <div className="text-sm font-medium text-card-foreground">Certifications</div>
                                <div className="flex flex-wrap gap-2 mt-1">
                                  {variation.certification.map((cert, index) => (
                                    <span
                                      key={index}
                                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                                    >
                                      {cert}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="space-y-4">
                            <div className="bg-muted/50 rounded-lg p-4">
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-lg font-semibold text-primary">
                                  {variation.supplier.name}
                                </span>
                                {getVerificationBadge(variation.supplier.companyInfo.verificationStatus)}
                              </div>
                              
                              <div className="space-y-2 text-sm">
                                <div className="text-primary">
                                  <Phone className="h-4 w-4 inline mr-2" />
                                  {variation.supplier.companyInfo.contact.phone}
                                </div>
                                <div className="text-primary">
                                  <Mail className="h-4 w-4 inline mr-2" />
                                  {variation.supplier.companyInfo.contact.email}
                                </div>
                                {variation.supplier.companyInfo.contact.website && (
                                  <div className="text-primary">
                                    <Globe className="h-4 w-4 inline mr-2" />
                                    <a
                                      href={variation.supplier.companyInfo.contact.website}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:underline"
                                    >
                                      Visit Website
                                    </a>
                                  </div>
                                )}
                              </div>

                              <div className="mt-3 pt-3 border-t border-border/50 space-y-1 text-sm text-muted-foreground">
                                <p>Established: {variation.supplier.companyInfo.established}</p>
                                <p>Total Orders: {variation.supplier.companyInfo.totalOrders.toLocaleString()}+</p>
                                <p>Satisfaction Rate: {variation.supplier.companyInfo.satisfactionRate}%</p>
                                <p>Specialization: {variation.supplier.companyInfo.specialization}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => {
          setShowAuthModal(false);
          setSelectedVariation(null);
        }}
        onSuccess={handleAuthSuccess}
        mode="signin"
      />
    </>
  );
};

export default PartVariationsModal;