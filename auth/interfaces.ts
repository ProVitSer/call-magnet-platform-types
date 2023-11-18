import { Menu } from '../user/interfaces';
import { Role } from '../user/types';

export interface BaseResponse {
    message: string;
}

export interface RegisterUserResponse extends BaseResponse {
    clientId: string;
    email: string;
}

export interface ResetPasswordResponse extends BaseResponse {
    email: string;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
}

export interface RefreshTokensResponse {
    userRoles: Role[];
    menu: Menu[];
}

export interface RefreshTokenResponse {
    accessToken: string;
}

export interface LogoutResponse {
    result: boolean;
}

export interface RegisterUser {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    password: string;
}

export interface VerifyUser {
    token: string;
}

export interface ResetPassword {
    email: string;
}

export interface UpdatePassword {
    token: string;
    password: string;
}

export interface LoginUser {
    email: string;
    password?: string;
}

export interface RefreshToken {
    clientId: string;
    refreshToken: string;
}
