import { Controller, Get } from '@nestjs/common';

import { CaseStudiesService } from './case-studies.service';

@Controller('case-studies')
export class CaseStudiesController {
  constructor(private readonly caseStudiesService: CaseStudiesService) {}

  @Get()
  findAll() {
    return this.caseStudiesService.findAll();
  }
}
