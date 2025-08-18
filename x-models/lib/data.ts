// This is the final, correct data source, structured to perfectly match our Prisma schema.

import type { ModelWithRelations } from "./types";

const models: ModelWithRelations[] = [
  {
    id: 'clv-1', publicName: 'elara-vance', bio: '...', location: 'Paris, France', agency: 'Élite Model Management', dateOfBirth: new Date(), isActive: true, coverImageUrl: '...', handle: '@elaravance', userId: 'user-1', createdAt: new Date(), updatedAt: new Date(),
    user: { id: 'user-1', name: 'Elara Vance', email: 'elara@test.com', emailVerified: null, password: '...', image: null, createdAt: new Date(), updatedAt: new Date() },
    stats: { id: 'stat-1', modelId: 'clv-1', height: "5'11\"", weight: '125 lbs', bust: '34B', waist: '25"', hips: '35"' },
    portfolio: [{ id: 'p-1', modelId: 'clv-1', url: 'https://picsum.photos/seed/p1/800/1200', type: 'IMAGE', order: 1, altText: 'Elara portfolio', createdAt: new Date() }]
  },
  {
    id: 'clv-2', publicName: 'julian-cross', bio: '...', location: 'New York, USA', agency: 'Next Models', dateOfBirth: new Date(), isActive: true, coverImageUrl: '...', handle: '@juliancross', userId: 'user-2', createdAt: new Date(), updatedAt: new Date(),
    user: { id: 'user-2', name: 'Julian Cross', email: 'julian@test.com', emailVerified: null, password: '...', image: null, createdAt: new Date(), updatedAt: new Date() },
    stats: { id: 'stat-2', modelId: 'clv-2', height: "6'2\"", weight: '180 lbs', bust: '40"', waist: '32"', hips: '38"' },
    portfolio: [{ id: 'p-2', modelId: 'clv-2', url: 'https://picsum.photos/seed/jp1/800/1200', type: 'IMAGE', order: 1, altText: 'Julian portfolio', createdAt: new Date() }]
  },
  {
    id: 'clv-3', publicName: 'anya-petrova', bio: '...', location: 'Milan, Italy', agency: 'IMG Models', dateOfBirth: new Date(), isActive: true, coverImageUrl: '...', handle: '@anyap', userId: 'user-3', createdAt: new Date(), updatedAt: new Date(),
    user: { id: 'user-3', name: 'Anya Petrova', email: 'anya@test.com', emailVerified: null, password: '...', image: null, createdAt: new Date(), updatedAt: new Date() },
    stats: { id: 'stat-3', modelId: 'clv-3', height: "5'9\"", weight: '118 lbs', bust: '32A', waist: '24"', hips: '34"' },
    portfolio: [{ id: 'p-3', modelId: 'clv-3', url: 'https://picsum.photos/seed/ap1/800/1200', type: 'IMAGE', order: 1, altText: 'Anya portfolio', createdAt: new Date() }]
  },
  {
    id: 'clv-4', publicName: 'liam-chen', bio: '...', location: 'Tokyo, Japan', agency: 'DNA Models', dateOfBirth: new Date(), isActive: true, coverImageUrl: '...', handle: '@liamchen', userId: 'user-4', createdAt: new Date(), updatedAt: new Date(),
    user: { id: 'user-4', name: 'Liam Chen', email: 'liam@test.com', emailVerified: null, password: '...', image: null, createdAt: new Date(), updatedAt: new Date() },
    stats: { id: 'stat-4', modelId: 'clv-4', height: "6'0\"", weight: '165 lbs', bust: '38"', waist: '30"', hips: '36"' },
    portfolio: [{ id: 'p-4', modelId: 'clv-4', url: 'https://picsum.photos/seed/lp1/800/1200', type: 'IMAGE', order: 1, altText: 'Liam portfolio', createdAt: new Date() }]
  },
  {
    id: 'clv-5', publicName: 'sophia-rodriguez', bio: '...', location: 'Los Angeles, USA', agency: 'Ford Models', dateOfBirth: new Date(), isActive: true, coverImageUrl: '...', handle: '@sophia.r', userId: 'user-5', createdAt: new Date(), updatedAt: new Date(),
    user: { id: 'user-5', name: 'Sophia Rodriguez', email: 'sophia@test.com', emailVerified: null, password: '...', image: null, createdAt: new Date(), updatedAt: new Date() },
    stats: { id: 'stat-5', modelId: 'clv-5', height: "5'10\"", weight: '130 lbs', bust: '34C', waist: '26"', hips: '36"' },
    portfolio: [{ id: 'p-5', modelId: 'clv-5', url: 'https://picsum.photos/seed/sp1/1200/800', type: 'IMAGE', order: 1, altText: 'Sophia portfolio', createdAt: new Date() }]
  },
  {
    id: 'clv-6', publicName: 'kai-nakamura', bio: '...', location: 'Seoul, South Korea', agency: 'VNY Models', dateOfBirth: new Date(), isActive: true, coverImageUrl: '...', handle: '@kainakamura', userId: 'user-6', createdAt: new Date(), updatedAt: new Date(),
    user: { id: 'user-6', name: 'Kai Nakamura', email: 'kai@test.com', emailVerified: null, password: '...', image: null, createdAt: new Date(), updatedAt: new Date() },
    stats: { id: 'stat-6', modelId: 'clv-6', height: "6'1\"", weight: '170 lbs', bust: '39"', waist: '31"', hips: '37"' },
    portfolio: [{ id: 'p-6', modelId: 'clv-6', url: 'https://picsum.photos/seed/kp1/800/800', type: 'IMAGE', order: 1, altText: 'Kai portfolio', createdAt: new Date() }]
  },
];

const gridLayout = [
  { col: "lg:col-span-4", row: "lg:row-span-2" }, { col: "lg:col-span-4", row: "" },
  { col: "lg:col-span-4", row: "" }, { col: "lg:col-span-5", row: "lg:row-span-2" },
  { col: "lg:col-span-3", row: "" }, { col: "lg:col-span-4", row: "" },
];

export const getModelsForGrid = async (): Promise<(ModelWithRelations & { col: string, row: string })[]> => {
  return models.map((model, index) => ({
    ...model,
    ...gridLayout[index % gridLayout.length],
  }));
};

export const getModelById = async (publicName: string): Promise<ModelWithRelations | undefined> => {
  return models.find((model) => model.publicName === publicName);
};
