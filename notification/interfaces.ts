import { AvatarType, NotificationType } from './types';

export interface Notification {
    clientId: string;
    type: NotificationType;
    avatarType: AvatarType;
    avatar: string;
    title: string;
    smalText: string;
    html: string;
    link?: string;
    isRead: boolean;
    author: NotificationAuthor;
    isDeleted: boolean;
    createdAt: string;
}

export class NotificationAuthor {
    firstName: string;
    lastName: string;
}

export interface AddNotificationData {
    clientId: string;
    type?: NotificationType;
    avatarType?: AvatarType;
    avatar?: string;
    title: string;
    smalText: string;
    html: string;
    link?: string;
    author?: NotificationAuthor;
}

export interface GetClientNotificationReponse {
    type: NotificationType;
    avatarType: AvatarType;
    avatar: string;
    title: string;
    smalText: string;
    html: string;
    link?: string;
    isRead: boolean;
    author: NotificationAuthor;
    createdAt: string;
}
