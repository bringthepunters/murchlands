import React from 'react';
import { MapPin } from 'lucide-react';
import { HistoricalLocation } from '../types/location';
import { useMapNavigation } from '../hooks/useMapNavigation';

interface LocationLinkProps {
  location: HistoricalLocation;
  showIcon?: boolean;
  className?: string;
}

export function LocationLink({ location, showIcon = true, className = '' }: LocationLinkProps) {
  const { navigateToLocation } = useMapNavigation();

  if (!location.coordinates) {
    return <span className={className}>{location.name}</span>;
  }

  return (
    <button
      onClick={() => navigateToLocation(location)}
      className={`inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 ${className}`}
      title={`View ${location.name} on map (${location.coordinates.lat}, ${location.coordinates.lng})`}
    >
      {showIcon && <MapPin className="w-4 h-4" />}
      {location.name}
      {location.historicalName && ` (${location.historicalName})`}
    </button>
  );
}