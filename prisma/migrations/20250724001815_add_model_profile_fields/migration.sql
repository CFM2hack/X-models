-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "agency" TEXT,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3),
ADD COLUMN     "handle" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "stats" JSONB;
