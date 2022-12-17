import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repository';
import { NotificationNotFound } from './errors/notifications-not-found';

interface CountRecipientNotificationRequest {
    recipientId: string;
}

interface CountRecipientNotificationResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotification {
  constructor(private notifacationRepository: NotificationRepository) {}

  async execute(
    request: CountRecipientNotificationRequest,
  ): Promise<CountRecipientNotificationResponse> {
    const { recipientId } = request;

    const count = await this.notifacationRepository.countManyByRecipientId(
      recipientId
    );

    return {
      count,
    };
  }
}
