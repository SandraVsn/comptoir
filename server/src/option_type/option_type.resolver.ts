import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OptionTypeService } from './option_type.service';
import { OptionType } from './entities/option_type.entity';
import { CreateOptionTypeInput } from './dto/create-option_type.input';
import { UpdateOptionTypeInput } from './dto/update-option_type.input';

@Resolver(() => OptionType)
export class OptionTypeResolver {
  constructor(private readonly optionTypeService: OptionTypeService) {}

  @Mutation(() => OptionType)
  createOptionType(@Args('createOptionTypeInput') createOptionTypeInput: CreateOptionTypeInput) {
    return this.optionTypeService.create(createOptionTypeInput);
  }

  @Query(() => [OptionType], { name: 'optionType' })
  findAll() {
    return this.optionTypeService.findAll();
  }

  @Query(() => OptionType, { name: 'optionType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.optionTypeService.findOne(id);
  }

  @Mutation(() => OptionType)
  updateOptionType(@Args('updateOptionTypeInput') updateOptionTypeInput: UpdateOptionTypeInput) {
    return this.optionTypeService.update(updateOptionTypeInput.id, updateOptionTypeInput);
  }

  @Mutation(() => OptionType)
  removeOptionType(@Args('id', { type: () => Int }) id: number) {
    return this.optionTypeService.remove(id);
  }
}
