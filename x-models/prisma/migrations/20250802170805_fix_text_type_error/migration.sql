/*
  Warnings:

  - You are about to drop the column `profileId` on the `FeaturedSlot` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `Story` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[modelId]` on the table `FeaturedSlot` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[modelId]` on the table `Story` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[modelId]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `modelId` to the `FeaturedSlot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelId` to the `Story` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelId` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('IMAGE', 'VIDEO');

-- DropForeignKey
ALTER TABLE "FeaturedSlot" DROP CONSTRAINT "FeaturedSlot_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropForeignKey
ALTER TABLE "Story" DROP CONSTRAINT "Story_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_profileId_fkey";

-- DropIndex
DROP INDEX "FeaturedSlot_profileId_key";

-- DropIndex
DROP INDEX "Story_profileId_key";

-- DropIndex
DROP INDEX "Subscription_profileId_key";

-- AlterTable
ALTER TABLE "FeaturedSlot" DROP COLUMN "profileId",
ADD COLUMN     "modelId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Story" DROP COLUMN "profileId",
ADD COLUMN     "modelId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "profileId",
ADD COLUMN     "modelId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "Model" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "publicName" TEXT NOT NULL,
    "handle" TEXT,
    "bio" TEXT,
    "location" TEXT,
    "agency" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "coverImageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stats" (
    "id" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,
    "height" TEXT,
    "weight" TEXT,
    "bust" TEXT,
    "waist" TEXT,
    "hips" TEXT,

    CONSTRAINT "Stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PortfolioItem" (
    "id" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" "MediaType" NOT NULL,
    "order" INTEGER NOT NULL,
    "altText" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PortfolioItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Model_userId_key" ON "Model"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Model_publicName_key" ON "Model"("publicName");

-- CreateIndex
CREATE UNIQUE INDEX "Stats_modelId_key" ON "Stats"("modelId");

-- CreateIndex
CREATE UNIQUE INDEX "FeaturedSlot_modelId_key" ON "FeaturedSlot"("modelId");

-- CreateIndex
CREATE UNIQUE INDEX "Story_modelId_key" ON "Story"("modelId");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_modelId_key" ON "Subscription"("modelId");

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PortfolioItem" ADD CONSTRAINT "PortfolioItem_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Story" ADD CONSTRAINT "Story_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeaturedSlot" ADD CONSTRAINT "FeaturedSlot_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE CASCADE ON UPDATE CASCADE;
