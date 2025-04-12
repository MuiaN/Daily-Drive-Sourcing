import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setIsLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Handle initial page load
  useEffect(() => {
    const handleInitialLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      handleInitialLoad();
    } else {
      window.addEventListener('load', handleInitialLoad);
      return () => window.removeEventListener('load', handleInitialLoad);
    }
  }, []);

  // Handle route changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Minimum loading time to prevent flashing
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
          <LoadingSpinner size="lg" />
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
};