export type PartialDate = {
  year: number;
  month?: number;
  day?: number;
};

export const formatPartialDate = (date: PartialDate): string => {
  if (!date.month) return `${date.year}`;
  if (!date.day) return `${date.month}/${date.year}`;
  return `${date.day}/${date.month}/${date.year}`;
};