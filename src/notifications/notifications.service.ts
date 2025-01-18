import { Injectable } from '@nestjs/common';
import * as webPush from 'web-push';

@Injectable()
export class NotificationsService {
  constructor() {
    webPush.setVapidDetails(
      'mailto:corenzohouse@naver.com',
      'BAy-bvUHfeGPDUCa0SuegTU9cBS7jhfCMuPha9abmQ1RnWY0_EeWjyDtLbplpCOubAt5C5nhqs3aW-7LWJ9yVgE',
      'SEuKwE7otNmlwLn_fdRVt-JHYo5OEiatTkdy3Y2ZDew'
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