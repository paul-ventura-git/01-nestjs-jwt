/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {

constructor(
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<Photo>,
  ) {}

  create(newPhoto: Photo): Promise<Photo> {
    const photo = new Photo();
    photo.name = newPhoto.name;
    photo.description = newPhoto.description;
    photo.filename = newPhoto.filename;
    photo.views = newPhoto.views;
    photo.isPublished = newPhoto.isPublished;

    return this.photoRepository.save(photo);
  }

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  findOne(id: number): Promise<Photo> {
    return this.photoRepository.findOneBy({ id: id });
  }

  findByName(name: string): Promise<Photo> {
    return this.photoRepository.findOneBy({ name: name });
  }

  async remove(id: number): Promise<void> {
    await this.photoRepository.delete(id);
  }
}