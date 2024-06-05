"use client"

import React, { useState, useEffect } from 'react';
import { GetAllBlogs } from "@/lib/client";
import { BlogPost } from "@/types/types";
import NoDataSVG from './shared/NoDataSVG';
import Link from 'next/link';
import MarkdownIt from 'markdown-it';
import Image from 'next/image';

const md = new MarkdownIt();

const AllBlogs = () => {
    const [blogPosts, setBlogPosts] = useState<readonly BlogPost[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [loading, setLoading] = useState(true); 

    const loadBlogs = async () => {
        if (typeof window !== "undefined") {
            const ethereum = (window as any).ethereum;

            const result = await GetAllBlogs(ethereum);
            setBlogPosts(result);
            setLoading(false); 
        }
    };

    useEffect(() => {
        loadBlogs();
    }, []);

    const images = [
        "/1.jpg",
        "/2.avif",
        "/3.jpg",
        "/4.webp",
        '/5.jpg'
    ];

    const filteredBlogPosts = blogPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-1 lg:py-10 lg:w-4/5'>
                {loading && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-100"></div>
                    </div>
                )}
                <>
                <div className='flex justify-center flex-col lg:py-16 sm:flex-row items-center ' >   
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
                        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:max-auto lg:max-w-full ">
                            {filteredBlogPosts.map((post, index) => (
                                <Link href={`/blog/${post.id}`} key={post.id}>
                                    <div
                                        className={`border-2-xl m-2 lg:min-h-72 hover:border-3 hover:shadow-md hover:shadow-white hover:border-teal-400 border-gray-400 border-2 rounded-xl shadow-md`}
                                        style={{ backgroundImage: `url(${images[index % images.length]})`, backgroundSize: 'cover' }}
                                    >
                                        <div className='bg-black bg-opacity-60 p-5 m-2 rounded-xl ' >
                                        <h2 className="text-white text-xl font-bold mb-2">{post.title}</h2>
                                        <p className="text-gray-200" dangerouslySetInnerHTML={{ __html: post.content.length > 30 ? md.render(post.content).slice(0, 120) + "..." : md.render(post.content) }} />
                                        <p className="text-gray-300 pt-5">Author: {post.author.slice(0, 20)}</p>
                                        </div>
                                        
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
                </>
            </div>
        </div>
    );
}

export default AllBlogs;
