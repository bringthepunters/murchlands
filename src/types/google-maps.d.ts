/// <reference types="@types/google.maps" />

declare global {
  interface Window {
    initMap: () => void;
  }
}