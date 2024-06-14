import Link from 'next/link';
import React from 'react';
import Logo from './shared/Logo';

const Footer = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-black">
            <div className="md:w-4/5 w-full px-4 text-white flex flex-col">
                <div className="w-full text-5xl font-bold">
                    <h1 className="w-full text-left md:w-4/5 ">Express Your Experiences On BlogChain</h1>
                </div>
                <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                    <p className="w-full md:w-4/5 text-gray-400 text-left ">Write and Share your Experiences as blogs on BlogChain to connect with the people in this decentralized world.</p>
                    <div className="w-full md:w-auto pt-6 md:pt-0 md:pl-8">
                        <Link href="/create" className="bg-red-500 hover:bg-red-700 hover:shadow-md hover:shadow-red-400 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center block md:inline-block">Create A New Blog</Link>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between mt-8">
                    <div className="mb-8 md:mb-0">
                        <Link href="/" passHref aria-label='Company' title='Company' className="inline-flex items-center mr-8">
                            <Logo color="text-white " />
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">BlogChain</span>
                        </Link>
                    </div>
{/* 
                     <Link href="https://github.com/vaibhavvvvv" target='blank' className="hidden md:block  cursor-pointer text-gray-600 hover:text-red-200 uppercase">About</Link>

 <Link href="https://github.com/vaibhavvvvv/blogchain" target='blank' className="hidden md:block  cursor-pointer text-gray-600 hover:text-green-200 uppercase">Github</Link>

 <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=vaibhavng7@gmail.com" target='blank' className="hidden md:block cursor-pointer text-gray-600 hover:text-purple-300 uppercase">vaibhavng7@gmail.com</Link>

 <Link href="tel:+918855910016" className="hidden md:block cursor-pointer text-gray-600 hover:text-blue-200 uppercase">+91 8855910016</Link> */}

                    <div className="flex space-x-8 items-center justify-between mt-4 mx-5">
                        <Link href="https://www.linkedin.com/in/vaibhav-gadhave-0053871b7/" target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi hover:text-blue-600 bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </Link>
                        <Link href="https://x.com/vaibhavng7" target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter hover:text-blue-300" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                            </svg>
                        </Link>
                        <Link href="https://www.instagram.com/vaibhav__gadhave" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi hover:text-pink-500 bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                            </svg>
                        </Link>
                        <Link href="https://discord.com/users/797020664761679873" target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi hover:text-blue-300 bi-discord" viewBox="0 0 16 16">
                                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="grid lg:hidden md:hidden pt-10 md:grid-cols-2 gap-x-8 gap-y-4 items-center justify-center">
                  <Link href="https://github.com/vaibhavvvvv" target='blank' className="cursor-pointer text-gray-600 hover:text-red-200 uppercase text-center">About</Link>
                  <Link href="https://github.com/vaibhavvvvv/blogchain" target='blank' className="cursor-pointer text-gray-600 hover:text-green-200 uppercase text-center">Github</Link>
                  <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=vaibhavng7@gmail.com" target='blank' className="cursor-pointer text-gray-600 hover:text-purple-300 uppercase text-center">vaibhavng7@gmail.com</Link>
                  <Link href="tel:+918855910016" className="cursor-pointer text-gray-600 hover:text-blue-200 uppercase text-center">+91 8855910016</Link>
              </div>
              <div className='flex py-10 flex-col md:flex-row md:justify-between  ' >

                <Link href="https://github.com/vaibhavvvvv" target='blank' className="hidden md:block  cursor-pointer text-gray-600 hover:text-red-200 uppercase">About</Link>

                <Link href="https://github.com/vaibhavvvvv/blogchain" target='blank' className="hidden md:block  cursor-pointer text-gray-600 hover:text-green-200 uppercase">Github</Link>

                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=vaibhavng7@gmail.com" target='blank' className="hidden md:block cursor-pointer text-gray-600 hover:text-purple-300 uppercase">vaibhavng7@gmail.com</Link>

                <Link href="tel:+918855910016" className="hidden md:block cursor-pointer text-gray-600 hover:text-blue-200 uppercase">+91 8855910016</Link> 

              </div>


                <hr className="border-gray-600 mt-5" />
                <p className="w-full text-center my-12 text-gray-600">Copyright © 2024 Vaibhav Gadhave</p>
            </div>
        </div>
    );
}

export default Footer;
