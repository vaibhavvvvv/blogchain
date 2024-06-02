"use client";

// import React, { useState } from 'react';
// import { CreateNewBlog } from "@/lib/client";
// import SimpleMDE from "react-simplemde-editor";
// import "easymde/dist/easymde.min.css";
// import MarkdownIt from 'markdown-it';

// const md = new MarkdownIt();

// const CreateBlog = () => {
//   const [title, setTitle] = useState<string>("");
//   const [content, setContent] = useState<string>("");

//   const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(event.target.value);
//   };

//   const handleContentChange = (value: string) => {
//     setContent(value);
//   };

//   const handleCreate = () => {
//     const ethereum = (window as any).ethereum;

//     CreateNewBlog(ethereum, title, content);
//   };

//   return (
//     <div className="bg-black flex justify-center pb-52 pt-9">
//       <div className="rounded-xl shadow-md lg:w-4/5 sm:w-full lg:border-2 lg:border-gray-400 lg:p-8 flex flex-col justify-center items-center md:w-4/5">
//         <div>
//           <h2 className="text-white text-center text-3xl font-bold mb-2">Create A New Blog</h2>
//           <br />
//           <p className="text-gray-300">Write Down Your New Blog Below.</p>
//           <br />
//         </div>
//         <form className='bg-gray-800 p-5 sm:w-full w-4/5 rounded-xl border-2 border-gray-400'>
//           <div className="space-y-2">
//             <label htmlFor="title" className="text-gray-300">Title</label>
//             <input
//               className="text-teal-50 bg-black  w-full rounded-xl border border-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-teal-500 py-2 px-4"
//               type="text"
//               id="title"
//               placeholder="Enter a title for your blog"
//               value={title}
//               onChange={handleTitleChange}
//             />
//           </div>
//           <div className="space-y-2">
//             <label htmlFor="content" className="text-gray-300">Content</label>
//             <SimpleMDE
//               value={content}
//               onChange={handleContentChange}
//               className='bg-gray-600 '
//               options={{
//         autofocus: typeof window !== 'undefined' && content.length > 0,
//                 spellChecker: false,
//                 previewRender: (markdownPlaintext: string) => {
//                   return md.render(markdownPlaintext);
//                 }
//               }}
//             />
//           </div>
//           <br />
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-800 hover:shadow-md hover:shadow-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 transition duration-300 ease-in-out"
//               onClick={handleCreate}
//             >
//               Publish Blog
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateBlog;


import React, { useState } from 'react';
import { CreateNewBlog } from "@/lib/client";
import MarkdownIt from 'markdown-it';
import MarkdownEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const md = new MarkdownIt();

const CreateBlog = () => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleContentChange = ({ text }: { text: string }) => {
        setContent(text);
    };

    const handleCreate = () => {
        const ethereum = (window as any).ethereum;

        CreateNewBlog(ethereum, title, content);
    };

    return (
        <div className="bg-black flex justify-center pb-52 pt-9">
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
                            className="text-teal-50 bg-black  w-full rounded-xl border border-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-teal-500 py-2 px-4"
                            type="text"
                            id="title"
                            placeholder="Enter a title for your blog"
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="content" className="text-gray-300">Content</label>
                        <MarkdownEditor
                            value={content}
                            onChange={handleContentChange} 
                            style={{ height: '300px', background: "lightgray" }} 
                            renderHTML={(text) => md.render(text)}
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
