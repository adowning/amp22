/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeleteLeadSourceArgs } from "./DeleteLeadSourceArgs";
import { LeadSourceFindManyArgs } from "./LeadSourceFindManyArgs";
import { LeadSourceFindUniqueArgs } from "./LeadSourceFindUniqueArgs";
import { LeadSource } from "./LeadSource";
import { LeadSourceService } from "../leadSource.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LeadSource)
export class LeadSourceResolverBase {
  constructor(
    protected readonly service: LeadSourceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "LeadSource",
    action: "read",
    possession: "any",
  })
  async _leadSourcesMeta(
    @graphql.Args() args: LeadSourceFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [LeadSource])
  @nestAccessControl.UseRoles({
    resource: "LeadSource",
    action: "read",
    possession: "any",
  })
  async leadSources(
    @graphql.Args() args: LeadSourceFindManyArgs
  ): Promise<LeadSource[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => LeadSource, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "LeadSource",
    action: "read",
    possession: "own",
  })
  async leadSource(
    @graphql.Args() args: LeadSourceFindUniqueArgs
  ): Promise<LeadSource | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LeadSource)
  @nestAccessControl.UseRoles({
    resource: "LeadSource",
    action: "delete",
    possession: "any",
  })
  async deleteLeadSource(
    @graphql.Args() args: DeleteLeadSourceArgs
  ): Promise<LeadSource | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
