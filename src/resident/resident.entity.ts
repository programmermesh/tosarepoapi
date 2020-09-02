import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('resident')
export class ResidentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column()
  gender: string;

  @Column()
  status: string;

  @Column({ nullable: true })
  spouseName: string;

  @Column()
  numberOfChildren: number;

  @Column({ nullable: true })
  childrenName: string;

  @Column()
  houseNumber: string;

  @Column()
  houseType: string;

  @Column()
  username: string;
}
