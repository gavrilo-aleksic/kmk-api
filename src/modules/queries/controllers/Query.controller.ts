import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Query,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { QueryService } from '../services/Query.service';
import { ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuardJwt } from 'src/modules/auth/guards/Auth.guard';
import { AppRequest } from 'src/modules/auth/auth.types';
import { ExpenseUsageQueryModel } from '../entities/ExpenseUsageQuery';

@Controller('query')
@ApiTags('Upiti')
export class QueryController {
  constructor(private queryService: QueryService) {}

  @Get('utrosak')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuardJwt)
  @ApiResponse({ type: ExpenseUsageQueryModel })
  @ApiOperation({
    summary: 'Podaci o utrosku',
  })
  getUsages(
    @Request() request: AppRequest,
    @Query('utrosakId') expenseId: string,
  ) {
    return this.queryService.getUsageQuery(request.user, expenseId);
  }
}
