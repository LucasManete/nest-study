/* eslint-disable @typescript-eslint/no-unused-vars */
import { Employee } from "src/employee/entities/employee.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
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

  @Column({ default: '' })
  recoveringToken: string;

  @Column({ default: '' })
  recoveringTokenExpiration: string;

  @Column({ default: false })
  isActive: boolean;

  @Column({ default: false })
  isManager: boolean;

  @Column({ default: false })
  isSysAdmin: boolean;

  @Column({ default: Date()})
  createdAt: string;

  @Column({ default: Date()})
  updatedAt: string;

  @OneToMany(_type => Employee, employee => employee.user)
  employee: Employee[];
}
