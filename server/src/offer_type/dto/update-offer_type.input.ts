import { CreateOfferTypeInput } from './create-offer_type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOfferTypeInput extends PartialType(CreateOfferTypeInput) {
  @Field(() => Int)
  id: number;
}
