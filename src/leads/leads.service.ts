import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateLeadDto } from './create-lead.dto';
import { Lead } from './lead.entity';

@Injectable()
export class LeadsService {
  constructor(
    @InjectRepository(Lead)
    private readonly leadsRepository: Repository<Lead>,
  ) {}

  create(createLeadDto: CreateLeadDto) {
    const lead = this.leadsRepository.create({
      ...createLeadDto,
      phone: createLeadDto.phone || null,
      product: createLeadDto.product || null,
    });

    return this.leadsRepository.save(lead);
  }
}
