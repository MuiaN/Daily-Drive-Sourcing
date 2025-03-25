import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { CreditCard, Smartphone, Building2, Shield } from 'lucide-react';

const Payment: React.FC = () => {
  const navigate = useNavigate();
  const { items } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card' | 'bank'>('mpesa');

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = 500; // This should come from the checkout page
  const total = subtotal + shippingCost;

  const handlePayment = () => {
    // This would normally process the payment
    // For now, just navigate to confirmation
    navigate('/order-confirmation');
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-8 text-card-foreground">Payment</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Payment Methods */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-card-foreground">
              <CreditCard className="h-5 w-5 text-primary" />
              Payment Method
            </h2>
            
            <div className="space-y-4">
              {/* M-PESA */}
              <label className="flex items-start p-4 border border-input rounded-lg cursor-pointer hover:border-primary transition-colors">
                <input
                  type="radio"
                  name="payment"
                  value="mpesa"
                  checked={paymentMethod === 'mpesa'}
                  onChange={() => setPaymentMethod('mpesa')}
                  className="mt-1"
                />
                <div className="ml-4">
                  <div className="font-medium text-card-foreground">M-PESA</div>
                  <div className="text-sm text-muted-foreground">Pay directly with M-PESA</div>
                </div>
              </label>

              {/* Card Payment */}
              <label className="flex items-start p-4 border border-input rounded-lg cursor-pointer hover:border-primary transition-colors">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="mt-1"
                />
                <div className="ml-4">
                  <div className="font-medium text-card-foreground">Card Payment</div>
                  <div className="text-sm text-muted-foreground">Pay with credit or debit card</div>
                </div>
              </label>

              {/* Bank Transfer */}
              <label className="flex items-start p-4 border border-input rounded-lg cursor-pointer hover:border-primary transition-colors">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === 'bank'}
                  onChange={() => setPaymentMethod('bank')}
                  className="mt-1"
                />
                <div className="ml-4">
                  <div className="font-medium text-card-foreground">Bank Transfer</div>
                  <div className="text-sm text-muted-foreground">Pay via bank transfer</div>
                </div>
              </label>
            </div>
          </div>

          {/* Payment Details */}
          {paymentMethod === 'mpesa' && (
            <div className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-card-foreground">
                <Smartphone className="h-5 w-5 text-primary" />
                M-PESA Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                    placeholder="+254"
                  />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'card' && (
            <div className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-card-foreground">
                <CreditCard className="h-5 w-5 text-primary" />
                Card Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'bank' && (
            <div className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-card-foreground">
                <Building2 className="h-5 w-5 text-primary" />
                Bank Transfer Details
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p>Please transfer the total amount to:</p>
                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <p>Bank: Kenya Commercial Bank</p>
                  <p>Account Name: Daily Drive Sourcing Ltd</p>
                  <p>Account Number: 1234567890</p>
                  <p>Branch: Nairobi</p>
                  <p>Swift Code: KCBLKENX</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg p-6 border border-border sticky top-6">
            <h2 className="text-lg font-semibold mb-4 text-card-foreground">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {items.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <div>
                    <div className="font-medium text-card-foreground">
                      {item.quantity}x {item.name}
                    </div>
                    <div className="text-muted-foreground">{item.partNumber}</div>
                  </div>
                  <div className="text-card-foreground">
                    KSh {(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-card-foreground">KSh {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-card-foreground">KSh {shippingCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-medium text-lg pt-2 border-t border-border">
                <span className="text-card-foreground">Total</span>
                <span className="text-card-foreground">KSh {total.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="w-full mt-6 bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Pay Now
            </button>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>Secure payment processing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;