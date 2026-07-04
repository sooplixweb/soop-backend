import { CreateDateColumn, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('leads')
export class Lead {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ type: 'varchar', nullable: true })
  phone: string | null;

  @Column({ type: 'text' })
  message: string;

  @Column({ type: 'varchar', nullable: true })
  product: string | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
