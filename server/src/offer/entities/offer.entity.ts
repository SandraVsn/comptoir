import { ObjectType, Field, Int } from "@nestjs/graphql";
import { OfferType } from "src/offer_type/entities/offer_type.entity";
import { Order } from "src/order/entities/order.entity";

@ObjectType()
export class Offer {
  @Field((type) => Int)
  id: number;

  @Field((type) => Order)
  order: Order;

  @Field((type) => Int)
  orderId: number;

  @Field((type) => OfferType)
  offerType: OfferType;

  @Field((type) => Int)
  offerTypeId: number;
}
