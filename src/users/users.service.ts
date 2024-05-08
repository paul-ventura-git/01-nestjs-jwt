/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
//import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.entity';
// This should be a real class/interface representing a user entity
//export type User = any;

@Injectable()
export class UsersService {
    /*
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
*/
constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  create(newUser: User): Promise<User> {
    const user = new User();
    user.firstName = newUser.firstName;
    user.lastName = newUser.lastName;

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
