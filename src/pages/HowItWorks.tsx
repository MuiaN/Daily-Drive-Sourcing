import React from 'react';
import { Search, ShoppingCart, Truck, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">How It Works</h1>
        <p className="text-xl text-muted-foreground">
          Find and order the right parts for your vehicle in just a few simple steps
        </p>
      </section>

      <div className="grid gap-8">
        <div className="bg-card rounded-lg p-6 border border-border">
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">1. Find Your Parts</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• Enter your vehicle details or VIN number</p>
                <p>• Use our interactive diagrams to locate exact parts</p>
                <p>• Browse through verified supplier listings</p>
                <p>• Compare prices and delivery times</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <ShoppingCart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">2. Place Your Order</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• Add parts to your cart</p>
                <p>• Review your selection</p>
                <p>• Choose delivery options</p>
                <p>• Complete secure payment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">3. Track Delivery</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• Receive order confirmation</p>
                <p>• Get real-time delivery updates</p>
                <p>• Track your shipment</p>
                <p>• Rate your experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">4. Quality Assurance</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• Verify part authenticity</p>
                <p>• Check warranty coverage</p>
                <p>• Access installation guides</p>
                <p>• Get support if needed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-card rounded-lg p-8 border border-border">
        <h2 className="text-2xl font-semibold mb-4 text-card-foreground">Need Help?</h2>
        <p className="text-muted-foreground mb-4">
          Our team of automotive experts is here to assist you with finding the right parts for your vehicle.
        </p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Contact Support
          </button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
            View FAQ
          </button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;