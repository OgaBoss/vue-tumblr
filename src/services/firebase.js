import firebase from 'firebase';

const firebaseService = {
  register(payload) {
    return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password);
  },

  login(payload) {
    return firebase.auth().signInAndRetrieveDataWithEmailAndPassword(
      payload.email,
      payload.password,
    );
  },
};

export default firebaseService;
