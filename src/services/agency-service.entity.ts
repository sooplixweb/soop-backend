import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('services')
export class AgencyService {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  slug: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  icon: string;

  @Column({ default: 0 })
  order: number;
}
