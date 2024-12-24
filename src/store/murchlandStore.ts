import { create } from 'zustand';
import { Murchland } from '../types';
import { storage } from '../utils/storage';

interface MurchlandStore {
  murchlands: Record<string, Murchland>;
  selectedMurchlandId: string | null;
  setSelectedMurchland: (id: string | null) => void;
  addMurchland: (murchland: Murchland) => void;
  getMurchland: (id: string) => Murchland | undefined;
}

export const useMurchlandStore = create<MurchlandStore>((set, get) => ({
  murchlands: storage.getMurchlands(),
  selectedMurchlandId: null,
  setSelectedMurchland: (id) => set({ selectedMurchlandId: id }),
  addMurchland: (murchland) => {
    const newMurchlands = { 
      ...get().murchlands, 
      [murchland.id]: murchland 
    };
    storage.saveMurchlands(newMurchlands);
    set({ murchlands: newMurchlands });
  },
  getMurchland: (id) => get().murchlands[id],
}));