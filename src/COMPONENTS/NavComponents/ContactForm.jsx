import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { UsersValidation } from "../Validations/ContactValidation";
import { contactAlert } from "../Notifications/ContactAlert";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: UsersValidation,

    onSubmit: (values, { resetForm }) => {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        resetForm();
        contactAlert();
      });

      emailjs
        .sendForm("service_ndz9h5t", "template_ao8sxqi", "BAkC9nyXYdWzgAvO9")
        .then(
          (result) => {
            console.log(result.text);
            setIsSubmitting(false);
            resetForm();
          },
          (error) => {
            console.log(error.text);
            setIsSubmitting(false);
          }
        );
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col p-4 gap-2 w-full md:w-3/5 lg:w-2/5 "
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className=" mt-0 px-3 py-2 bg-gray-200 focus:border-2  border-[#00246B]   focus:shadow-transparent rounded-md focus:outline-none  focus:ring-[#E87A5D] focus:border-[#E87A5D] focus:bg-white placeholder:text-slate-400 placeholder:text-xl"
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email address..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="px-3 py-2 bg-gray-200 focus:border-2  border-[#00246B]    focus:shadow-transparent rounded-md focus:outline-none  focus:ring-[#E87A5D] focus:border-[#E87A5D] focus:bg-white placeholder:text-slate-400 placeholder:text-xl"
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="p-0">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Write your message here..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          className="  h-36  px-3 py-1 bg-gray-200 focus:border-2 border-[#00246B]  focus:shadow-none rounded-md focus:outline-none  focus:ring-[#E87A5D] focus:border-[#E87A5D] focus:bg-white placeholder:text-slate-400 placeholder:text-xl"
        />
        {formik.touched.message && formik.errors.message ? (
          <div>{formik.errors.message}</div>
        ) : null}
      </div>
      <button
        disabled={isSubmitting}
        className="rounded-lg mt-3 mb-8 bg-slate-200  hover:bg-[#E87A5D] px-5 text-[20px] shadow-lg shadow-[#E87A5D] hover:shadow-transparent"
      >
        {isSubmitting ? "sending" : "send"}
      </button>
    </form>
  );
};

export default ContactForm;
