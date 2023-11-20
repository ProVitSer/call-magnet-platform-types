export enum ClientProxyProvide {
    mail = 'MAIL_SERVICE',
    user = 'USER_SERVICE',
}

export enum MessagePatternCmd {
    register = 'register',
    verifyUser = 'verify-user',
    resetPassword = 'reset-password',
    updatePassword = 'update-password',
    login = 'login',
    logout = 'logout',
    refreshToken = 'refresh-token',
    findUserByClientId = 'find-user-by-clientId',
    confEmail = 'confirmation-email',
    resetPasswordEmail = 'reset-password-email',
    verifyCode = 'verify-code',
}
