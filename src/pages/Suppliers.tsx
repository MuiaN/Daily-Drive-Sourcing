import React from 'react';
import { Building2, BarChart, Shield, Users } from 'lucide-react';

const Suppliers: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">For Suppliers</h1>
        <p className="text-xl text-muted-foreground">
          Join Kenya's leading auto parts marketplace and grow your business
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-lg p-6 border border-border">
          <Building2 className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Expand Your Reach</h3>
          <p className="text-muted-foreground">
            Connect with thousands of repair shops, dealerships, and car owners across Kenya. Our platform brings customers directly to you.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <BarChart className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Boost Sales</h3>
          <p className="text-muted-foreground">
            Increase your sales with our user-friendly platform. Get detailed analytics and insights to optimize your inventory.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <Shield className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Secure Payments</h3>
          <p className="text-muted-foreground">
            Receive payments securely and on time. Our platform handles payment processing and ensures smooth transactions.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <Users className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Dedicated Support</h3>
          <p className="text-muted-foreground">
            Get personalized support from our team. We help you optimize listings, manage inventory, and resolve issues quickly.
          </p>
        </div>
      </section>

      <section className="bg-card rounded-lg p-8 border border-border">
        <h2 className="text-2xl font-semibold mb-6 text-card-foreground">Benefits of Joining</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <p className="text-muted-foreground">Access to thousands of potential customers</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <p className="text-muted-foreground">Easy-to-use supplier dashboard</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <p className="text-muted-foreground">Real-time inventory management</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <p className="text-muted-foreground">Secure payment processing</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <p className="text-muted-foreground">Marketing and promotional support</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-6">
          Join our network of verified suppliers and start growing your business today.
        </p>
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          Apply as Supplier
        </button>
      </section>
    </div>
  );
};

export default Suppliers;