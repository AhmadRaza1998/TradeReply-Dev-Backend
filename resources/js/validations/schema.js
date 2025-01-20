import * as Yup from "yup";
import { errorMessages } from "./errorMessages";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email(errorMessages.EMAIL_INVALID)
    .required(errorMessages.EMAIL_REQUIRED),
  password: Yup.string()
    .required(errorMessages.PASSWORD_REQUIRED)
    .min(8, errorMessages.PASSWORD_MIN_LENGTH)
    .matches(/[A-Z]/, errorMessages.PASSWORD_UPPERCASE)
    .matches(/[a-z]/, errorMessages.PASSWORD_LOWERCASE)
    .matches(/[0-9]/, errorMessages.PASSWORD_NUMBER)
    .matches(/[!@#$%^&*]/, errorMessages.PASSWORD_SPECIAL_CHAR),
});

export const signupSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email(errorMessages.EMAIL_INVALID)
    .required(errorMessages.EMAIL_REQUIRED),
  password: Yup.string()
    .trim()
    .required(errorMessages.PASSWORD_REQUIRED)
    .min(8, errorMessages.PASSWORD_MIN_LENGTH)
    .matches(/[A-Z]/, errorMessages.PASSWORD_UPPERCASE)
    .matches(/[a-z]/, errorMessages.PASSWORD_LOWERCASE)
    .matches(/[0-9]/, errorMessages.PASSWORD_NUMBER)
    .matches(/[!@#$%^&*]/, errorMessages.PASSWORD_SPECIAL_CHAR),
});

export const forgetSchema = Yup.object({
  email: Yup.string()
    .email(errorMessages.EMAIL_INVALID)
    .required(errorMessages.EMAIL_REQUIRED),
});

export const resetSchema = Yup.object({
  password: Yup.string()
    .trim()
    .required(errorMessages.PASSWORD_REQUIRED)
    .min(8, errorMessages.PASSWORD_MIN_LENGTH)
    .matches(/[A-Z]/, errorMessages.PASSWORD_UPPERCASE)
    .matches(/[a-z]/, errorMessages.PASSWORD_LOWERCASE)
    .matches(/[0-9]/, errorMessages.PASSWORD_NUMBER)
    .matches(/[!@#$%^&*]/, errorMessages.PASSWORD_SPECIAL_CHAR),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required"),
});

export const blogValidationSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .required("Title is required")
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title cannot exceed 100 characters"),
  content: Yup.string()
    .trim()
    .required("Content is required")
    .min(50, "Content must be at least 20 characters")
    .max(1000, "Content cannot exceed 100 characters"),
});

export const titleDescValidationSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .required("Title is required")
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title cannot exceed 100 characters"),
  content: Yup.string()
    .trim()
    .required("Content is required")
    .min(50, "Content must be at least 20 characters")
    .max(1000, "Content cannot exceed 100 characters"),
});
