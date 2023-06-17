import React from "react";
import { useFormik } from "formik";
import { accountValidation } from "../Validations/AccountRegValidation";
import { accountAlert } from "../Notifications/AccountReg";

const AccountForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: accountValidation,

    onSubmit: (values, { resetForm }) => {
      resetForm();
      accountAlert();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className=" w-full md:w-2/4 lg:w-3/5 flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-4"
    >
      <div className="flex flex-col ">
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter Your Full name.."
          className="p-2 border-2 border-black/100 focus:border-2  focus:shadow-transparent  focus:outline-none  focus:ring-[#E87A5D] focus:border-[#E87A5D] focus:bg-white placeholder:text-slate-400 placeholder:text-xl"
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="flex flex-col ">
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Email address"
          className=" p-2 border-2 border-black/100 focus:border-2  focus:shadow-transparent  focus:outline-none  focus:ring-[#E87A5D] focus:border-[#E87A5D] focus:bg-white placeholder:text-slate-400 placeholder:text-xl"
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="flex flex-col">
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Password***"
          className="p-2 border-2 border-black/100 focus:border-2  focus:shadow-transparent focus:outline-none  focus:ring-[#E87A5D] focus:border-[#E87A5D] focus:bg-white placeholder:text-slate-400 placeholder:text-xl"
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="flex flex-col">
        <input
          type="password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Confirm password***"
          className="p-2 border-2 border-black/100 focus:border-2  shadow-[#E87A5D]  focus:shadow-transparent  focus:outline-none  focus:ring-[#E87A5D] focus:border-[#E87A5D] focus:bg-white placeholder:text-slate-400 placeholder:text-xl"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div>{formik.errors.confirmPassword}</div>
        ) : null}
      </div>

      <button className=" rounded-none w-2/5 ">sign up</button>
    </form>
  );
};

export default AccountForm;
