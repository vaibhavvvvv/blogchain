'use client'

import React, { ReactNode } from 'react'
import { wagmiConfig, projectId } from '@/blockchain/config'

import { createWeb3Modal } from '@web3modal/wagmi/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { State, WagmiProvider } from 'wagmi'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

// Setup queryClient
const queryClient = new QueryClient()

if (!projectId) throw new Error('Project ID is not defined')

// Create modal
createWeb3Modal({
  wagmiConfig: wagmiConfig,
  projectId,
  themeMode: "dark",
  themeVariables:{
    "--w3m-accent":"violet"
},
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})

export default function Web3Modal({
  children,
  initialState
}: {
  children: ReactNode
  initialState?: State
}) {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <NavBar />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Footer />
    </WagmiProvider>
  )
}