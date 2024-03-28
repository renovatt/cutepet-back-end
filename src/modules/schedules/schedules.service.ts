import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { SchedulesRepositories } from 'src/shared/database/repositories/schedules.repositories';

@Injectable()
export class SchedulesService {
  constructor(private readonly schedulesRepo: SchedulesRepositories) {}

  async create(userId: string, createScheduleDto: CreateScheduleDto) {
    const {
      pet,
      petname,
      age,
      sex,
      weight,
      date,
      time,
      service,
      observation,
      status,
      breed,
    } = createScheduleDto;

    return this.schedulesRepo.create({
      data: {
        userId,
        pet,
        petname,
        breed,
        age,
        sex,
        weight,
        date,
        time,
        service,
        observation,
        status,
      },
    });
  }

  async findAll(userId: string) {
    return this.schedulesRepo.findAll({
      where: { userId: userId },
    });
  }

  async findOne(scheduleId: string) {
    return this.schedulesRepo.findOne({
      where: { id: scheduleId },
    });
  }

  async update(
    userId: string,
    scheduleId: string,
    updateScheduleDto: UpdateScheduleDto,
  ) {
    const {
      pet,
      petname,
      age,
      sex,
      weight,
      date,
      time,
      service,
      observation,
      breed,
    } = updateScheduleDto;

    return this.schedulesRepo.uptade({
      where: { id: scheduleId },
      data: {
        pet,
        petname,
        age,
        sex,
        weight,
        date,
        time,
        service,
        observation,
        breed,
      },
    });
  }

  async updateStatus(
    userId: string,
    scheduleId: string,
    updateScheduleDto: UpdateScheduleDto,
  ) {
    const { status } = updateScheduleDto;

    return this.schedulesRepo.uptade({
      where: { id: scheduleId },
      data: { status },
    });
  }
}
