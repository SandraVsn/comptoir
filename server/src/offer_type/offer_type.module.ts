import { Module } from "@nestjs/common";
import { OfferTypeService } from "./offer_type.service";
import { OfferTypeResolver } from "./offer_type.resolver";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  providers: [OfferTypeResolver, OfferTypeService, PrismaService],
})
export class OfferTypeModule {}
