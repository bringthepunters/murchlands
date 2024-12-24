import React from 'react';
import { Calendar, Link as LinkIcon } from 'lucide-react';
import { Moment } from '../types';
import { formatPartialDate } from '../types/dates';
import { MurchlandList } from './MurchlandList';
import { LocationLink } from './LocationLink';

interface MomentCardProps {
  moment: Moment;
}

export function MomentCard({ moment }: MomentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {moment.images.length > 0 && (
        <div className="relative h-64 overflow-hidden">
          <img
            src={moment.images[0]}
            alt={`Moment from ${formatPartialDate(moment.date)}`}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <Calendar className="w-4 h-4" />
          <span>{formatPartialDate(moment.date)}</span>
          <LocationLink location={moment.location} />
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">People Present:</h3>
          <MurchlandList murchlandIds={moment.murchlands} />
        </div>

        <div className="prose prose-sm max-w-none mb-4">
          {moment.text}
        </div>

        {moment.links && moment.links.length > 0 && (
          <div className="border-t pt-4">
            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <LinkIcon className="w-4 h-4" />
              Related Links
            </h4>
            <ul className="space-y-1">
              {moment.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}