import { createContext, useContext } from 'react';

// Create a context with TypeScript.
// The context value can be either `{ name: string }` or `undefined`.
// Using `undefined` as default helps catch errors if used outside the provider.
const ThemeProviderContext = createContext<{ name: string } | undefined>(
  undefined
);

// The ThemeProvider component wraps its children with the context provider
// and provides a static value: { name: 'Hello world' }.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProviderContext.Provider value={{ name: 'Hello world' }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Custom hook to access the theme context.
// If the hook is used outside of the ThemeProvider, an error is thrown.
// This prevents accidental misuse and ensures the context is always available.
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error('useTheme must be used within the ThemeProvider');
  return context;
};
