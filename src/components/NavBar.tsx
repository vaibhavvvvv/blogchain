import React, { useState } from 'react';
import Link from 'next/link'; 
import Logo from '../components/shared/Logo';
import Menu from '../components/shared/Menu';
import ConnectButton from './shared/ConnectButton';
import { useAccount } from 'wagmi';


interface MenuItem {
  label: string;
  href?: string; 
}

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWalletConnected, SetIsWalletConnected] = useState(false)
  const { address} = useAccount()

  const menuList: MenuItem[] = [
    // { label: 'Github', href: 'https://github.com/vaibhavvvvv/blogchain' },
    { label: 'Create New Blog',href:'/create' },
    { label: 'User Profile',href:'/profile' },
  ];

  return (
    <div className="bg-black fixed z-50 w-full ">
      <div className="px-4 py-5  sm:max-w md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" passHref aria-label='Company' title='Company' className="inline-flex items-center mr-8">
                <Logo color="text-white hover:text-teal-200" />
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 hover:text-teal-200 uppercase">BlogChain</span>
            </Link>
          </div>
          <ul className="flex sm:hidden hidden items-center space-x-8 lg:flex">
            
            {/* <li>              
              <Link href='/profile' className='text-white hover:text-yellow-200'  >Profile</Link>
            </li> */}
            <ul className="flex items-center space-x-8 lg:flex  ">
            <li className='' >
              <w3m-button /> 
            </li>
            {menuList.map((el, i) => (
                <li key={i + 1}>
                  <Link href={isWalletConnected? el.href || '/': '/' } passHref

                    onClick={()=>{
                        if(address != undefined){
                          SetIsWalletConnected(true)
                        } else{
                          SetIsWalletConnected(false)
                          alert("Please connect your wallet to view your profile")
                      }
                    }}
                      className="font-medium tracking-wide  text-gray-100 hover:text-red-200 hover:font-bold transition-colors duration-200 "
                    >
                      {el.label == 'User Profile'? (
                        <button aria-label='Profile' title="Profile" >
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className=" mt-2 bi text-white rounded-full hover:bg-blue-100 hover:text-black bi-person" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                          </svg> 
                        </button>
                        ): 
                        <button aria-label='Create New Blog' title="Create New Blog" >
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"   className="mt-2 bi text-white rounded hover:text-black hover:bg-pink-200 bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                          </svg> 
                        </button>
                          
                        }
                  </Link>
                </li>
              ))}
             
            </ul>
          </ul>

          <div className="lg:hidden z-40">
          <button aria-label='Create New Blog' title="Create New Blog" className='pr-3' >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"   className="bi text-white rounded hover:text-black hover:bg-white bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
            </svg> 
          </button>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className="p-1 -mr-1  transition duration-200 rounded focus:outline-none focus:shadow-outline"
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
                        <li className=' rounded-3xl' >
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
