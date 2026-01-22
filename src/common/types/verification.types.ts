export enum EVerificationTypes {
    REGISTER = 'register',
    RESET_PASSWORD = 'reset-password',
    EDIT_PHONE = 'edit-phone',
}

export interface ICheckOtp {
    type: EVerificationTypes
    phone: string
    otp: string
}
