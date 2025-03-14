import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  mode?: 'signin' | 'signup';
}

const AuthModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSuccess,
  mode = 'signin',
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentMode, setCurrentMode] = useState(mode);

  const { signIn, signUp } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (currentMode === 'signin') {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card p-6 rounded-lg shadow-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-card-foreground">
          {currentMode === 'signin' ? 'Sign In' : 'Create Account'}
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-destructive/10 border border-destructive text-destructive rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-card-foreground"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-card-foreground"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {isLoading
              ? 'Loading...'
              : currentMode === 'signin'
              ? 'Sign In'
              : 'Create Account'}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          {currentMode === 'signin' ? (
            <>
              Don't have an account?{' '}
              <button
                onClick={() => setCurrentMode('signup')}
                className="text-primary hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setCurrentMode('signin')}
                className="text-primary hover:underline"
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
