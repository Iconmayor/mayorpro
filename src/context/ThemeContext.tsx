import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const gold = '#D4AF37';
const goldLight = '#E8C547';
const goldDark = '#B8962E';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // The editorial light presentation is the default on a visitor's first visit.
  // The versioned key intentionally ignores older theme preferences from before
  // the light-first redesign, while preserving any new choice made with the toggle.
  const themePreferenceKey = 'able-digital-theme-v2';
  const [mode, setMode] = useState<ThemeMode>(() => {
    try {
      return localStorage.getItem(themePreferenceKey) === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(themePreferenceKey, mode);
    } catch {
      // Browsers with restricted storage can still use the theme toggle.
    }
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: gold,
            light: goldLight,
            dark: goldDark,
          },
          secondary: {
            main: mode === 'dark' ? '#1a1a1a' : '#f5f5f5',
          },
          background: {
            default: mode === 'dark' ? '#0a0a0a' : '#ffffff',
            paper: mode === 'dark' ? '#141414' : '#fafafa',
          },
          text: {
            primary: mode === 'dark' ? '#ffffff' : '#0a0a0a',
            secondary: mode === 'dark' ? '#a0a0a0' : '#666666',
          },
        },
        typography: {
          fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
          h1: {
            fontWeight: 700,
          },
          h2: {
            fontWeight: 600,
          },
          h3: {
            fontWeight: 600,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: 8,
                fontWeight: 500,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                backgroundImage: 'none',
              },
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-root': {
                  borderRadius: 8,
                  '&:hover fieldset': {
                    borderColor: gold,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: gold,
                  },
                },
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
