import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginValidate } from "../Validations/LoginValidation";
import { loginAlert } from "../Notifications/Login";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidate,
    onSubmit: ({ resetForm }) => {
      resetForm();
      loginAlert();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className=" w-full md:w-2/4 lg:w-2/5 flex flex-col  gap-2"
    >
      <div className="flex flex-col ">
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter Your email.."
          className="p-2 border-2 border-black/100 focus:border-2  focus:shadow-transparent  focus:outline-none  focus:ring-[#E87A5D] focus:border-[#E87A5D] focus:bg-white placeholder:text-slate-400 placeholder:text-xl"
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="flex flex-col ">
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter Your your password"
          className="p-2 border-2 border-black/100 focus:border-2  focus:shadow-transparent  focus:outline-none  focus:ring-[#E87A5D] focus:border-[#E87A5D] focus:bg-white placeholder:text-slate-400 placeholder:text-xl"
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>
      <Link to="/forgotpassword">
        <p className="text-[#E87A5D] hover:underline cursor-pointer">
          forgotten password
        </p>
      </Link>
      <button className="rounded-none lg:w-2/5">Login</button>
    </form>
  );
};

export default LoginForm;
