/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/database/database.module';
import { UsersController } from './users.controller';
//import { TypeOrmModule } from '@nestjs/typeorm';
//import { User } from './user.entity';
import { userProviders } from './user.providers';
@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
    UsersService],
  //exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
