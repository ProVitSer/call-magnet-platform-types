import { Role, Status } from './types';

export type FindUserByClientIdResponse = Pick<UserSchema, 'refreshToken' | 'validationToken' | 'isEmailVerified'>;

export interface UserSchema {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    password: string;
    clientId: string;
    status: Status;
    isEmailVerified: boolean;
    validationToken: string | null;
    roles: Role[];
    refreshToken: string;
}

export interface Menu {
    name: string;
    path: string;
    icon: string;
    badge: string;
    badgeClass: string;
    externalLink: boolean;
    group: Group;
}

export interface Group {
    lines: Menu[];
}

export interface GetClientInfoResponse {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    company: string;
    status: Status;
    roles: Role[];
}

export interface UpdateClientInfoData {
    clientId: string;
    firstname?: string;
    lastname?: string;
    phoneNumber?: string;
    company?: string;
}

export interface UpdateClientInfoResponse {
    result: boolean;
    message: string;
}
