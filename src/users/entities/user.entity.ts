import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  document: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  recoveringToken: string;

  @Column()
  recoveringTokenExpiration: string;

  @Column()
  isActive: boolean;

  @Column()
  isManager: boolean;

  @Column()
  isSysAdmin: boolean;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
