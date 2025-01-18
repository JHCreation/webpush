import { Controller, Post, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { PushSubscription } from 'web-push';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('subscribe')
  async subscribe(@Body() subscription: PushSubscription) {
    // 구독 정보를 데이터베이스에 저장
    console.log('subscribe!', subscription)
    return { message: 'Subscription successful' };
  }

  @Post('send')
  async sendNotification(
    @Body('subscription') subscription: string,
    @Body('data') data: any,
  ) {
    console.log(subscription,  data, '출력')
    
    await this.notificationsService.sendNotification(subscription, data, {
      // TTL: 1000
    });
    return { message: 'Notification sent' };
  }
}