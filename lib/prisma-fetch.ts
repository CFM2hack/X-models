import { prisma } from "./prisma";
import { Profile } from "@prisma/client";
import {
  normalizePhotos,
  normalizeVideos,
  normalizeDateOfBirth,
  castToStats,
  castToServices,
} from "./prisma-normalize";

const DEFAULT_PROFILE_IMAGE = "https://picsum.photos/seed/elara/400/400";
const DEFAULT_GRID_SPAN = "col-span-12 sm:col-span-6 lg:col-span-4";

export async function fetchNormalizedProfiles() {
  const profilesRaw: Profile[] = await prisma.profile.findMany();

  return profilesRaw.map((profileRaw: Profile) => {
    const normalizedPhotos = normalizePhotos(profileRaw.photos);
    const normalizedVideos = normalizeVideos(profileRaw.videos);

    return {
      ...profileRaw,
      photos: normalizedPhotos,
      videos: normalizedVideos,
      dateOfBirth: normalizeDateOfBirth(profileRaw.dateOfBirth),
      stats: castToStats(profileRaw.stats),
      services: castToServices(profileRaw.services),
      isActive: profileRaw.isActive ?? true,
      profileImage:
        normalizedPhotos.length > 0
          ? normalizedPhotos[0].url
          : DEFAULT_PROFILE_IMAGE,
      gridSpan: DEFAULT_GRID_SPAN,
    };
  });
}

export async function fetchNormalizedProfile(publicName: string) {
  const profileRaw: Profile | null = await prisma.profile.findUnique({
    where: { publicName },
  });

  if (!profileRaw) return null;

  const normalizedPhotos = normalizePhotos(profileRaw.photos);
  const normalizedVideos = normalizeVideos(profileRaw.videos);

  return {
    ...profileRaw,
    photos: normalizedPhotos,
    videos: normalizedVideos,
    dateOfBirth: normalizeDateOfBirth(profileRaw.dateOfBirth),
    stats: castToStats(profileRaw.stats),
    services: castToServices(profileRaw.services),
    isActive: profileRaw.isActive ?? true,
    profileImage:
      normalizedPhotos.length > 0
        ? normalizedPhotos[0].url
        : DEFAULT_PROFILE_IMAGE,
    gridSpan: DEFAULT_GRID_SPAN,
  };
}
