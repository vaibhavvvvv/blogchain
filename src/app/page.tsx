import AllBlogs from "@/components/AllBlogs";
import Carousel from "@/components/Carousel";
import React, { useEffect, useState } from "react";

export default function Home() {


  return (
    <main className="text-white bg-black " >
      {/* <Carousel /> */}
      <AllBlogs />
    </main>
  );
  
}
