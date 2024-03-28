import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repositories';
import { SchedulesRepositories } from './repositories/schedules.repositories';

@Global()
@Module({
  providers: [PrismaService, UsersRepository, SchedulesRepositories],
  exports: [UsersRepository, SchedulesRepositories],
})
export class DatabaseModule {}
