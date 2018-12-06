import { cities } from './cities';

import { fuzzyString, FuzzyMatchData } from '../src';

export function findCities(searchTerm: string): FuzzyMatchData[] {
  if (!searchTerm) {
    return [];
  }
  const results: FuzzyMatchData[] = cities
    .map((cityName) => {
      return fuzzyString(searchTerm, cityName);
    })
    .filter((fuzzyResult) => fuzzyResult !== false) as FuzzyMatchData[];

  return results.sort((a, b) => {
    return b.score - a.score;
  });
}
