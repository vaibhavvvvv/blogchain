"use client"
import React, { useState, useEffect } from 'react';
import { GetAllBlogs } from "@/lib/client";
import { BlogPost } from "@/types/types";
import { DeleteBlog } from "@/lib/client";
import { useAccount } from 'wagmi'
import Link from 'next/link';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const Profile = () => {
    const [blogPosts, setBlogPosts] = useState<readonly BlogPost[]>([]);

    const { address } = useAccount()

    const loadBlogs = async () => {
        if (typeof window !== "undefined") {
            const allBlogs = await GetAllBlogs(window.ethereum);
            const onlyUserBlogs = allBlogs.filter(
                (blog) => 
                    blog.author.toLowerCase() == address?.toLowerCase()
            );
            setBlogPosts(onlyUserBlogs);
        }
    };

    useEffect(() => {
        loadBlogs();
    }, []);

    const handleDelete = async (blogId: bigint) => {
        const confirmed = window.confirm("Are you sure you want to delete this blog?");
      
        if (confirmed) {
          try {
            await DeleteBlog(window.ethereum, blogId);
            // setBlogPosts(blogPosts.filter((blog) => blog.id !== BigInt(blogId)));
          } catch (error) {
            console.error("Error deleting blog post:", error);
          }
        } else {
          console.log("Deletion cancelled");
        }
      };

   
    return (
        <div className='bg-black flex justify-center' >
                    <div className='bg-black text-white md:px-24 sm:min-w-4/5 lg:py-10   ' >   

                    <p className=' text-2xl leading-5 py-5 text-center'>User </p>
                    <p className='sm:text-sm leading-5 hover:text-teal-100 pb-9 overflow-y-auto w-4/5 text-center mx-auto'>
                        {address}
                    </p>
                    <div className='h-1 bg-gray-700 w-4/5 mx-auto' > </div>

                     <p className='py-8 text-2xl font-bold leading-5 text-center'>All Your Blogs</p>
                     {/* <div className='h-1 bg-gray-700 w-4/5 mx-auto' > </div> */}

                        <div className=" grid gap-5 py-4 lg:grid-cols-3 sm:max-w-sm sm:max-auto lg:max-w-full ">
                            {blogPosts.map((post) => (

                                <Link
                                href={`/blog/${post.id}`} 
                                    key={post.id}
                                    className="bg-gray-950 lg:min-h-60 p-5 m-5 hover:border-3 hover:shadow-md hover:shadow-white hover:border-teal-400 border-gray-400 border-2 rounded-xl shadow-md"
                                >
                                    <h2 className="text-white text-xl font-bold mb-2">{post.title}</h2>
                                    <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: post.content.length>30? md.render(post.content).slice(0, 100)+"..." :   md.render(post.content) }} />
                                    <p className="text-gray-400 pt-5">Author: {post.author.slice(0, 20)}</p>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 hover:shadow-md hover:shadow-red-400 mt-4 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                                        onClick={() => handleDelete(post.id)}
                                    >
                                        DELETE
                                    </button>
                                    <br />
                                </Link>
                            ))}
                        </div>
                        
            </div>
        </div>
    );
}

export default Profile;
