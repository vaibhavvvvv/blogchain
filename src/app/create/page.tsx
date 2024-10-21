"use client";

import React, { useState } from 'react';
import { CreateNewBlog } from "@/lib/client";
import dynamic from 'next/dynamic';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import { useAccount } from 'wagmi';

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

const CreateBlog = () => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [loading, setLoading] = useState(false); 
    const { address } = useAccount()

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (value?: string) => {
        setContent(value || "");
    };

    const handleCreate = async() => {
        if (address == undefined){
            alert("Please Connect Your Wallet First.")
        } else {
            if (content.trim() != "" && title.trim() != ""){
                const confirmed = window.confirm("Are you sure you want to Publish this blog?");

                if (confirmed) {
                    setLoading(true)
                    try {
                        const ethereum = (window as any).ethereum;
                        const response = await CreateNewBlog(ethereum, title, content);
                        alert("Blog Published Successfully")
                        setLoading(false)
                    } catch (error) {
                        console.error(error)
                        setLoading(false)
                        alert("Blog Not Published As User Denied Transaction Signature.");
                    }
                }
            } else {
                alert("Please write both Title & Content for blog")
            }
        }
    };

    return (
        <div className="bg-black flex text-left justify-center pb-52 pt-48">
            {loading && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-100"></div>
                </div>
            )}
            <div className="rounded-xl shadow-md lg:w-4/5 sm:w-full lg:border-2 lg:border-gray-400 lg:p-8 flex flex-col justify-center items-center md:w-4/5">
                <div>
                    <h2 className="text-white text-center text-3xl font-bold mb-2">Create A New Blog</h2>
                    <br />
                    <p className="text-gray-300 text-center ">Write Down Your New Blog Below.</p>
                    <br />
                </div>
                <form className='bg-gray-800 p-5 sm:w-full w-4/5 rounded-xl border-2 border-gray-400'>
                    <div className="space-y-2">
                        <label htmlFor="title" className="text-gray-300">Title</label>
                        <input
                            className="text-teal-50 bg-black w-full rounded-xl border border-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-teal-500 py-2 px-4"
                            type="text"
                            id="title"
                            placeholder="Enter a title for your blog"
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="content" className="text-gray-300">Content</label>
                        <MDEditor
                            value={content}
                            onChange={handleContentChange}
                            preview="edit"
                            height={300}
                        />
                    </div>
                    <br />
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-800 hover:shadow-md hover:shadow-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 transition duration-300 ease-in-out"
                            onClick={handleCreate}
                        >
                            Publish Blog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBlog;
