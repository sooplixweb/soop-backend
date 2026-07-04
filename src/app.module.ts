import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CaseStudiesModule } from './case-studies/case-studies.module';
import { CreateInitialSchema1720000000000 } from './database/migrations/1720000000000-CreateInitialSchema';
import { HealthController } from './health.controller';
import { LeadsModule } from './leads/leads.module';
import { ProductsModule } from './products/products.module';
import { AgencyServicesModule } from './services/agency-services.module';
import { TestimonialsModule } from './testimonials/testimonials.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url: config.getOrThrow<string>('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: false,
        migrationsRun: config.get<string>('RUN_MIGRATIONS') !== 'false',
        migrations: [CreateInitialSchema1720000000000],
        ssl:
          config.get<string>('DATABASE_SSL') === 'true'
            ? { rejectUnauthorized: false }
            : false,
      }),
    }),
    ProductsModule,
    AgencyServicesModule,
    CaseStudiesModule,
    TestimonialsModule,
    LeadsModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
