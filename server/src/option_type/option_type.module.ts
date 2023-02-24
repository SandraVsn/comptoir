import { Module } from "@nestjs/common";
import { OptionTypeService } from "./option_type.service";
import { OptionTypeResolver } from "./option_type.resolver";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  providers: [OptionTypeResolver, OptionTypeService, PrismaService],
})
export class OptionTypeModule {}
