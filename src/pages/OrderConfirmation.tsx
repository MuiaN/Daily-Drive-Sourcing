import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, MapPin, Calendar, CreditCard } from 'lucide-react';
import { useCheckoutStore } from '../store/checkoutStore';
import { useCartStore } from '../store/cartStore';

const OrderConfirmation: React.FC = () => {
  const { items, subtotal, deliveryDetails, paymentDetails, clearCheckout } = useCheckoutStore();
  const { clearCart } = useCartStore();

  if (!deliveryDetails || !paymentDetails) return null;

  const total = subtotal + deliveryDetails.cost;
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + (deliveryDetails.method === 'express' ? 1 : 3));

  const getPaymentMethodDisplay = () => {
    switch (paymentDetails.method) {
      case 'mpesa':
        return `M-PESA (${paymentDetails.phoneNumber})`;
      case 'card':
        return `Card ending in ${paymentDetails.cardNumber?.slice(-4)}`;
      case 'bank':
        return `Bank Transfer (Ref: ${paymentDetails.bankReference})`;
      default:
        return 'Unknown payment method';
    }
  };

  const handleViewOrder = () => {
    clearCheckout();
  };

  const handleContinueShopping = () => {
    clearCheckout();
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
          <span className="text-sm text-muted-foreground">#{new Date().getTime()}</span>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <div>
                <div className="font-medium text-card-foreground">
                  {item.quantity}x {item.name}
                </div>
                <div className="text-muted-foreground">
                  <div>Part #: {item.partNumber}</div>
                  <div>Model: {item.model}</div>
                  {item.engineType && <div>Engine: {item.engineType}</div>}
                  {item.engineNumber && <div>Engine #: {item.engineNumber}</div>}
                  {item.transmissionType && <div>Transmission: {item.transmissionType}</div>}
                  {item.trimLevel && <div>Trim: {item.trimLevel}</div>}
                </div>
              </div>
              <div className="text-card-foreground">
                KSh {(item.price * item.quantity).toLocaleString()}
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-border">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-card-foreground">KSh {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-card-foreground">
                {deliveryDetails.method === 'pickup' ? 'Self-Pickup' : `KSh ${deliveryDetails.cost.toLocaleString()}`}
              </span>
            </div>
            <div className="flex justify-between font-medium mt-2 pt-2 border-t border-border">
              <span className="text-card-foreground">Total</span>
              <span className="text-card-foreground">
                KSh {total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-card rounded-lg p-6 border border-border">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-card-foreground">
              {deliveryDetails.method === 'pickup' ? 'Pickup Location' : 'Delivery Address'}
            </h3>
          </div>
          {deliveryDetails.method === 'pickup' ? (
            <p className="text-muted-foreground">
              {deliveryDetails.pickupLocation?.supplier}<br />
              {deliveryDetails.pickupLocation?.address}
            </p>
          ) : (
            <p className="text-muted-foreground">
              {deliveryDetails.address?.firstName} {deliveryDetails.address?.lastName}<br />
              {deliveryDetails.address?.street}<br />
              {deliveryDetails.address?.city}, {deliveryDetails.address?.county}
            </p>
          )}
          <div className="mt-4 pt-4 border-t border-border">
            <h4 className="font-medium text-card-foreground mb-2">Contact Information</h4>
            <p className="text-muted-foreground">
              Phone: {deliveryDetails.contact.phone}<br />
              Email: {deliveryDetails.contact.email}
            </p>
          </div>
          {deliveryDetails.business && (
            <div className="mt-4 pt-4 border-t border-border">
              <h4 className="font-medium text-card-foreground mb-2">Business Information</h4>
              <p className="text-muted-foreground">
                {deliveryDetails.business.name}<br />
                KRA PIN: {deliveryDetails.business.kraPin}
              </p>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-card-foreground">
                {deliveryDetails.method === 'pickup' ? 'Pickup Available' : 'Estimated Delivery'}
              </h3>
            </div>
            <p className="text-muted-foreground">
              {deliveryDetails.method === 'pickup' ? 'Available for pickup now' : estimatedDelivery.toLocaleDateString()}
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-card-foreground">Payment Information</h3>
            </div>
            <p className="text-muted-foreground">
              Method: {getPaymentMethodDisplay()}
            </p>
          </div>
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
                We're preparing your items for {deliveryDetails.method === 'pickup' ? 'pickup' : 'shipment'}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Truck className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium text-card-foreground">
                {deliveryDetails.method === 'pickup' ? 'Pickup Notification' : 'Shipping Updates'}
              </p>
              <p className="text-sm text-muted-foreground">
                You'll receive email updates about your {deliveryDetails.method === 'pickup' ? 'pickup' : 'delivery'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <Link
          to="/orders"
          onClick={handleViewOrder}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          View Order
        </Link>
        <Link
          to="/"
          onClick={handleContinueShopping}
          className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;