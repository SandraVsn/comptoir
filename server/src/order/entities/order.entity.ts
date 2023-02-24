import {
  ObjectType,
  Field,
  Int,
  Float,
  registerEnumType,
} from "@nestjs/graphql";
import { Delivery } from "src/delivery/entities/delivery.entity";
import { Offer } from "src/offer/entities/offer.entity";
import { User } from "src/user/entities/user.entity";

export enum OrderStatus {
  TO_COLLECT = "to collect",
  COLLECTED = "collected",
  WASHED = "washed",
  RETURNED = "returned",
}
registerEnumType(OrderStatus, { name: "OrderStatus" });

export enum PaymentType {
  CREDIT_CARD = "credit card",
  CASH = "cash",
  TRANSFERT = "transfert",
}
registerEnumType(PaymentType, { name: "PaymentType" });

@ObjectType()
export class Order {
  @Field((type) => Int)
  id: number;

  @Field()
  createdAt: Date;

  @Field()
  createdBy: string;

  @Field((type) => OrderStatus)
  status: OrderStatus;

  @Field((type) => Float, { nullable: true })
  price?: number;

  @Field((type) => PaymentType, { nullable: true })
  paymentType?: PaymentType;

  @Field({ nullable: true })
  paid?: boolean;

  @Field((type) => User)
  user: User;

  @Field((type) => Int)
  userId: number;

  @Field((type) => [Delivery], { nullable: "items" })
  deliveries?: Delivery[];

  @Field((type) => [Offer], { nullable: "items" })
  offers?: Offer[];
}
