/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PhotoModule } from './photo/photo.module';
//import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [AuthModule, UsersModule, PhotoModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
