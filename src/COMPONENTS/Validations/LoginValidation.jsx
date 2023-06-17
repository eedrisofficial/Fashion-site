import * as yup from "yup";

export const loginValidate = yup.object().shape({
  email: yup
    .string("Invalid email address")
    .email()
    .required("Email is required"),
  password: yup.string().required("Please enter your password"),
});
