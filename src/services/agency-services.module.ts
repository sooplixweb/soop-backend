import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AgencyService } from './agency-service.entity';
import { AgencyServicesController } from './agency-services.controller';
import { AgencyServicesService } from './agency-services.service';

@Module({
  imports: [TypeOrmModule.forFeature([AgencyService])],
  controllers: [AgencyServicesController],
  providers: [AgencyServicesService],
})
export class AgencyServicesModule {}
