import React from 'react';
import { PartialDate } from '../../types/dates';

interface PartialDateInputProps {
  value: PartialDate;
  onChange: (date: PartialDate) => void;
  label: string;
}

export function PartialDateInput({ value, onChange, label }: PartialDateInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="flex gap-2">
        <input
          type="number"
          value={value.year}
          onChange={(e) => onChange({ ...value, year: parseInt(e.target.value) })}
          placeholder="Year"
          className="block w-24 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <input
          type="number"
          value={value.month || ''}
          onChange={(e) => onChange({ ...value, month: e.target.value ? parseInt(e.target.value) : undefined })}
          placeholder="Month"
          min="1"
          max="12"
          className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <input
          type="number"
          value={value.day || ''}
          onChange={(e) => onChange({ ...value, day: e.target.value ? parseInt(e.target.value) : undefined })}
          placeholder="Day"
          min="1"
          max="31"
          className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}