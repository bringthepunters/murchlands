import { useCallback } from 'react';
import { Tab } from '../types';

// This could be expanded to use React Router in the future
export function useNavigateToTab() {
  const navigateToTab = useCallback((tab: Tab) => {
    // Find the tab button and click it
    const tabButton = document.querySelector(`[data-tab="${tab}"]`) as HTMLButtonElement;
    if (tabButton) {
      tabButton.click();
    }
  }, []);

  return { navigateToTab };
}