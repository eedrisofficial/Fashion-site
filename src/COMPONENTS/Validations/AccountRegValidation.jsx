import * as yup from "yup";

export const accountValidation = yup.object().shape({
  name: yup.string().required("Please write your full name"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Enter your Password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
});
