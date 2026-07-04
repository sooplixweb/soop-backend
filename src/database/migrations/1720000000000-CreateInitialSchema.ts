import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInitialSchema1720000000000 implements MigrationInterface {
  name = 'CreateInitialSchema1720000000000';

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "products" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "slug" character varying NOT NULL,
        "name" character varying NOT NULL,
        "tagline" character varying NOT NULL,
        "description" text NOT NULL,
        "category" character varying NOT NULL,
        "price_from" character varying,
        "features" jsonb NOT NULL DEFAULT '[]'::jsonb,
        "highlight" boolean NOT NULL DEFAULT false,
        "order" integer NOT NULL DEFAULT 0,
        CONSTRAINT "UQ_products_slug" UNIQUE ("slug"),
        CONSTRAINT "PK_products_id" PRIMARY KEY ("id")
      )
    `);
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "services" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "slug" character varying NOT NULL,
        "name" character varying NOT NULL,
        "description" text NOT NULL,
        "icon" character varying NOT NULL,
        "order" integer NOT NULL DEFAULT 0,
        CONSTRAINT "UQ_services_slug" UNIQUE ("slug"),
        CONSTRAINT "PK_services_id" PRIMARY KEY ("id")
      )
    `);
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "case_studies" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "title" character varying NOT NULL,
        "segment" character varying NOT NULL,
        "image_url" character varying NOT NULL,
        "description" text NOT NULL,
        "order" integer NOT NULL DEFAULT 0,
        CONSTRAINT "PK_case_studies_id" PRIMARY KEY ("id")
      )
    `);
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "testimonials" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "author" character varying NOT NULL,
        "role" character varying NOT NULL,
        "company" character varying NOT NULL,
        "quote" text NOT NULL,
        "order" integer NOT NULL DEFAULT 0,
        CONSTRAINT "PK_testimonials_id" PRIMARY KEY ("id")
      )
    `);
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "leads" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "name" character varying NOT NULL,
        "email" character varying NOT NULL,
        "phone" character varying,
        "message" text NOT NULL,
        "product" character varying,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_leads_id" PRIMARY KEY ("id")
      )
    `);
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF EXISTS "leads"');
    await queryRunner.query('DROP TABLE IF EXISTS "testimonials"');
    await queryRunner.query('DROP TABLE IF EXISTS "case_studies"');
    await queryRunner.query('DROP TABLE IF EXISTS "services"');
    await queryRunner.query('DROP TABLE IF EXISTS "products"');
  }
}
