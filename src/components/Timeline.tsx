import React from 'react';
import { MomentCard } from './MomentCard';
import { Moment } from '../types';

interface TimelineProps {
  moments: Moment[];
}

export function Timeline({ moments }: TimelineProps) {
  const sortedMoments = [...moments].sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="space-y-8">
        {sortedMoments.map((moment) => (
          <div key={moment.id} className="relative">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200" />
            <div className="relative pl-8">
              <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-blue-500 -ml-2" />
              <MomentCard moment={moment} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}