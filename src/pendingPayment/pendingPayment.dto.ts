import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsDateString } from 'class-validator';

export class PendingPaymentDTO {
  @ApiProperty()
  @IsString()
  month: string;

  @ApiProperty()
  @IsString()
  year: string;

  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsInt()
  amount: number;

  @ApiProperty()
  @IsString()
  houseType: string;

  @ApiProperty()
  @IsString()
  residentId: string;

  @ApiProperty()
  @IsString()
  fullName: string;

  @ApiProperty()
  @IsString()
  houseNumber: string;

  @ApiProperty()
  @IsString()
  processed: string;

  @ApiProperty({ type: 'string', format: 'binary' })
  file: string;
}
