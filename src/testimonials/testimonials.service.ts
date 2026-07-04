import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Testimonial } from './testimonial.entity';

@Injectable()
export class TestimonialsService {
  constructor(
    @InjectRepository(Testimonial)
    private readonly testimonialsRepository: Repository<Testimonial>,
  ) {}

  findAll() {
    return this.testimonialsRepository.find({ order: { order: 'ASC', author: 'ASC' } });
  }
}
