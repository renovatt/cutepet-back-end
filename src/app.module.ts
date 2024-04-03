import { Module } from '@nestjs/common';
import { UsersModule } from '@modules/users/users.module';
import { DatabaseModule } from '@database/database.module';
import { AuthModule } from '@modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@modules/auth/auth.guard';
import { SchedulesModule } from '@modules/schedules/schedules.module';
import { ConnectionModule } from '@modules/connection/connection.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    AuthModule,
    SchedulesModule,
    ConnectionModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
