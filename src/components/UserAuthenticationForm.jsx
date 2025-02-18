import React, { useState } from "react";
import FormInput from "./FormInput";
import { Formik } from "formik";
import * as Yup from "yup";

function UserAuthenticationForm() {
  const [isSignup, setIsSignup] = useState(false);

  const validationSchemaSignup = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const validationSchemaLogin = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, {resetForm}) => {
    if(!isSignup) {
        const {fullName, ...loginData} = values;
        console.log('login data', loginData);
    }else {
        console.log('signup data', values);
    }
    resetForm();
  };

  return (
    <div className="authentication-container w-fit h-full flex flex-col items-center justify-center m-auto gap-[20px]">
      {isSignup ? (
        <h1 className="text-[#434343] text-[20px] font-[500]">
          Create your free Account
        </h1>
      ) : (
        <h1 className="text-[#434343] text-[20px] font-[500]">
          Login to your Account
        </h1>
      )}

      <Formik
        key={isSignup}
        initialValues={
          isSignup
            ? { fullName: "", email: "", password: "" }
            : { email: "", password: "" }
        }
        validationSchema={isSignup ? validationSchemaSignup : validationSchemaLogin}
        validateOnMount={false}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <form
            className="form-container flex flex-col gap-[20px]"
            onSubmit={handleSubmit}
          >
            {isSignup && (
              <FormInput
                inputType="text"
                labelFor="fullName"
                labelName="Full Name"
                inputPlaceholder="Enter your full name"
                value={values.fullName}
                onChange={handleChange}
                name="fullName"
                error={touched.fullName && errors.fullName}
              />
            )}

            <FormInput
              inputType="email"
              labelFor="email"
              labelName="Email"
              inputPlaceholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              name="email"
              error={touched.email && errors.email}
            />

            <FormInput
              inputType="password"
              labelFor="password"
              labelName="Password"
              inputPlaceholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              name="password"
              error={touched.password && errors.password}
            />

            <button
              type="submit"
              className="text-[#FFFFFF] m-auto bg-[#0c8ce9] w-fit px-[32px] py-[8px] rounded-md font-[500] text-[16px]"
            >
              {isSignup ? "Create Account" : "Login"}
            </button>
          </form>
        )}
      </Formik>

      <div className="google-authentication-container">
        {isSignup ? (
          <p className="text-[12px] font-[400]">
            Don't have an account?{" "}
            <button
              onClick={() => setIsSignup(false)}
              className="text-[#0c8ce9] cursor-pointer"
            >
              Login
            </button>
          </p>
        ) : (
          <p className="text-[12px] font-[400]">
            Already have an account?{" "}
            <button
              onClick={() => setIsSignup(true)}
              className="text-[#0c8ce9] cursor-pointer"
            >
              Signup
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default UserAuthenticationForm;
