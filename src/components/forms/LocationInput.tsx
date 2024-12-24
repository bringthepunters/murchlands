import React from 'react';
import { Country, HistoricalLocation } from '../../types/location';

interface LocationInputProps {
  value: HistoricalLocation;
  onChange: (location: HistoricalLocation) => void;
}

export function LocationInput({ value, onChange }: LocationInputProps) {
  const countries: Country[] = ['Scotland', 'Australia', 'France'];

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Location Name</label>
        <input
          type="text"
          value={value.name}
          onChange={(e) => onChange({ ...value, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Country</label>
        <select
          value={value.country}
          onChange={(e) => onChange({ ...value, country: e.target.value as Country })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {countries.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Historical Name (optional)</label>
        <input
          type="text"
          value={value.historicalName || ''}
          onChange={(e) => onChange({ ...value, historicalName: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Latitude</label>
          <input
            type="number"
            value={value.coordinates?.lat || ''}
            onChange={(e) => onChange({
              ...value,
              coordinates: {
                ...value.coordinates,
                lat: parseFloat(e.target.value)
              }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Longitude</label>
          <input
            type="number"
            value={value.coordinates?.lng || ''}
            onChange={(e) => onChange({
              ...value,
              coordinates: {
                ...value.coordinates,
                lng: parseFloat(e.target.value)
              }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}