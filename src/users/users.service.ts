/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {

constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  create(newUser: User): Promise<User> {
    const user = new User();
    user.username = newUser.username;
    user.firstName = newUser.firstName;
    user.lastName = newUser.lastName;
    user.password = newUser.password;
    user.email = newUser.email;

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id: id });
  }

  findByName(username: string): Promise<User> {
    return this.usersRepository.findOneBy({ username: username });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
