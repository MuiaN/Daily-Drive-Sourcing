import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Info, HelpCircle, Building2, FileText, Truck, Shield, Users } from 'lucide-react';

const Sitemap: React.FC = () => {
  const siteMap = [
    {
      title: 'Main Navigation',
      icon: <Car className="h-5 w-5 text-primary" />,
      links: [
        { name: 'Home', path: '/' },
        { name: 'Parts Search', path: '/parts' },
        { name: 'Cart', path: '/cart' },
        { name: 'Orders', path: '/orders' },
        { name: 'Notifications', path: '/notifications' },
        { name: 'Profile', path: '/profile' }
      ]
    },
    {
      title: 'About Us',
      icon: <Info className="h-5 w-5 text-primary" />,
      links: [
        { name: 'About', path: '/about' },
        { name: 'How It Works', path: '/how-it-works' }
      ]
    },
    {
      title: 'Partners',
      icon: <Building2 className="h-5 w-5 text-primary" />,
      links: [
        { name: 'For Suppliers', path: '/suppliers' },
        { name: 'For Dealerships', path: '/dealerships' }
      ]
    },
    {
      title: 'Support',
      icon: <HelpCircle className="h-5 w-5 text-primary" />,
      links: [
        { name: 'FAQ', path: '/faq' },
        { name: 'Shipping Policy', path: '/shipping' },
        { name: 'Returns & Warranty', path: '/returns' }
      ]
    },
    {
      title: 'Legal',
      icon: <FileText className="h-5 w-5 text-primary" />,
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Sitemap</h1>
        <p className="text-xl text-muted-foreground">
          Find everything on our site
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {siteMap.map((section, index) => (
          <div key={index} className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-center gap-2 mb-4">
              {section.icon}
              <h2 className="text-xl font-semibold text-card-foreground">{section.title}</h2>
            </div>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="bg-card rounded-lg p-8 border border-border">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Truck className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-card-foreground">Fast Delivery</h3>
            <p className="text-muted-foreground">
              Same-day delivery in Nairobi and next-day delivery to major cities
            </p>
          </div>
          <div>
            <Shield className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-card-foreground">Quality Guaranteed</h3>
            <p className="text-muted-foreground">
              All parts verified for authenticity and quality
            </p>
          </div>
          <div>
            <Users className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-card-foreground">Expert Support</h3>
            <p className="text-muted-foreground">
              Professional assistance available 24/7
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;