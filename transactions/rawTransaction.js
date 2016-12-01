var Web3 = require('web3')
var ethTx = require('ethereumjs-tx')

const GAS_PRICE = 20000000000
const GAS_LIMIT = 21000


var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

var acc1 = web3.eth.coinbase
var acc2 = web3.eth.accounts[1]

var balance = (acc) => web3.fromWei(web3.eth.getBalance(acc)).toNumber()

var nextNonce = (acc) => web3.eth.getTransactionCount(acc)

var rawTx = {
  nonce: web3.toHex(nextNonce(acc1)),
  to: acc2,
  gasPrice: web3.toHex(GAS_PRICE),
  gasLimit: web3.toHex(GAS_LIMIT),
  value: web3.toHex(web3.toWei(25, 'ether')),
  data: `A raw transaction:  No. ${nextNonce(acc1)}`
}

// Using a fake hex string here.
// For a real world transaction, the PRIVATE_KEY should be a real private key.
const PRIVATE_KEY = web3.sha3("YOUR PRIVATE KEY").substring(2)
var pKey1x = new Buffer(PRIVATE_KEY, 'hex')
var tx = new ethTx(rawTx)
tx.serialize().toString('hex')

web3.eth.sendRawTransaction("0x${tx.serialize().toString('hex)}", 
  (err, data) => {
    if(!err) {
      console.log(data)
    }
    else {
      console.log("Error:", err)
    }
  }
)




