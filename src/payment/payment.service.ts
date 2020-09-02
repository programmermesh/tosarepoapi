import {
  Injectable,
  HttpException,
  HttpStatus,
  ExceptionFilter,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { PaymentEntity } from './payment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentDTO } from './payment.dto';
import { PaymentYearDTO } from '../shared/paymentYear.dto';
import { PaymentMonthDTO } from './../shared/paymentMonth.dto';
import { PendingPaymentEntity } from '../pendingPayment/pendingPayment.entity';
import { PendingPaymentDTO } from '../pendingPayment/pendingPayment.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(PaymentEntity)
    private paymentRepository: Repository<PaymentEntity>,
    @InjectRepository(PendingPaymentEntity)
    private PendingPaymentRepository: Repository<PendingPaymentEntity>,
  ) {}

  async create(id: any, data: PaymentDTO) {
    let PendingPaymentId = await this.PendingPaymentRepository.findOne(id);
    (data.amount = data.amount),
      (data.fullName = data.fullName),
      (data.houseType = data.houseType),
      (data.houseNumber = data.houseNumber),
      (data.month = data.month),
      (data.residentId = data.residentId),
      (data.status = data.status),
      (data.year = data.year),
      (data.processed = 'Yes'),
      (data.file = data.file);
    var parameter = [data];

    const payment = this.paymentRepository.create(parameter);
    await this.paymentRepository.save(parameter);

    let data2 = new PendingPaymentDTO();
    data2.processed = 'Yes';
    this.PendingPaymentRepository.update({ id }, data2);

    return {
      payment: payment,
      ResponseCode: '00',
      ResponseDescription: 'Payment approved succesfully',
    };
  }

  private async find(id: any) {
    const payment = await this.paymentRepository.findOne(id);
    if (!payment) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return payment;
  }

  async showAll() {
    const payment = await this.paymentRepository.find();
    if (!payment.length) {
      return {
        ResponseCode: '03',
        ResponseDescription: 'No record found',
      };
    }
    return {
      payment: payment,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
  }

  async getPaymentByResidentId(id: any) {
    const payment = await this.paymentRepository.find({ residentId: id });
    if (!payment.length) {
      return {
        ResponseCode: '99',
        ResponseDescription: 'No record found',
      };
    }
    return {
      resident: payment,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
  }

  async getPaymentMonthYear(data: PaymentMonthDTO) {
    let payment = (await this.paymentRepository.find()).filter(
      x => x.month === data.month && x.year === data.year,
    );

    let TotalAmount = 0;
    payment.forEach(x => (TotalAmount += x.amount));

    if (!payment.length) {
      return {
        ResponseCode: '99',
        ResponseDescription: 'Not Paid',
      };
    }

    return {
      resident: payment,
      Totalamount: TotalAmount,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
  }

  async getPaymentYear(data: PaymentYearDTO) {
    let annum = (await this.paymentRepository.find()).filter(
      x => x.year === data.year,
    );

    let PaymentPerAnnum = 0;
    annum.forEach(x => (PaymentPerAnnum += x.amount));

    if (!annum.length) {
      return {
        ResponseCode: '99',
        ResponseDescription: 'Not Paid',
      };
    }

    return {
      Totalamount: PaymentPerAnnum,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
  }

  async updatePaymentById(id: any, data: Partial<PaymentDTO>) {
    let payment = await this.find(id);
    await this.paymentRepository.update(id, data);
    payment = await this.find(id);
    return {
      resident: payment,
      ResponseCode: '00',
      ResponseDescription: 'Payment updated succesfully',
    };
  }

  async deletePaymentById(id: any) {
    const payment = await this.find(id);
    await this.paymentRepository.delete(id);
    return {
      resident: payment,
      ResponseCode: '00',
      ResponseDescription: 'Payment deleted succesfully',
    };
  }
}
