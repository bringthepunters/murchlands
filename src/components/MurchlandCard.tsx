import React from 'react';
import { Calendar } from 'lucide-react';
import { Murchland } from '../types';
import { PartialDateDisplay } from './dates/PartialDateDisplay';
import { LocationLink } from './LocationLink';

interface MurchlandCardProps {
  murchland: Murchland;
  onClick?: () => void;
}

export function MurchlandCard({ murchland, onClick }: MurchlandCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
      onClick={onClick}
    >
      {murchland.photos?.[0] && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={murchland.photos[0]}
            alt={murchland.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">
          {murchland.name}
          {murchland.aka && (
            <span className="text-sm text-gray-500 ml-2">"{murchland.aka}"</span>
          )}
        </h3>
        
        {(murchland.birthDate || murchland.birthPlace) && (
          <div className="flex items-center gap-2 text-gray-600 mt-2">
            <Calendar className="w-4 h-4" />
            <span>Born: {murchland.birthDate && (
              <PartialDateDisplay date={murchland.birthDate} />
            )}</span>
            {murchland.birthPlace && (
              <LocationLink location={murchland.birthPlace} />
            )}
          </div>
        )}

        {(murchland.deathDate || murchland.deathPlace) && (
          <div className="flex items-center gap-2 text-gray-600 mt-1">
            <Calendar className="w-4 h-4" />
            <span>Died: {murchland.deathDate && (
              <PartialDateDisplay date={murchland.deathDate} />
            )}</span>
            {murchland.deathPlace && (
              <LocationLink location={murchland.deathPlace} />
            )}
          </div>
        )}

        {murchland.description && (
          <p className="mt-3 text-gray-700 text-sm">{murchland.description}</p>
        )}
      </div>
    </div>
  );
}