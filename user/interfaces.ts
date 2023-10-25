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
