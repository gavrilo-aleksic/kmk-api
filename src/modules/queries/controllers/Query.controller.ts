import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Query,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { QueryService } from '../services/query.service';
import { ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuardJwt } from 'src/modules/auth/guards/Auth.guard';
import { AppRequest } from 'src/modules/auth/auth.types';
import { ExpenseUsageQueryModel } from '../entities/ExpenseUsageQuery';
import { UsagesWorkerQuery } from '../entities/UsagesWorkerQuery';
import { ExpenseQueryModel } from '../entities/ExpenseQuery';
import { DatesDTO } from '../entities/Dates.dto';

@Controller('query')
@ApiTags('Upiti')
export class QueryController {
  constructor(private queryService: QueryService) {}

  @Get('utrosak')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuardJwt)
  @ApiResponse({ type: ExpenseUsageQueryModel, isArray: true })
  @ApiOperation({
    summary: 'Podaci o utrosku',
  })
  getUsages(
    @Request() request: AppRequest,
    @Query('utrosakId') expenseId: string,
  ) {
    return this.queryService.getUsageQuery(request.user, expenseId);
  }

  @Get('utrosak-radnik')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuardJwt)
  @ApiResponse({ type: UsagesWorkerQuery, isArray: true })
  @ApiOperation({
    summary: 'Podaci o utrosku sa radnikom',
  })
  getUsagesWorkers(
    @Request() request: AppRequest,
    @Query('utrosakId') expenseId: string,
  ) {
    return this.queryService.getUsageWorkersQuery(request.user, expenseId);
  }

  @Get('troskovi')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuardJwt)
  @ApiResponse({ type: ExpenseQueryModel, isArray: true })
  @ApiOperation({
    summary: 'Podaci o troskovima',
  })
  getExpenses(@Request() request: AppRequest, @Query() dates: DatesDTO) {
    return this.queryService.getExpensesQuery(request.user, dates.od, dates.do);
  }
}
