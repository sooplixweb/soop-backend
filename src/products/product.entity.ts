import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  slug: string;

  @Column()
  name: string;

  @Column()
  tagline: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  category: string;

  @Column({ name: 'price_from', type: 'varchar', nullable: true })
  priceFrom: string | null;

  @Column({ type: 'jsonb', default: [] })
  features: string[];

  @Column({ default: false })
  highlight: boolean;

  @Column({ default: 0 })
  order: number;
}
