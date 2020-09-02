import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { PaymentEntity } from './payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResidentEntity } from './../resident/resident.entity';
import { ResidentService } from '../resident/resident.service';
import { MulterModule } from '@nestjs/platform-express';
import { PendingPaymentService } from '../pendingPayment/pendingPayment.service';
import { PendingPaymentEntity } from '../pendingPayment/pendingPayment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PaymentEntity,
      ResidentEntity,
      PendingPaymentEntity,
    ]),
  ],
  controllers: [PaymentController],
  providers: [PaymentService, ResidentService, PendingPaymentService],
})
export class PaymentModule {}
