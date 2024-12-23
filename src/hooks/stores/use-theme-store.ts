import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export interface ThemeStore {
  /* States */
  theme: string;

  /* Functions */
  setTheme: (theme: string) => void;
}

export const useThemeStore = create(
  immer<ThemeStore>(set => ({
    /* States */
    theme: 'dark',
    setTheme: theme => {
      set(state => {
        state.theme = theme;
      });
    },
  }))
);
