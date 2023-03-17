/* eslint-disable @typescript-eslint/no-unused-vars */
import { Employee } from "src/employee/entities/employee.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ nullable: false})
  document: string;

  @Column({ nullable: false})
  email: string;

  @Column({ nullable: false})
  name: string;

  @Column({ nullable: false})
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
