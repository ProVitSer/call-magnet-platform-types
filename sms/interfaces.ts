import { Role, Status } from './types';

export type FindUserByClientIdResponse = Pick<UserSchema, 'refreshToken' | 'validationToken' | 'isEmailVerified'>;

export interface BaseRequestData {
    clientId: string;
}

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
    code: number;
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

export interface UpdateClientInfoData extends BaseRequestData {
    firstname?: string;
    lastname?: string;
    phoneNumber?: string;
    company?: string;
}

export interface UpdateClientInfoResponse {
    result: boolean;
    message: string;
}

export interface ChangePasswordData extends BaseRequestData {
    oldPassword: string;
    newPassword: string;
}

export interface ChangePasswordResponse {
    message: string;
}
