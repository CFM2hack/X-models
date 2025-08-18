// This is the final, correct, and stable version of the model profile page.

import { getModelById } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// This is the correct and stable way to type props in Next.js 14.
type Props = {
  params: {
    publicName: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const model = await getModelById(params.publicName);

  if (!model) { return { title: "Model Not Found" }; }

  const modelName = model.user ? model.user.name : model.publicName;
  return { title: `${modelName} | x-models`, description: `Profile page for model ${modelName}.` };
}

export default async function ModelProfilePage({ params }: Props) {
  const model = await getModelById(params.publicName);

  if (!model) { notFound(); }

  const modelName = model.user ? model.user.name : model.publicName;

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">{modelName}</h1>
      <p className="text-lg text-gray-600">Model ID from URL: {model.publicName}</p>
      <p className="mt-4">Full profile UI coming soon...</p>
    </main>
  );
}
