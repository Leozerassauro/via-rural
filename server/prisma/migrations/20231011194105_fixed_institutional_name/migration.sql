/*
  Warnings:

  - You are about to drop the `institutionals` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "institutionals";

-- CreateTable
CREATE TABLE "institutional" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "user_type" "UserType" NOT NULL DEFAULT 'SERVICE_PROVIDER',

    CONSTRAINT "institutional_pkey" PRIMARY KEY ("id")
);
