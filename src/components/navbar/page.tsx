"use client";
import * as React from "react";
import Image from "next/image";
import { usePost } from "../searchBar/useContext";
import Link from "next/link";
import { useSession } from "next-auth/react";

export function Navbar() {
  const { data: session } = useSession();
  const { setSearchQuery, searchQuery } = usePost();
  const name = session?.user?.email || "Guest";
  return (
    <div className="flex justify-center sticky top-0 w-full lg:h-[70px] shadow-[0_0_5px_#ffffff] z-50">
      <div className="navbar bg-base-100 flex justify-between items-center  lg:h-[70px] z-50 lg:px-[33px] md:px-[0px] px-[0px] h-[65px] md:w-[1114px] lg:w-[1300px] w-full ">
        <div className="lg:block hidden transition-all">
          <div className="flex pl-[0px]">
            <Link href="/" className="text-xl w-28">
              <Image
                width={100}
                height={100}
                src={"/images/logo.svg"}
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-around lg:w-fit w-[100vw]">
          <div className="form-control max-w-[1200px] px-[0px] lg:px-[33px] lg:w-[55vw] w-[70vw] ">
            <div className=" flex  flex-row relative h-[42px] w-[70xvw] lg:w-[50vw]">
              <input
                type="text"
                placeholder="Search"
                className="input border-1 border-gray-400 h-[42px] w-[70vw]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <button className=" mt-[3px] mr-[3px] btn-ghost absolute my-auto  right-0 h-[36px] w-[36px] flex justify-center items-center rounded-full text-white bg-[#0072FF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="dropdown dropdown-end lg:block hidden transition-all">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <path
                    className=""
                    fillRule="evenodd"
                    clipRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.1054 2C20.7749 2 21.3145 2.57143 21.2046 3.24311C20.0155 10.1303 20.0155 14.411 21.7541 20.6466C21.964 21.3484 21.4244 22 20.7249 22H3.27882C2.56938 22 2.02981 21.3484 2.24963 20.6466C3.97826 14.411 3.97826 10.1303 2.7892 3.24311C2.68928 2.57143 3.22886 2 3.88833 2H3.97826C7.47548 2.3609 9.74367 2.53133 11.9919 2.53133C14.2401 2.53133 16.4983 2.35088 20.0155 2H20.1054ZM9.13431 6.91993C9.13431 7.42118 8.70465 7.88233 8.15509 7.88233C7.60553 7.88233 7.22583 7.45125 7.22583 6.91993C7.22583 6.3886 7.60553 5.95752 8.15509 5.95752C8.70465 5.95752 9.13431 6.39862 9.13431 6.91993ZM17.0656 6.96241C17.0656 7.46366 16.636 7.92481 16.0864 7.92481C15.5368 7.92481 15.1571 7.49373 15.1571 6.96241C15.1571 6.43108 15.5368 6 16.0864 6C16.636 6 17.0656 6.4411 17.0656 6.96241ZM12.002 14.9799C9.37412 14.9799 7.22583 12.7343 7.22583 9.96741C7.22583 9.56641 7.54557 9.24561 7.93526 9.24561C8.32495 9.24561 8.6447 9.56641 8.6447 9.96741C8.6447 11.9323 10.1535 13.5263 12.002 13.5263C13.8506 13.5263 15.3594 11.9323 15.3594 9.96741C15.3594 9.56641 15.6791 9.24561 16.0688 9.24561C16.4585 9.24561 16.7782 9.56641 16.7782 9.96741C16.7782 12.7343 14.6399 14.9799 12.002 14.9799Z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item rounded-[4px] bg-red-500 text-white">
                  8
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:block hidden transition-all">
            <div className="divider divider-horizontal h-[25px] my-auto "></div>
          </div>
          {session?.user?.id ? (
            <div className="flex justify-around items-center md:w-[200px] w-[90px] text-center">
              <div className="text-center md:block hidden">
                {name.slice(0, 15)}
                {/* menjadikan text yang melebihi 27 catarter menjadi ditambahi "..." */}
                {name.split("").length <= 15 ? "" : "..."}
              </div>

              <Image
                src={session.user?.image || "/images/noProfil.jpg"}
                alt="avatar"
                width={35}
                height={35}
                className="object-cover rounded-full aspect-square"
              />
            </div>
          ) : (
            <ul className="menu menu-horizontal px-2 flex justify-between md:w-[200px] w-[90px] lg:scale-100  scale-90 transition">
              <li className="md:block hidden transition-all">
                <Link
                  href="/loginPage"
                  className="border-2 border-[#0072FF] rounded-3xl h-[32px] text-[#0072FF] font-semibold my-auto "
                >
                  <p className="mt-[-3.5px]"> Masuk</p>
                </Link>
              </li>
              <li className="">
                <Link
                  href="/registerPage"
                  className="bg-[#0072FF] rounded-3xl border-2 border-[#0072FF] h-[32px] font-semibold my-auto text-light text-white w-[78px]items-center justify-center"
                >
                  <p className="mt-[-3.5px] ">Daftar</p>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
