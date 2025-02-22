import React from 'react';
import { Package, Truck, CheckCircle } from 'lucide-react';

const Orders: React.FC = () => {
  const mockOrders = [
    {
      id: '1',
      date: '2024-03-15',
      status: 'Processing',
      total: 85000,
      items: [
        { name: 'Brake Pad Set', quantity: 2, price: 8500 },
        { name: 'Oil Filter', quantity: 1, price: 1200 },
      ],
    },
    {
      id: '2',
      date: '2024-03-10',
      status: 'Shipped',
      total: 45000,
      items: [
        { name: 'Alternator', quantity: 1, price: 45000 },
      ],
    },
    {
      id: '3',
      date: '2024-03-05',
      status: 'Delivered',
      total: 32000,
      items: [
        { name: 'Shock Absorber Set', quantity: 1, price: 32000 },
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Processing':
        return <Package className="h-5 w-5 text-yellow-500" />;
      case 'Shipped':
        return <Truck className="h-5 w-5 text-blue-500" />;
      case 'Delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-card-foreground">Your Orders</h1>

      <div className="space-y-4">
        {mockOrders.map((order) => (
          <div
            key={order.id}
            className="bg-card rounded-lg shadow-md p-6 border border-border"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(order.status)}
                  <span className="font-semibold text-card-foreground">
                    Order #{order.id}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Placed on {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <div className="font-semibold text-card-foreground">
                  KSh {order.total.toLocaleString()}
                </div>
                <span className="text-sm text-muted-foreground">{order.status}</span>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <h4 className="font-medium text-card-foreground mb-2">Order Items</h4>
              <div className="space-y-2">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.quantity}x {item.name}
                    </span>
                    <span className="text-card-foreground">
                      KSh {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;