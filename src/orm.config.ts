import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ResidentEntity } from './resident/resident.entity';
import { NoticeEntity } from './notice/notice.entity';
import { PaymentEntity } from './payment/payment.entity';
import { LevyEntity } from './levy/levy.entity';
import { VisitorEntity } from './visitor/visitor.entity';
import { UserEntity } from './user/user.entity';
import { PendingPaymentEntity } from './pendingPayment/pendingPayment.entity';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'Slag0007@',
  database: 'residentDB',
  synchronize: true,
  logging: true,
  entities: [
    ResidentEntity,
    NoticeEntity,
    PaymentEntity,
    LevyEntity,
    VisitorEntity,
    UserEntity,
    PendingPaymentEntity,
  ],
};
