/* eslint-disable @typescript-eslint/no-unused-vars */
import { Employee } from "src/employee/entities/employee.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
@Entity({ name: "branchs" })
export class Branch {
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
  stateRegistration: boolean;

  @Column()
  country: boolean;

  @Column()
  district: boolean;

  @Column()
  landline: string;

  @Column()
  cellphone: string;

  @Column()
  segment: string;

  @Column()
  isParent: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
  
  @OneToMany(_type => Employee, employee => employee.branch)
  employee: Employee[];
}
