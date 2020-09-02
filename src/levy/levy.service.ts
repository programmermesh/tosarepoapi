import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LevyEntity } from './levy.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LevyDTO } from './levy.dto';
import { LevyApartmentDTO } from '../shared/levyApartment.dto';

@Injectable()
export class LevyService {
  constructor(
    @InjectRepository(LevyEntity)
    private levyRepository: Repository<LevyEntity>,
  ) {}

  async showAll() {
    const levy = await this.levyRepository.find();
    if (!levy.length) {
      return {
        ResponseCode: '03',
        ResponseDescription: 'No record found',
      };
    }
    return levy;
  }

  async create(data: LevyDTO) {
    let levy = (await this.levyRepository.find()).filter(
      x =>
        x.apartmentType === data.apartmentType && x.levyType === data.levyType,
    );
    if (levy.length) {
      return {
        ResponseCode: '99',
        ResponseDescription: 'Already Exist',
      };
    }
    const levydata = this.levyRepository.create(data);
    await this.levyRepository.save(data);
    return {
      levy: levydata,
      ResponseCode: '00',
      ResponseDescription: 'Levy created succesfully',
    };
  }

  private async find(id: any) {
    const levy = await this.levyRepository.findOne(id);
    if (!levy) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return levy;
  }

  async getLevyByApartmentType(data: LevyApartmentDTO) {
    let levy = (await this.levyRepository.find()).filter(
      x =>
        x.apartmentType === data.apartmentType && x.levyType === data.levyType,
    );
    if (!levy.length) {
      return {
        ResponseCode: '99',
        ResponseDescription: 'No record found',
      };
    }
    return {
      amount: levy,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
  }

  async updateLevyById(id: any, data: Partial<LevyDTO>) {
    let levy = await this.find(id);
    const levydata = [levy];
    let check = (await this.levyRepository.find()).filter(
      x =>
        x.apartmentType === data.apartmentType && x.levyType === data.levyType,
    );
    if (check.length === levydata.length) {
      return {
        ResponseCode: '03',
        ResponseDescription: 'Already Exist',
      };
    }
    await this.levyRepository.update(id, data);
    levy = await this.find(id);
    return {
      resident: levy,
      ResponseCode: '00',
      ResponseDescription: 'Levy updated succesfully',
    };
  }

  async deleteLevyById(id: any) {
    const levy = await this.find(id);
    await this.levyRepository.delete(id);
    return {
      resident: levy,
      ResponseCode: '00',
      ResponseDescription: 'Levy deleted succesfully',
    };
  }
}
