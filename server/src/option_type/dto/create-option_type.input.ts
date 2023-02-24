import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOptionTypeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
