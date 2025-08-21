import { fetchNormalizedProfile } from "@/lib/prisma-fetch";
import { ModelCard } from "@/components/ui/model-card";

interface PageProps {
  params: Promise<{ id: string }>;
}

const DEFAULT_PROFILE_IMAGE = "/default-profile-image.png";
const DEFAULT_GRID_SPAN = "col-span-12 sm:col-span-6 lg:col-span-4";

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const profile = await fetchNormalizedProfile(id);

  if (!profile) {
    return (
      <main className="max-w-5xl mx-auto p-6 text-center text-lg font-medium">
        Model not found.
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto p-6">
      <ModelCard
        key={profile.id}
        profile={{
          ...profile,
          isActive: profile.isActive ?? true,
          photos: profile.photos ?? [],
          videos: profile.videos ?? [],
          profileImage: profile.profileImage ?? DEFAULT_PROFILE_IMAGE,
          gridSpan: profile.gridSpan ?? DEFAULT_GRID_SPAN,
          handle: profile.handle ?? "unknown",  // <-- Add this fallback for non-null
        }}
        isCover
      />
    </main>
  );
}
