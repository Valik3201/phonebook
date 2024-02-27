import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Switch } from '@nextui-org/react';
import { SunIcon, MoonIcon } from 'lucide-react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected={theme === 'dark'}
      aria-label="Theme Switcher"
      onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      size="sm"
      color="#005BC4"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      className="*:mr-0"
    />
  );
}
