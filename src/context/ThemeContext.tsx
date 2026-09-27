import React, { createContext, useContext, useState, useEffect } from 'react';
import { Currency } from '../types';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatCurrency: (amountKES: number, amountUSD: number) => string;
  formatValue: (amountKES: number) => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const KES_TO_USD_RATE = 130; // 1 USD = ~130 KES

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dth_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [currency, setCurrencyState] = useState<Currency>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dth_currency');
      if (saved === 'USD' || saved === 'KES') return saved;
    }
    return 'KES';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('dth_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('dth_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem('dth_currency', c);
  };

  const formatCurrency = (amountKES: number, amountUSD: number) => {
    if (currency === 'USD') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(amountUSD);
    }
    return `KES ${new Intl.NumberFormat('en-KE', {
      maximumFractionDigits: 0,
    }).format(amountKES)}`;
  };

  const formatValue = (amountKES: number) => {
    if (currency === 'USD') {
      const usdVal = Math.round(amountKES / KES_TO_USD_RATE);
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(usdVal);
    }
    return `KES ${new Intl.NumberFormat('en-KE', {
      maximumFractionDigits: 0,
    }).format(amountKES)}`;
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, currency, setCurrency, formatCurrency, formatValue }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
