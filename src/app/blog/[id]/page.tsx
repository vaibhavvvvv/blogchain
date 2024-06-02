"use client"
import React, { useState, useEffect } from 'react';
import { GetBlog } from '@/lib/client';
import { BlogPost } from '@/types/types';
import NoDataSVG from '@/components/shared/NoDataSVG';
import { useAccount } from 'wagmi';
import { DeleteBlog } from '@/lib/client';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const Page = ({ params }: { params: { id: string } }) => {
    const { address } = useAccount();
    const [blog, setBlog] = useState<BlogPost | null>(null);

    const loadBlog = async (blogId: string) => {
      const ethereum = (window as any).ethereum;

        const fetchedBlog = await GetBlog(ethereum, BigInt(blogId));
        setBlog(fetchedBlog);
    };

    useEffect(() => {
        if (params.id) {
            loadBlog(params.id);
        }
    }, [params.id]);

    const handleDelete = async (blogId: bigint) => {
        const confirmed = window.confirm("Are you sure you want to delete this blog?");
    
        if (confirmed) {
            try {
              const ethereum = (window as any).ethereum;

                await DeleteBlog(ethereum, blogId);
            } catch (error) {
                console.error("Error deleting blog post:", error);
            }
        } else {
            console.log("Deletion cancelled");
        }
    };

    if (!blog) {
        return <NoDataSVG />;
    }

    return (
        <div className=' bg-black sm:max-w-full p-5 flex justify-center' >
            <div
                key={blog.id}
                className="bg-gray-950 border-2-xl p-5 lg:w-4/5 hover:border-3 hover:shadow-md hover:shadow-white hover:border-teal-400 border-gray-400 border-2 rounded-xl shadow-md"
            >
                <h2 className="text-white text-2xl font-bold mb-2">{blog.title}</h2>
                <br />
                <div className="text-gray-300" dangerouslySetInnerHTML={{ __html: md.render(blog.content) }} />
                <p className="text-gray-400 hover:text-teal-100 pt-5">Author: {blog.author}</p>
                <br />
                {   
                    blog.author.toLowerCase() === address?.toLowerCase() && (
                        <button
                            className="bg-red-500 hover:bg-red-700 hover:shadow-md hover:shadow-red-400 mt-4 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                            onClick={() => handleDelete(blog.id)}
                        >
                            DELETE
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default Page;
