import { Controller, Get, Post, Body, Param, Put, Patch } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';

@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

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
    @Param('scheduleId') scheduleId: string,
  ) {
    return this.schedulesService.findOne(scheduleId);
  }

  @Patch(':scheduleId')
  updateStatus(
    @ActiveUserId() userId: string,
    @Param('scheduleId') scheduleId: string,
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
    @Param('scheduleId') scheduleId: string,
    @Body() updateScheduleDto: UpdateScheduleDto,
  ) {
    return this.schedulesService.update(userId, scheduleId, updateScheduleDto);
  }
}
