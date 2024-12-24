import { create } from 'zustand';
import { Moment } from '../types';
import { HistoricalLocation } from '../types/location';
import { storage } from '../utils/storage';

interface MomentStore {
  moments: Record<string, Moment>;
  selectedMomentId: string | null;
  selectedLocation: HistoricalLocation | null;
  setSelectedMoment: (id: string | null) => void;
  setSelectedLocation: (location: HistoricalLocation | null) => void;
  addMoment: (moment: Moment) => void;
  getMoment: (id: string) => Moment | undefined;
}

export const useMomentStore = create<MomentStore>((set, get) => ({
  moments: storage.getMoments(),
  selectedMomentId: null,
  selectedLocation: null,
  setSelectedMoment: (id) => set({ selectedMomentId: id }),
  setSelectedLocation: (location) => set({ selectedLocation: location }),
  addMoment: (moment) => {
    const newMoments = { 
      ...get().moments, 
      [moment.id]: moment 
    };
    storage.saveMoments(newMoments);
    set({ moments: newMoments });
  },
  getMoment: (id) => get().moments[id],
}));