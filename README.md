# Crypto-JS

Implementation du module Crypto-JS

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app
```bash
yarn dev
```

### Importez le module Crypto-JS
```bash
const CryptoJS = require('crypto-js');
```

### Exemple d'utilisation de la fonction de hachage SHA-256
```bash
const message = 'Ceci est un message à hacher';
const hash = CryptoJS.SHA256(message);

console.log('Message original:', message);
console.log('Hachage SHA-256:', hash.toString());
```

### Exemple d'utilisation de chiffrement AES
```bash
const secretMessage = 'Ceci est un message secret';
const secretKey = 'MaCleSecrete';

// Chiffrement
const encryptedMessage = CryptoJS.AES.encrypt(secretMessage, secretKey).toString();
console.log('Message chiffré:', encryptedMessage);

// Déchiffrement
const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);
console.log('Message déchiffré:', decryptedMessage);
```
