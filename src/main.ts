import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DataSource } from 'typeorm';

import { AppModule } from './app.module';
import { seedDatabase } from './database/seeds/seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const corsOrigin = config.get<string>('CORS_ORIGIN') || '*';

  app.setGlobalPrefix('api');
  app.enableCors({
    origin: corsOrigin === '*' ? true : corsOrigin.split(',').map((origin) => origin.trim()),
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  if (config.get<string>('SEED_ON_START') === 'true') {
    await seedDatabase(app.get(DataSource));
  }

  const port = Number(config.get<string>('PORT') || 3000);
  await app.listen(port, '0.0.0.0');
}

void bootstrap();
