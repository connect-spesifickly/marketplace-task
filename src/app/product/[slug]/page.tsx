"use client";
import { IProduct } from "@/interfaces/product.interface";
import { useParams } from "next/navigation";
import * as React from "react";
import { useEffect, useState } from "react";
import { CarouselPlugin } from "./components/crousel";
import Image from "next/image";

export default function Slug() {
  const params = useParams<{ slug: string }>();
  const title = params.slug;

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://fake-blibli-server.vercel.app/products?title=${title}`
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  // export interface IProduct {
  //   length: number;
  //   id: number;
  //   title: string;
  //   price: number;
  //   rating: number;
  //   terjual: number;
  //   seller: string;
  //   badge: string[];
  //   images: string[];
  //   deskripsi: string;
  //   lokasi: string;
  // jam_buka: string;
  // }

  return (
    <div className="">
      <div>
        {data?.map((item: IProduct) => (
          <div key={item.id}>
            <div className="flex justify-center border-[1px] bg-white">
              <CarouselPlugin images={item.images.slice(0, 3)} />
            </div>

            <div className="bg-gray-200 ">
              {/* bagian1 */}
              <div className="py-[11px] px-[13px] bg-white w-full lg:px-[23px] xl:px-[63px] ">
                <div className="flex font-bold">
                  <p className="text-[19px]">Rp</p>
                  {/* merubah angka menjadi format desimal */}
                  <p className="text-[19px]">
                    {item.price.toLocaleString("id-ID", {
                      style: "decimal",
                    })}
                  </p>
                </div>
                <p>{item.title}</p>
                <div className="flex items-center">
                  <p className="text-[15px] my-[4px]  font-light text-gray-500">
                    {" "}
                    Terjual {item.terjual}
                  </p>
                  <p className="mx-[4px]">·</p>
                  <div className="flex items-center border border-gray-300 rounded-[6px] px-[8px] py-[2px]">
                    <svg
                      width={18}
                      height={18}
                      viewBox="1 1 24 24"
                      className=""
                      fill="#fdb813"
                    >
                      <path d="M13.1201 3.19303L15.5328 8.04172L20.9289 8.81672C21.96 8.96576 22.3605 10.2177 21.6196 10.9331L17.7152 14.7087L18.6363 20.0442C18.8165 21.0577 17.7353 21.8327 16.8242 21.3558L11.9988 18.842L7.17336 21.3558C6.25232 21.8327 5.18111 21.0577 5.36132 20.0442L6.28235 14.7087L2.37795 10.9331C1.63712 10.2177 2.04758 8.96576 3.06873 8.81672L8.46481 8.04172L10.8775 3.19303C11.3381 2.26899 12.6595 2.26899 13.1201 3.19303Z"></path>
                    </svg>
                    <div className="text-[15px]  pr-[2px] font-light text-gray-600 flex items-center">
                      {item.rating}{" "}
                      <p className="text-[15px] pl-[2px] text-gray-400">
                        ({item.terjual - 1})
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              {/* bagian2 */}
              <div className="bg-white my-[10px] py-[11px] px-[13px] w-full lg:px-[23px] xl:px-[63px] mt-[10px]">
                <div className="font-semibold text-[18px] py-[7px]">
                  Deskripsi
                </div>
                <p className="pb-[7px]">{item.deskripsi}</p>
              </div>
              {/*  */}
              {/* bagian3 */}
              <div className="bg-white my-[10px] py-[11px] px-[13px] w-full lg:px-[23px] xl:px-[63px] mt-[10px]">
                <div className="flex pt-[7px] items-center">
                  <svg
                    width={18}
                    height={22}
                    viewBox="2 3 24 24"
                    className=""
                    fill="#797F84"
                  >
                    <path
                      className=""
                      d="M12 2C7.31 2 3.5 5.81 3.5 10.5C3.5 17 11 22 12 22C13 22 20.5 17 20.5 10.5C20.5 5.81 16.69 2 12 2ZM12 13.52C10.07 13.52 8.5 11.95 8.5 10.02C8.5 8.09 10.07 6.52 12 6.52C13.93 6.52 15.5 8.09 15.5 10.02C15.5 11.95 13.93 13.52 12 13.52Z"
                    ></path>
                  </svg>
                  <p className="text-gray-500 px-[3px]">Lokasi Toko</p>
                </div>
                <div className="pt-[5px] pb-[7px] px-[21px] font-black">
                  {item.lokasi}
                </div>
              </div>
              {/*  */}
              {/* bagian4 */}
              <div className="bg-white my-[10px] py-[11px] px-[13px] w-full lg:px-[23px] xl:px-[63px] mt-[10px]">
                <div className="py-[7px] flex items-center ">
                  <div className="">
                    <Image
                      alt=""
                      src={item.images[2]}
                      height={60}
                      width={60}
                      className="rounded-full aspect-square object-cover"
                    />
                  </div>
                  <div className="h-[23px] font-bold text-[#016DEA] pl-[4px] flex justify-center items-center">
                    {item.seller}
                  </div>
                  <div className="px-[4px] flex items-center">
                    {item.badge.map((badge, key) => (
                      <div className="" key={key}>
                        <Image
                          src={badge}
                          alt="badge"
                          width={1000}
                          height={1000}
                          style={{ objectFit: "cover" }}
                          className="w-[18px] h-[18px] mx-[1px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
