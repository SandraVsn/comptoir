import { Injectable } from '@nestjs/common';
import { CreateOfferTypeInput } from './dto/create-offer_type.input';
import { UpdateOfferTypeInput } from './dto/update-offer_type.input';

@Injectable()
export class OfferTypeService {
  create(createOfferTypeInput: CreateOfferTypeInput) {
    return 'This action adds a new offerType';
  }

  findAll() {
    return `This action returns all offerType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} offerType`;
  }

  update(id: number, updateOfferTypeInput: UpdateOfferTypeInput) {
    return `This action updates a #${id} offerType`;
  }

  remove(id: number) {
    return `This action removes a #${id} offerType`;
  }
}
