import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from './notifications/notifications.module';
import { CatsController } from './cats/cats.controller';
import { NotificationsController } from './notifications/notifications.controller';

@Module({
  imports: [NotificationsModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
