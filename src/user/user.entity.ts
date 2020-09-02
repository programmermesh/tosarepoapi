import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UserRO } from './user.dto';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  fullName: string;

  @Column()
  gender: string;

  @Column()
  status: string;

  @Column()
  spouseName: string;

  @Column()
  numberOfChildren: number;

  @Column()
  childrenName: string;

  @Column()
  houseNumber: string;

  @Column()
  houseType: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  toResponseObject(showToken: boolean = true): UserRO {
    const {
      id,
      username,
      token,
      fullName,
      gender,
      status,
      spouseName,
      numberOfChildren,
      childrenName,
      houseNumber,
      houseType,
    } = this;
    const responseObject: any = {
      id,
      username,
      fullName,
      gender,
      status,
      spouseName,
      numberOfChildren,
      childrenName,
      houseNumber,
      houseType,
    };
    if (showToken) {
      responseObject.token = token;
    }
    return responseObject;
  }

  async comparePassword(attempt: string) {
    return await bcrypt.compare(attempt, this.password);
  }

  private get token() {
    const { id, username } = this;
    return jwt.sign({ id, username }, process.env.SECRET, { expiresIn: '7d' });
  }
}
