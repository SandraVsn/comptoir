import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OfferTypeService } from './offer_type.service';
import { OfferType } from './entities/offer_type.entity';
import { CreateOfferTypeInput } from './dto/create-offer_type.input';
import { UpdateOfferTypeInput } from './dto/update-offer_type.input';

@Resolver(() => OfferType)
export class OfferTypeResolver {
  constructor(private readonly offerTypeService: OfferTypeService) {}

  @Mutation(() => OfferType)
  createOfferType(@Args('createOfferTypeInput') createOfferTypeInput: CreateOfferTypeInput) {
    return this.offerTypeService.create(createOfferTypeInput);
  }

  @Query(() => [OfferType], { name: 'offerType' })
  findAll() {
    return this.offerTypeService.findAll();
  }

  @Query(() => OfferType, { name: 'offerType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.offerTypeService.findOne(id);
  }

  @Mutation(() => OfferType)
  updateOfferType(@Args('updateOfferTypeInput') updateOfferTypeInput: UpdateOfferTypeInput) {
    return this.offerTypeService.update(updateOfferTypeInput.id, updateOfferTypeInput);
  }

  @Mutation(() => OfferType)
  removeOfferType(@Args('id', { type: () => Int }) id: number) {
    return this.offerTypeService.remove(id);
  }
}
