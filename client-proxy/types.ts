export enum ClientProxyProvide {
    mail = 'MAIL_SERVICE',
    user = 'USER_SERVICE',
}

export enum MessagePatternCmd {
    register = 'register',
    verifyUser = 'verify-user',
    resetPassword = 'reset-password',
    forgotPassword = 'forgot-password',
    updatePassword = 'update-password',
    login = 'login',
    logout = 'logout',
    refreshToken = 'refresh-token',
    findUserByClientId = 'find-user-by-clientId',
    confEmail = 'confirmation-email',
    resetPasswordEmail = 'reset-password-email',
    verifyCode = 'verify-code',
    getClientInfo = 'get-clien-info',
    updateClientInfo = 'update-client-info',
    changePassword = 'change-password',
    getClientNotifications = 'get-clien-notifications',
    markNotificationsIsRead = 'mark-notifications-is-read',
    delNotification = 'del-notification',
    notificationList = 'notification-list',
}
