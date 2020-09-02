import { Module } from '@nestjs/common';
import { ResidentController } from './resident.controller';
import { ResidentService } from './resident.service';
import { ResidentEntity } from './resident.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ResidentEntity])],
  controllers: [ResidentController],
  providers: [ResidentService],
})
export class ResidentModule {}
