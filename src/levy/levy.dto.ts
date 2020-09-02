import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class LevyDTO {
  @ApiProperty()
  @IsString()
  levyType: string;

  @ApiProperty()
  @IsString()
  apartmentType: string;

  @ApiProperty()
  @IsInt()
  amount: number;
}
