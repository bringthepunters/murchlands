import { create } from 'zustand';
import { Moment } from '../types';

interface MomentStore {
  moments: Record<string, Moment>;
  selectedMomentId: string | null;
  setSelectedMoment: (id: string | null) => void;
  addMoment: (moment: Moment) => void;
  getMoment: (id: string) => Moment | undefined;
}

export const useMomentStore = create<MomentStore>((set, get) => ({
  moments: {},
  selectedMomentId: null,
  setSelectedMoment: (id) => set({ selectedMomentId: id }),
  addMoment: (moment) => 
    set((state) => ({
      moments: { ...state.moments, [moment.id]: moment }
    })),
  getMoment: (id) => get().moments[id],
}));