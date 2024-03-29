import { Module } from '@nestjs/common';
import { SchedulesService } from './services/schedules.service';
import { SchedulesController } from './schedules.controller';
import { ValidateScheduleOwnershipService } from './services/validate-schedule-ownership.service';

@Module({
  controllers: [SchedulesController],
  providers: [SchedulesService, ValidateScheduleOwnershipService],
})
export class SchedulesModule {}
