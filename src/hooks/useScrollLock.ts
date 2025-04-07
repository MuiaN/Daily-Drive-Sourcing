import { useEffect } from 'react';

export const useScrollLock = (lock: boolean) => {
  useEffect(() => {
    if (lock) {
      // Save current scroll position and body styles
      const scrollY = window.scrollY;
      const originalStyle = window.getComputedStyle(document.body).overflow;
      
      // Prevent scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      return () => {
        // Restore scrolling and position
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = originalStyle;
        window.scrollTo(0, scrollY);
      };
    }
  }, [lock]);
};