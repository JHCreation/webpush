import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from './notifications/notifications.module';
import { NotificationsController } from './notifications/notifications.controller';

@Module({
  imports: [NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
