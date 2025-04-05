import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useCheckoutStore, DeliveryDetails } from '../store/checkoutStore';
import { MapPin, Phone, Mail, Building2, Truck, Clock, ExternalLink } from 'lucide-react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { supplierLocations } from '../data/mockData';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items } = useCartStore();
  const { setItems, setSubtotal, setDeliveryDetails } = useCheckoutStore();
  
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express' | 'pickup'>('standard');
  const [selectedSupplier, setSelectedSupplier] = useState<string | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  
  // Form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [county, setCounty] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [kraPin, setKraPin] = useState('');

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = shippingMethod === 'standard' ? 500 : shippingMethod === 'express' ? 1000 : 0;
  const total = subtotal + shippingCost;

  useEffect(() => {
    // Update checkout store with current cart items and subtotal
    setItems(items);
    setSubtotal(subtotal);
  }, [items, subtotal, setItems, setSubtotal]);

  // Get unique suppliers from cart items
  const cartSuppliers = [...new Set(items.map(item => item.supplier))];
  const availableSuppliers = cartSuppliers.reduce((acc, supplierName) => {
    if (supplierLocations[supplierName]) {
      acc[supplierName] = supplierLocations[supplierName];
    }
    return acc;
  }, {} as typeof supplierLocations);

  const mapContainerStyle = {
    width: '100%',
    height: '300px'
  };

  const handleMarkerClick = (supplierName: string) => {
    setSelectedMarker(supplierName);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  const handleMapLoad = () => {
    setIsMapLoaded(true);
  };

  const handleContinueToPayment = () => {
    // Validate required fields based on shipping method
    if (shippingMethod !== 'pickup' && (!firstName || !lastName || !street || !city || !county)) {
      alert('Please fill in all required shipping address fields');
      return;
    }

    if (!phone || !email) {
      alert('Please fill in all contact information');
      return;
    }

    if (shippingMethod === 'pickup' && !selectedSupplier) {
      alert('Please select a pickup location');
      return;
    }

    // Create delivery details object
    const deliveryDetails: DeliveryDetails = {
      method: shippingMethod,
      contact: {
        phone,
        email,
      },
      cost: shippingCost,
    };

    // Add address for delivery methods
    if (shippingMethod !== 'pickup') {
      deliveryDetails.address = {
        firstName,
        lastName,
        street,
        city,
        county,
      };
    }

    // Add business information if provided
    if (businessName || kraPin) {
      deliveryDetails.business = {
        name: businessName,
        kraPin,
      };
    }

    // Add pickup location if selected
    if (shippingMethod === 'pickup' && selectedSupplier && availableSuppliers[selectedSupplier]) {
      deliveryDetails.pickupLocation = {
        supplier: selectedSupplier,
        address: availableSuppliers[selectedSupplier].address,
        coordinates: availableSuppliers[selectedSupplier].coordinates,
      };
    }

    // Save delivery details to store
    setDeliveryDetails(deliveryDetails);

    // Navigate to payment page
    navigate('/payment');
  };

  const renderMap = () => {
    if (!selectedSupplier || !availableSuppliers[selectedSupplier]) return null;

    return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={availableSuppliers[selectedSupplier].coordinates}
        zoom={17}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false
        }}
      >
        {isMapLoaded && (
          <Marker
            position={availableSuppliers[selectedSupplier].coordinates}
            title={selectedSupplier}
            onClick={() => handleMarkerClick(selectedSupplier)}
            icon={{
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 10,
              fillColor: '#3b82f6',
              fillOpacity: 1,
              strokeColor: '#ffffff',
              strokeWeight: 2,
            }}
          />
        )}
        {selectedMarker === selectedSupplier && isMapLoaded && (
          <InfoWindow
            position={availableSuppliers[selectedSupplier].coordinates}
            onCloseClick={handleInfoWindowClose}
          >
            <div className="p-2">
              <h3 className="font-medium text-base mb-1">{selectedSupplier}</h3>
              <p className="text-sm text-gray-600">{availableSuppliers[selectedSupplier].address}</p>
              <p className="text-sm text-gray-600 mt-1">{availableSuppliers[selectedSupplier].hours}</p>
              <p className="text-sm text-gray-600 mt-1">{availableSuppliers[selectedSupplier].phone}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-8 text-card-foreground">Checkout</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping Address */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-card-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              Shipping Address
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                  required={shippingMethod !== 'pickup'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                  required={shippingMethod !== 'pickup'}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                  required={shippingMethod !== 'pickup'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                  required={shippingMethod !== 'pickup'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  County
                </label>
                <select
                  value={county}
                  onChange={(e) => setCounty(e.target.value)}
                  className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                  required={shippingMethod !== 'pickup'}
                >
                  <option value="">Select County</option>
                  <option value="nairobi">Nairobi</option>
                  <option value="mombasa">Mombasa</option>
                  <option value="kisumu">Kisumu</option>
                </select>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-card-foreground">
              <Phone className="h-5 w-5 text-primary" />
              Contact Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                  placeholder="+254"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                  required
                />
              </div>
            </div>
          </div>

          {/* Business Information (Optional) */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-card-foreground">
              <Building2 className="h-5 w-5 text-primary" />
              Business Information (Optional)
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  KRA PIN
                </label>
                <input
                  type="text"
                  value={kraPin}
                  onChange={(e) => setKraPin(e.target.value)}
                  className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                />
              </div>
            </div>
          </div>

          {/* Shipping Method */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-card-foreground">
              <Truck className="h-5 w-5 text-primary" />
              Delivery Method
            </h2>
            <div className="space-y-4">
              <label className="flex items-start p-4 border border-input rounded-lg cursor-pointer hover:border-primary transition-colors">
                <input
                  type="radio"
                  name="shipping"
                  value="standard"
                  checked={shippingMethod === 'standard'}
                  onChange={() => setShippingMethod('standard')}
                  className="mt-1"
                />
                <div className="ml-4">
                  <div className="font-medium text-card-foreground">Standard Delivery</div>
                  <div className="text-sm text-muted-foreground">2-3 business days</div>
                  <div className="text-sm font-medium text-primary">KSh 500</div>
                </div>
              </label>
              
              <label className="flex items-start p-4 border border-input rounded-lg cursor-pointer hover:border-primary transition-colors">
                <input
                  type="radio"
                  name="shipping"
                  value="express"
                  checked={shippingMethod === 'express'}
                  onChange={() => setShippingMethod('express')}
                  className="mt-1"
                />
                <div className="ml-4">
                  <div className="font-medium text-card-foreground">Express Delivery</div>
                  <div className="text-sm text-muted-foreground">Next business day</div>
                  <div className="text-sm font-medium text-primary">KSh 1,000</div>
                </div>
              </label>

              <label className="flex items-start p-4 border border-input rounded-lg cursor-pointer hover:border-primary transition-colors">
                <input
                  type="radio"
                  name="shipping"
                  value="pickup"
                  checked={shippingMethod === 'pickup'}
                  onChange={() => setShippingMethod('pickup')}
                  className="mt-1"
                />
                <div className="ml-4">
                  <div className="font-medium text-card-foreground">Self Pickup</div>
                  <div className="text-sm text-muted-foreground">Pick up from supplier location</div>
                  <div className="text-sm font-medium text-primary">Free</div>
                </div>
              </label>

              {shippingMethod === 'pickup' && (
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-card-foreground mb-3">Select Pickup Location</h3>
                    <div className="space-y-3">
                      {Object.entries(availableSuppliers).map(([name, info]) => (
                        <label
                          key={name}
                          className={`flex items-start p-4 border rounded-lg cursor-pointer transition-colors ${
                            selectedSupplier === name
                              ? 'border-primary bg-primary/5'
                              : 'border-input hover:border-primary'
                          }`}
                        >
                          <input
                            type="radio"
                            name="supplier"
                            value={name}
                            checked={selectedSupplier === name}
                            onChange={() => setSelectedSupplier(name)}
                            className="mt-1"
                          />
                          <div className="ml-4">
                            <div className="font-medium text-card-foreground">{name}</div>
                            <div className="text-sm text-muted-foreground mt-1">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                {info.address}
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <Clock className="h-4 w-4" />
                                {info.hours}
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <Phone className="h-4 w-4" />
                                {info.phone}
                              </div>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>

                    {selectedSupplier && availableSuppliers[selectedSupplier] && (
                      <div className="mt-6">
                        <h4 className="text-sm font-medium text-card-foreground mb-3">Location Map</h4>
                        <div className="rounded-lg overflow-hidden border border-border">
                          <LoadScript
                            googleMapsApiKey="AIzaSyAu8vkorkkjEBQCIZNwmacYmtNWdn8xWZs"
                            onLoad={handleMapLoad}
                          >
                            {renderMap()}
                          </LoadScript>
                        </div>
                        <div className="mt-3">
                          <a
                            href={availableSuppliers[selectedSupplier].mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:text-primary/80"
                          >
                            <MapPin className="h-4 w-4" />
                            Open in Google Maps
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg p-6 border border-border sticky top-6">
            <h2 className="text-lg font-semibold mb-4 text-card-foreground">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {items.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <div>
                    <div className="font-medium text-card-foreground">
                      {item.quantity}x {item.name}
                    </div>
                    <div className="text-muted-foreground">{item.partNumber}</div>
                  </div>
                  <div className="text-card-foreground">
                    KSh {(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-card-foreground">KSh {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-card-foreground">
                  {shippingMethod === 'pickup' ? 'Self-Pickup' : `KSh ${shippingCost.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between font-medium text-lg pt-2 border-t border-border">
                <span className="text-card-foreground">Total</span>
                <span className="text-card-foreground">KSh {total.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleContinueToPayment}
              className="w-full mt-6 bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Continue to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;