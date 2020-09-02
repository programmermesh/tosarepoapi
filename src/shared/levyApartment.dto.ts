import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LevyApartmentDTO {
  @ApiProperty()
  @IsString()
  apartmentType: string;

  @ApiProperty()
  @IsString()
  levyType: string;
}
