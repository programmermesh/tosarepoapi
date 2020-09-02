import {
  Injectable,
  HttpException,
  HttpStatus,
  UploadedFile,
} from '@nestjs/common';
import { NoticeEntity } from './notice.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NoticeDTO } from './notice.dto';

@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(NoticeEntity)
    private noticeRepository: Repository<NoticeEntity>,
  ) {}

  async showAll() {
    const notice = await this.noticeRepository.find();
    if (!notice) throw new HttpException('No Record', HttpStatus.NOT_FOUND);
    return {
      notice: notice,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
  }

  async create(data: NoticeDTO) {
    const notice = this.noticeRepository.create(data);
    await this.noticeRepository.save(notice);
    return {
      notice: notice,
      ResponseCode: '00',
      ResponseDescription: 'Notice created succesfully',
    };
  }

  private async find(id: any) {
    const notice = await this.noticeRepository.findOne(id);
    if (!notice) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return notice;
  }

  async getNoticeById(id: any) {
    const notice = await this.find(id);
    return {
      notice: notice,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
  }

  async updateNoticeById(id: any, data: Partial<NoticeDTO>) {
    let notice = await this.find(id);
    await this.noticeRepository.update(id, data);
    notice = await this.find(id);
    return {
      notice: notice,
      ResponseCode: '00',
      ResponseDescription: 'Notice update succesfully',
    };
  }

  async deleteNoticeById(id: any) {
    const notice = await this.find(id);
    await this.noticeRepository.delete(id);
    return {
      notice: notice,
      ResponseCode: '00',
      ResponseDescription: 'Notice delete succesfully',
    };
  }
}
