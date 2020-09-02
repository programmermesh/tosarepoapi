import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class UserDTO {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;

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
  @IsString()
  childrenName: string;

  @ApiProperty()
  @IsString()
  houseNumber: string;

  @ApiProperty()
  @IsString()
  houseType: string;
}

export class LoginDTO {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;
}

export class UserRO {
  id: string;
  username: string;
  token?: string;
  ResponseCode: string;
  ResponseDiscription: string;
}

export class UserUPO {
  id: string;
  password: string;
  token?: string;
  ResponseCode: string;
  ResponseDiscription: string;
}

export class UserUP {
  @ApiProperty()
  @IsString()
  password: string;
}
