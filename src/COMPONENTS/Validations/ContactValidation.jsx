import * as yup from "yup";

export const UsersValidation = yup.object().shape({
  name: yup.string().required("please enter your name"),
  email: yup
    .string("Invalid email address")
    .email()
    .required(" please enter your email"),
  message: yup.string().required("Please write a message"),
});
