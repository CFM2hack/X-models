import Link from "next/link";
import { ModelCard } from "@/components/ui/model-card";
import { fetchNormalizedProfile } from "@/lib/prisma-fetch";
import { prisma } from "@/lib/prisma";

const DEFAULT_PROFILE_IMAGE = "/default-profile-image.png";

const defaultSpans = [
  "col-span-6 row-span-3",
  "col-span-3 row-span-2",
  "col-span-3 row-span-1",
  "col-span-4 row-span-2",
  "col-span-2 row-span-1",
];

export default async function Home() {
  // Fetch profiles with the actual schema fields only, no profileImage or gridSpan here
  const profiles = await prisma.profile.findMany({
    where: { isActive: true },
    select: {
      id: true,
      publicName: true,
      handle: true,
      isActive: true,
      photos: true,
      videos: true,
    },
  });

  const models = await Promise.all(
    profiles.map(({ publicName }) => fetchNormalizedProfile(publicName))
  );

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="space-y-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-sans text-text-primary">
            Discover Your Muse
          </h1>
          <p className="mt-4 text-lg text-text-secondary mx-auto max-w-xl">
            A curated marketplace of professional models. Explore unique portfolios and find the perfect face for your next project.
          </p>
        </div>

        <div className="grid grid-cols-12 auto-rows-[120px] gap-6 md:gap-8 overflow-visible">
          {models.map((model, index) => {
            if (!model) return null;

            const gridSpan = model.gridSpan ?? defaultSpans[index % defaultSpans.length];

            // Derive profileImage from photos array or fallback
            const profileImage = model.photos?.[0]?.url || DEFAULT_PROFILE_IMAGE;

            // Exclude gridSpan from profile passed to ModelCard to avoid TS errors
            const { gridSpan: _, ...cardProfile } = {
              ...model,
              isActive: model.isActive ?? true,
              photos: model.photos ?? [],
              videos: model.videos ?? [],
              profileImage,
              handle: model.handle ?? "unknown",
            };

            return (
              <div key={model.id} className={`${gridSpan} flex h-full`}>
                <Link href={`/models/${model.publicName}`} className="w-full h-full">
                  <ModelCard profile={cardProfile} isCover={false} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
