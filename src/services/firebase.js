import firebase from 'firebase';

const firebaseService = {
  register(payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password);
  },
};

export default firebaseService;
