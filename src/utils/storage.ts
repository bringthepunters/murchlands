import murchlandsData from '../data/murchlands.json';
import momentsData from '../data/moments.json';
import { Murchland, Moment } from '../types';

export const storage = {
  getMurchlands(): Record<string, Murchland> {
    const stored = localStorage.getItem('murchlands');
    return stored ? JSON.parse(stored) : murchlandsData.murchlands;
  },

  saveMurchlands(murchlands: Record<string, Murchland>): void {
    localStorage.setItem('murchlands', JSON.stringify(murchlands));
  },

  getMoments(): Record<string, Moment> {
    const stored = localStorage.getItem('moments');
    return stored ? JSON.parse(stored) : momentsData.moments;
  },

  saveMoments(moments: Record<string, Moment>): void {
    localStorage.setItem('moments', JSON.stringify(moments));
  }
};