import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ResidentEntity } from './resident.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ResidentDTO } from './resident.dto';

@Injectable()
export class ResidentService {
  constructor(
    @InjectRepository(ResidentEntity)
    private residentRepository: Repository<ResidentEntity>,
  ) {}

  async showAll() {
    const resident = await this.residentRepository.find();
    if (!resident) throw new HttpException('No Record', HttpStatus.NOT_FOUND);
    return {
      resident: resident,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
  }

  async create(data: Partial<ResidentDTO>) {
    const resident = this.residentRepository.create(data);
    await this.residentRepository.save(resident);
    return {
      resident: resident,
      ResponseCode: '00',
      ResponseDescription: 'Resident created succesfully',
    };
  }

  private async find(id: any) {
    const resident = await this.residentRepository.findOne(id);
    if (!resident) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return resident;
  }

  async getResidentById(id: any) {
    const resident = await this.find(id);
    return {
      resident: resident,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
  }

  async updateResidentById(id: any, data: Partial<ResidentDTO>) {
    let resident = await this.find(id);
    await this.residentRepository.update(id, data);
    resident = await this.find(id);
    return {
      resident: resident,
      ResponseCode: '00',
      ResponseDescription: 'Resident updated succesfully',
    };
  }

  async deleteResidentById(id: any) {
    const resident = await this.find(id);
    await this.residentRepository.delete(id);
    return {
      resident: resident,
      ResponseCode: '00',
      ResponseDescription: 'Resident deleted succesfully',
    };
  }
}
