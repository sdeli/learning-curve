const crypto = require('crypto');
const key = 'myPassword';
const dataToEncrypt = 'this is a secret text';

const encrypted = crypto.createCipher('aes-256-ctr', key).update(dataToEncrypt, 'utf-8', 'hex');
console.log(encrypted);

const decrypted = crypto.createDecipher('aes-256-ctr', key).update(encrypted, 'hex', 'utf-8');
console.log(decrypted);