import { Menu } from '../user/interfaces';
import { Role } from '../user/types';

export interface BaseResponse {
    message: string;
}

export interface RegisterUserResponse extends BaseResponse {
    clientId: string;
    email: string;
}

export type ForgotPasswordResponse = BaseResponse;

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    firstname: string;
    lastname: string;
    company: string;
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
    company: string;
}

export interface VerifyUser {
    token: string;
}

export interface ResetPassword {
    verificationCode: string;
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

export interface VerificationCodeResponse {
    isValid: boolean;
}

export interface VerificationCode {
    code: string;
}

export interface ForgotPasswordData {
    email: string;
}
