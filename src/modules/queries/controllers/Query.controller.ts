import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Put,
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
import { CultureQueryModel } from '../entities/CulturesQuery';
import { OperationQueryModel } from '../entities/OperationQuery';
import { MachineQueryModel } from '../entities/MachineQuery';
import { PortionQueryModel } from '../entities/PortionQuery';
import { WorkTypeQueryModel } from '../entities/WorkTypeQuery';
import { WorkerQueryModel } from '../entities/WorkerQuery';
import { ExpenditureQueryModel } from '../entities/ExpenditureQuery';

export class EntitiesType {
  kulture: CultureQueryModel[];
  operacije: OperationQueryModel[];
  masine: MachineQueryModel[];
  parcele: PortionQueryModel[];
  tipoviRada: WorkTypeQueryModel[];
  radnici: WorkerQueryModel[];
  utrosci: ExpenditureQueryModel[];
}

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

  @Get('entiteti')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuardJwt)
  @ApiResponse({ type: EntitiesType })
  @ApiOperation({
    summary: 'Podaci o Operacijama/Kulturama/Radnicima/Tipovima Rada/Utroscima',
  })
  getEntities(@Request() request: AppRequest) {
    return this.queryService.getEntities(request.user);
  }

  @Put('troskovi')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuardJwt)
  @ApiOperation({
    summary:
      'Azuriranje utroska po ID-ju. Neophodno je poslati vrednosti za sve kolone.',
  })
  updateExpense(
    @Request() request: AppRequest,
    @Body() expense: ExpenseQueryModel,
  ) {
    return this.queryService.updateExpense(
      request.user,
      expense.id_rashoda,
      expense,
    );
  }
}
