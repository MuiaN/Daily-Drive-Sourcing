import React from 'react';
import { RefreshCw, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const ReturnsWarranty: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Returns & Warranty</h1>
        <p className="text-xl text-muted-foreground">
          Our commitment to quality and customer satisfaction
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-lg p-6 border border-border">
          <RefreshCw className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Returns Policy</h3>
          <div className="space-y-2 text-muted-foreground">
            <p>• 30-day return window</p>
            <p>• Unused and original packaging</p>
            <p>• Free returns for defective items</p>
            <p>• Hassle-free process</p>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <Shield className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Warranty Coverage</h3>
          <div className="space-y-2 text-muted-foreground">
            <p>• Manufacturer warranty</p>
            <p>• Extended coverage options</p>
            <p>• Parts replacement guarantee</p>
            <p>• Professional support</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Return Process</h2>
        
        <div className="space-y-4">
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Step 1: Initiate Return</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>To start a return:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Log into your account</li>
                <li>Find the order in your history</li>
                <li>Select "Return Item"</li>
                <li>Choose return reason</li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Step 2: Package Item</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Packaging requirements:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Original packaging if possible</li>
                <li>All components included</li>
                <li>Proper protection for transit</li>
                <li>Return label attached</li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Step 3: Ship Return</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Shipping options:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Drop off at partner locations</li>
                <li>Schedule pickup service</li>
                <li>Use provided return label</li>
                <li>Track return shipment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card rounded-lg p-8 border border-border">
        <h2 className="text-2xl font-semibold mb-6 text-card-foreground">Warranty Information</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Standard Warranty</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>• 12-month coverage</p>
              <p>• Manufacturer defects</p>
              <p>• Material issues</p>
              <p>• Performance problems</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Extended Warranty</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>• Up to 36 months</p>
              <p>• Comprehensive coverage</p>
              <p>• Priority service</p>
              <p>• Additional benefits</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Important Information</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-destructive/10 rounded-lg p-6 border border-destructive">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-destructive mb-2">Non-Returnable Items</h3>
                <div className="space-y-1 text-destructive">
                  <p>• Electrical components once installed</p>
                  <p>• Custom-ordered parts</p>
                  <p>• Items without original packaging</p>
                  <p>• Used or damaged parts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/10 rounded-lg p-6 border border-green-500">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-green-500 mb-2">Quality Guarantee</h3>
                <div className="space-y-1 text-green-500">
                  <p>• 100% genuine parts</p>
                  <p>• Quality tested</p>
                  <p>• Performance guaranteed</p>
                  <p>• Expert support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Need Assistance?</h2>
        <p className="text-muted-foreground mb-6">
          Our support team is here to help with returns and warranty claims
        </p>
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          Contact Support
        </button>
      </section>
    </div>
  );
};

export default ReturnsWarranty;