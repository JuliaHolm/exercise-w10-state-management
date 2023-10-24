import { create } from "zustand";

// export const useStore = create((set) => ({

// }));

export const useStore = create((set) => ({
  isLight: true, // boolean

  toggleLight: () => set((state) => ({ isLight: !state.isLight })),
}));
