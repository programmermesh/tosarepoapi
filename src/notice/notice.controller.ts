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
import { NoticeService } from './notice.service';
import { ApiBody, ApiParam, ApiConsumes } from '@nestjs/swagger';
import { NoticeDTO } from './notice.dto';

@Controller('notice')
export class NoticeController {
  private logger = new Logger('NoticeController');
  constructor(private noticeService: NoticeService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: NoticeDTO })
  createNotice(@Body() data: any) {
    this.logger.log(JSON.stringify(data));
    return this.noticeService.create(data);
  }

  @Get()
  showAllNotice() {
    return this.noticeService.showAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  getNoticeById(@Param('id') id: any) {
    return this.noticeService.getNoticeById(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  @ApiParam({ name: 'id' })
  @ApiBody({ type: NoticeDTO })
  updateNoticeById(@Param('id') id: any, @Body() data: Partial<NoticeDTO>) {
    this.logger.log(JSON.stringify(data));
    return this.noticeService.updateNoticeById(id, data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  deleteNoticeById(@Param('id') id: any) {
    return this.noticeService.deleteNoticeById(id);
  }
}
