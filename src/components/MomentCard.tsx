import React from 'react';
import { Calendar, MapPin, Link as LinkIcon } from 'lucide-react';
import { Moment } from '../types';

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
            alt={`Moment from ${moment.date.toLocaleDateString()}`}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <Calendar className="w-4 h-4" />
          <span>{moment.date.toLocaleDateString()}</span>
          <MapPin className="w-4 h-4 ml-4" />
          <span>{moment.location.name}</span>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">People Present:</h3>
          <div className="flex flex-wrap gap-2">
            {moment.murchlands.map((person, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                title={person.aka ? `Also known as: ${person.aka}` : undefined}
              >
                {person.name}
              </span>
            ))}
          </div>
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