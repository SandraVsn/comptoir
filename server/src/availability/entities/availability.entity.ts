import { ObjectType, Field, Int } from "@nestjs/graphql";
import { User } from "src/user/entities/user.entity";

@ObjectType()
export class Availability {
  @Field((type) => Int)
  id: number;

  @Field()
  beginningDate: Date;

  @Field()
  endindDate: Date;

  @Field((type) => User)
  user: User;

  @Field((type) => Int)
  userId: number;
}
