// The script accept a 64 bit string and converts it to a address as plain string.
// eg. node keygen.js c4491daca713bd38c3052555afd31ea79a4cbe5670271b1e0d35b951bcc3bf77
// output: 0xcaa8f1bfdeed222094bff6c2ed77fb1e799073ac
var EthUtil = require('ethereumjs-util');


// polyfills for HEX to bytes
var hexToBytes = function(hex) {
    for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
        return bytes
}

var privateKeyToAddress = function(privateKey) {
    return `0x${EthUtil.privateToAddress(hexToBytes(privateKey)).toString('hex')}`

}

console.log(privateKeyToAddress(process.argv[2]))