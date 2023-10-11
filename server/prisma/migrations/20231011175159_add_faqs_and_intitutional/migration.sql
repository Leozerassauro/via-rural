-- CreateTable
CREATE TABLE "faqs" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "user_type" "UserType" NOT NULL DEFAULT 'SERVICE_PROVIDER',

    CONSTRAINT "faqs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "institutionals" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "user_type" "UserType" NOT NULL DEFAULT 'SERVICE_PROVIDER',

    CONSTRAINT "institutionals_pkey" PRIMARY KEY ("id")
);
