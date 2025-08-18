'use client';

import type { ModelWithRelations } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface ModelCardProps {
  model: ModelWithRelations & { col: string; row: string };
}

export function ModelCard({ model }: ModelCardProps) {
  const mainImage = model.portfolio?.[0]?.url ?? '/placeholder.jpg';
  const displayName = model.user.name || model.publicName;

  return (
    <div className={`group rounded-3xl bg-base-100 shadow-skeuo transition-all duration-300 ease-in-out hover:-translate-y-1 hover:skeuo-sm col-span-12 sm:col-span-6 ${model.col} ${model.row}`}>
      <Link href={`/model/${model.publicName}`} className="block h-full w-full">
        <div className="relative h-full w-full overflow-hidden rounded-3xl">
          <Image
            src={mainImage}
            alt={displayName}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white">{displayName}</h3>
            {model.handle && <p className="text-sm text-white/80">{model.handle}</p>}
          </div>
        </div>
      </Link>
    </div>
  );
}
