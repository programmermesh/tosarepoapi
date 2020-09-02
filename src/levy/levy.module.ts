import { Module } from '@nestjs/common';
import { LevyController } from './levy.controller';
import { LevyService } from './levy.service';
import { LevyEntity } from './levy.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LevyEntity])],
  controllers: [LevyController],
  providers: [LevyService],
})
export class LevyModule {}
