import bcrypt from "bcrypt";

const passwordPlaintext = "hunter42";
const passwordPlaintext2 = "notHunter";
const hashedPassword = "$2b$12$Lh2SWODr9bJZwPK3zv5kpOPb9m5RHMdrQlNeQwg/ahGF35ZGW.uHa";

const encryptedPassword = await bcrypt.hash(passwordPlaintext, 12);
// console.log(encryptedPassword);

const isSame = await bcrypt.compare(passwordPlaintext2, hashedPassword);
console.log(isSame);
