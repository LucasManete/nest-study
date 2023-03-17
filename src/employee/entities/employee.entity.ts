/* eslint-disable @typescript-eslint/no-unused-vars */
import { Branch } from "src/branchs/entities/branch.entity";
import { Profile } from "src/profiles/entities/profile.entity";
import { User } from "src/users/entities/user.entity";
import { Vendor } from "src/vendors/entities/vendor.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity({ name: "employee" })
export class Employee {
  @PrimaryGeneratedColumn("uuid")
  id: number;
  
  @Column({ select: false })
  createdAt: string;
  
  @Column({ select: false })
  updatedAt: string;
  
  @ManyToOne(_type => User, user => user.id)
  @JoinColumn({ name: 'fkUserId' })
  user: User;
  
  @ManyToOne(_type => Vendor, vendor => vendor.id)
  @JoinColumn({ name: 'fkVendorId' })
  vendor: Vendor;
  
  @ManyToOne(_type => Profile, profile => profile.id)
  @JoinColumn({ name: 'fkProfileId' })
  profile: Profile;
  
  @ManyToOne(_type => Branch, branch => branch.id)
  @JoinColumn({ name: 'fkBranchId' })
  branch: Branch;
}
