import { Module } from "@nestjs/common";
import { AvailabilityService } from "./availability.service";
import { AvailabilityResolver } from "./availability.resolver";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  providers: [AvailabilityResolver, AvailabilityService, PrismaService],
})
export class AvailabilityModule {}
