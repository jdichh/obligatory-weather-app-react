import { create } from 'zustand';

export const useStore = create(set => ({
  data: {},
  setData: (data) => set(() => ({ data })),
  location: "",
  setLocation: (location) => set(() => ({ location })),
}));
