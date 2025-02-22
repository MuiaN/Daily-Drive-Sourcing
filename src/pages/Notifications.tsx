import React from 'react';
import { Bell, Package, Tag, AlertTriangle } from 'lucide-react';

const Notifications: React.FC = () => {
  const mockNotifications = [
    {
      id: '1',
      type: 'order',
      title: 'Order Shipped',
      message: 'Your order #2 has been shipped and is on its way.',
      date: '2024-03-15T10:30:00',
      read: false,
    },
    {
      id: '2',
      type: 'price',
      title: 'Price Drop Alert',
      message: 'The Brake Pad Set you viewed is now 15% off.',
      date: '2024-03-14T15:45:00',
      read: true,
    },
    {
      id: '3',
      type: 'stock',
      title: 'Back in Stock',
      message: 'The Alternator you were interested in is back in stock.',
      date: '2024-03-13T09:20:00',
      read: true,
    },
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
                <h3 className="font-semibold text-card-foreground">
                  {notification.title}
                </h3>
                <p className="text-muted-foreground">{notification.message}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {new Date(notification.date).toLocaleString()}
                </p>
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