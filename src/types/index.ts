import { PartialDate } from './dates';
import { HistoricalLocation } from './location';

export interface Link {
  label: string;
  url: string;
  description?: string;
}

export interface Murchland {
  id: string;
  name: string;
  birthDate?: PartialDate;
  birthPlace?: HistoricalLocation;
  deathDate?: PartialDate;
  deathPlace?: HistoricalLocation;
  aka?: string;
  photos?: string[];
  links?: Link[];
  description?: string;
}

export interface Moment {
  id: string;
  date: PartialDate;
  images: string[];
  location: HistoricalLocation;
  murchlands: string[]; // Reference to Murchland IDs
  text: string;
  links?: Link[];
  historicalContext?: string; // Additional historical context about the period
}