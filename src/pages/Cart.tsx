import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ChevronDown, ChevronUp, Package, Info } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const { items, updateQuantity, removeItem } = useCartStore();
  const navigate = useNavigate();
  const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const toggleItemDetails = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold text-card-foreground mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-4">Start adding parts to your cart</p>
        <button
          onClick={() => navigate('/search')}
          className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Browse Parts
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-card-foreground">Shopping Cart</h1>
      
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="bg-card rounded-lg p-4 border border-border">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-card-foreground">{item.name}</h3>
                  <button
                    onClick={() => toggleItemDetails(item.id)}
                    className="p-1 hover:bg-accent rounded-full"
                  >
                    {expandedItems.includes(item.id) ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  <div className="flex items-center">
                    <Package className="h-4 w-4 mr-1" />
                    Part #: {item.partNumber}
                  </div>
                  <div className="flex items-center mt-1">
                    <Info className="h-4 w-4 mr-1" />
                    For: {item.model}
                  </div>
                </div>
              </div>
              <div className="text-right ml-4">
                <p className="font-semibold text-card-foreground">
                  KSh {(item.price * item.quantity).toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">
                  KSh {item.price.toLocaleString()} each
                </p>
              </div>
            </div>

            {expandedItems.includes(item.id) && (
              <div className="mt-4 pt-4 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-card-foreground mb-2">Vehicle Details</h4>
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
                    <h4 className="font-medium text-card-foreground mb-2">Part Details</h4>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Category: {item.category}</p>
                      <p>Supplier: {item.supplier}</p>
                      <p>Location: {item.location}</p>
                      <p>Delivery Time: {item.deliveryTime}</p>
                      <p>Stock: {item.availability} units available</p>
                      <p>Type: {item.isLocal ? 'Local Stock' : 'Import'}</p>
                    </div>
                  </div>
                  {item.description && (
                    <div className="col-span-2">
                      <h4 className="font-medium text-card-foreground mb-2">Description</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                  className="p-1 hover:bg-accent rounded"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 hover:bg-accent rounded"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-destructive hover:text-destructive/80 p-1"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-card rounded-lg p-6 border border-border">
        <div className="flex justify-between mb-4">
          <span className="text-card-foreground">Subtotal</span>
          <span className="font-semibold text-card-foreground">
            KSh {total.toLocaleString()}
          </span>
        </div>
        <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;