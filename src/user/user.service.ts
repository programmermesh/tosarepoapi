import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDTO, UserRO, UserUP, UserUPO, LoginDTO } from './user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async showAll() {
    const users = await this.userRepository.find();
    let result = users.map(user => user.toResponseObject(false));
    return {
      users: result,
      ResponseCode: '00',
      ResponseDescription: 'succesfully',
    };
  }

  async login(data: LoginDTO): Promise<UserRO> {
    const { username, password } = data;
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user || !(await user.comparePassword(password))) {
      throw new HttpException(
        'Invalid username/password',
        HttpStatus.BAD_REQUEST,
      );
    }
    return user.toResponseObject();
  }

  async register(data: UserDTO) {
    const { username } = data;
    let user = await this.userRepository.findOne({ where: { username } });
    if (user) {
      return {
        ResponseCode: '03',
        ResponseDescription: 'Usernames already exists',
      };
      //throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    user = this.userRepository.create(data);
    await this.userRepository.save(user);
    const result = user.toResponseObject();
    return {
      user: result,
      ResponseCode: '00',
      ResponseDescription: 'User created succesfully',
    };
  }

  async updateRegister(id: any, data: UserUP): Promise<UserRO> {
    const { password } = data;
    let user = await this.find(id);
    data.password = await bcrypt.hash(password, 10);
    await this.userRepository.update(id, data);
    user = await this.find(id);
    return user.toResponseObject();
  }

  private async find(id: any) {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async deleteUser(id: any) {
    const user = await this.find(id);
    await this.userRepository.delete(id);
    return {
      resident: user,
      ResponseCode: '00',
      ResponseDescription: 'User deleted succesfully',
    };
  }
}
