import { create } from 'zustand';
import { Part } from '../types';

export interface DeliveryDetails {
  method: 'standard' | 'express' | 'pickup';
  address?: {
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    county: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  business?: {
    name: string;
    kraPin: string;
  };
  pickupLocation?: {
    supplier: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  cost: number;
}

export interface PaymentDetails {
  method: 'mpesa' | 'card' | 'bank';
  phoneNumber?: string;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvv?: string;
  bankReference?: string;
}

interface CheckoutState {
  items: Part[];
  subtotal: number;
  deliveryDetails: DeliveryDetails | null;
  paymentDetails: PaymentDetails | null;
  setDeliveryDetails: (details: DeliveryDetails) => void;
  setPaymentDetails: (details: PaymentDetails) => void;
  setItems: (items: Part[]) => void;
  setSubtotal: (subtotal: number) => void;
  clearCheckout: () => void;
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  items: [],
  subtotal: 0,
  deliveryDetails: null,
  paymentDetails: null,
  setDeliveryDetails: (details) => set({ deliveryDetails: details }),
  setPaymentDetails: (details) => set({ paymentDetails: details }),
  setItems: (items) => set({ items }),
  setSubtotal: (subtotal) => set({ subtotal }),
  clearCheckout: () => set({ items: [], subtotal: 0, deliveryDetails: null, paymentDetails: null }),
}));