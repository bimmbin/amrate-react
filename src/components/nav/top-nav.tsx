import logo from '@/assets/amrate-logo.png';
import BellIcon from '@/components/icons/bell-icon';
import { useThemeStore } from '@/hooks/stores/use-theme-store';
import { useEffect } from 'react';

export const TopNav = () => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    const rootElement = document.documentElement;
    if (theme === 'dark') {
      rootElement.classList.add('dark');
    } else {
      rootElement.classList.remove('dark');
    }
  }, [theme]);
  const toggleShit = (theme: string) => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div className="flex items-center justify-between border-b border-border bg-primary px-5 py-3">
      <img src={logo} alt="Logo" className="h-8" />
      <div className="flex items-center gap-3">
        <div className="h-5 w-10 rounded-full bg-muted"></div>
        <div
          onClick={() => toggleShit(theme)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-accent"
        >
          <BellIcon className="h-5 w-5 fill-accent-foreground" />
        </div>
        <div className="h-10 w-10 rounded-full bg-accent"></div>
      </div>
    </div>
  );
};
