/* eslint-disable @typescript-eslint/no-inferrable-types */
import { ObjectType, Field, Int, registerEnumType } from "@nestjs/graphql";
import { ClientType, UserRole } from "@prisma/client";
import { Availability } from "src/availability/entities/availability.entity";
import { Order } from "src/order/entities/order.entity";

registerEnumType(UserRole, { name: "UserRole" });

registerEnumType(ClientType, { name: "ClientType" });

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  password?: string;

  @Field((type) => Int)
  phoneCode: number;

  @Field((type) => Int)
  phoneNumber: number;

  @Field()
  isOnWhatsApp: boolean;

  @Field({ nullable: true })
  adress?: string;

  @Field((type) => Int, { nullable: true })
  postCode?: number;

  @Field({ nullable: true })
  city?: string;

  @Field((type) => ClientType, { nullable: true })
  clientType?: ClientType;

  @Field()
  isActive: boolean;

  @Field()
  acceptPublicity: boolean;

  @Field({ nullable: true })
  adminComm?: string;

  @Field((type) => UserRole)
  role: UserRole;

  @Field({ nullable: true })
  resetPasswordToken?: string;

  @Field({ nullable: true })
  resetPasswordExpires?: Date;

  @Field((type) => [Order], { nullable: "items" })
  orders: Order[];

  @Field((type) => [Availability], { nullable: "items" })
  availabilities: Availability[];
}
