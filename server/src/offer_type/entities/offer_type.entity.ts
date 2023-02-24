import { ObjectType, Field, Int, Float } from "@nestjs/graphql";
import { Offer } from "src/offer/entities/offer.entity";
import { OptionType } from "src/option_type/entities/option_type.entity";

@ObjectType()
export class OfferType {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => Float)
  packPrice: number;

  @Field((type) => Float)
  kiloPrice: number;

  @Field()
  smallDescription: string;

  @Field()
  bigDestription: string;

  @Field()
  image: string;

  @Field((type) => [Offer], { nullable: "items" })
  offers: Offer[];

  @Field((type) => OptionType)
  options: OptionType;
}
