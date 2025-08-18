import { ModelCard } from "@/components/model-card";
import { getModelsForGrid } from "@/lib/data";

export default async function HomePage() {
  const models = await getModelsForGrid();

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
        <div className="grid grid-cols-3 gap-4">
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>
    </div>
  );
}
