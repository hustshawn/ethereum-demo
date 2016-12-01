Notes
====



```
var web3 = require('web3');
var web3 = new web3(new web3.providers.HttpProvider("http://localhost:8545"))
web3.eth.accounts

// get the first account
var acc = web3.eth.coinbase

// get account balance
var bal = web3.eth.getBalance(acc)

// Transfer the number to the exact amount of Wei with specified unit.
web3.fromWei(bal, 'ether')

// a function to get the balance of account
var balance = (acc) => web3.fromWei(web3.eth.getBalance(acc)).toNumber();


var rawTx = {
    nonce: web3.toHex(web3.eth.getTransactionCount(acc1)),
    to: acc2,
    gasPrice: web3.toHex(20000000000),
    gasLimit: web3.toHex(21000),
    value: web3.toHex(web3.toWei(25, 'ether')),
    data: "the offline transaction"
}

var ethTx = require('ethereumjs-tx')
var pKey1x = new Buffer(pkey1, 'hex')
var tx = new ethTx(rawTx)
tx.serialize().toString('hex')      // The raw transaction
>>>: 'f8840c8504a817c800825208945fb71dea60780585735c7082acfe74481a0fc24589015af1d78b58c4000097746865206f66666c696e65207472616e73616374696f6e1ca0b0da79cb9c3803cc9838c37215663c9e50dbe8dfc93e84f568c129fff9f0566aa06b50a02b9e0d8044c05e0001fe95128e94bf2c73d1b6fda4c1b139090953c52f'

web3.eth.sendRawTransaction(`0x${tx.serialize().toString('hex')}`, 
    (err, data) => {
        if(!err) {
            console.log(data)
        }
        else {
            console.log("ERROR", err)
        }
    }
);

```