export type Country = 'Scotland' | 'Australia' | 'France';

export interface HistoricalLocation {
  name: string;
  country: Country;
  historicalName?: string;  // For places that had different names in the past
  coordinates?: {
    lat: number;
    lng: number;
  };
  notes?: string;  // For additional historical context
}