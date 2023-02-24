-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('CLIENT', 'ADMIN');

-- CreateEnum
CREATE TYPE "ClientType" AS ENUM ('RESIDENT', 'TOURIST', 'PROFESSIONAL');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('TO_COLLECT', 'COLLECTED', 'WASHED', 'RETURNED');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('CREDIT_CARD', 'CASH', 'TRANSFERT');

-- CreateEnum
CREATE TYPE "DeliveryType" AS ENUM ('PICK_UP', 'DELIVERY');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "phoneCode" INTEGER NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "isOnWhatsApp" BOOLEAN NOT NULL DEFAULT false,
    "adress" TEXT,
    "postCode" INTEGER,
    "city" TEXT,
    "clientType" "ClientType",
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "acceptPublicity" BOOLEAN NOT NULL DEFAULT false,
    "adminComm" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'CLIENT',
    "resetPasswordToken" TEXT,
    "resetPasswordExpires" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Availability" (
    "id" SERIAL NOT NULL,
    "beginningDate" TIMESTAMP(3) NOT NULL,
    "endingDate" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Availability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "status" "OrderStatus",
    "price" DOUBLE PRECISION NOT NULL,
    "paymentType" "PaymentType" NOT NULL,
    "paid" BOOLEAN,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Delivery" (
    "id" SERIAL NOT NULL,
    "adress" TEXT NOT NULL,
    "postCode" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "moreInfos" TEXT,
    "deliveredByHand" BOOLEAN NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "deliveryType" "DeliveryType" NOT NULL,
    "orderId" INTEGER,

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OfferType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "packPrice" DOUBLE PRECISION NOT NULL,
    "kiloPrice" DOUBLE PRECISION NOT NULL,
    "smallDescription" TEXT NOT NULL,
    "bigDestription" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "OfferType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offer" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER,
    "offerTypeId" INTEGER NOT NULL,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OptionType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "OptionType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OfferTypeToOptionType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_OfferTypeToOptionType_AB_unique" ON "_OfferTypeToOptionType"("A", "B");

-- CreateIndex
CREATE INDEX "_OfferTypeToOptionType_B_index" ON "_OfferTypeToOptionType"("B");

-- AddForeignKey
ALTER TABLE "Availability" ADD CONSTRAINT "Availability_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_offerTypeId_fkey" FOREIGN KEY ("offerTypeId") REFERENCES "OfferType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OfferTypeToOptionType" ADD CONSTRAINT "_OfferTypeToOptionType_A_fkey" FOREIGN KEY ("A") REFERENCES "OfferType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OfferTypeToOptionType" ADD CONSTRAINT "_OfferTypeToOptionType_B_fkey" FOREIGN KEY ("B") REFERENCES "OptionType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
