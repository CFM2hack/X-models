import { fetchNormalizedProfile } from "@/lib/prisma-fetch";
import { ModelCard } from "@/components/ui/model-card";

interface PageProps {
  params: Promise<{ id: string }>;
}



export default async function ModelPage({ params }: PageProps) {
  // await params here as required by Next.js 15+
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
      <ModelCard key={profile.id} profile={profile} isCover />
    </main>
  );
}
