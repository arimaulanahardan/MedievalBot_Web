import metamaskSDK from '@web3-onboard/metamask';
import { init } from '@web3-onboard/react';
// import injectedModule from '@web3-onboard/injected-wallets';
import walletConnectModule from '@web3-onboard/walletconnect';
import phantomModule from '@web3-onboard/phantom'
// import Onboard from '@web3-onboard/core'
import coinbaseWalletModule from '@web3-onboard/coinbase'
import blocknativeIcon from './assets/blocknatieIcon.svg'
import blocknativeLogo from './assets/blocknativeLogo.svg'

// const INFURA_KEY = '1886ff3d0a1143689424a8341cb75c66'

// const injected = injectedModule({
//     custom: [
//         // include custom injected wallet modules here
//     ],
//     filter: {
//         // mapping of wallet labels to filter here
//     }
// })

const wcInitOptions = {
    /**
     * Project ID associated with [WalletConnect account](https://cloud.walletconnect.com)
     */
    projectId: '31141f5f326a3dd0728b4105de87d780',
    /**
     * Chains required to be supported by all wallets connecting to your DApp
     */
    requiredChains: [1],
    /**
     * Chains required to be supported by all wallets connecting to your DApp
     */
    optionalChains: [42161, 8453, 10, 137, 56],
    /**
     * Defaults to `appMetadata.explore` that is supplied to the web3-onboard init
     * Strongly recommended to provide atleast one URL as it is required by some wallets (i.e. MetaMask)
     * To connect with WalletConnect
     */
    dappUrl: 'https://forgebot.io/dashboard'
}

// inisialize the module
const walletConnect = walletConnectModule(wcInitOptions)

const metamaskSDKWallet = metamaskSDK({
    options: {
        extensionOnly: false,
        logging: {
            developerMode: true,
        },
        dappMetadata: {
            name: 'Demo Web3Onboard'
        }
    }
})

const phantomWallet = phantomModule()

const coinbaseWalletSdk = coinbaseWalletModule({ darkMode: true })

export const initWeb3Onboard = () => init({
    wallets: [
        // injected,
        walletConnect,
        metamaskSDKWallet,
        phantomWallet,
        coinbaseWalletSdk,
    ],
    chains: [
        {
            id: '0x1',
            token: 'ETH',
            label: 'Ethereum Mainnet',
            rpcUrl: `https://rpc.ankr.com/eth`,
        },
        {
            id: '0xa',
            token: 'ETH',
            label: 'Optimism',
            rpcUrl: 'https://rpc.ankr.com/optimism',
        },
        {
            id: '0x2105',
            token: 'ETH',
            label: 'Base',
            rpcUrl: 'https://mainnet.base.org',
        },
        {
            id: '0xa4b1',
            token: 'ETH',
            label: 'Arbitrum One',
            rpcUrl: 'https://arb1.arbitrum.io/rpc',
        },
        {
            id: '0xfa',
            token: 'FTM',
            label: 'Fantom',
            rpcUrl: 'https://rpc.fantom.network',
        },
        {
            id: '0x38',
            token: 'BNB',
            label: 'Binance Smart Chain',
            rpcUrl: `https://bsc-dataseed.binance.org`,
        },
        {
            id: '0x89',
            token: 'MATIC',
            label: 'Matic Mainnet',
            rpcUrl: 'https://matic-mainnet.chainstacklabs.com',
        },
        {
            id: '0xa86a',
            token: 'AVAX',
            label: 'Avalanche Mainnet',
            rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
        },
        {
            id: '0xa4ec',
            token: 'CELO',
            label: 'Celo Mainnet',
            rpcUrl: 'https://rpc.ankr.com/celo',
        },
        {
            id: '0x64',
            token: 'XDAI',
            label: 'Gnosis Chain',
            rpcUrl: 'https://rpc.gnosischain.com/',
        },
        {
            id: '0x44d',
            token: 'ETH',
            label: 'Polygon zkEVM',
            rpcUrl: 'https://zkevm-rpc.com',
        },
        {
            id: '0xe708',
            token: 'ETH',
            label: 'Linea',
            rpcUrl: 'https://linea.drpc.org',
        },
        {
            id: '0x1388',
            token: 'MNT',
            label: 'Mantle',
            rpcUrl: 'https://rpc.mantle.xyz',
        },
    ],
    appMetadata: {
        // The name of your dApp
        name: 'Blocknative',
        // SVG icon string, with height or width (whichever is larger) set to 100% or a valid image URL
        icon: blocknativeIcon,
        // Optional wide format logo (ie icon and text) to be displayed in the sidebar of connect modal. Defaults to icon if not provided
        logo: blocknativeLogo,
        // The description of your app
        description: 'Demo app for Onboard V2',
        // The url to a getting started guide for app
        gettingStartedGuide: 'http://mydapp.io/getting-started',
        // url that points to more information about app
        explore: 'http://mydapp.io/about',
        // if your app only supports injected wallets and when no injected wallets detected, recommend the user to install some
        recommendedInjectedWallets: [
            {
                // display name
                name: 'MetaMask',
                // link to download wallet
                url: 'https://metamask.io'
            },
            { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
        ],
        // Optional - but allows for dapps to require users to agree to TOS and privacy policy before connecting a wallet
        agreement: {
            version: '1.0.0',
            termsUrl: 'https://www.blocknative.com/terms-conditions',
            privacyUrl: 'https://www.blocknative.com/privacy-policy'
        }
    }
    // example customising copy
    // i18n: {
    //   en: {
    //     connect: {
    //       selectingWallet: {
    //         header: 'custom text header'
    //       }
    //     }
    //   }
    // }
})




