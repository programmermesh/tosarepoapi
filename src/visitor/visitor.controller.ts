import {
  Controller,
  Logger,
  Post,
  Get,
  UsePipes,
  ValidationPipe,
  Body,
  Param,
  Put,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { ApiBody, ApiParam, ApiConsumes } from '@nestjs/swagger';
import { VisitorDTO } from './visitor.dto';

@Controller('visitor')
export class VisitorController {
  private logger = new Logger('VisitorController');
  constructor(private visitorService: VisitorService) {}

  @Post(':id')
  @UsePipes(new ValidationPipe())
  @ApiParam({ name: 'id' })
  @ApiBody({ type: VisitorDTO })
  createVisitor(@Param() id: any, @Body() data: any) {
    this.logger.log(JSON.stringify(id, data));
    return this.visitorService.create(id, data);
  }

  @Get()
  showAllVisitor() {
    return this.visitorService.showAll();
  }

  @Get('/visitor/:id')
  @ApiParam({ name: 'id' })
  getVisitorByResidentId(@Param('id') id: string) {
    return this.visitorService.getVisitorByResidentId(id);
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  getVisitorById(@Param('id') id: any) {
    return this.visitorService.getVisitorById(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  @ApiParam({ name: 'id' })
  @ApiBody({ type: VisitorDTO })
  updateVisitorById(@Param('id') id: any, @Body() data: Partial<VisitorDTO>) {
    this.logger.log(JSON.stringify(data));
    return this.visitorService.updateVisitorById(id, data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  deleteVisitorById(@Param('id') id: any) {
    return this.visitorService.deleteVisitorById(id);
  }
}
