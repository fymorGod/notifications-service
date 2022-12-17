import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repository';
import { NotificationNotFound } from './errors/notifications-not-found';

interface CancelNotificationRequest {
    notificationId: string;
}

type CancelNotificationResponse = void

@Injectable()
export class CancelNotification {
  constructor(private notifacationRepository: NotificationRepository) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notifacationRepository.findById(notificationId);

    if(!notification){
        throw new NotificationNotFound();
    }

    notification.cancel()

    await this.notifacationRepository.save(notification);
  }
}
