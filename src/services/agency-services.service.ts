import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AgencyService } from './agency-service.entity';

@Injectable()
export class AgencyServicesService {
  constructor(
    @InjectRepository(AgencyService)
    private readonly servicesRepository: Repository<AgencyService>,
  ) {}

  findAll() {
    return this.servicesRepository.find({ order: { order: 'ASC', name: 'ASC' } });
  }
}
