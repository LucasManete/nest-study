import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
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
}
