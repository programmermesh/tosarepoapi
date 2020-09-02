import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UsePipes,
  Logger,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { PendingPaymentService } from './pendingPayment.service';
import { PendingPaymentDTO } from './pendingPayment.dto';
import { ApiParam, ApiBody, ApiConsumes } from '@nestjs/swagger';
import { ValidationPipe } from '../shared/validation.pipe';
import { PaymentMonthDTO } from '../shared/paymentMonth.dto';
import { PaymentYearDTO } from '../shared/paymentYear.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('pendingPayment')
export class PendingPaymentController {
  private logger = new Logger('PendingPaymentController');
  constructor(private PendingpaymentService: PendingPaymentService) {}

  @Post()
  @ApiBody({ type: PendingPaymentDTO })
  createPendingPayment(@Body() payment: any) {
    this.logger.log(JSON.stringify(payment));
    return this.PendingpaymentService.create(payment);
  }

  @Get()
  showAllPendingPayment() {
    return this.PendingpaymentService.showAll();
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  deletePendingPaymentById(@Param('id') id: any) {
    return this.PendingpaymentService.deletePendingPaymentById(id);
  }
}
