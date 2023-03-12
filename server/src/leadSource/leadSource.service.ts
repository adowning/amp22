import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LeadSourceServiceBase } from "./base/leadSource.service.base";

@Injectable()
export class LeadSourceService extends LeadSourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
