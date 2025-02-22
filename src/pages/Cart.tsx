import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const { items, updateQuantity, removeItem } = useCartStore();
  const navigate = useNavigate();

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

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
              <div>
                <h3 className="font-semibold text-card-foreground">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.model}</p>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <span className="mr-2">{item.supplier}</span>
                  <span>•</span>
                  <span className="ml-2">{item.location}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-card-foreground">
                  KSh {(item.price * item.quantity).toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">
                  KSh {item.price.toLocaleString()} each
                </p>
              </div>
            </div>
            
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