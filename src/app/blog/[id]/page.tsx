"use client"

import React, { useState, useEffect } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

import { GetBlog } from '@/lib/client';
import { BlogPost } from '@/types/types';
import NoDataSVG from '@/components/shared/NoDataSVG';
import { useAccount } from 'wagmi';
import { DeleteBlog } from '@/lib/client';
import TextToSpeech from '@/components/TTS';

const Page = ({ params }: { params: { id: string } }) => {
    const { address } = useAccount();
    const [loading, setLoading] = useState(true); 

    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [bgImage, setBgImage] = useState<string>('');

    const loadBlog = async (blogId: string) => {
        // const ethereum = (window as any).ethereum;
        // const fetchedBlog = await GetBlog(ethereum, BigInt(blogId));
        const fetchedBlog = await GetBlog( BigInt(blogId));

        setBlog(fetchedBlog);
        setLoading(false);
    };

    useEffect(() => {
        if (params.id) {
            loadBlog(params.id);
        }
    }, [params.id]);

    useEffect(() => {
        const images = [
            "/1.jpg",
            "/2.jpg",
            "/3.jpg",
            "/4.webp",
            '/5.jpg'
        ];
        const randomIndex = Math.floor(Math.random() * images.length);
        setBgImage(`url(${images[randomIndex]})`);
    }, []);

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

    const mdParser = new MarkdownIt();

    const customStyle = `
        .custom-html-style {
            color: white !important;
        }
    .custom-html-style code, .custom-html-style pre {
            background-color: rgba(0, 0, 0, 0.7) !important;
    font-size: 14px;
    border-radius: 0;
    overflow-x: auto;
}
    .rc-md-editor .editor-container>.section   {
            border: none !important;
        }

.custom-html-style blockquote {
    color: #fff;
}
      .rc-md-editor {
            background-color: rgba(0, 0, 0, 0.5) !important;
            border: none !important;
        }
    `;
    

    return (
        <div className='bg-black sm:max-w-full p-5 flex justify-center pt-40 '>
            {/* Add the style tag */}
            <style>{customStyle}</style>
            {loading && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-100"></div>
                </div>
            )}

            {!blog ? (
                <NoDataSVG />
            ) : (
                <div
                    key={blog.id}
                    className="text-left border-2-xl w-full lg:w-4/5 hover:border-3 hover:shadow-md hover:shadow-white hover:border-gray-200 border-gray-400 border-2 rounded-xl shadow-md"
                    style={{ backgroundImage: bgImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className='bg-opacity-60 text-white bg-transparent p-3 lg:p-5 rounded-xl ' >
                        <h2 className="text-white text-center text-2xl font-bold mb-2">{blog.title}</h2>
                        <br />
                        <MdEditor
                            value={blog.content}
                            renderHTML={(text) => mdParser.render(text)}
                            view={{ menu: false, md: false, html: true }}
                            canView={{ menu: false, md: false, html: true, fullScreen: false, hideMenu: false, both: false }}
                            config={{
                                view: {
                                    menu: false,
                                    md: false,
                                    html: true,
                                },
                            }}
                            style={{ background: 'transparent', border: 'none', borderRight: 'none' }}
                        />
                        <p className="text-gray-400 hover:text-gray-300 pt-5">Author: {blog.author}</p>

                        <br />
                        {blog.author.toLowerCase() === address?.toLowerCase() && (
                            <button
                                className="bg-red-500 hover:bg-red-700 hover:shadow-md hover:shadow-red-400 mt-4 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                                onClick={() => handleDelete(blog.id)}
                            >
                                DELETE
                            </button>
                        )}                      
                        <TextToSpeech text={blog.content} />
                    </div>                
                </div>
            )}
        </div>
    );
};

export default Page;
