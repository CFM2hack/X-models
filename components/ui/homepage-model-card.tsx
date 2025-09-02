
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HomepageModelCardProps {
  profile: {
    publicName: string;
    profileImage: string;
  };
  className?: string;
}

export function HomepageModelCard({ profile, className }: HomepageModelCardProps) {
  const { publicName, profileImage } = profile;

  return (
    <div className={cn("relative w-full h-full overflow-hidden rounded-lg shadow-skeuo", className)}>
      <Image
        src={profileImage}
        alt={`Profile image for ${publicName}`}
        fill
        style={{ objectFit: 'cover' }}
        className="transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
        <h3 className="text-lg md:text-xl font-bold">{publicName}</h3>
      </div>
    </div>
  );
}
