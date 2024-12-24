import React from 'react';
import { useMurchlandStore } from '../store/murchlandStore';
import { MurchlandCard } from './MurchlandCard';

export function MurchlandGrid() {
  const murchlands = useMurchlandStore(state => Object.values(state.murchlands));
  const setSelectedMurchland = useMurchlandStore(state => state.setSelectedMurchland);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {murchlands.map((murchland) => (
        <MurchlandCard
          key={murchland.id}
          murchland={murchland}
          onClick={() => setSelectedMurchland(murchland.id)}
        />
      ))}
    </div>
  );
}