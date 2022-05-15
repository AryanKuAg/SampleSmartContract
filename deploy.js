const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3")
const {interface, bytecode} = require("./compile")

const provider = new HDWalletProvider('voice floor ladder rapid pause better future foot visa annual pudding fire','https://rinkeby.infura.io/v3/8694738a5f584568bb375a2e44f50073');

const web3 = new Web3(provider);