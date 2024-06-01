"use client"
import React, {useState, useEffect} from 'react'
import { GetBlog } from '@/lib/client';
import { BlogPost } from '@/types/types';
import NoDataSVG from '@/components/shared/NoDataSVG';

const page = ({ params }: { params: { id: string } }) => {

    const [blog, setBlog] = useState<BlogPost | null>(null);
    const loadBlog = async (blogId: string) => {
    const fetchedBlog = await GetBlog(window.ethereum, BigInt(blogId));
    setBlog(fetchedBlog);
  };

  useEffect(() => {
    if (params.id) {
      loadBlog(params.id);
    }
  }, [params.id]);

  if (!blog) {
    return <NoDataSVG />;
  }


  return (
    <div className=' bg-black p-5 flex justify-center' >
    <div
        key={blog.id}
        className="bg-gray-950 border-2-xl p-5 lg:w-4/5 hover:border-3 hover:shadow-md hover:shadow-white hover:border-teal-400 border-gray-400 border-2 rounded-xl shadow-md"
    >
        <h2 className="text-white text-xl font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-300">
            {blog.content}
        </p>
        <p className="text-gray-400 hover:text-teal-100 pt-5">Author: {blog.author}</p>
        
        <br />
    </div>
    </div>
  )
}

export default page