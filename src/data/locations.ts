export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
  description?: string;
  responseTime?: string;
}

export const PRIMARY_LOCATION: Location = {
  slug: "aldershot",
  name: "Aldershot",
  countyOrRegion: "Hampshire",
  latitude: 51.2475,
  longitude: -0.7576,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "farnham",
    name: "Farnham",
    countyOrRegion: "Surrey",
    latitude: 51.2148,
    longitude: -0.7990,
  },
  {
    slug: "farnborough",
    name: "Farnborough",
    countyOrRegion: "Hampshire",
    latitude: 51.2960,
    longitude: -0.7554,
  },
  {
    slug: "fleet",
    name: "Fleet",
    countyOrRegion: "Hampshire",
    latitude: 51.2835,
    longitude: -0.8466,
  },
  {
    slug: "camberley",
    name: "Camberley",
    countyOrRegion: "Surrey",
    latitude: 51.3358,
    longitude: -0.7441,
  },
  {
    slug: "guildford",
    name: "Guildford",
    countyOrRegion: "Surrey",
    latitude: 51.2362,
    longitude: -0.5704,
  },
  {
    slug: "ash",
    name: "Ash",
    countyOrRegion: "Hampshire",
    latitude: 51.2480,
    longitude: -0.7237,
  },
  {
    slug: "yateley",
    name: "Yateley",
    countyOrRegion: "Hampshire",
    latitude: 51.3412,
    longitude: -0.8260,
  },
  {
    slug: "sandhurst",
    name: "Sandhurst",
    countyOrRegion: "Berkshire",
    latitude: 51.3480,
    longitude: -0.8009,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
