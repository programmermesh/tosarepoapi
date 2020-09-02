import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('visitor')
export class VisitorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  discription: string;

  @Column()
  residentId: string;
}
