import 'reflect-metadata';

import { DataSource } from 'typeorm';

import { CaseStudy } from '../../case-studies/case-study.entity';
import { Lead } from '../../leads/lead.entity';
import { Product } from '../../products/product.entity';
import { AgencyService } from '../../services/agency-service.entity';
import { Testimonial } from '../../testimonials/testimonial.entity';
import { AppDataSource } from '../typeorm.config';
import { caseStudiesSeed, productsSeed, servicesSeed, testimonialsSeed } from './seed-data';

export async function seedDatabase(dataSource: DataSource) {
  await dataSource.getRepository(Product).upsert(productsSeed, ['slug']);
  await dataSource.getRepository(AgencyService).upsert(servicesSeed, ['slug']);

  const caseStudyRepository = dataSource.getRepository(CaseStudy);
  for (const caseStudy of caseStudiesSeed) {
    const existing = await caseStudyRepository.findOne({ where: { title: caseStudy.title } });
    await caseStudyRepository.save(existing ? { ...existing, ...caseStudy } : caseStudy);
  }

  const testimonialRepository = dataSource.getRepository(Testimonial);
  for (const testimonial of testimonialsSeed) {
    const existing = await testimonialRepository.findOne({
      where: { author: testimonial.author, company: testimonial.company },
    });
    await testimonialRepository.save(existing ? { ...existing, ...testimonial } : testimonial);
  }
}

async function run() {
  const dataSource = await AppDataSource.initialize();
  await seedDatabase(dataSource);
  await dataSource.destroy();
}

if (require.main === module) {
  void run();
}

export const seedEntities = [Product, AgencyService, CaseStudy, Testimonial, Lead];
