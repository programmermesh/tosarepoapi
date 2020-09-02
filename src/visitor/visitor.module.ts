import { Module } from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { VisitorController } from './visitor.controller';
import { VisitorEntity } from './visitor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VisitorEntity, UserEntity])],
  controllers: [VisitorController],
  providers: [VisitorService, UserEntity],
})
export class VisitorModule {}
