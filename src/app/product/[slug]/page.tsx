"use client";
import { IProduct } from "@/interfaces/product.interface";
import { useParams } from "next/navigation";
import * as React from "react";
import { useEffect, useState } from "react";
import { CarouselPlugin } from "./components/crousel";

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
  //   jam_buka: string;
  // }

  return (
    <div className=" w-full lg:px-[23px] xl:px-[63px] md:px-[0px] px-[0px]">
      <div>
        {data?.map((item: IProduct) => (
          <div key={item.id}>
            <div className="flex justify-center ">
              <CarouselPlugin
                key={item.images[0] + item.images[1] + item.images[2]}
              />
            </div>
            <div className="py-[11px] px-[13px]">
              {/* price */}
              <div className="flex font-bold">
                <p className="text-[19px]">Rp</p>
                {/* merubah angka menjadi format desimal */}
                <p className="text-[19px]">
                  {item.price.toLocaleString("id-ID", {
                    style: "decimal",
                  })}
                </p>
              </div>
              {/*  */}
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
          </div>
        ))}
      </div>
    </div>
  );
}
