let isInitialized = false;

export function initializeGoogleMaps(): Promise<void> {
  if (isInitialized) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    window.initMap = () => {
      isInitialized = true;
      resolve();
    };
  });
}