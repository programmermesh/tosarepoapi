import {
  Controller,
  Post,
  Get,
  Logger,
  Body,
  UsePipes,
  Put,
  Param,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO, UserUP, LoginDTO } from './user.dto';
import { ValidationPipe } from './../shared/validation.pipe';
import { ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  private logger = new Logger('UserController');
  constructor(private userService: UserService) {}
  @Get()
  showAllUsers() {
    return this.userService.showAll();
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: LoginDTO })
  login(@Body() data: LoginDTO) {
    return this.userService.login(data);
  }

  @Post('register')
  @ApiBody({ type: UserDTO })
  register(@Body() data: UserDTO) {
    return this.userService.register(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  @ApiParam({ name: 'id' })
  @ApiBody({ type: UserUP })
  updateRegister(@Param('id') id: any, @Body() data: UserUP) {
    this.logger.log(JSON.stringify(data));
    return this.userService.updateRegister(id, data);
  }
}
