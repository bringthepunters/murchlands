import { useNavigateToTab } from './useNavigateToTab';
import { HistoricalLocation } from '../types/location';
import { useMomentStore } from '../store/momentStore';

export function useMapNavigation() {
  const { navigateToTab } = useNavigateToTab();
  const setSelectedLocation = useMomentStore(state => state.setSelectedLocation);

  const navigateToLocation = (location: HistoricalLocation) => {
    setSelectedLocation(location);
    navigateToTab('map');
  };

  return { navigateToLocation };
}