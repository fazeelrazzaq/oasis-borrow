import { getCustomNetworkParameter } from './getCustomNetworkParameter'
export const getEtherscanLink = () => {
  const { network } = getCustomNetworkParameter() || { network: 'mainnet' }
  const etherscan = network === 'goerli' ? 'https://goerli.etherscan.io' : 'https://etherscan.io'

  return { etherscan }
}
