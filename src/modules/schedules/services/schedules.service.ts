import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateScheduleDto } from '../dto/create-schedule.dto';
import { UpdateScheduleDto } from '../dto/update-schedule.dto';
import { ValidateScheduleOwnershipService } from './validate-schedule-ownership.service';
import { SchedulesRepositories } from '../../../shared/database/repositories/schedules.repositories';

@Injectable()
export class SchedulesService {
  constructor(
    private readonly schedulesRepo: SchedulesRepositories,
    private readonly validateScheduleOwnershipService: ValidateScheduleOwnershipService,
  ) {}

  async createMany(userId: string, createManyScheduleDto: CreateScheduleDto[]) {
    try {
      return await this.schedulesRepo.createMany({
        data: createManyScheduleDto.map((dto) => ({
          ...dto,
          userId,
        })),
      });
    } catch (error) {
      throw new BadRequestException('Missing required fields');
    }
  }

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

  async findOne(userId: string, scheduleId: string) {
    await this.validateOwnership(userId, scheduleId);

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

    await this.validateOwnership(userId, scheduleId);

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

    await this.validateOwnership(userId, scheduleId);

    return this.schedulesRepo.uptade({
      where: { id: scheduleId },
      data: { status },
    });
  }

  private async validateOwnership(userId: string, scheduleId: string) {
    await this.validateScheduleOwnershipService.validate(userId, scheduleId);
  }
}
