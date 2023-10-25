export enum ClientProxyProvide {
    mail = 'MAIL_SERVICE',
    user = 'USER_SERVICE'
}

export enum MessagePatternCmd {
    register = 'register',
    verifyUser = 'verify-user',
    resetPassword = 'reset-password',
    updatePassword = 'update-password',
    login = 'login',
    logout = 'logout',
    refreshToken = 'refresh-token',
    findUserByVlientId = 'find-user-by-clientId'
}