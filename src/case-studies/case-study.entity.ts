import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('case_studies')
export class CaseStudy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  segment: string;

  @Column({ name: 'image_url' })
  imageUrl: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ default: 0 })
  order: number;
}
