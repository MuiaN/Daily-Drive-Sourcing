import React, { useState } from 'react';
import { Bell, Package, Tag, AlertTriangle, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NotificationPart {
  id: string;
  name: string;
  partNumber: string;
  price: number;
  oldPrice?: number;
  model: string;
  category: string;
  supplier: string;
}

interface Notification {
  id: string;
  type: 'order' | 'price' | 'stock' | 'delivery';
  title: string;
  message: string;
  date: string;
  read: boolean;
  orderId?: string;
  part?: NotificationPart;
  additionalInfo?: {
    estimatedDelivery?: string;
    trackingNumber?: string;
    location?: string;
    quantity?: number;
  };
}

const Notifications: React.FC = () => {
  const [expandedNotifications, setExpandedNotifications] = useState<string[]>([]);

  const mockNotifications: Notification[] = [
    {
      id: '1',
      type: 'order',
      title: 'Order Shipped',
      message: 'Your order #2 has been shipped and is on its way.',
      date: '2024-03-15T10:30:00',
      read: false,
      orderId: '2',
      additionalInfo: {
        estimatedDelivery: '2024-03-17',
        trackingNumber: 'TRK123456789',
        location: 'Mombasa Depot'
      }
    },
    {
      id: '2',
      type: 'price',
      title: 'Price Drop Alert',
      message: 'The Brake Pad Set you viewed is now 15% off.',
      date: '2024-03-14T15:45:00',
      read: true,
      part: {
        id: 'BP001',
        name: 'Brake Pad Set',
        partNumber: 'BP-2024-001',
        price: 7225,
        oldPrice: 8500,
        model: 'BMW 3 Series 2019',
        category: 'Brakes',
        supplier: 'German Auto Spares'
      }
    },
    {
      id: '3',
      type: 'stock',
      title: 'Back in Stock',
      message: 'The Alternator you were interested in is back in stock.',
      date: '2024-03-13T09:20:00',
      read: true,
      part: {
        id: 'ALT001',
        name: 'Alternator',
        partNumber: 'ALT-2024-003',
        price: 45000,
        model: 'BMW 3 Series 2019',
        category: 'Electrical',
        supplier: 'German Auto Spares'
      },
      additionalInfo: {
        quantity: 5
      }
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'order':
        return <Package className="h-5 w-5 text-primary" />;
      case 'price':
        return <Tag className="h-5 w-5 text-green-500" />;
      case 'stock':
        return <Bell className="h-5 w-5 text-yellow-500" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-destructive" />;
    }
  };

  const toggleNotificationDetails = (notificationId: string) => {
    setExpandedNotifications(prev => 
      prev.includes(notificationId) 
        ? prev.filter(id => id !== notificationId)
        : [...prev, notificationId]
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-card-foreground">Notifications</h1>

      <div className="space-y-4">
        {mockNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-card rounded-lg shadow-md p-4 border ${
              notification.read ? 'border-border' : 'border-primary'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className="mt-1">{getIcon(notification.type)}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-card-foreground">
                    {notification.title}
                  </h3>
                  <button
                    onClick={() => toggleNotificationDetails(notification.id)}
                    className="p-1 hover:bg-accent rounded-full"
                  >
                    {expandedNotifications.includes(notification.id) ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <p className="text-muted-foreground">{notification.message}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {new Date(notification.date).toLocaleString()}
                </p>

                {expandedNotifications.includes(notification.id) && (
                  <div className="mt-4 pt-4 border-t border-border">
                    {notification.type === 'order' && notification.orderId && (
                      <div className="space-y-2">
                        <h4 className="font-medium text-card-foreground">Order Details</h4>
                        <div className="text-sm text-muted-foreground">
                          <p>Order ID: #{notification.orderId}</p>
                          {notification.additionalInfo?.trackingNumber && (
                            <p>Tracking Number: {notification.additionalInfo.trackingNumber}</p>
                          )}
                          {notification.additionalInfo?.estimatedDelivery && (
                            <p>Estimated Delivery: {notification.additionalInfo.estimatedDelivery}</p>
                          )}
                          {notification.additionalInfo?.location && (
                            <p>Current Location: {notification.additionalInfo.location}</p>
                          )}
                        </div>
                        <Link
                          to={`/orders`}
                          className="inline-flex items-center text-primary hover:text-primary/80 mt-2"
                        >
                          View Order Details
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    )}

                    {notification.part && (
                      <div className="space-y-2">
                        <h4 className="font-medium text-card-foreground">Part Details</h4>
                        <div className="text-sm text-muted-foreground">
                          <p>Name: {notification.part.name}</p>
                          <p>Part Number: {notification.part.partNumber}</p>
                          <p>Model: {notification.part.model}</p>
                          <p>Category: {notification.part.category}</p>
                          <p>Supplier: {notification.part.supplier}</p>
                          {notification.type === 'price' && notification.part.oldPrice && (
                            <div className="mt-2">
                              <p className="line-through">
                                Old Price: KSh {notification.part.oldPrice.toLocaleString()}
                              </p>
                              <p className="text-green-500 font-medium">
                                New Price: KSh {notification.part.price.toLocaleString()}
                              </p>
                            </div>
                          )}
                          {notification.type === 'stock' && notification.additionalInfo?.quantity && (
                            <p className="mt-2">
                              Available Quantity: {notification.additionalInfo.quantity} units
                            </p>
                          )}
                        </div>
                        <Link
                          to={`/parts`}
                          className="inline-flex items-center text-primary hover:text-primary/80 mt-2"
                        >
                          View Part Details
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
              {!notification.read && (
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;