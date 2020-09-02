import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('levy')
export class LevyEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  levyType: string;

  @Column()
  apartmentType: string;

  @Column()
  amount: number;
}
