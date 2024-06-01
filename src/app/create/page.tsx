"use client";

import React, { useState, useEffect } from 'react'
import { CreateNewBlog } from "@/lib/client";


const CreateBlog = () => {

  //create
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  function handleContentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
  }

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }



  return (
    <div className="bg-black flex justify-center pb-52 pt-9 " >
  <div className=" rounded shadow-md  lg:w-4/5 sm:w-full lg:border-2 lg:border-gray-400 lg:p-8  flex flex-col justify-center items-center md:w-4/5 ">
    <div  >
      <h2 className="text-white text-center text-3xl font-bold mb-2">Create New Blog Post</h2>
      <br/>
      <p className="text-gray-300">Fill out the form below to publish a new blog post.</p>
      <br/>
    </div>
    <form className='bg-gray-800 p-5 sm:w-full w-4/5 rounded border-2 border-gray-400' >
      <div className="space-y-2">
        <label htmlFor="title" className="text-gray-300">Title</label>
        <input
          className="text-teal-100 bg-black  w-full rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 py-2 px-4"
          type="text"
          id="title"
          placeholder="Enter a title for your post"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="content" className="text-gray-300">Content</label>
        <textarea
          className="text-teal-100 bg-black w-full min-h-[300px] min-w-4/5 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500  py-4 px-4 "
          id="content"
          placeholder="Enter the content of your post"
          value={content}
          onChange={handleContentChange}
        />
      </div>
      <br/>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 transition duration-300 ease-in-out"
          onClick={() => {
            CreateNewBlog(window.ethereum, title, content);
          }}
        >
          Publish Post
        </button>
      </div>
    </form>
  </div>
</div>

  )
}

export default CreateBlog