import { Module } from "@nestjs/common";
import { LeadSourceModuleBase } from "./base/leadSource.module.base";
import { LeadSourceService } from "./leadSource.service";
import { LeadSourceController } from "./leadSource.controller";
import { LeadSourceResolver } from "./leadSource.resolver";

@Module({
  imports: [LeadSourceModuleBase],
  controllers: [LeadSourceController],
  providers: [LeadSourceService, LeadSourceResolver],
  exports: [LeadSourceService],
})
export class LeadSourceModule {}
