"use client"
import React, { useState, useEffect } from 'react';
import { GetAllBlogs } from "@/lib/client";
import { BlogPost } from "@/types/types";
import { DeleteBlog } from "@/lib/client";
import { useAccount } from 'wagmi'


const Profile = () => {
    const [blogPosts, setBlogPosts] = useState<readonly BlogPost[]>([]);

    const { address } = useAccount()

console.log("addaa ",address)
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
        try {
            await DeleteBlog(window.ethereum, blogId);
            // setBlogPosts(blogPosts.filter((blog) => blog.id !== BigInt(blogId)));
        } catch (error) {
            console.error("Error deleting blog post:", error);
        }
    };

   
    return (
        <div  >
                    <div className='bg-black text-white md:px-24 lg:px-8 lg:py-10  ' >   

                    <p className=' text-2xl leading-5 py-1 text-center'>User </p>
                    <p className=' text-2xl font-semibold leading-5 hover:text-teal-100 pb-9 text-center'>{address} </p>
                    <div className='h-1 bg-gray-700 w-4/5 mx-auto' > </div>

                     <p className='py-8 text-2xl font-bold leading-5 text-center'>All Your Blogs</p>
                     {/* <div className='h-1 bg-gray-700 w-4/5 mx-auto' > </div> */}

                        <div className=" grid gap-5 py-4 lg:grid-cols-3 sm:max-w-sm sm:max-auto lg:max-w-full ">
                            {blogPosts.map((post) => (
                                <div
                                    key={post.id}
                                    className="bg-gray-950 border-2-xl p-5 m-5 hover:border-3 hover:shadow-md hover:shadow-white hover:border-teal-400 border-gray-400 border-2 rounded-xl shadow-md"
                                >
                                    <h2 className="text-white text-xl font-bold mb-2">{post.title}</h2>
                                    <p className="text-gray-300">
                                        {post.content.slice(0, 100)}
                                        {post.content.length > 30 && "..."}
                                    </p>
                                    <p className="text-gray-400 pt-5">Author: {post.author.slice(0, 20)}</p>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 hover:shadow-md hover:shadow-red-400 mt-4 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                                        onClick={() => handleDelete(post.id)}
                                    >
                                        DELETE
                                    </button>
                                    <br />
                                </div>
                            ))}
                        </div>
                        
            </div>
        </div>
    );
}

export default Profile;