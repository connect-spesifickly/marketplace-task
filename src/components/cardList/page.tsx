import * as React from "react";
import { GetProducts } from "./component/getProducta";

export function CardList() {
  return (
    <div>
      <div className="flex justify-center w-full h-fit shadow-[0_0_5px_#ffffff] ">
        <div className="bg-base-100 flex justify-between items-center lg:px-[33px] md:px-[12px] h-fit w-[100vw] md:w-[98vw] lg:w-[1300px]">
          <GetProducts />
        </div>
      </div>
    </div>
  );
}
