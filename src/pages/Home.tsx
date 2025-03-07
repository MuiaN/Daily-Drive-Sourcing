import React from 'react';
import { Link } from 'react-router-dom';
import { Car, TrendingUp, Clock, Shield, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Find the Right Auto Parts, Right Now
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Use our interactive part finder to locate exact parts for your vehicle
        </p>
        <div className="flex justify-center">
          <Link
            to="/parts"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Car className="h-5 w-5 mr-2" />
            Interactive Parts Finder
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-card p-6 rounded-lg shadow-md border border-border">
          <TrendingUp className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Real-Time Availability</h3>
          <p className="text-muted-foreground">
            Access live inventory data from our network of suppliers
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md border border-border">
          <Clock className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Fast Delivery</h3>
          <p className="text-muted-foreground">
            Get parts delivered quickly with estimated delivery times
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md border border-border">
          <Shield className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Verified Suppliers</h3>
          <p className="text-muted-foreground">
            All suppliers are vetted and certified for quality
          </p>
        </div>
      </section>

      <section className="bg-card p-8 rounded-lg shadow-md border border-border">
        <h2 className="text-2xl font-bold mb-6 text-card-foreground">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">1</span>
            </div>
            <h4 className="font-semibold mb-2 text-card-foreground">Select Vehicle</h4>
            <p className="text-muted-foreground text-sm">
              Enter your VIN, part number, or select vehicle details
            </p>
          </div>
          <ArrowRight className="absolute left-[22%] top-[10%] text-primary h-8 w-8 hidden md:block" />
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">2</span>
            </div>
            <h4 className="font-semibold mb-2 text-card-foreground">Choose Body Type</h4>
            <p className="text-muted-foreground text-sm">
              Select your vehicle's body style
            </p>
          </div>
          <ArrowRight className="absolute left-[47%] top-[10%] text-primary h-8 w-8 hidden md:block" />
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">3</span>
            </div>
            <h4 className="font-semibold mb-2 text-card-foreground">Select Part Category</h4>
            <p className="text-muted-foreground text-sm">
              Choose the system or category of parts
            </p>
          </div>
          <ArrowRight className="absolute left-[72%] top-[10%] text-primary h-8 w-8 hidden md:block" />
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">4</span>
            </div>
            <h4 className="font-semibold mb-2 text-card-foreground">Find Your Part</h4>
            <p className="text-muted-foreground text-sm">
              Use the interactive diagram to select your exact part
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;