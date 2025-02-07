'use client'

import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { createAppKit } from '@reown/appkit/react'
import { berachain } from '@reown/appkit/networks'

export const createModal = () => {
  const projectId = '702e2d45d9debca66795614cddb5c1ca'

  if (!projectId) {
    throw new Error('Project ID is not defined')
  }

  // Set up metadata
  const metadata = {
    name: 'appkit-example-scroll',
    description: 'AppKit Example - Scroll',
    url: 'https://scrollapp.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/179229932']
  }

  // Create the modal
  createAppKit({
    adapters: [new EthersAdapter()],
    projectId,
    networks: [berachain],
    featuredWalletIds: ['225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f'],
    defaultNetwork: berachain,
    metadata: metadata,
    features: {
      analytics: true,
      connectMethodsOrder: ['wallet', 'email', 'social'],
      onramp: true
    }
  })
}
