import { Injectable } from '@nestjs/common';
import * as webPush from 'web-push';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class NotificationsService {
  
  constructor(private configService: ConfigService) {
    // console.log('env', this.configService.get<string>('NEST_WEB_PUSH_PUBLIC_KEY'))
    webPush.setVapidDetails(
      this.configService.get<string>('NEST_WEB_PUSH_SUBJECT'),
      this.configService.get<string>('NEST_WEB_PUSH_PUBLIC_KEY'),
      this.configService.get<string>('NEST_WEB_PUSH_PRIVATE_KEY'),
    );
  }

  async sendNotification(subscription, data: any, option:webPush.RequestOptions = undefined) {
    try {
      console.log(subscription)
      await webPush.sendNotification(subscription, JSON.stringify(data), option);
    } catch (error) {
      console.error('Error sending notification:', error);
      throw error;
    }
  }
}