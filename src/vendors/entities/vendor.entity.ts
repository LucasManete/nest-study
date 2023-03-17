/* eslint-disable @typescript-eslint/no-unused-vars */
import { Employee } from "src/employee/entities/employee.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
@Entity({ name: "vendors" })
export class Vendor {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ nullable: false})
  corporateName: string;

  @Column({ nullable: false})
  tradingName: string;

  @Column({ nullable: false})
  cep: string;

  @Column({ nullable: false})
  address: string;

  @Column({ nullable: false})
  city: string;

  @Column({ nullable: false})
  uf: string;

  @Column({ nullable: false})
  stateRegistration: string;

  @Column({ nullable: false})
  country: string;

  @Column({ nullable: false})
  district: string;

  @Column({ nullable: true})
  landline: string;

  @Column({ nullable: true})
  cellphone: string;

  @Column({ nullable: false})
  segment: string;

  @Column({ default: Date() })
  createdAt: string;

  @Column({ default: Date() })
  updatedAt: string;

  @OneToMany(_type => Employee, employee => employee.vendor)
  employee: Employee[];
}
