"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { api } from "@/utils/axios";
// import { AxiosError } from "axios";

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(5),
});

interface IRegisterForm {
  email: string;
  password: string;
}
export default function RegisterPage() {
  const initialValues: IRegisterForm = {
    email: "",
    password: "",
  };

  const submitRegister = async (values: IRegisterForm) => {
    try {
      const response = await api.get("users", {
        params: { email: values.email },
      });
      const checkUser = response.data;
      if (checkUser.length) throw new Error("User already exists");
      await api.post("users", values);
      alert("Register Success, Please Login");
    } catch (error) {
      console.log(error);
      window.location.href = "/loginPage";
      // if (error instanceof AxiosError) {
      //   console.log(error.response?.data);

      //   if (error.response?.data?.message === "Email already exists") {
      //     alert(error.response?.data?.message);
      //   } else {
      //     alert(error.message);
      //   }
      // } else if (error instanceof Error) {
      //   alert(error.message);
      // }
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      submitRegister(values);
    },
  });

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/test-discovery/2023/11/02/a967c352-84f5-4e80-b83c-27d7946404a2-1698921296639-d5b416daa2454b2e114b2de8150a502c.png)",
      }}
    >
      <Link href="/" className="mt-[-80vh] mr-[0px]">
        <Image
          width={140}
          height={140}
          src={"/images/logo.svg"}
          alt="logo"
          className=""
        />
      </Link>
      <div className=" w-full h-[55vh] bg-white/50 rounded-t-2xl px-[20px] border-t-2 border-white mb-[-45vh]">
        <div className="">
          <form onSubmit={formik.handleSubmit} className="">
            <div className="mt-[25px] pb-[15px]">
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="input input-bordered w-full"
                placeholder="Email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="pb-[15px]">
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="input input-bordered w-full"
                placeholder="Password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="">
              <button
                type="submit"
                className="text-white bg-blue-500 w-full font-bold rounded-md h-[48px] hover:bg-blue-400"
              >
                Daftar
              </button>
            </div>
          </form>
          <div className=" text-[12px] md:text-[15px] text-center my-[15px] text-gray-500">
            {" "}
            Udah Punya Akun? Mau Masuk Pakai Gmail?{" "}
            <Link href="/loginPage" className="text-blue-500">
              Login Aja
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
