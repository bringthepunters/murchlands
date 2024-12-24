import { create } from 'zustand';
import { Murchland } from '../types';

interface MurchlandStore {
  murchlands: Record<string, Murchland>;
  selectedMurchlandId: string | null;
  setSelectedMurchland: (id: string | null) => void;
  addMurchland: (murchland: Murchland) => void;
  getMurchland: (id: string) => Murchland | undefined;
}

export const useMurchlandStore = create<MurchlandStore>((set, get) => ({
  murchlands: {},
  selectedMurchlandId: null,
  setSelectedMurchland: (id) => set({ selectedMurchlandId: id }),
  addMurchland: (murchland) => 
    set((state) => ({
      murchlands: { ...state.murchlands, [murchland.id]: murchland }
    })),
  getMurchland: (id) => get().murchlands[id],
}));