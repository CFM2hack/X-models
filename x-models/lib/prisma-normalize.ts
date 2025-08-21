export type Photo = { url: string; order?: number };
export type Video = { url: string; type?: string };

// Normalize photos from unknown input to Photo[]
export function normalizePhotos(photos: unknown): Photo[] {
  if (!Array.isArray(photos)) return [];
  return photos.filter(
    (p): p is Photo =>
      p !== null &&
      typeof p === "object" &&
      typeof (p as { url?: unknown }).url === "string"
  );
}

// Normalize videos from unknown input to Video[]
export function normalizeVideos(videos: unknown): Video[] {
  if (!Array.isArray(videos)) return [];
  return videos.filter(
    (v): v is Video =>
      v !== null &&
      typeof v === "object" &&
      typeof (v as { url?: unknown }).url === "string"
  );
}

// Normalize dateOfBirth to ISO string or null/undefined
export function normalizeDateOfBirth(dob: unknown): string | null | undefined {
  if (dob instanceof Date) return dob.toISOString();
  if (typeof dob === "string" || dob === null || dob === undefined) return dob;
  return null;
}

// Cast stats to typed Record<string, string | number>
export function castToStats(data: unknown): Record<string, string | number> | undefined {
  if (data && typeof data === "object" && !Array.isArray(data)) {
    return Object.entries(data).reduce((acc, [key, val]) => {
      if (typeof val === "string" || typeof val === "number") {
        acc[key] = val;
      }
      return acc;
    }, {} as Record<string, string | number>);
  }
  return undefined;
}

// Cast services to typed Record<string, number>
export function castToServices(data: unknown): Record<string, number> | undefined {
  if (data && typeof data === "object" && !Array.isArray(data)) {
    return Object.entries(data).reduce((acc, [key, val]) => {
      if (typeof val === "number") {
        acc[key] = val;
      }
      return acc;
    }, {} as Record<string, number>);
  }
  return undefined;
}
