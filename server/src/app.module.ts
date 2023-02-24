import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { UserModule } from "./user/user.module";
import { OrderModule } from "./order/order.module";
import { OptionTypeModule } from "./option_type/option_type.module";
import { OfferModule } from "./offer/offer.module";
import { OfferTypeModule } from "./offer_type/offer_type.module";
import { DeliveryModule } from "./delivery/delivery.module";
import { AvailabilityModule } from "./availability/availability.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    UserModule,
    OrderModule,
    OptionTypeModule,
    OfferModule,
    OfferTypeModule,
    DeliveryModule,
    AvailabilityModule,
  ],
})
export class AppModule {}
