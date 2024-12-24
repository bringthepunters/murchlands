import React, { useState } from 'react';
import { Moment } from '../../types';
import { useMomentStore } from '../../store/momentStore';
import { useMurchlandStore } from '../../store/murchlandStore';
import { PartialDateInput } from './PartialDateInput';
import { LocationInput } from './LocationInput';

export function AddMomentForm() {
  const addMoment = useMomentStore((state) => state.addMoment);
  const murchlands = useMurchlandStore((state) => state.murchlands);
  
  const [moment, setMoment] = useState<Partial<Moment>>({
    id: crypto.randomUUID(),
    murchlands: [],
    images: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (moment.date && moment.location && moment.text) {
      addMoment(moment as Moment);
      setMoment({ id: crypto.randomUUID(), murchlands: [], images: [] });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PartialDateInput
        value={moment.date || { year: new Date().getFullYear() }}
        onChange={(date) => setMoment({ ...moment, date })}
        label="Date"
      />

      {moment.location && (
        <LocationInput
          value={moment.location}
          onChange={(location) => setMoment({ ...moment, location })}
        />
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">Murchlands Present</label>
        <select
          multiple
          value={moment.murchlands}
          onChange={(e) => {
            const selected = Array.from(e.target.selectedOptions, option => option.value);
            setMoment({ ...moment, murchlands: selected });
          }}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {Object.values(murchlands).map((murchland) => (
            <option key={murchland.id} value={murchland.id}>
              {murchland.name} {murchland.aka ? `(${murchland.aka})` : ''}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={moment.text || ''}
          onChange={(e) => setMoment({ ...moment, text: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Image URLs</label>
        <div className="space-y-2">
          {moment.images.map((url, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="url"
                value={url}
                onChange={(e) => {
                  const newImages = [...moment.images];
                  newImages[index] = e.target.value;
                  setMoment({ ...moment, images: newImages });
                }}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => {
                  const newImages = moment.images.filter((_, i) => i !== index);
                  setMoment({ ...moment, images: newImages });
                }}
                className="px-2 py-1 text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setMoment({ ...moment, images: [...moment.images, ''] })}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            + Add Image URL
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Moment
      </button>
    </form>
  );
}