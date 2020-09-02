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
import { LevyService } from './levy.service';
import { LevyDTO } from './levy.dto';
import { ApiParam, ApiBody } from '@nestjs/swagger';
import { ValidationPipe } from '../shared/validation.pipe';
import { LevyApartmentDTO } from '../shared/levyApartment.dto';

@Controller('levy')
export class LevyController {
  private logger = new Logger('LevyController');
  constructor(private levyService: LevyService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: LevyDTO })
  createLevy(@Body() levy: LevyDTO) {
    this.logger.log(JSON.stringify(levy));
    return this.levyService.create(levy);
  }

  @Get()
  showAllPayment() {
    return this.levyService.showAll();
  }

  @Post(':levy')
  @ApiBody({ type: LevyApartmentDTO })
  getLevyByApartmentType(@Body() data: LevyApartmentDTO) {
    this.logger.log(JSON.stringify(data));
    return this.levyService.getLevyByApartmentType(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  @ApiParam({ name: 'id' })
  @ApiBody({ type: LevyDTO })
  updateLevyById(@Param('id') id: any, @Body() data: Partial<LevyDTO>) {
    this.logger.log(JSON.stringify(data));
    return this.levyService.updateLevyById(id, data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  deleteLevyById(@Param('id') id: any) {
    return this.levyService.deleteLevyById(id);
  }
}
