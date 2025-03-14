import React from 'react';
import { Shield, TrendingUp, Users, Truck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">About Daily Drive Sourcing</h1>
        <p className="text-xl text-muted-foreground">
          Your trusted partner in sourcing quality auto parts across Kenya
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Our Story</h2>
        <p className="text-muted-foreground">
          Founded in 2023, Daily Drive Sourcing was born from a simple observation: sourcing genuine auto parts in Kenya was often a complex and time-consuming process. We set out to change that by creating a platform that connects repair shops, dealerships, and car owners directly with verified suppliers.
        </p>
        <p className="text-muted-foreground">
          Today, we're proud to be Kenya's leading auto parts marketplace, serving thousands of customers across the country with a network of trusted suppliers and fast, reliable delivery.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-lg p-6 border border-border">
          <Shield className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Quality Guaranteed</h3>
          <p className="text-muted-foreground">
            Every supplier on our platform undergoes rigorous verification. We ensure all parts meet OEM specifications and quality standards.
          </p>
        </div>
        <div className="bg-card rounded-lg p-6 border border-border">
          <TrendingUp className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Real-Time Inventory</h3>
          <p className="text-muted-foreground">
            Our platform provides live inventory updates, ensuring you always know part availability and pricing.
          </p>
        </div>
        <div className="bg-card rounded-lg p-6 border border-border">
          <Users className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Expert Support</h3>
          <p className="text-muted-foreground">
            Our team of automotive experts is always ready to help you find the right parts for your vehicle.
          </p>
        </div>
        <div className="bg-card rounded-lg p-6 border border-border">
          <Truck className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Fast Delivery</h3>
          <p className="text-muted-foreground">
            With our extensive logistics network, we ensure quick delivery across Kenya, with same-day delivery available in major cities.
          </p>
        </div>
      </section>

      <section className="bg-card rounded-lg p-8 border border-border">
        <h2 className="text-2xl font-semibold mb-6 text-card-foreground">Our Mission</h2>
        <p className="text-muted-foreground">
          To revolutionize auto parts sourcing in Kenya by providing a transparent, efficient, and reliable platform that connects suppliers with customers, ensuring access to quality parts at fair prices.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Our Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Verified Suppliers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
            <div className="text-sm text-muted-foreground">Parts Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">47</div>
            <div className="text-sm text-muted-foreground">Counties Served</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;