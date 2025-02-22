import { create } from 'zustand';
import { Part } from '../types';

interface CartItem extends Part {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (part: Part) => void;
  removeItem: (partId: string) => void;
  updateQuantity: (partId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (part) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === part.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === part.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { items: [...state.items, { ...part, quantity: 1 }] };
    }),
  removeItem: (partId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== partId),
    })),
  updateQuantity: (partId, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === partId ? { ...item, quantity } : item
      ),
    })),
  clearCart: () => set({ items: [] }),
}));