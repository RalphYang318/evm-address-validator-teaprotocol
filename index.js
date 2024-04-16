const { isValidAddress } = require('ethereumjs-util');

function validateEVMAddress(address) {
    return isValidAddress(address);
}

module.exports = validateEVMAddress;
