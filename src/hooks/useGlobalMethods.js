'use client'
import { useTranslations } from 'next-intl';

export const useGlobalMethods = () => {
    const et = useTranslations('errors');
    const errorTranslate = (errorMsg) => {
        switch(errorMsg) {
            case "email already exists":
                return et('email_already_exists')
            case "Incorrect password":
                return et('incorrect_password')
            case "Email not verified":
                return et('email_not_verified')
            case "User not found":
                return et('user_not_found')
            case "This field may not be blank.":
                return et('not_blank')
            case "New password should not be same as old_password":
                return et('should_not_be_same')
            case "Invalid email": 
                return et('invalid_email')
            case "Invalid OTP": 
                return et('invalid_otp')
            case "OTP is required": 
                return et('otp_required')
            case "Valid email is required":
                return et('valid_email_required')
           }
    };
 
    return {
        errorTranslate,
    };
  };