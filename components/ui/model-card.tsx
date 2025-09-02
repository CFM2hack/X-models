import React from "react";
import Image from "next/image";

export type Photo = { url: string; order?: number };
export type Video = { url: string; type?: string };

export interface Profile {
  id: string;
  publicName: string;
  handle: string | null;
  isActive: boolean;
  photos: Photo[];
  videos: Video[];
  // other fields as needed
}

interface ModelCardProps {
  profile: Profile;
  isCover?: boolean;
}

export const ModelCard: React.FC<ModelCardProps> = ({ profile, isCover }) => {
  const profileImageUrl = profile.photos?.[0]?.url || "/default-profile-image.png";

  return (
    <div className="relative rounded-lg shadow-md p-4 bg-white flex flex-col h-full">
      <Image
        src={profileImageUrl}
        alt={`${profile.publicName} Profile Image`}
        width={400}
        height={400}
        className="rounded-md w-full object-cover mb-4 flex-shrink-0"
        priority={isCover}
        unoptimized={true}
      />

      <h2 className="text-xl font-semibold">{profile.publicName}</h2>
      <p className="text-gray-500">@{profile.handle ?? 'unknown'}</p>

      <p className={`mt-2 ${profile.isActive ? "text-green-600" : "text-red-600"}`}>
        {profile.isActive ? "Active" : "Inactive"}
      </p>

      {profile.photos.length > 0 && (
        <div className="mt-4 flex-grow">
          <h3 className="font-semibold">Photos:</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {profile.photos.map((photo, index) => (
              <Image
                key={index}
                src={photo.url}
                alt={`Photo ${index + 1}`}
                width={80}
                height={80}
                className="object-cover rounded"
                unoptimized={true}
              />
            ))}
          </div>
        </div>
      )}

      {profile.videos.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Videos:</h3>
          <ul className="list-disc list-inside mt-2">
            {profile.videos.map((video, index) => (
              <li key={index}>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {video.type ? `${video.type} Video` : "Video"} #{index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ModelCard;
