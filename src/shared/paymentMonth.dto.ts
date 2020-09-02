import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PaymentMonthDTO {
  @ApiProperty()
  @IsString()
  month: string;

  @ApiProperty()
  @IsString()
  year: string;
}
