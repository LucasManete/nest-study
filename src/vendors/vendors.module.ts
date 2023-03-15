import { Module } from "@nestjs/common";
import { VendorsService } from "./vendors.service";
import { VendorsController } from "./vendors.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Vendor } from "./entities/vendor.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Vendor])],
  providers: [VendorsService],
  controllers: [VendorsController],
})
export class VendorsModule {}
