import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class VisitorDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  discription: string;

  @ApiProperty()
  @IsString()
  residentId: string;
}
