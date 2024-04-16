# EVM Address Validator

這個包提供一個函數來驗證是否一個字符串是有效的EVM（Ethereum虛擬機）地址。

## 安裝

```bash
npm install <EVM Address Validator>

##使用方法
const validateEVMAddress = require('<你的包名稱>');

console.log(validateEVMAddress('0x323b5d4c32345ced77393b3530b1eed0f346429d')); // 輸出：true
console.log(validateEVMAddress('0xXYZ')); // 輸出：false
