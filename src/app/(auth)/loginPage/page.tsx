"use client";
import { useFormik } from "formik";
import Google from "@/../public/Google.svg";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirectTo: "/",
        });
      } catch (error) {
        console.log(error);
        window.location.href = "/";
      }
    },
  });

  return (
    <div className="">
      <div
        className="hero min-h-screen "
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
        <div className="w-full h-[55vh] bg-white/50 rounded-t-2xl px-[20px] border-t-2 border-white mb-[-45vh]">
          <div className="">
            <form onSubmit={formik.handleSubmit} className="">
              <div className="mt-[25px] pb-[15px]">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="input input-bordered w-full"
                  placeholder="Email"
                />
                {/* {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500">{formik.errors.email}</div>
                ) : null} */}
              </div>
              <div className="pb-[15px]">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="input input-bordered w-full"
                  placeholder="Password"
                />
                {/* {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500">{formik.errors.password}</div>
                ) : null} */}
              </div>
              <div className="">
                <button
                  type="submit"
                  className="text-white bg-blue-500 w-full font-bold rounded-md h-[48px] hover:bg-blue-400"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="text-[12px] md:text-[15px] text-gray-500  my-[13px]">
              <h1 className="my-[15px] flex justify-center">
                Login lebih cepat dengan
              </h1>
              <div className="flex justify-center">
                <button
                  onClick={() => signIn()}
                  className=" bg-[#F3F9FA] p-2.5 rounded-[4px] flex justify-center items-center"
                >
                  <Image
                    src={Google}
                    height={18}
                    width={18}
                    className="w-5 h-5"
                    alt="google"
                  ></Image>{" "}
                </button>
              </div>
            </div>
            <div className="absolute bottom-[10px] left-[0] flex justify-center w-[100%] text-[12.5px] md:text-[15px] my-[15px] text-gray-500">
              <div className="">
                Belum Punya Akun?{" "}
                <Link href="/registerPage" className="text-blue-500">
                  Daftar Aja
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
