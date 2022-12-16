
import { InMemoryNoficationRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { SendNotification } from "./send-notification";

describe('Send notification', () => {
    it('should be able to send a notification', async () => {
        const noficationRepository = new InMemoryNoficationRepository();
        const sendNotification = new SendNotification(noficationRepository);

        const { notification } = await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'example-recipient-id'
        });

        expect(noficationRepository.notifications).toHaveLength(1);
        expect(noficationRepository.notifications[0]).toEqual(notification);
    })
})