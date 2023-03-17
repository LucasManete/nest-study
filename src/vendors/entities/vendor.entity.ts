/* eslint-disable @typescript-eslint/no-unused-vars */
import { Employee } from "src/employee/entities/employee.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
@Entity({ name: "vendors" })
export class Vendor {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  corporateName: string;

  @Column()
  tradingName: string;

  @Column()
  cep: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @Column()
  stateRegistration: string;

  @Column()
  country: string;

  @Column()
  district: string;

  @Column()
  landline: string;

  @Column()
  cellphone: string;

  @Column()
  segment: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @OneToMany(_type => Employee, employee => employee.vendor)
  employee: Employee[];
}
