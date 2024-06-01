"use client"
import React, { useState, useEffect } from 'react';
import { GetAllBlogs } from "@/lib/client";
import { BlogPost } from "@/types/types";
import NoDataSVG from './shared/NoDataSVG';
import Link from 'next/link';

const AllBlogs = () => {
    const [blogPosts, setBlogPosts] = useState<readonly BlogPost[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const loadBlogs = async () => {
        if (typeof window !== "undefined") {
            const result = await GetAllBlogs(window.ethereum);
            setBlogPosts(result);
        }
    };

    useEffect(() => {
        loadBlogs();
    }, []);


    const filteredBlogPosts = blogPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-1 lg:py-10 lg:w-4/5'>
                {/* <p className='py-16 text-2xl font-bold leading-5 text-center'>All Blogs</p> */}
                <div className='flex justify-center flex-col sm:flex-row items-center ' >   
                    <span className='text-2xl font-bold text-center pr-2 sm:pr-0 pb-2 sm:pb-0' >Search for Blogs </span>
                    <input
                        type="text"
                        placeholder="Search by title"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-2 mb-4 sm:mb-0 lg:ml-2 md:ml-2 border h-10 bg-gray-950 text-teal-100 border-gray-400 rounded-lg"
                        style={{ maxWidth: '300px' }} 
                    />
                </div>
                
                <br />

                {filteredBlogPosts.length > 0 ? (
                        <div className="grid gap-5 lg:grid-cols-3  sm:max-w-sm sm:max-auto lg:max-w-full ">
                            {filteredBlogPosts.map((post) => (
                                <Link href={`/blog/${post.id}`} >
                                    <div
                                    key={post.id}
                                    className="bg-gray-950 border-2-xl p-5 m-3 hover:border-3 hover:shadow-md hover:shadow-white hover:border-teal-400 border-gray-400 border-2 rounded-xl shadow-md"
                                >
                                    <h2 className="text-white text-xl font-bold mb-2">{post.title}</h2>
                                    <p className="text-gray-300">
                                        {post.content.slice(0, 100)}
                                        {post.content.length > 30 && "..."}
                                    </p>
                                    <p className="text-gray-400 pt-5">Author: {post.author.slice(0, 20)}</p>
                                   
                                    <br />
                                </div>
                                </Link>
                                
                            ))}
                        </div>
                    ) : (
                        <div className="text-center mt-10">
                        <NoDataSVG /> 
                        <p className="text-gray-400 text-lg">No blogs found for your search term.</p>
                    </div>
                    )
                }
            </div>
        </div>
    );
}

export default AllBlogs;
