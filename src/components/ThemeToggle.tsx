import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 text-muted-foreground hover:text-foreground"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Moon className="h-6 w-6 absolute top-0 left-0 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Sun className="h-6 w-6 absolute top-0 left-0 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </div>
    </button>
  );
};

export default ThemeToggle;