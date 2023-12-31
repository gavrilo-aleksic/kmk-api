import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel } from '../entities/User';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserModel)
    private userRepository: Repository<UserModel>,
  ) {}

  async getOneByUsername(username: string) {
    return this.userRepository.findOne({
      where: { username },
    });
  }

  async getOneById(id: number) {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  async getAll() {
    return this.userRepository.find();
  }
}
