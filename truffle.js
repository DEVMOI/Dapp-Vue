const HDWalletProvider = require("truffle-hdwallet-provider");
// Hide in Secret/Secure FIle
const mnemonic = ""; // This Link to generate https://iancoleman.io/bip39/

module.exports = {
    networks: {
        rinkeby: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/<INFURA_Access_Token>")
            },
            network_id: 3
        }
    }
};