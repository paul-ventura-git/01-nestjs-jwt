/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { SetMetadata } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { usersProviders } from '../users/users.providers';
import { databaseProviders } from 'src/database/database.providers';
import { DatabaseModule } from 'src/database/database.module';

import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

dotenvExpand.expand(dotenv.config());
@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    ...usersProviders,
    ...databaseProviders,
    AuthService,
    //UsersService,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}

