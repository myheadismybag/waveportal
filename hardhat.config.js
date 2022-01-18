require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
require("@nomiclabs/hardhat-etherscan");

const key1 = process.env.KEY_1
const key2 = process.env.KEY_2
console.log('key1: ' + key1)
console.log('key2: ' + key2)

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    kovan: {
      url: `https://eth-kovan.alchemyapi.io/v2/${process.env.ALCHEMY_ID}`,
      accounts: [key1, key2],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    // https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html
    // npx hardhat verify --network kovan 0xae876Ff8428DC251381363B37e26f7ed380D4f9c
    apiKey: process.env.ETHERSCAN_API
  }
};