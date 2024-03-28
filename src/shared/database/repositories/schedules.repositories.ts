import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class SchedulesRepositories {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ScheduleCreateArgs) {
    return this.prismaService.schedule.create(createDto);
  }

  findAll(findManyDto: Prisma.ScheduleFindManyArgs) {
    return this.prismaService.schedule.findMany(findManyDto);
  }

  findOne(findUniqueDto: Prisma.ScheduleFindUniqueArgs) {
    return this.prismaService.schedule.findUnique(findUniqueDto);
  }

  uptade(updateDto: Prisma.ScheduleUpdateArgs) {
    return this.prismaService.schedule.update(updateDto);
  }
}
