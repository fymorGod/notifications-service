
import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { InMemoryNoficationRepository } from "@test/repositories/in-memory-notifications-repository";
import { CountRecipientNotification } from "./count-recipient-notifications";

describe('Count recipients notifications', () => {
    it('should be able to count recipient notifications', async () => {
        const notificationRepository = new InMemoryNoficationRepository();
        const countRecipientNotifications = new CountRecipientNotification(notificationRepository);
        
        await notificationRepository.create(
            new Notification({
                category: 'social',
                content: new Content('Nova solicitação de amizade!'),
                recipientId: 'recipient-1',
            })
        );
        await notificationRepository.create(
            new Notification({
                category: 'social',
                content: new Content('Nova solicitação de amizade!'),
                recipientId: 'recipient-1',
            })
        );
        await notificationRepository.create(
            new Notification({
                category: 'social',
                content: new Content('Nova solicitação de amizade!'),
                recipientId: 'recipient-2',
            })
        );

        const { count } = await countRecipientNotifications.execute({
            recipientId: 'recipient-1'
        });

        expect(count).toEqual(2);
    });

});