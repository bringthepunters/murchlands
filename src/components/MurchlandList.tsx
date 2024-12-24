import React from 'react';
import { useMurchlandStore } from '../store/murchlandStore';

interface MurchlandListProps {
  murchlandIds: string[];
}

export function MurchlandList({ murchlandIds }: MurchlandListProps) {
  const getMurchland = useMurchlandStore(state => state.getMurchland);

  return (
    <div className="flex flex-wrap gap-2">
      {murchlandIds.map((id) => {
        const murchland = getMurchland(id);
        if (!murchland) return null;
        
        return (
          <span
            key={id}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            title={murchland.aka ? `Also known as: ${murchland.aka}` : undefined}
          >
            {murchland.name}
          </span>
        );
      })}
    </div>
  );
}