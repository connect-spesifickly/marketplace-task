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
    <div className="">
      <div>
        {data?.map((item: IProduct) => (
          <div key={item.id}>
            <CarouselPlugin />
            <h2>{item.title}</h2>
            <p>{item.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
