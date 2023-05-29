/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: '0.7.3',
  networks: {
    hardhat: {
      chainId: 2137,
      forking: {
        url: 'https://eth-mainnet.alchemyapi.io/v2/IHJOWZSabgMvTt3kjXnZ0Urzo8FFweES',
        blockNumber: 12192700,
      },
      mining: {
        auto: true,
        interval: 1000,
      },
    },
  },
}

// module.exports = {
//   solidity: '0.7.3',
//   networks: {
//     hardhat: {
//       forking: {
//         url: 'https://goerli.infura.io/v3/024c692162364d08bfca31a37e5d2b51',
//         // url: 'https://goerli.infura.io/v3/de82b2d602264e4fbc0929dec0c45baa',
//         // url: 'https://eth-mainnet.g.alchemy.com/v2/TywLQzAVxSK9LIlThIURakJXoQcJlNYM',
//         // blockNumber: 16881900,
//         blockNumber: 9065946,
//       },
//       chainId: 2137,
//       mining: {
//         auto: true,
//         interval: 1000,
//       },
//     }
//   },
// }
