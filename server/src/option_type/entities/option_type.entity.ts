import { ObjectType, Field, Int, Float } from "@nestjs/graphql";
import { OfferType } from "src/offer_type/entities/offer_type.entity";

@ObjectType()
export class OptionType {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => Float)
  price: number;

  @Field()
  description: string;

  @Field((type) => [OfferType], { nullable: "items" })
  offerTypes: OfferType[];
}
