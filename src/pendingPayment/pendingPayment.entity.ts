import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('pendingPayment')
export class PendingPaymentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  month: string;

  @Column()
  year: string;

  @Column()
  status: string;

  @Column()
  amount: number;

  @Column()
  houseType: string;

  @Column()
  residentId: string;

  @Column()
  fullName: string;

  @Column()
  houseNumber: string;

  @Column()
  processed: string;

  @Column()
  file: string;
}
