import React from 'react';
import { PartialDate, formatPartialDate } from '../../types/dates';

interface PartialDateDisplayProps {
  date: PartialDate;
  className?: string;
}

export function PartialDateDisplay({ date, className = '' }: PartialDateDisplayProps) {
  return (
    <span className={className}>
      {formatPartialDate(date)}
    </span>
  );
}