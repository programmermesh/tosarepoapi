import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('notice')
export class NoticeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;
}
