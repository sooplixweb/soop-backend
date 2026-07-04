import { Controller, Get } from '@nestjs/common';

import { AgencyServicesService } from './agency-services.service';

@Controller('services')
export class AgencyServicesController {
  constructor(private readonly agencyServicesService: AgencyServicesService) {}

  @Get()
  findAll() {
    return this.agencyServicesService.findAll();
  }
}
