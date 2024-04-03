import { Controller, Get, Post, Body, Param, Put, Patch } from '@nestjs/common';
import { SchedulesService } from './services/schedules.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ActiveUserId } from '../../shared/decorators/active-user-id';
import { ParseObjectIdPipe } from '../../shared/pipes/parse-object-id-pipe';

@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Post('create-many')
  createMany(
    @ActiveUserId() userId: string,
    @Body() createManyScheduleDto: CreateScheduleDto[],
  ) {
    return this.schedulesService.createMany(userId, createManyScheduleDto);
  }

  @Post()
  create(
    @ActiveUserId() userId: string,
    @Body() createScheduleDto: CreateScheduleDto,
  ) {
    return this.schedulesService.create(userId, createScheduleDto);
  }

  @Get()
  findAll(@ActiveUserId() userId: string) {
    return this.schedulesService.findAll(userId);
  }

  @Get(':scheduleId')
  findOne(
    @ActiveUserId() userId: string,
    @Param('scheduleId', ParseObjectIdPipe) scheduleId: string,
  ) {
    return this.schedulesService.findOne(userId, scheduleId);
  }

  @Patch(':scheduleId')
  updateStatus(
    @ActiveUserId() userId: string,
    @Param('scheduleId', ParseObjectIdPipe) scheduleId: string,
    @Body() updateScheduleDto: UpdateScheduleDto,
  ) {
    return this.schedulesService.updateStatus(
      userId,
      scheduleId,
      updateScheduleDto,
    );
  }

  @Put(':scheduleId')
  update(
    @ActiveUserId() userId: string,
    @Param('scheduleId', ParseObjectIdPipe) scheduleId: string,
    @Body() updateScheduleDto: UpdateScheduleDto,
  ) {
    return this.schedulesService.update(userId, scheduleId, updateScheduleDto);
  }
}
