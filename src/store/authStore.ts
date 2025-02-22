import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

// Mock user data
const mockUser = {
  id: '1',
  email: 'john@example.com',
  name: 'John Smith'
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  setUser: (user) => set({ user, loading: false }),
  signIn: async (email, password) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock validation
    if (email === 'demo@example.com' && password === 'password') {
      set({ user: mockUser });
    } else {
      throw new Error('Invalid credentials');
    }
  },
  signUp: async (email, password) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock signup
    set({ user: { ...mockUser, email } });
  },
  signOut: async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    set({ user: null });
  },
}));