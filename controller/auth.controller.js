import admin from '../service/firebase-service.js';

const createUser = async (req, res) => {
    const {email, phoneNumber, password, firstName, lastName, photoUrl} = req.body;
    const user = await admin.auth().createUser({
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      displayName: `${firstName} ${lastName}`,
      photoURL: photoUrl
    });
    return res.send(user);
}

export default createUser;