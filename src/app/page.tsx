'use client'

import { berachain } from '@reown/appkit/networks'
import { useAppKitAccount, useAppKitNetwork } from '@reown/appkit/react'
import { useEffect } from 'react'

export default function Home() {
  const { switchNetwork, caipNetwork } = useAppKitNetwork()
  const { status } = useAppKitAccount()

  const URL_CHAIN = berachain

  useEffect(() => {
    if (status === 'connected') {
      if (caipNetwork?.id !== URL_CHAIN.id) {
        switchNetwork(URL_CHAIN)
      }
    }
  }, [status])
  return (
    <>
      <div>
        <w3m-button></w3m-button>
      </div>
      <div>
        <w3m-network-button></w3m-network-button>
      </div>
    </>
  )
}
