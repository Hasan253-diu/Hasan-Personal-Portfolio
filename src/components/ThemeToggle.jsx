import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ className = '' }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {/* Sun Icon */}
      <Sun 
        className={`w-4 h-4 transition-colors duration-200 ${
          !isDark ? 'text-amber-500' : 'text-slate-400'
        }`} 
      />

      {/* Neumorphic Switch Pill */}
      <button
        onClick={toggleTheme}
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Toggle dark/light mode"
        className="w-12 h-6 rounded-full relative p-0.5 transition-all duration-300 neu-inset focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
      >
        <div
          className={`w-5 h-5 rounded-full bg-primary shadow-md transform transition-transform duration-300 flex items-center justify-center ${
            isDark ? 'translate-x-6' : 'translate-x-0'
          }`}
        >
          {isDark ? (
            <Moon className="w-3 h-3 text-white" />
          ) : (
            <Sun className="w-3 h-3 text-white" />
          )}
        </div>
      </button>

      {/* Moon Icon */}
      <Moon 
        className={`w-4 h-4 transition-colors duration-200 ${
          isDark ? 'text-blue-400' : 'text-slate-400'
        }`} 
      />
    </div>
  );
}
