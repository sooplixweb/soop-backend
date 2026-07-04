import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('testimonials')
export class Testimonial {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  author: string;

  @Column()
  role: string;

  @Column()
  company: string;

  @Column({ type: 'text' })
  quote: string;

  @Column({ default: 0 })
  order: number;
}
