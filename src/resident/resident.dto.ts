import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsArray } from 'class-validator';

export class ResidentDTO {
  @ApiProperty()
  @IsString()
  fullName: string;

  @ApiProperty()
  @IsString()
  gender: string;

  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsString()
  spouseName: string;

  @ApiProperty()
  @IsInt()
  numberOfChildren: number;

  @ApiProperty()
  childrenName: string;

  @ApiProperty()
  @IsInt()
  houseNumber: string;

  @ApiProperty()
  @IsInt()
  houseType: string;

  @ApiProperty()
  @IsString()
  username: string;
}
