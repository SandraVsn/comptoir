import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOfferTypeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
