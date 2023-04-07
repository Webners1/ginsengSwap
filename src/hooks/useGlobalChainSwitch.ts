import { useWeb3React } from '@web3-react/core'
import { Chain } from 'graphql/data/Token'
import { chainIdToBackendName } from 'graphql/data/util'
import { useEffect, useRef } from 'react'

export const useOnGlobalChainSwitch = (callback: (chain: Chain) => void) => {
  const { chainId: connectedChainId } = useWeb3React()
  const globalChainName = chainIdToBackendName(connectedChainId)
  const prevGlobalChainRef = useRef(globalChainName)
  useEffect(() => {
    if (prevGlobalChainRef.current !== globalChainName) {
      callback(globalChainName)
    }
    prevGlobalChainRef.current = globalChainName
    }, [globalChainName])
}