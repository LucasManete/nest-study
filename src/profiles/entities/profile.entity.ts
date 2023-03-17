/* eslint-disable @typescript-eslint/no-unused-vars */
import { Employee } from "src/employee/entities/employee.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity({ name: "profiles" })
export class Profile {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: "simple-array", default: [] })
  permissions: string[];

  @Column()
  isDefault: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @OneToMany(_type => Employee, employee => employee.profile)
  employee: Employee[];
}
