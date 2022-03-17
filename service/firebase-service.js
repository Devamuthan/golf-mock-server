import admin from 'firebase-admin';
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const serviceAccount = require("./golf-mock-firebase-adminsdk-9pm18-6932146fdc.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin
