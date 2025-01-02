"use client";
import { IProduct } from "@/interfaces/product.interface";
import * as React from "react";
import { Card } from "./card";
import { usePost } from "@/components/searchBar/useContext";

export function GetProducts() {
  const { posts, loading, error } = usePost();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: error</p>;
  if (!posts) return <p>No data available</p>;
  return (
    <div className=" h-fit w-[100vw] md:w-[98vw] lg:w-[98vw]">
      <div className="grid lg:gap-7 md:gap-6 gap-1 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-items-center transition-all">
        {posts?.map((product) => (
          <Card {...(product as IProduct)} key={product.id} />
        ))}
      </div>
    </div>
  );
}
