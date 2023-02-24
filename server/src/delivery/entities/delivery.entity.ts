import { ObjectType, Field, Int, registerEnumType } from "@nestjs/graphql";
import { Order } from "src/order/entities/order.entity";

export enum DeliveryType {
  PICK_UP = "pick-up",
  DELIVERY = "delivery",
}

registerEnumType(DeliveryType, { name: "DeliveryType" });

@ObjectType()
export class Delivery {
  @Field((type) => Int)
  id: number;

  @Field()
  adress: string;

  @Field((type) => Int)
  postCode: number;

  @Field()
  city: string;

  @Field({ nullable: true })
  moreInfos: string;

  @Field()
  deliveredByHand: boolean;

  @Field()
  deliveryDate: Date;

  @Field((type) => DeliveryType)
  deliveryType: DeliveryType;

  @Field((type) => Order)
  order: Order;

  @Field((type) => Int)
  orderId: number;
}
