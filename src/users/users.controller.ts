/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    ParseIntPipe,
  } from '@nestjs/common';
  //import { CreateUserDto } from './dto/create-user.dto';
  import { User } from './users.entity';
  import { UsersService } from './users.service';
  
  @Controller('users')
  export class UsersController {
    constructor(private readonly usersService: UsersService) {}
  
    @Post()
    create(@Body() newUser: User): Promise<User> {
      return this.usersService.create(newUser);
    }
  
    @Get()
    findAll(): Promise<User[]> {
      return this.usersService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
      return this.usersService.findOne(id);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
      return this.usersService.remove(id);
    }
  }