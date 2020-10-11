require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food shoot riot pitch upgrade grace light army ghost'; 
let testAccounts = [
"0xe019b174757ffa3570f1fc9d77b69614514ab13cfc04a6992b1fdeb28ed99b14",
"0x08eb54cfdae2c73b69f606c818c126c0a98bf17748da0d21b7a5508be1e2a609",
"0xfc0ae21047b4d63f41b2e454ffcf1955b097fc4df061ba9a71901afeb5421fbb",
"0xbcde80226f6744d24a8b095507b5e89de1353d9a360b62b8c6063290c1c400bc",
"0x1caffe4e1d244e20885fcbb8787070140b768347b0a1d6287a77c43ba1ca49b2",
"0x4ecdac7903dff02be8658205cbfbf8d811b2068ec6f655760f0b830b3a2fa2af",
"0x3c7345c54b18d34ecac114b2a2586a80de9984768fdb0a3ec052a360813a0f84",
"0x96b195f526be00fcf5347bc5f58bca3d930d5e40da9a2b24e626f3747cd99f71",
"0x8268ce632cd9fb1c73ada9c70625b4584deb4cb316d4b2601dc7211356034a71",
"0xcbd44a57491aeab42346b71798a608943fca603d21e822152065c0415119cc71"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
