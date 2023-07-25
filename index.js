const { AES, enc } = require('crypto-js');
const { encrypt, decrypt } = require("./module/crypto-js")


// Message à chiffrer
const message = 'Bonjour, ceci est un message secret !';

const messageChiffre = encrypt(message)
console.log('Message chiffré :', messageChiffre);

// Déchiffrer le message
const messageDechiffre = decrypt(messageChiffre)
console.log('Message déchiffré :', messageDechiffre);