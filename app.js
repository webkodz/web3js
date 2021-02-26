const Web3 = require('web3')
const Tx = require('ethereumjs-tx')
const rpcURL = "https://mainnet.infura.io/v3/YOUR-PROJECT-ID"

// connect to Infura node
const web3 = new Web3(new Web3.providers.HttpProvider(rpcURL))

web3.eth.getBalance("Account_Address", function (err, result) {
    if (err) {
        console.log(err)
    } else {
        console.log(web3.utils.fromWei(result, "ether") + " ETH")
        console.log(web3.utils.fromWei(result, "Gwei") + " GWEI")
    }
})

// EX- Expected Output 
// 5110.694355 ETH
