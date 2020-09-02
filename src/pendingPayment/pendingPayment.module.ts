import { Module } from '@nestjs/common';
import { PendingPaymentController } from './pendingPayment.controller';
import { PendingPaymentService } from './pendingPayment.service';
import { PendingPaymentEntity } from './pendingPayment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResidentEntity } from '../resident/resident.entity';
import { ResidentService } from '../resident/resident.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [TypeOrmModule.forFeature([PendingPaymentEntity, ResidentEntity])],
  controllers: [PendingPaymentController],
  providers: [PendingPaymentService, ResidentService],
})
export class PendingPaymentModule {}
