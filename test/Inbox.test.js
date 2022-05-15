const ganache = require('ganache-cli');
const Web3 = require('web3');
const assert = require('assert')
const provider = ganache.provider();
const web3 = new Web3(provider);


const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['324234'] })
    .send({ from: accounts[0], gas: '1000000' });
    
  // ADD THIS ONE LINE RIGHT HERE!!!!! <---------------------
  // inbox.setProvider(provider);
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);
  });

  it('idk',async () => {
    await inbox.methods.setData("5").send({from:accounts[0]})
    const message = await inbox.methods.data().call()
    assert.equal(message, "5")
    
  })
  
});