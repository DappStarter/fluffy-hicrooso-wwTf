require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name reflect pitch hour hunt knee swift gate'; 
let testAccounts = [
"0x922bffe0f44616db722586184ab43156129e9b750b926992a8f844c89618e3b7",
"0x19845241be987a540a44736fa6bec9e86229bf6d219ab5ffbcdc92b332627135",
"0x3c74165d1fdefe33dba5cc64dc35ce84a326029c203bc78d55e702766d362422",
"0x126ccf8fa87284e94d42035b00d846ca916df9d03823372d31e9899b2f25aa96",
"0x73a27e3bb26a80333601ef21c00f5b16ec2f9ecd96f4541c8acc84fb284ffaf5",
"0xbf4f7fcdeecc8e91479ae0cf9200529c5698610a451e530b00ac169e0669cdc9",
"0x38efe5ae9b35340ad8faa4208062c1352411bf002e3b01ea19b26531aa17b364",
"0xbc47d117b62dbc8850796f2216a09259b84856847428f5da00adc15692706ccb",
"0xeebadf60e16c9573cebe10870a0bdbb1cf08fc70c3218368350027ab58d030d6",
"0x73794daf6f7d709f55c184124e121e77a1a973c173459d70f07db25ae85392d9"
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
            version: '^0.8.0'
        }
    }
};

