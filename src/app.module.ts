import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./users/entities/user.entity";
import { Branch } from "./branchs/entities/branch.entity";
import { DataSource } from "typeorm";
import { UsersModule } from "./users/users.module";
import { BranchsModule } from "./branchs/branchs.module";
import { VendorsModule } from "./vendors/vendors.module";
import { ProfilesModule } from "./profiles/profiles.module";
import { Profile } from "./profiles/entities/profile.entity";
import { Vendor } from "./vendors/entities/vendor.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "babar.db.elephantsql.com",
      port: 5432,
      username: "pzwhhqqg",
      password: "29S4sTUnawx4c_vYRcbavIy7jrpudfaH",
      database: "pzwhhqqg",
      entities: [User, Branch, Profile, Vendor],
      synchronize: true,
      logging: ["query", "error"],
    }),
    UsersModule,
    BranchsModule,
    VendorsModule,
    ProfilesModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
