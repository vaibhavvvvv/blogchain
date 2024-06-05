import AllBlogs from "@/components/AllBlogs";
import React, { useEffect, useState } from "react";
import Carousel from "@/components/Carousel";
export default function Home() {


  return (
    <main className="text-white bg-black pt-28 " >
      {/* <Carousel /> */}
      <AllBlogs />
    </main>
  );
  
}
