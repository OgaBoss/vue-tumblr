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

  updateUserprofile(userData) {
    return firebase.auth().currentUser.updateProfile(userData)
  }
};

export default firebaseService;
