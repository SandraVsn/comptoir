import { Injectable } from '@nestjs/common';
import { CreateOptionTypeInput } from './dto/create-option_type.input';
import { UpdateOptionTypeInput } from './dto/update-option_type.input';

@Injectable()
export class OptionTypeService {
  create(createOptionTypeInput: CreateOptionTypeInput) {
    return 'This action adds a new optionType';
  }

  findAll() {
    return `This action returns all optionType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} optionType`;
  }

  update(id: number, updateOptionTypeInput: UpdateOptionTypeInput) {
    return `This action updates a #${id} optionType`;
  }

  remove(id: number) {
    return `This action removes a #${id} optionType`;
  }
}
