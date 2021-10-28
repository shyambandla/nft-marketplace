require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey=fs.readFileSync(".secret").toString();
const projectId="d6e33e10cd254b15a41d53952d2cefb7";
module.exports = {
  defaultNetwork: "hardhat",
  networks:{
    hardhat:{
      forking:{
        url:"https://eth-ropsten.alchemyapi.io/v2/qPkJoiGxHP6keWknsF_I5gzHCQEkcuxJ"
      }
    },
    mumbai:{
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts:[privateKey]
    },
    mainnet:{
      url:`https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts:[privateKey]
    },
    ropsten:{
      url:"https://ropsten.infura.io/v3/d6e33e10cd254b15a41d53952d2cefb7",
      accounts:[privateKey]
    }
  },
  solidity: "0.8.4",
};
