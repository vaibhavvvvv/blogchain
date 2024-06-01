// NavBar.tsx

import React, { useState } from 'react';
import Link from 'next/link'; 
import Logo from '../components/shared/Logo';
import Menu from '../components/shared/Menu';
import ConnectButton from './shared/ConnectButton';

interface MenuItem {
  label: string;
  href?: string; 
}

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuList: MenuItem[] = [
    // { label: 'Github', href: 'https://github.com/vaibhavvvvv/blogchain' },
    { label: 'New',href:'/create' },
  ];

  return (
    <div className="bg-black">
      <div className="px-4 py-5  sm:max-w md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" passHref aria-label='Company' title='Company' className="inline-flex items-center mr-8">
                <Logo color="text-white hover:text-teal-200" />
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 hover:text-teal-200 uppercase">BlogChain</span>
            </Link>
            <ul className="flex items-center space-x-8 lg:flex  ">
              {menuList.map((el, i) => (
                <li key={i + 1}>
                  <Link href={el.href || '/'} passHref
                      aria-label='Our Product'
                      title='Our Product'
                      className="font-medium tracking-wide text-gray-100 hover:text-red-200 hover:font-bold transition-colors duration-200 "
                    >
                      {el.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex sm:hidden hidden items-center space-x-8 lg:flex">
            <li             
            className='sm:hidden hidden flex'  
             >
              <w3m-button /> 
            </li>
            <li>              
              <Link href='/profile' className='text-white hover:text-yellow-200'  >Profile</Link>
            </li>
          </ul>

          <div className="lg:hidden z-40">
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className="p-2 -mr-1  transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0  w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link href="/" passHref
                         aria-label='Company' title='Company' className="inline-flex  items-center">
                          <Logo color="text-black" />
                          <span className="ml-2 text-xl font-bold  tracking-wide text-gray-800 uppercase">BlogChain</span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title='Close Menu'
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-700 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-black" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                  <ul className="space-y-4">
                        {menuList.map((el, i) => (
                        <li key={i + 1}>
                            <Link href={el.href || '/'} passHref className="font-medium text-center tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                                {el.label}
                            </Link>
                        </li>
                        ))}
                        <li className='bg-black rounded-3xl' >
                        <w3m-button />

                        </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
