import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/react';
import { SunIcon, MoonIcon } from 'lucide-react';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

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
};
