import React from 'react';
import { Building, Clock, Shield, Truck } from 'lucide-react';

const Dealerships: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">For Dealerships</h1>
        <p className="text-xl text-muted-foreground">
          Streamline your parts sourcing with our comprehensive dealership solutions
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-lg p-6 border border-border">
          <Building className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Dedicated Portal</h3>
          <p className="text-muted-foreground">
            Access a specialized dealership portal with advanced features for bulk ordering, inventory management, and reporting.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <Clock className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Priority Service</h3>
          <p className="text-muted-foreground">
            Get priority access to parts, expedited shipping, and dedicated account management for your dealership.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <Shield className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Quality Assurance</h3>
          <p className="text-muted-foreground">
            All parts are verified for authenticity and quality, ensuring you receive genuine OEM and aftermarket parts.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <Truck className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Logistics Support</h3>
          <p className="text-muted-foreground">
            Benefit from our extensive logistics network with same-day delivery options and real-time tracking.
          </p>
        </div>
      </section>

      <section className="bg-card rounded-lg p-8 border border-border">
        <h2 className="text-2xl font-semibold mb-6 text-card-foreground">Dealership Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">Exclusive Features</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>• Bulk ordering capabilities</p>
              <p>• Volume-based pricing</p>
              <p>• Priority support</p>
              <p>• Advanced reporting tools</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">Additional Services</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>• Dedicated account manager</p>
              <p>• Custom integration options</p>
              <p>• Training and support</p>
              <p>• Marketing assistance</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Partner With Us</h2>
        <p className="text-muted-foreground mb-6">
          Join our network of dealerships and experience streamlined parts sourcing.
        </p>
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          Register Your Dealership
        </button>
      </section>
    </div>
  );
};

export default Dealerships;