import AllBlogs from "@/components/AllBlogs";
import React, { useEffect, useState } from "react";
// import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <main className="text-white pt-28 " >
      <video 
        autoPlay 
        loop 
        muted 
        style={{
          position: 'fixed',
          right: 0,
          bottom: 0,
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: -1000,
          objectFit: 'cover'
        }}
      >
        <source src="https://videos.pexels.com/video-files/5818973/5818973-uhd_2560_1440_24fps.mp4" type="video/mp4" />
      </video>
      {/* <Carousel /> */}
      <AllBlogs />
    </main>
  );
}
