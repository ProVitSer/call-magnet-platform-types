import { AvatarType, NotificationType } from './types';

export interface Notification {
    clientId: string;
    type: NotificationType;
    avatarType: AvatarType;
    icon?: string;
    img?: string;
    smallTitle: string;
    fullTitle: string;
    smallText: string;
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
    icon?: string;
    img?: string;
    smallTitle: string;
    fullTitle: string;
    smallText: string;
    html: string;
    link?: string;
    author?: NotificationAuthor;
}
export interface GetClientNotificationsData {
    clientId: string;
    limit: string;
}

export interface BaseNotificationResponse {
    id: string;
    type: NotificationType;
    avatarType: AvatarType;
    icon?: string;
    img?: string;
    smallTitle: string;
    fullTitle: string;
    smallText: string;
    html: string;
    link?: string;
    isRead: boolean;
    author: NotificationAuthor;
    createdAt: string;
}

export type GetClientNotificationsReponse = BaseNotificationResponse;

export interface MarkNotificationsIsReadData {
    clientId: string;
    ids: string[];
}

export interface DelNotificationData {
    clientId: string;
    notificationId: string;
}

export interface GetNotificationListData {
    clientId: string;
    offset?: number;
    limit: number;
}

export interface GetNotificationListReponse {
    notifications: BaseNotificationResponse[];
    count: number;
}
