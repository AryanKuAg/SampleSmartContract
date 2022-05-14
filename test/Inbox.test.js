const assert = require('assert');
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider());
const mocha = require('mocha')

let one = 1;

beforeEach(() => {
    console.log('Before the world begins')
})

describe('MyTest', () => {
    it('My it test', () => {
        assert.equal(one, 1);
    })
    it('My 2ne test', () => {
        assert.equal(one, 1);
    })
    it('My 3ne test', () => {
        assert.equal(one, 1);
    })
})