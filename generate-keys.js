import nacl from "tweetnacl";
import bs58 from "bs58";

// Generate the keypair
const keypair = nacl.box.keyPair();
console.log(keypair, bs58.default);
// Convert the private key to base58 string
const privateKeyBase58 = bs58.encode(keypair.secretKey);

console.log("Your DAPP_PRIVATE_KEY:", privateKeyBase58);
