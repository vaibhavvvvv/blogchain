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
    const [loading, setLoading] = useState(true); 

    const [blog, setBlog] = useState<BlogPost | null>(null);

    const loadBlog = async (blogId: string) => {
      const ethereum = (window as any).ethereum;

        const fetchedBlog = await GetBlog(ethereum, BigInt(blogId));
        setBlog(fetchedBlog);
        setLoading(false);
    };

    useEffect(() => {
        if (params.id) {
            loadBlog(params.id);
        }
    }, [params.id]);

    const handleDelete = async (blogId: bigint) => {
        setLoading(true)

        const confirmed = window.confirm("Are you sure you want to delete this blog?");

        if (confirmed) {
        try {
            const ethereum = (window as any).ethereum;

            await DeleteBlog(ethereum, blogId);
            setLoading(false)
            alert("Blog Deleted Successfully")

        } catch (error) {
            setLoading(false)
            alert("Cannot Delete Blog as transaction signature declined");
        }
        } else {
        console.log("Deletion cancelled");
        setLoading(false)
            alert("Deletion Cancelled")
        }
        };

    if (!blog) {
        return <div className='bg-black' >
            <NoDataSVG   />
        </div>;
    }

    return (
        <div className=' bg-black sm:max-w-full p-5 flex justify-center pt-40 ' >
        {loading && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-100"></div>
                    </div>
                )}

        { !blog ?         
            <NoDataSVG   /> :
                
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
        }
        </div>
    );
};

export default Page;
