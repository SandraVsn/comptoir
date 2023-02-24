import { CreateOptionTypeInput } from './create-option_type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOptionTypeInput extends PartialType(CreateOptionTypeInput) {
  @Field(() => Int)
  id: number;
}
