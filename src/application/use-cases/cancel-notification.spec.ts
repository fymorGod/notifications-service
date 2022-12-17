import { makeNotification } from "@test/factories/notifications-factory";
import { InMemoryNoficationRepository } from "@test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "./cancel-notification";
import { NotificationNotFound } from "./errors/notifications-not-found";

describe('Send notification', () => {
    it('should be able to cancel a notification', async () => {
        const notificationRepository = new InMemoryNoficationRepository();
        const cancelNotification = new CancelNotification(notificationRepository);

        const notification = makeNotification()
        
        await notificationRepository.create(notification);

        await cancelNotification.execute({
            notificationId: notification.id
        });

        expect(notificationRepository.notifications[0].canceldAt).toEqual(
            expect.any(Date),
        );
    });

    it('should not be able to cancel a non existing notification', async () => {
        const notificationRepository = new InMemoryNoficationRepository();
        const cancelNotification = new CancelNotification(notificationRepository);

        expect(() => {
            return cancelNotification.execute({
                notificationId: 'fake-notification-id'
            });

        }).rejects.toThrow(NotificationNotFound);
    });
});