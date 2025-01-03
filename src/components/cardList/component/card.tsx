import { IProduct } from "@/interfaces/product.interface";

import * as React from "react";
import Image from "next/image";

export function Card(product: IProduct) {
  return (
    <a href={`/product/${product.title}`} className="flex flex-col">
      <div className="lg:w-[200px] w-[180px]">
        <figure className="w-[100%] h-[202px] border-[1px] rounded-lg">
          <Image
            src={product.images[0]}
            alt="product"
            width={1000}
            height={1000}
            style={{ objectFit: "cover" }}
            className="w-[200px] h-[200px] rounded-lg"
          />
        </figure>
        <div className="">
          <h2 className="text-[14px] text-justify h-[45px]">
            {product.title.slice(0, 45)}
            {/* menjadikan text yang melebihi 27 catarter menjadi ditambahi "..." */}
            {product.title.split("").length <= 45 ? "" : "..."}
          </h2>
          <b className="flex items-center font-semibold">
            <p className="text-[12px]">Rp</p>
            {/* merubah angka menjadi format desimal */}
            <p className="text-[14px]">
              {product.price.toLocaleString("id-ID", {
                style: "decimal",
              })}
            </p>
          </b>
        </div>
        <div className="flex items-center">
          <svg
            width={16}
            height={16}
            viewBox="1 1 24 24"
            className=""
            fill="#fdb813"
          >
            <path d="M13.1201 3.19303L15.5328 8.04172L20.9289 8.81672C21.96 8.96576 22.3605 10.2177 21.6196 10.9331L17.7152 14.7087L18.6363 20.0442C18.8165 21.0577 17.7353 21.8327 16.8242 21.3558L11.9988 18.842L7.17336 21.3558C6.25232 21.8327 5.18111 21.0577 5.36132 20.0442L6.28235 14.7087L2.37795 10.9331C1.63712 10.2177 2.04758 8.96576 3.06873 8.81672L8.46481 8.04172L10.8775 3.19303C11.3381 2.26899 12.6595 2.26899 13.1201 3.19303Z"></path>
          </svg>
          <p className="text-[12px] mx-[2px] my-auto font-light">
            {product.rating}
          </p>
          <p className="">·</p>
          <p className="text-[12px] mx-[2px] my-auto font-light">
            {" "}
            Terjual {product.terjual}
          </p>
        </div>
        <div className="flex items-center">
          {product.badge.map((badge, key) => (
            <div className="" key={key}>
              <Image
                src={badge}
                alt="badge"
                width={1000}
                height={1000}
                style={{ objectFit: "cover" }}
                className="w-[16px] h-[16px]"
              />
            </div>
          ))}
          <div className="w-fit " style={{ objectFit: "cover" }}>
            <p className="text-[11px] mx-[2px] my-auto font-light">
              {product.seller.slice(0, 24)}
              {/* menjadikan text yang melebihi 27 catarter menjadi ditambahi "..." */}
              {product.seller.split("").length <= 24 ? "" : "..."}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
