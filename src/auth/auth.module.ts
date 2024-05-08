/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { SetMetadata } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { APP_GUARD } from '@nestjs/core';
//import { UsersService } from 'src/users/users.service';
import { usersProviders } from '../users/users.providers';
import { databaseProviders } from 'src/database/database.providers';
import { DatabaseModule } from 'src/database/database.module';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
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

