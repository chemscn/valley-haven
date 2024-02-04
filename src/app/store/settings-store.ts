import { create } from "zustand";
import { devtools } from "zustand/middleware";

type ITheme = 'fantasy' | 'dark'

interface SettingsState {
    theme: ITheme; 
    setTheme: (theme: ITheme) => void;
}



export const useSettingsStore = create<SettingsState>()(
	devtools((set) => ({
		theme: 'fantasy',
		setTheme: (theme) => set(() => ({ theme: theme })),
	}))
);