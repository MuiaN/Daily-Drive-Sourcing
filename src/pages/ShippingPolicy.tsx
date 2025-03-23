import React from 'react';
import { Truck, Clock, MapPin, AlertTriangle } from 'lucide-react';

const ShippingPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Shipping Policy</h1>
        <p className="text-xl text-muted-foreground">
          Fast, reliable delivery across Kenya
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-lg p-6 border border-border">
          <Truck className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Delivery Options</h3>
          <div className="space-y-2 text-muted-foreground">
            <p>• Standard Delivery (1-2 days in major cities)</p>
            <p>• Express Delivery (Same day in Nairobi)</p>
            <p>• Import Items (7-14 days)</p>
            <p>• Bulk Orders (Custom timeline)</p>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <Clock className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Processing Time</h3>
          <div className="space-y-2 text-muted-foreground">
            <p>• Local Stock: Same day processing</p>
            <p>• Special Orders: 1-2 days</p>
            <p>• Import Items: 2-3 days</p>
            <p>• Custom Orders: Varies</p>
          </div>
        </div>
      </section>

      <section className="bg-card rounded-lg p-8 border border-border">
        <h2 className="text-2xl font-semibold mb-6 text-card-foreground">Delivery Areas</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Major Cities</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>• Nairobi - Same day available</p>
              <p>• Mombasa - 1-2 days</p>
              <p>• Kisumu - 1-2 days</p>
              <p>• Nakuru - 1-2 days</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Other Locations</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>• County Headquarters - 2-3 days</p>
              <p>• Other Towns - 3-5 days</p>
              <p>• Remote Areas - 5-7 days</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Shipping Information</h2>
        
        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold mb-4 text-card-foreground">Tracking Orders</h3>
          <div className="space-y-2 text-muted-foreground">
            <p>All orders are assigned a tracking number once shipped. You can track your order:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Through your account dashboard</li>
              <li>Via SMS updates</li>
              <li>Using our tracking page</li>
              <li>Through customer support</li>
            </ul>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold mb-4 text-card-foreground">Shipping Costs</h3>
          <div className="space-y-2 text-muted-foreground">
            <p>Shipping costs are calculated based on:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Delivery location</li>
              <li>Package weight and size</li>
              <li>Delivery speed selected</li>
              <li>Special handling requirements</li>
            </ul>
          </div>
        </div>

        <div className="bg-destructive/10 rounded-lg p-6 border border-destructive">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-destructive">Important Notes</h3>
              <div className="space-y-2 text-destructive">
                <p>• Delivery times may vary during peak seasons or adverse weather</p>
                <p>• Some remote areas may require additional delivery time</p>
                <p>• Special handling fees may apply for large or fragile items</p>
                <p>• Import duties and taxes are not included in shipping costs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Need Help?</h2>
        <p className="text-muted-foreground mb-6">
          Contact our shipping department for special arrangements or questions
        </p>
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          Contact Shipping Support
        </button>
      </section>
    </div>
  );
};

export default ShippingPolicy;