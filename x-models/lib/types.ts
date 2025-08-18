// This is the final, correct contract, derived from Prisma.
import type {
  Model as PrismaModel,
  Stats as PrismaStats,
  PortfolioItem as PrismaPortfolioItem,
  User as PrismaUser
} from '@prisma/client';

export type ModelWithRelations = PrismaModel & {
  user: PrismaUser;
  stats: PrismaStats | null;
  portfolio: PrismaPortfolioItem[];
};
