import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-xl text-muted-foreground">
          How we protect and handle your information
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-lg p-6 border border-border">
          <Shield className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Data Protection</h3>
          <p className="text-muted-foreground">
            We employ industry-standard security measures to protect your personal information and ensure data privacy.
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <Lock className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">Secure Transactions</h3>
          <p className="text-muted-foreground">
            All transactions are encrypted and processed through secure payment gateways to protect your financial information.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
        
        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold mb-4 text-card-foreground">Personal Information</h3>
          <div className="space-y-2 text-muted-foreground">
            <p>We collect the following personal information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name and contact details</li>
              <li>Shipping and billing addresses</li>
              <li>Payment information</li>
              <li>Vehicle information</li>
            </ul>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold mb-4 text-card-foreground">Usage Information</h3>
          <div className="space-y-2 text-muted-foreground">
            <p>We also collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Browser and device information</li>
              <li>IP address and location data</li>
              <li>Website usage statistics</li>
              <li>Search and browsing history</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-card rounded-lg p-8 border border-border">
        <h2 className="text-2xl font-semibold mb-6 text-card-foreground">How We Use Your Information</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Primary Uses</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>• Process your orders</p>
              <p>• Provide customer support</p>
              <p>• Send order updates</p>
              <p>• Improve our services</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Additional Uses</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>• Personalize your experience</p>
              <p>• Send relevant offers</p>
              <p>• Prevent fraud</p>
              <p>• Analyze usage patterns</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Your Rights</h2>
        
        <div className="bg-card rounded-lg p-6 border border-border">
          <div className="flex items-start space-x-4">
            <Eye className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Data Access Rights</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access your personal data</li>
                  <li>Request data correction</li>
                  <li>Request data deletion</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Questions About Privacy?</h2>
        <p className="text-muted-foreground mb-6">
          Contact our privacy team for any questions or concerns about your data
        </p>
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          Contact Privacy Team
        </button>
      </section>

      <section className="text-sm text-muted-foreground">
        <p>Last updated: March 15, 2024</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;