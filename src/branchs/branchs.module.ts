import { Module } from "@nestjs/common";
import { BranchsService } from "./branchs.service";
import { BranchsController } from "./branchs.controller";
import { Branch } from "./entities/branch.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Branch])],
  providers: [BranchsService],
  controllers: [BranchsController],
})
export class BranchsModule {}
