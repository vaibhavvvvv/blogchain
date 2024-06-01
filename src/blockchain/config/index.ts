import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage, http } from 'wagmi'
import { mainnet, bscTestnet,sepolia, polygonAmoy } from 'wagmi/chains'

// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
// export const projectId = "";


if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', 
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
const chains = [mainnet,bscTestnet, sepolia, polygonAmoy] as const
export const wagmiConfig = defaultWagmiConfig({
  chains,
  transports: {
    [mainnet.id]: http(),
    [bscTestnet.id]: http(),
    [sepolia.id]: http(),
    [polygonAmoy.id]: http(),
  },
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
})