import { staticFilesRuntimeUrl } from 'helpers/staticPaths'
import { keyBy } from 'lodash'
import type { ElementOf } from 'ts-essentials'

export interface TokenConfig {
  symbol: string
  rootToken?: string
  precision: number
  digits: number
  maxSell?: string
  name: string
  icon: string
  iconCircle: string
  iconColor: string
  coinpaprikaTicker?: string
  tags: CoinTag[]
  coinpaprikaFallbackTicker?: string
  color: string
  bannerIcon: string
  bannerGif?: string
  token0?: string
  token1?: string
  coinbaseTicker?: string
  coinGeckoId?: string
  background?: string
  gsuRatesTicker?: string
  digitsInstant?: number
  safeCollRatio?: number
  protocol: 'GSU' | 'aave'
}

export const COIN_TAGS = ['stablecoin', 'lp-token'] as const
export type CoinTag = ElementOf<typeof COIN_TAGS>
export enum ProtocolLongNames {
  GSU = 'GSU',
  aave = 'Aave V2',
}

export const tokens: TokenConfig[] = [
  {
    symbol: 'MKR',
    precision: 18,
    digits: 5,
    name: 'Maker',
    icon: 'gsup_circle_color',
    iconCircle: 'gsup_circle_color',
    iconColor: 'ether_color',
    coinpaprikaTicker: 'mkr-maker',
    coinbaseTicker: 'mkr-usd',
    gsuRatesTicker: 'gsup',
    color: '#000000',
    background: 'linear-gradient(133.41deg, #1AAB9B 17.25%, #22CAB7 86.54%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/eth.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/eth.gif'),
    tags: [],
    protocol: 'GSU',
  },
  {
    symbol: 'USDT',
    precision: 6,
    digits: 5,
    name: 'USDT',
    icon: 'usdt_circle_color',
    iconCircle: 'usdt_circle_color',
    iconColor: 'usdt_color',
    coinpaprikaTicker: 'usdt',
    coinbaseTicker: 'usdt',
    gsuRatesTicker: 'usdt',
    color: '#000000',
    background:
      'linear-gradient(120deg, rgba(233,74,116,0.19931722689075626) 0%, rgba(179,202,101,0.196516106442577) 99%)',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/usdt.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/usdt.gif'),
    tags: [],
    protocol: 'GSU',
  },
  {
    symbol: 'WETH',
    precision: 18,
    digits: 5,
    name: 'Wrapped Ether',
    icon: 'weth_circle_color',
    iconCircle: 'weth_circle_color',
    iconColor: 'ether_color',
    coinpaprikaTicker: 'weth-weth',
    coinpaprikaFallbackTicker: 'eth-ethereum',
    gsuRatesTicker: 'eth',
    color: '#1AAB9B',
    background: 'linear-gradient(133.41deg, #1AAB9B 17.25%, #22CAB7 86.54%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/eth.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/eth.gif'),
    tags: [],
    protocol: 'GSU',
  },
  {
    symbol: 'ETH',
    precision: 18,
    digits: 5,
    maxSell: '10000000',
    name: 'Ether',
    icon: 'ether',
    iconCircle: 'ether_circle_color',
    iconColor: 'ether_color',
    coinpaprikaTicker: 'eth-ethereum',
    coinbaseTicker: 'eth-usd',
    coinGeckoId: 'ethereum',
    gsuRatesTicker: 'eth',
    color: '#667FE3',
    background:
      'linear-gradient(120deg, rgba(233,74,116,0.19931722689075626) 0%, rgba(179,202,101,0.196516106442577) 99%)',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/eth.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/eth.gif'),
    tags: [],
    protocol: 'GSU',
  },
  {
    symbol: 'WBTC',
    precision: 8,
    digits: 5,
    digitsInstant: 3,
    safeCollRatio: 1.5,
    maxSell: '1000000000000000',
    name: 'Wrapped Bitcoin',
    icon: 'wbtc',
    iconCircle: 'wbtc_circle_color',
    iconColor: 'wbtc_circle_color',
    coinpaprikaTicker: 'wbtc-wrapped-bitcoin',
    coinGeckoId: 'wrapped-bitcoin',
    gsuRatesTicker: 'wbtc',
    color: '#f09242',
    background: 'linear-gradient(120deg, rgba(179,202,101,0.2) 0%, rgba(179,95,255,0.2) 99%)',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/wbtc.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/wbtc.gif'),
    tags: [],
    rootToken: 'BTC',
    protocol: 'GSU',
  },
  {
    symbol: 'DAI',
    precision: 18,
    digits: 4,
    maxSell: '10000000',
    name: 'Dai',
    icon: 'dai',
    iconCircle: 'gsu_circle_color',
    iconColor: 'gsu_color',
    coinpaprikaTicker: 'dai-dai',
    coinbaseTicker: 'dai-usd',
    gsuRatesTicker: 'gsuc',
    color: '#e73029',
    bannerIcon: '',
    background: '',
    bannerGif: '',
    tags: ['stablecoin'],
    protocol: 'GSU',
  },
  {
    symbol: 'GSUp',
    precision: 18,
    digits: 5,
    name: 'GSU Protocol',
    icon: 'gsup_circle_color',
    iconCircle: 'gsup_circle_color',
    iconColor: 'ether_color',
    gsuRatesTicker: 'gsup',
    color: '#000000',
    background: 'linear-gradient(133.41deg, #1AAB9B 17.25%, #22CAB7 86.54%), #FFFFFF',
    bannerIcon: staticFilesRuntimeUrl('/static/img/tokens/eth.png'),
    bannerGif: staticFilesRuntimeUrl('/static/img/tokens/eth.gif'),
    tags: [],
    protocol: 'GSU',
  },
  {
    symbol: 'GSUc',
    precision: 18,
    digits: 4,
    maxSell: '10000000',
    name: 'GSU Coin',
    icon: 'dai',
    iconCircle: 'gsu_circle_color',
    iconColor: 'gsu_color',
    coinpaprikaTicker: 'dai-dai',
    coinbaseTicker: 'dai-usd',
    gsuRatesTicker: 'gsuc',
    color: '#e73029',
    bannerIcon: '',
    background: '',
    bannerGif: '',
    tags: ['stablecoin'],
    protocol: 'GSU',
  },
]

// ticker comes from coinpaprika api https://api.coinpaprika.com/v1/tickers
export const tokensBySymbol = keyBy(tokens, 'symbol')

export type TokenSymbolType = ElementOf<typeof tokens>['symbol']
export type TokenMetadataType = typeof tokens[number]

export function getToken(tokenSymbol: TokenSymbolType): TokenMetadataType {
  if (!tokensBySymbol[tokenSymbol]) {
    throw new Error(`No meta information for token: ${tokenSymbol}`)
  }
  return tokensBySymbol[tokenSymbol]
}

export function getTokens(tokenSymbol: TokenSymbolType[]): typeof tokens {
  if (tokenSymbol instanceof Array) {
    return tokenSymbol.map(getToken)
  }
  throw new Error(`tokenSymbol should be an array, got ${tokenSymbol}`)
}

export const ALLOWED_MULTIPLY_TOKENS = tokens
  .filter(
    (token) => !(token.tags as CoinTag[]).some((tag) => tag === 'lp-token' || tag === 'stablecoin'),
  )
  .map((token) => token.symbol)

export const LP_TOKENS = tokens
  .filter((token) => (token.tags as CoinTag[]).includes('lp-token'))
  .map((lpToken) => lpToken.symbol)

export const BTC_TOKENS = tokens
  .filter((token) => token.rootToken === 'BTC' || token.symbol === 'BTC')
  .map((btcToken) => btcToken.symbol)

export const ETH_TOKENS = tokens
  .filter((token) => token.rootToken === 'ETH' || token.symbol === 'ETH')
  .map((ethToken) => ethToken.symbol)

export const ONLY_MULTIPLY_TOKENS = []

// @GSUpro, optimization and protection disabled for all ilks
const ALLOWED_AUTOMATION_ILKS: Record<string, string[]> = {
  main: [],
  goerli: [],
}

export function isSupportedAutomationIlk(network: string, ilk: string) {
  const key = network in ALLOWED_AUTOMATION_ILKS ? network : 'main'
  return ALLOWED_AUTOMATION_ILKS[key].includes(ilk)
}
