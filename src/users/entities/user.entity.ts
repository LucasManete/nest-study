import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  identification: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
