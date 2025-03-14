import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const faqItems: FAQItem[] = [
    {
      question: "How do I find the right parts for my vehicle?",
      answer: "You can find parts by entering your vehicle's VIN number, selecting your vehicle make and model, or using our interactive parts diagram. Our system will show you only the parts that are compatible with your vehicle.",
      category: "Parts Search"
    },
    {
      question: "Are all parts genuine/original?",
      answer: "We work with verified suppliers who provide both genuine OEM parts and high-quality aftermarket alternatives. Each part listing clearly indicates whether it's an OEM or aftermarket part.",
      category: "Parts Quality"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including M-PESA, credit/debit cards, and bank transfers. All payments are processed securely through our platform.",
      category: "Payment"
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery times vary depending on your location and part availability. Local stock items typically deliver within 1-2 days in major cities. Import items may take 7-14 days.",
      category: "Shipping"
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most parts. Parts must be unused and in original packaging. Some restrictions apply to electrical components and special order items.",
      category: "Returns"
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email and SMS. You can track your order status through your account dashboard or our tracking page.",
      category: "Orders"
    }
  ];

  const categories = Array.from(new Set(faqItems.map(item => item.category)));

  const toggleItem = (question: string) => {
    setExpandedItems(prev => 
      prev.includes(question)
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground">
          Find answers to common questions about our services
        </p>
      </section>

      <div className="space-y-8">
        {categories.map(category => (
          <section key={category}>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{category}</h2>
            <div className="space-y-4">
              {faqItems
                .filter(item => item.category === category)
                .map(item => (
                  <div
                    key={item.question}
                    className="bg-card rounded-lg border border-border overflow-hidden"
                  >
                    <button
                      className="w-full text-left px-6 py-4 flex items-center justify-between"
                      onClick={() => toggleItem(item.question)}
                    >
                      <span className="font-medium text-card-foreground">{item.question}</span>
                      {expandedItems.includes(item.question) ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>
                    {expandedItems.includes(item.question) && (
                      <div className="px-6 py-4 border-t border-border bg-muted/50">
                        <p className="text-muted-foreground">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>

      <section className="bg-card rounded-lg p-8 border border-border text-center">
        <h2 className="text-2xl font-semibold mb-4 text-card-foreground">Still Have Questions?</h2>
        <p className="text-muted-foreground mb-6">
          Our support team is here to help you with any questions you might have.
        </p>
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          Contact Support
        </button>
      </section>
    </div>
  );
};

export default FAQ;