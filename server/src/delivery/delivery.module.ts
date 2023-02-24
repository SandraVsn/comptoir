import { Module } from "@nestjs/common";
import { DeliveryService } from "./delivery.service";
import { DeliveryResolver } from "./delivery.resolver";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  providers: [DeliveryResolver, DeliveryService, PrismaService],
})
export class DeliveryModule {}
