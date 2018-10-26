# Dapp-Vue

## Introduction
Dapp-Vue is a VueJS/Truffle Box created to speed the process of developing VueJs/Dapp Applications.

Dev Server Hosted by [Infura](https://infura.io/)

## Built With
> VueJS | Truffle

## Issues
There is a list of [Known Issues](https://github.com/NodeGG/Dapp-Vue/issues) (things to be fixed or that aren't yet implemented).

If you found a bug or have a new idea/feature for the program, [you can report them](https://github.com/NodeGG/NODEVR/issues/new?template=nodevr-issue-template.md).
___

## Project setup
This will install the Dependencies used by this Project
```
yarn install

or

npm install
```

## Local Development
Config Truggle.js Gile:
```
const HDWalletProvider = require("truffle-hdwallet-provider");
// Hide in Secret/Secure FIle
// This Link to generate https://iancoleman.io/bip39/
const mnemonic = "";

module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/<INFURA_Access_Token>")
      },
      network_id: 3
    }   
  }
};
```
Using truffle:
```
truffle compile
truffle develop
truffle migrate
```

Using Truffle and Infura Rinkeby
```
truffle compile
start ganache
truffle migrate --network rinkeny
truffle console
```

If using Yarn (Recomended):
```
git clone git@github.com:NodeGG/Dapp-Vue.git
cd NODEVR && npm i
yarn start
```

If using NPM
```
git clone git@github.com:NodeGG/Dapp-Vue.git
cd NODEVR && npm i
npm start
```
## Generating Builds
If using Yarn (Recomended):
```
yarn build
```

If using NPM
```
npm run build
```
## Support
Official Channels:
- [Node GG Discord Server](https://discord.gg/ZgDHrQa)
- More Coming Soon

## Authors
- [Warren Gates](https://github.com/Moikapy): Lead developer, bug fixing, new features, designer, and maintainer.

## Credits
- [Dependencies](https://github.com/NodeGG/Dapp-Vue/network/dependencies)
- ( *More Coming Soon* )

