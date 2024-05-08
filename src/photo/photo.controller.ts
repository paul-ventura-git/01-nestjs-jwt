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
  import { Photo } from './photo.entity';
  import { PhotoService } from './photo.service';
  
  @Controller('photo')
  export class PhotoController {
    constructor(private readonly photoService: PhotoService) {}
  
    @Post()
    create(@Body() newPhoto: Photo): Promise<Photo> {
      return this.photoService.create(newPhoto);
    }
  
    @Get()
    findAll(): Promise<Photo[]> {
      return this.photoService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Promise<Photo> {
      return this.photoService.findOne(id);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
      return this.photoService.remove(id);
    }
  }