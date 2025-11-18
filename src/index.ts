import { HttpNetworkUserConfig } from 'hardhat/types/config'

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || ''

export const ALCHEMY_CHAINID_TO_SUBDOMAIN = {
    56: 'bnb-mainnet',
    42161: 'arb-mainnet',
}

export function alchemyRpcUrl(chainId: keyof typeof ALCHEMY_CHAINID_TO_SUBDOMAIN): string {
    const subdomain = ALCHEMY_CHAINID_TO_SUBDOMAIN[chainId]
    return `https://${subdomain}.g.alchemy.com/v2/${ALCHEMY_API_KEY}`
}

export function networkConfig(chainId: keyof typeof ALCHEMY_CHAINID_TO_SUBDOMAIN): HttpNetworkUserConfig {
    return { type: 'http', chainId: chainId, url: alchemyRpcUrl(chainId) }
}