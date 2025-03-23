import React from 'react';
import { FileText, AlertTriangle, Shield, Scale } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
        <p className="text-xl text-muted-foreground">
          Please read these terms carefully before using our services
        </p>
      </section>

      <section className="bg-card rounded-lg p-8 border border-border">
        <h2 className="text-2xl font-semibold mb-6 text-card-foreground">Agreement to Terms</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            By accessing or using Daily Drive Sourcing, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
          <p>
            We reserve the right to modify these terms at any time. Your continued use of the platform following the posting of changes will be deemed your acceptance of those changes.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Key Terms</h2>
        
        <div className="grid gap-6">
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Account Terms</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Maintaining account security</li>
                <li>Providing accurate information</li>
                <li>Updating account details</li>
                <li>All activities under your account</li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Ordering & Payment</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>When placing orders:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>All prices are in Kenyan Shillings</li>
                <li>Payment is required at time of order</li>
                <li>Orders are subject to availability</li>
                <li>We reserve the right to refuse service</li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Product Information</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Regarding products:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Images are representative only</li>
                <li>Specifications may vary</li>
                <li>Availability is not guaranteed</li>
                <li>Prices may change without notice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-destructive/10 rounded-lg p-6 border border-destructive">
        <div className="flex items-start space-x-4">
          <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-destructive">Important Disclaimers</h3>
            <div className="space-y-2 text-destructive">
              <p>• Services provided "as is" without warranty</p>
              <p>• We are not liable for installation issues</p>
              <p>• Vehicle compatibility is user's responsibility</p>
              <p>• Prices and availability subject to change</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Legal Information</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg p-6 border border-border">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Intellectual Property</h3>
            <p className="text-muted-foreground">
              All content, trademarks, and intellectual property on this platform are owned by Daily Drive Sourcing and protected by law.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border">
            <Scale className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Governing Law</h3>
            <p className="text-muted-foreground">
              These terms are governed by the laws of Kenya. Any disputes shall be resolved in the courts of Nairobi.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Questions About Terms?</h2>
        <p className="text-muted-foreground mb-6">
          Contact our legal team for any questions about our terms of service
        </p>
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          Contact Legal Team
        </button>
      </section>

      <section className="text-sm text-muted-foreground">
        <p>Last updated: March 15, 2024</p>
        <p>Daily Drive Sourcing Ltd. | Nairobi, Kenya</p>
      </section>
    </div>
  );
};

export default TermsOfService;