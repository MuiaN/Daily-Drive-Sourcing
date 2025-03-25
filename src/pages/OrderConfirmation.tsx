import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, MapPin, Calendar } from 'lucide-react';

const OrderConfirmation: React.FC = () => {
  // Mock order details
  const orderDetails = {
    orderNumber: 'ORD-2024-001',
    total: 85000,
    shippingAddress: '123 Main St, Nairobi, Kenya',
    estimatedDelivery: '2024-03-20',
    items: [
      {
        name: 'Brake Pad Set',
        quantity: 2,
        price: 8500,
        partNumber: 'BP-2024-001'
      },
      {
        name: 'Oil Filter',
        quantity: 1,
        price: 1200,
        partNumber: 'OF-2024-002'
      }
    ]
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-card-foreground">Order Confirmed!</h1>
        <p className="text-muted-foreground mt-2">
          Thank you for your order. We'll send you updates about your delivery.
        </p>
      </div>

      <div className="bg-card rounded-lg p-6 border border-border mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-card-foreground">Order Details</h2>
          <span className="text-sm text-muted-foreground">#{orderDetails.orderNumber}</span>
        </div>

        <div className="space-y-4">
          {orderDetails.items.map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
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

          <div className="pt-4 border-t border-border">
            <div className="flex justify-between font-medium">
              <span className="text-card-foreground">Total</span>
              <span className="text-card-foreground">
                KSh {orderDetails.total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-card rounded-lg p-6 border border-border">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-card-foreground">Delivery Address</h3>
          </div>
          <p className="text-muted-foreground">{orderDetails.shippingAddress}</p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-card-foreground">Estimated Delivery</h3>
          </div>
          <p className="text-muted-foreground">
            {new Date(orderDetails.estimatedDelivery).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="bg-card rounded-lg p-6 border border-border mb-8">
        <h3 className="font-semibold mb-4 text-card-foreground">What's Next?</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Package className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium text-card-foreground">Order Processing</p>
              <p className="text-sm text-muted-foreground">
                We're preparing your items for shipment
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Truck className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium text-card-foreground">Shipping Updates</p>
              <p className="text-sm text-muted-foreground">
                You'll receive email updates about your delivery
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <Link
          to="/orders"
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          View Order
        </Link>
        <Link
          to="/"
          className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;