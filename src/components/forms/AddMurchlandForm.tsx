import React, { useState } from 'react';
import { Murchland } from '../../types';
import { useMurchlandStore } from '../../store/murchlandStore';
import { PartialDateInput } from './PartialDateInput';
import { LocationInput } from './LocationInput';

export function AddMurchlandForm() {
  const addMurchland = useMurchlandStore((state) => state.addMurchland);
  const [murchland, setMurchland] = useState<Partial<Murchland>>({
    id: crypto.randomUUID(),
    name: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (murchland.name) {
      addMurchland(murchland as Murchland);
      setMurchland({ id: crypto.randomUUID(), name: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={murchland.name}
          onChange={(e) => setMurchland({ ...murchland, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">AKA (optional)</label>
        <input
          type="text"
          value={murchland.aka || ''}
          onChange={(e) => setMurchland({ ...murchland, aka: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {murchland.birthDate && (
        <PartialDateInput
          value={murchland.birthDate}
          onChange={(date) => setMurchland({ ...murchland, birthDate: date })}
          label="Birth Date"
        />
      )}

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Murchland
      </button>
    </form>
  );
}