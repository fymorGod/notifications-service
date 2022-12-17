
import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { makeNotification } from "@test/factories/notifications-factory";
import { InMemoryNoficationRepository } from "@test/repositories/in-memory-notifications-repository";
import { CountRecipientNotification } from "./count-recipient-notifications";

describe('Count recipients notifications', () => {
    it('should be able to count recipient notifications', async () => {
        const notificationRepository = new InMemoryNoficationRepository();
        const countRecipientNotifications = new CountRecipientNotification(notificationRepository);
        
        await notificationRepository.create(
            makeNotification({recipientId: 'recipient-1'})
        );
        await notificationRepository.create(
            makeNotification({recipientId: 'recipient-1'})
        );
        await notificationRepository.create(
            makeNotification({recipientId: 'recipient-2'})
        );

        const { count } = await countRecipientNotifications.execute({
            recipientId: 'recipient-1'
        });

        expect(count).toEqual(2);
    });

});