import { Injectable, NotFoundException } from '@nestjs/common';
import { SchedulesRepositories } from '@repositories/schedules.repositories';

@Injectable()
export class ValidateScheduleOwnershipService {
  constructor(private readonly schedulesRepo: SchedulesRepositories) {}

  async validate(userId: string, scheduleId: string) {
    const isOwner = await this.schedulesRepo.findFirst({
      where: { userId, id: scheduleId },
    });

    if (!isOwner) {
      throw new NotFoundException('Schedule not found');
    }
  }
}
