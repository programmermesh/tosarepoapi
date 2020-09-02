import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PaymentYearDTO {
  @ApiProperty()
  @IsString()
  year: string;
}
