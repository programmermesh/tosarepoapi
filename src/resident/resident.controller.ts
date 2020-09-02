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
} from '@nestjs/common';
import { ResidentService } from './resident.service';
import { ResidentDTO } from './resident.dto';
import { ApiParam, ApiBody } from '@nestjs/swagger';
import { ValidationPipe } from '../shared/validation.pipe';

@Controller('resident')
export class ResidentController {
  private logger = new Logger('ResidentController');
  constructor(private residentService: ResidentService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: ResidentDTO })
  createResident(@Body() resident: Partial<ResidentDTO>) {
    this.logger.log(JSON.stringify(resident));
    return this.residentService.create(resident);
  }

  @Get()
  showAllResident() {
    return this.residentService.showAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  getResidentById(@Param('id') id: any) {
    return this.residentService.getResidentById(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  @ApiParam({ name: 'id' })
  @ApiBody({ type: ResidentDTO })
  updateResidentById(@Param('id') id: any, @Body() data: Partial<ResidentDTO>) {
    this.logger.log(JSON.stringify(data));
    return this.residentService.updateResidentById(id, data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  deleteResidentById(@Param('id') id: any) {
    return this.residentService.deleteResidentById(id);
  }
}
