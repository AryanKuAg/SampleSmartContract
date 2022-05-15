const assert = require('assert');
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider());
const mocha = require('mocha')
const {interface, bytecode} = require('../compile.js')


let accounts;
let inbox;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts()

    // console.log(accounts)
    // console.log(interface, bytecode)

    inbox = await new web3.eth.Contract(JSON.parse(interface)).deploy({data: bytecode, arguments: ['777']}).send({from: accounts[0], gas: '1000000'})
})

describe('Index', () => {
    it('test', () => {
    console.log(inbox)
    })
})