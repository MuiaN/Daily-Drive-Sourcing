import React, { useState } from 'react';
import { Package, Truck, CheckCircle, ChevronDown, ChevronUp, Info } from 'lucide-react';

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
  partNumber: string;
  model: string;
  engineType?: string;
  engineNumber?: string;
  transmissionType?: string;
  trimLevel?: string;
  category: string;
  supplier: string;
  location: string;
  deliveryTime: string;
  isLocal: boolean;
  description?: string;
}

interface Order {
  id: string;
  date: string;
  status: 'Processing' | 'Shipped' | 'Delivered';
  total: number;
  items: OrderItem[];
  trackingNumber?: string;
  estimatedDelivery?: string;
  shippingAddress: string;
  paymentMethod: string;
}

const Orders: React.FC = () => {
  const [expandedOrders, setExpandedOrders] = useState<string[]>([]);
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: string[] }>({});

  const mockOrders: Order[] = [
    {
      id: '1',
      date: '2024-03-15',
      status: 'Processing',
      total: 85000,
      shippingAddress: '123 Main St, Nairobi, Kenya',
      paymentMethod: 'Credit Card',
      items: [
        {
          name: 'Brake Pad Set',
          quantity: 2,
          price: 8500,
          partNumber: 'BP-2024-001',
          model: 'BMW 3 Series 2019',
          engineType: '2.0L 4-cylinder (B48)',
          engineNumber: 'B48B20B',
          transmissionType: 'Automatic 8-Speed',
          trimLevel: 'Sport Line',
          category: 'Brakes',
          supplier: 'German Auto Spares',
          location: 'Nairobi, Kenya',
          deliveryTime: '1-2 days',
          isLocal: true,
          description: 'High-performance brake pads for optimal braking'
        },
        {
          name: 'Oil Filter',
          quantity: 1,
          price: 1200,
          partNumber: 'OF-2024-002',
          model: 'BMW 3 Series 2019',
          category: 'Engine',
          supplier: 'German Auto Spares',
          location: 'Nairobi, Kenya',
          deliveryTime: '1-2 days',
          isLocal: true
        }
      ]
    },
    {
      id: '2',
      date: '2024-03-10',
      status: 'Shipped',
      total: 45000,
      trackingNumber: 'TRK123456789',
      estimatedDelivery: '2024-03-17',
      shippingAddress: '456 Park Ave, Mombasa, Kenya',
      paymentMethod: 'M-PESA',
      items: [
        {
          name: 'Alternator',
          quantity: 1,
          price: 45000,
          partNumber: 'ALT-2024-003',
          model: 'BMW 3 Series 2019',
          category: 'Electrical',
          supplier: 'German Auto Spares',
          location: 'Mombasa, Kenya',
          deliveryTime: '2-3 days',
          isLocal: true,
          description: 'OEM replacement alternator'
        }
      ]
    }
  ];

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'Processing':
        return <Package className="h-5 w-5 text-yellow-500" />;
      case 'Shipped':
        return <Truck className="h-5 w-5 text-blue-500" />;
      case 'Delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
    }
  };

  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrders(prev => 
      prev.includes(orderId) 
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const toggleItemDetails = (orderId: string, itemId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [orderId]: prev[orderId]?.includes(itemId)
        ? prev[orderId].filter(id => id !== itemId)
        : [...(prev[orderId] || []), itemId]
    }));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-card-foreground">Your Orders</h1>

      <div className="space-y-4">
        {mockOrders.map((order) => (
          <div
            key={order.id}
            className="bg-card rounded-lg shadow-md border border-border"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(order.status)}
                    <span className="font-semibold text-card-foreground">
                      Order #{order.id}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Placed on {new Date(order.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Payment: {order.paymentMethod}
                  </p>
                  {order.trackingNumber && (
                    <p className="text-sm text-muted-foreground">
                      Tracking: {order.trackingNumber}
                    </p>
                  )}
                  {order.estimatedDelivery && (
                    <p className="text-sm text-muted-foreground">
                      Estimated Delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <div className="font-semibold text-card-foreground">
                    KSh {order.total.toLocaleString()}
                  </div>
                  <span className="text-sm text-muted-foreground">{order.status}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Info className="h-4 w-4" />
                    <span>{order.items.length} item{order.items.length !== 1 ? 's' : ''}</span>
                  </div>
                  <button
                    onClick={() => toggleOrderDetails(order.id)}
                    className="flex items-center space-x-1 text-primary hover:text-primary/80"
                  >
                    <span className="text-sm">
                      {expandedOrders.includes(order.id) ? 'Hide Details' : 'Show Details'}
                    </span>
                    {expandedOrders.includes(order.id) ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {expandedOrders.includes(order.id) && (
              <div className="border-t border-border">
                <div className="p-6 space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-card-foreground mb-2">Shipping Address</h4>
                      <p className="text-sm text-muted-foreground">{order.shippingAddress}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-card-foreground mb-2">Order Status</h4>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Status: {order.status}</p>
                        {order.trackingNumber && (
                          <p className="text-sm text-muted-foreground">
                            Tracking Number: {order.trackingNumber}
                          </p>
                        )}
                        {order.estimatedDelivery && (
                          <p className="text-sm text-muted-foreground">
                            Estimated Delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-card-foreground mb-4">Order Items</h4>
                    <div className="space-y-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="bg-background rounded-lg p-4 border border-border">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center">
                                <h5 className="font-medium text-card-foreground">{item.name}</h5>
                                <button
                                  onClick={() => toggleItemDetails(order.id, `${index}`)}
                                  className="ml-2 p-1 hover:bg-accent rounded-full"
                                >
                                  {expandedItems[order.id]?.includes(`${index}`) ? (
                                    <ChevronUp className="h-4 w-4" />
                                  ) : (
                                    <ChevronDown className="h-4 w-4" />
                                  )}
                                </button>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {item.quantity}x @ KSh {item.price.toLocaleString()} each
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-card-foreground">
                                KSh {(item.quantity * item.price).toLocaleString()}
                              </p>
                            </div>
                          </div>

                          {expandedItems[order.id]?.includes(`${index}`) && (
                            <div className="mt-4 pt-4 border-t border-border">
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <h6 className="font-medium text-card-foreground mb-2">Vehicle Details</h6>
                                  <div className="space-y-1 text-muted-foreground">
                                    <p>Make: {item.model.split(' ')[0]}</p>
                                    <p>Model: {item.model.split(' ').slice(1, -1).join(' ')}</p>
                                    <p>Year: {item.model.split(' ').pop()}</p>
                                    {item.engineType && <p>Engine: {item.engineType}</p>}
                                    {item.engineNumber && <p>Engine Number: {item.engineNumber}</p>}
                                    {item.transmissionType && <p>Transmission: {item.transmissionType}</p>}
                                    {item.trimLevel && <p>Trim Level: {item.trimLevel}</p>}
                                  </div>
                                </div>
                                <div>
                                  <h6 className="font-medium text-card-foreground mb-2">Part Details</h6>
                                  <div className="space-y-1 text-muted-foreground">
                                    <p>Part Number: {item.partNumber}</p>
                                    <p>Category: {item.category}</p>
                                    <p>Supplier: {item.supplier}</p>
                                    <p>Location: {item.location}</p>
                                    <p>Delivery Time: {item.deliveryTime}</p>
                                    <p>Type: {item.isLocal ? 'Local Stock' : 'Import'}</p>
                                  </div>
                                </div>
                                {item.description && (
                                  <div className="col-span-2">
                                    <h6 className="font-medium text-card-foreground mb-2">Description</h6>
                                    <p className="text-muted-foreground">{item.description}</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;