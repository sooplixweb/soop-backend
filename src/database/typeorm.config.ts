import 'reflect-metadata';

import { config } from 'dotenv';
import { DataSource } from 'typeorm';

import { CaseStudy } from '../case-studies/case-study.entity';
import { CreateInitialSchema1720000000000 } from './migrations/1720000000000-CreateInitialSchema';
import { Lead } from '../leads/lead.entity';
import { Product } from '../products/product.entity';
import { AgencyService } from '../services/agency-service.entity';
import { Testimonial } from '../testimonials/testimonial.entity';

config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Product, AgencyService, CaseStudy, Testimonial, Lead],
  migrations: [CreateInitialSchema1720000000000],
  synchronize: false,
  ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : false,
});
