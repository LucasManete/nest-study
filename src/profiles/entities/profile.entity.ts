import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "profiles" })
export class Profile {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ array: true })
  permissions: string[];

  @Column()
  isDefault: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
