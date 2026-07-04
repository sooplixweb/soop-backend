import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CaseStudy } from './case-study.entity';

@Injectable()
export class CaseStudiesService {
  constructor(
    @InjectRepository(CaseStudy)
    private readonly caseStudiesRepository: Repository<CaseStudy>,
  ) {}

  findAll() {
    return this.caseStudiesRepository.find({ order: { order: 'ASC', title: 'ASC' } });
  }
}
