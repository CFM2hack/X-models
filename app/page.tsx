import Link from "next/link";
import { ModelCard } from "@/components/ui/model-card";

// Hardcoded demo data, replace with real DB fetch later
const models = [
  {
    id: "elara-vance",
    publicName: "elara-vance",
    handle: "@elaravance",
    profileImage: "https://picsum.photos/seed/elara/400/400",
    gridSpan: "col-span-12 sm:col-span-6 lg:col-span-4 row-span-2",
  },
  {
    id: "julian-cross",
    publicName: "julian-cross",
    handle: "@juliancross",
    profileImage: "https://picsum.photos/seed/julian/400/400",
    gridSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
  },
  {
    id: "anya-petrova",
    publicName: "anya-petrova",
    handle: "@anyap",
    profileImage: "https://picsum.photos/seed/anya/400/400",
    gridSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
  },
  {
    id: "liam-chen",
    publicName: "liam-chen",
    handle: "@liamchen",
    profileImage: "https://picsum.photos/seed/liam/400/400",
    gridSpan: "col-span-12 sm:col-span-6 lg:col-span-5 row-span-2",
  },
  {
    id: "sophia-rodriguez",
    publicName: "sophia-rodriguez",
    handle: "@sophia.r",
    profileImage: "https://picsum.photos/seed/sophia/400/400",
    gridSpan: "col-span-12 sm:col-span-6 lg:col-span-3",
  },
  {
    id: "kai-nakamura",
    publicName: "kai-nakamura",
    handle: "@kainakamura",
    profileImage: "https://picsum.photos/seed/kai/400/400",
    gridSpan: "col-span-12 sm:col-span-12 lg:col-span-4",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
            Discover Your Muse
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            A curated marketplace of professional models. Explore unique portfolios and find the perfect face for your next project.
          </p>
        </div>
        <div className="grid grid-cols-12 auto-rows-[200px] sm:auto-rows-[240px] md:auto-rows-[280px] gap-4 md:gap-6">
          {models.map((model) => (
            <div key={model.id} className={model.gridSpan}>
              <Link href={`/models/${model.publicName}`} legacyBehavior>

                  <ModelCard
                    profile={{
                      ...model,
                      isActive: true,
                      photos: [],
                      videos: [],
                    }}
                    isCover
                  />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
