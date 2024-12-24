import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { Moment } from '../types';

interface MapViewProps {
  moments: Moment[];
  selectedMomentId?: string;
  onMomentSelect?: (momentId: string) => void;
}

// Set your Mapbox token
mapboxgl.accessToken = 'pk.eyJ1Ijoibmlja28tbG1sIiwiYSI6ImNscm9odWlnbTFmOWsyaW12OHQ2eGhwMmcifQ.Q31qD12p-naqtnIul09x5Q';

export function MapView({ moments, selectedMomentId, onMomentSelect }: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-4.2026, 56.4907], // Center on Scotland
      zoom: 6
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
  }, []);

  useEffect(() => {
    if (!map.current) return;

    // Clear existing markers
    markers.current.forEach(marker => marker.remove());
    markers.current = [];

    // Add markers for each moment
    moments.forEach(moment => {
      if (!moment.location.coordinates) return;

      const marker = new mapboxgl.Marker({
        color: moment.id === selectedMomentId ? '#2563eb' : '#6b7280'
      })
        .setLngLat([moment.location.coordinates.lng, moment.location.coordinates.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div class="p-2">
                <h3 class="font-bold">${moment.location.name}</h3>
                <p class="text-sm">${moment.text.substring(0, 100)}...</p>
              </div>
            `)
        )
        .addTo(map.current!);

      marker.getElement().addEventListener('click', () => {
        onMomentSelect?.(moment.id);
      });

      markers.current.push(marker);
    });
  }, [moments, selectedMomentId]);

  return (
    <div 
      ref={mapContainer} 
      className="w-full h-[600px] rounded-lg shadow-lg"
    />
  );
}