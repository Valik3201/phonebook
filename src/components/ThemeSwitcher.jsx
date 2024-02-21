// Import necessary hooks from React
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// Import Switch component from NextUI and icons from lucide-react
import { Switch } from '@nextui-org/react';
import { SunIcon, MoonIcon } from 'lucide-react';

/**
 * Component for toggling between light and dark themes.
 * @returns {JSX.Element} The JSX element representing the theme switcher.
 */
export function ThemeSwitcher() {
  // State to track component mounting status
  const [mounted, setMounted] = useState(false);
  // Theme state and function to change the theme from useTheme hook
  const { theme, setTheme } = useTheme();

  // Effect to set mounted state to true when component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Render null if component is not mounted yet
  if (!mounted) return null;

  return (
    // Switch component for toggling theme
    <Switch
      defaultSelected={theme === 'dark'}
      aria-label="Theme Switcher"
      onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      size="sm"
      color="#005BC4"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    />
  );
}
