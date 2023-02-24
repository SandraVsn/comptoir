import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { ClientType } from '@prisma/client';

registerEnumType(ClientType, { name: 'ClientType' });

@InputType()
export class CreateUserInput {
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

  @Field({ nullable: true })
  isOnWhatsApp?: boolean;

  @Field({ nullable: true })
  adress?: string;

  @Field((type) => Int, { nullable: true })
  postCode?: number;

  @Field({ nullable: true })
  city?: string;

  @Field((type) => ClientType, { nullable: true })
  clientType?: ClientType;

  @Field({ nullable: true })
  isActive?: boolean;

  @Field({ nullable: true })
  acceptPublicity?: boolean;

  @Field({ nullable: true })
  adminComm?: string;
}
